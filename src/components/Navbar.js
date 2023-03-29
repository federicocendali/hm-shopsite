import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to='/'><img src="./assets/logo.png" className="header__logo" alt="LOGO"/></Link>
                <nav className="navbar">
                    <NavLink to='/' className="navbar__link">Home</NavLink>
                    <NavLink to='/productos/Hombre' className="navbar__link">Hombre</NavLink>
                    <NavLink to='/productos/Mujer' className="navbar__link">Mujer</NavLink>
                    <NavLink to='/productos/Niños' className="navbar__link">Niños</NavLink>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}