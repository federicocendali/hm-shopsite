import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Navigate } from 'react-router-dom';
import { writeBatch, collection, where, documentId, addDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase/config';

export const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (values.nombre.length < 3) {
            alert("El nombre es muy corto")
            return
        }
        if (values.direccion.length < 5) {
            alert("El direccion es muy corto")
            return
        }
        if (values.email.length < 7) {
            alert("El email es muy corto")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fyh: new Date()
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const produtosRef = collection(db, "productos")
        const q = query(produtosRef, where(documentId(), "in", cart.map(item => item.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const { id } = await addDoc(ordersRef, orden)
            setOrderId(id)
            vaciarCarrito()
        } else {
            alert("Hay items sin stock: " + outOfStock.map(i => i.name).join(', '))
        }
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Ingresa tus datos</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu nombre"
                    onChange={handleInputChange}
                    name="nombre"
                />
                <input
                    value={values.direccion}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu dirección"
                    name="direccion"
                    onChange={handleInputChange}
                />
                <input
                    value={values.email}
                    type="email"
                    className="form-control my-2"
                    placeholder="Tu email"
                    name="email"
                    onChange={handleInputChange}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}