import React from 'react';
import landing from '../../resources/landing.jpg';
import btn from '../../resources/btnimage.jpg';
import { Link } from 'react-router-dom';
import style from '../../styles/Landing.module.css'


export const LandingPage = () => {
    return (
        <div className={ style.background } style={{ backgroundImage: `url(${landing})` }}>
            <h1>Bienbenidos a The DoggyApp</h1>
            <h3> Entra y descubri más hacerca de nuestos mejores amigos!!</h3>
            <Link to='/home'>
                {/* <img src={ btn } width='100'/> */}
                <button className={ style.btn }>Entrar</button>
            </Link>
        </div>
    )
}
