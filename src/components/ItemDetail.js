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
            <img src={item.img} alt={item.name} className='img-fluid'/>
            <p>{item.description}</p>
            <p><small>Category: {item.category}</small></p>
            {item.stock <= 5 && <p><strong>Only {item.stock} units left</strong></p>}
            <p>Price: ${item.price}</p>

            {
                item.stock === 0
                    ? <h5>Out of stock</h5>
                    : isInCart(item.id)
                        ? <Link to="/cart" className='btn btn-primary'>Complete my purchase</Link>
                        : <ItemCount
                            max={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            agregar={handleAgregar}
                        />
            }

            <div>
                <Link to="/">Return to Home</Link>
            </div>
        </div>
    )
}