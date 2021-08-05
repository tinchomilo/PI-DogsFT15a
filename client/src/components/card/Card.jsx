import React from 'react'
import imgDefault from '../../resources/imgFoto.jpg';
import { Link } from 'react-router-dom'


export const Card = ( { name, img, temperament, temperaments, id } ) => {
    return (
        <div>
            <Link to={ `/detail/${ id }`}>
            <h3>{name}</h3>
            </Link>
            <h3>Temperamento: { temperament ? temperament.map( elem => elem + ', ') :
                     temperaments?.map( elem => elem.name + ', ') 
                }
            </h3>
            <>
                <img src={ img ? img : imgDefault } alt='imagen raza' width="300" height="300"/>
            </>
        </div>
    )
}
