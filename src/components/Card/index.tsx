import { NavLink } from 'react-router-dom'
import './styles.css'

export default function Card() {

    return (
        <div className='card-container'>
            <NavLink to="/products/computers" className={({ isActive }) => isActive ? "card-item option-active" : "card-item"}>
                Computadores
            </NavLink>
            <NavLink to="/products/eletronics" className={({ isActive }) => isActive ? "card-item option-active" : "card-item"}>
                Eletrônicos
            </NavLink>
            <NavLink to="/products/books" className={({ isActive }) => isActive ? "card-item option-active" : "card-item"}>
                Livros
            </NavLink>
        </div>
    )
}