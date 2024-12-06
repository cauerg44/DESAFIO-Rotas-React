import './styles.css';
import { Link, NavLink } from 'react-router-dom';
import iconHome from '../../assets/icon-home.svg';

export default function Header() {

    return (
        <header>
            <div className="header-content-container container">
                <nav className="navbar">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Início
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Produtos
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Sobre nós
                    </NavLink>
                </nav>
                <div>
                    <Link to="/">
                        <img src={iconHome} alt="Home" />
                    </Link>
                </div>
            </div>
        </header>
    )
}