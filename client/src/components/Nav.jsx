/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Подключаем CSS для стилей

function Nav({ user }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="burger-menu" onClick={toggleMenu}>
                <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <NavLink to='/recipe'>Recipe</NavLink>
                {user ? (
                    <>
                        <NavLink to='/auth/logout'>Logout</NavLink>
                        <NavLink to='/favourite'>Favourite</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to='/auth/authorization'>Authorization</NavLink>
                        <NavLink to='/auth/registration'>Registration</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Nav;
