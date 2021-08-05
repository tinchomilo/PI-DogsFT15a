import React from 'react'
import { NavLink } from 'react-router-dom';

import style from '../../styles/nav.module.css';

export const NavBar = () => {
    return (
        <nav className={ style.nav }>
            <div className={ style.conteiner }>
                <NavLink exact to='/home' activeStyle={{ color: '#FFF9FB' }}>Home</NavLink>
                <NavLink exact to='/add' activeStyle={{ color: '#FFF9FB' }}>Crear raza</NavLink>
            </div>
        </nav>
    )
}
