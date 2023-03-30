import { useContext } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
    const { totalCantidad, cart } = useContext(CartContext)

    return (
        <Link to="/cart" className='cart-widget-container'>
            <BsFillBagFill />
            <span className={`cart-widget-span ${cart.length > 0 ? 'cart-widget-span-active' : ''}`}>{totalCantidad()}</span>
        </Link>
    )
}