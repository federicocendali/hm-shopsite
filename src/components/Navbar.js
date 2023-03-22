import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img src="./assets/logo.png" className="header__logo" alt="LOGO"/>
                <nav className="navbar">
                    <Link to="/" className="navbar__link">Home</Link>
                    <Link to='/productos/limpieza' className="navbar__link">Limpieza</Link>
                    <Link to='/productos/carniceria' className="navbar__link">Carnes</Link>
                    <Link to='/productos/panaderia' className="navbar__link">Pan</Link>
                    <Link to='/productos/perfumeria' className="navbar__link">Perfu</Link>
                    <Link to='/productos/verduleria' className="navbar__link">Verdu</Link>
                    <Link to="/pokeapi" className="navbar__link">PokeApi</Link>
                    <Link to="/pokelista" className="navbar__link">Poke Lista</Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}