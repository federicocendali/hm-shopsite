import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  const { user, logout } = useContext(LoginContext);
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src="./assets/logo.png" className="header__logo" alt="LOGO" />
        </Link>
        <nav className="navbar">
          <NavLink to="/" className="navbar__link">
            Home
          </NavLink>
          <NavLink to="/products/Men" className="navbar__link">
            Men
          </NavLink>
          <NavLink to="/products/Women" className="navbar__link">
            Women
          </NavLink>
          <NavLink to="/products/Kids" className="navbar__link">
            Kids
          </NavLink>
        </nav>
        <CartWidget />
      </div>
      <div className="user">
        <h6>Signed in as {user.email}</h6>
        <button className="btn btn-outline-danger" onClick={logout}>
          Sign out
        </button>
      </div>
    </header>
  );
};
