import { useContext } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
    const { totalCantidad, cart } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <BsFillBagFill className='cart-icon'/>
            <span> {totalCantidad()}</span>
        </Link>
    )
}