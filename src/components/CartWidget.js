import { BsFillBagFill } from 'react-icons/bs';

export const CartWidget = () => {
    return (
        <div className="cart-widget">
            <BsFillBagFill />
            <span> 0</span>
        </div>
    )
}