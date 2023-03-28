import { useContext } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className="cart-widget">
            <BsFillBagFill />
            <span> {totalCantidad()}</span>
        </Link>
    )
}