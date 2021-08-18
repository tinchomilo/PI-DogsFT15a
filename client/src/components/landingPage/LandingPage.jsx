import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles/Landing.module.css'


export const LandingPage = () => {
    return (
        <div className={ style.background }>
            <h1>Bienbenido a The DoggyApp</h1>
            <h3> Entra y descubri más hacerca de nuestos mejores amigos!!</h3>
            <Link to='/home'>
                <button className={ style.btn }>Entrar</button>
            </Link>
        </div>
    )
}
