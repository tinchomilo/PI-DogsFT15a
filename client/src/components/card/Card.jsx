import React from 'react'
import imgDefault from '../../resources/imgFoto.jpg';
import { Link } from 'react-router-dom'

import style from '../../styles/card.module.css'


export const Card = ( { name, img, temperament, temperaments, id } ) => {
    return (
        <div className={ style.card }>
            <h3>{name}</h3> 
            <Link to={ `/detail/${ id }`}>
            <img 
                src={ img ? img : imgDefault } 
                alt='imagen raza' width="150" height="150"/>
            <div className={ style.names }>                                              
                    <p>Temperamento: { temperament ? temperament.map( elem => elem + ', ') :
                            temperaments?.map( elem => elem.name + ', ') 
                        }
                    </p>                
            </div>
            </Link>
        </div>
    )
}
