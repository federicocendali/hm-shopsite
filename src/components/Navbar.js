import { CartWidget } from "./CartWidget"

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img src="./assets/logo.png" className="header__logo" alt="LOGO"/>
                <nav className="navbar">
                    <a href="#" className="navbar__link">Hombre</a>
                    <a href="#" className="navbar__link">Mujer</a>
                    <a href="#" className="navbar__link">Niños</a>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}