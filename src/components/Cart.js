import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { BsFillTrash3Fill } from 'react-icons/bs';

export const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='container my-5'>
                <h2>There are no items in your cart</h2>
                <hr/>
                <Link to="/">Return to Home</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Products in your cart</h2>
            <hr/>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.img} alt={item.name} className='img img-fluid'/>
                        <br/>
                        <p>Category: {item.category}</p>
                        <small>Quantity: {item.cantidad} | Unit price: ${item.price}</small>
                        <p>Total price: ${item.price * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className='btn btn-outline-danger'><BsFillTrash3Fill/></button>
                        <hr/>
                    </div>
                ))
            }
            <h3>Total value of your purchase: ${totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Empty Cart</button>
            <Link to="/checkout" className="btn btn-primary">Complete My Purchase</Link>
        </div>
    )
}