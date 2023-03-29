import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    isInCart(item.id)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        agregarAlCarrito(newItem)
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p><small>Categoría: {item.category}</small></p>
            {item.stock <= 5 && <p><strong>Quedan sólo {item.stock} unidades</strong></p>}
            <p>Precio: ${item.price}</p>

            {
                item.stock === 0
                    ? <h5>No hay stock de este producto</h5>
                    : isInCart(item.id)
                        ? <Link to="/cart" className='btn btn-primary'>Terminar mi compra</Link>
                        : <ItemCount
                            max={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            agregar={handleAgregar}
                        />
            }

            <div>
                <Link to="/">Volver</Link>
            </div>
        </div>
    )
}