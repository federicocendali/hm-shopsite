import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to='/'><img src="./assets/logo.png" className="header__logo" alt="LOGO"/></Link>
                <nav className="navbar">
                    <Link to='/' className="navbar__link">Home</Link>
                    <Link to='/productos/Hombre' className="navbar__link">Hombre</Link>
                    <Link to='/productos/Mujer' className="navbar__link">Mujer</Link>
                    <Link to='/productos/Niños' className="navbar__link">Niños</Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}