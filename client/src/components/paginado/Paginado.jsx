import React from 'react'

import style from '../../styles/paginado.module.css'

export const Paginado = ( { dogsPerPage, allDogsLoaded, paginado }) => {
    
    const pageNumbers = []
        for( let i = 1; i <= Math.ceil( allDogsLoaded / dogsPerPage ); i++ ){
            pageNumbers.push( i );
        }

    return (
        <nav>
            <ul className={ style.pagination }>
                {
                    pageNumbers && pageNumbers.map( number => (
                        <li className={ style.number } key={ number }>
                            <a onClick={ () => paginado( number ) }> { number } </a>
                        </li>
                    ))
                }                
            </ul>
        </nav>
    )
}
