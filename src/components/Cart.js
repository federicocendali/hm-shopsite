import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { BsFillTrash3Fill } from 'react-icons/bs';

export const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='container my-5'>
                <h2>No tienes productos agregados</h2>
                <hr/>
                <Link to="/">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.img} alt={item.name}/>
                        <br/>
                        <p>Categoría: {item.category}</p>
                        <small>Cantidad: {item.cantidad} | Precio unitario: ${item.price}</small>
                        <p>Precio total: ${item.price * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className='btn btn-outline-danger'><BsFillTrash3Fill/></button>
                        <hr/>
                    </div>
                ))
            }
            <h3>Total: ${totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar carrito</button>
        </div>
    )
}