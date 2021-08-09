import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions/getDetails'

import imgDefault from '../../resources/imgFoto.jpg';


export const DogDetail = ( { history } ) => {

    const detail = useSelector( state => state.detail )
    const [loading, setLoading] = useState(false)
    const { id } = useParams()   
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getDetails( id ))
        setLoading( true )
    }, [dispatch])

    const handleReturn = () => {
        history.goBack()
    }

    return (
        <>
            { loading ?
            <div>
                <div>
                    <h1>{ detail[0]?.name }</h1>
                </div>
                <ul>
                    <li>                        
                        <h4>Temperamento: { detail[0]?.temperament ? detail[0].temperament.map( elem => elem + ', ') : 
                                            detail[0]?.temperaments?.map( elem => elem.name + ', ') }</h4>                        
                    </li>
                    <li>
                        <h4>Altura: { detail[0]?.height + ' cm' }</h4>
                    </li>
                    <li>
                        <h4>Peso: { detail[0]?.weight + ' Kg'}</h4>
                    </li>
                    <li>
                        <h4>Años de vida: { detail[0]?.lifeSpan }</h4>
                    </li>
                </ul>

                <img 
                    src={ detail[0]?.img ? detail[0]?.img : imgDefault } 
                    alt={ `imagen ${ detail[0]?.name }` } 
                    width='250' />
            </div> 
                : <div>Loading</div>
            }         
            <div>
                <button onClick={ handleReturn }>Regresar</button>
            </div>
            
        </>
    )
}
