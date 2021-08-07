import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTemperaments } from '../../redux/actions/getTemperaments'



export const DogCreated = ( { history } ) => {

    const temperaments = useSelector( state => state.temperaments )
    const dispatch = useDispatch()
    const initialState = {
        name: '',
        height: '',
        weight: '',
        lifeSpan: '',
        temperament: [],

    }
    const [values, setValues] = useState(initialState)
   

    const handleChange = ( e ) => {
        e.preventDefault()
        setValues( values => ({ 
            ...values, 
            [e.target.name]: e.target.value }))
    }

    const handleSelect = ( e ) => {
        
        setValues( values => ({
            ...values,
            temperament: [...values.temperament, e.target.value]
            
        }))
    }
    useEffect(() => {
        dispatch( getTemperaments() ) 
    }, [dispatch])


    return (
        <div>
            <h1>Crea tu raza</h1>            
            <h3>{ values.temperament}</h3>
            
            <form>
                <div>
                <label>Nombre:</label>
                <input  
                    type='text'
                    name='name'
                    value={ values.name }
                    onChange={ handleChange }
                    autoComplete='off'
                    />
                </div>
                <div>
                    <label>Altura: </label>
                    <input 
                        type='text'
                        name='height'
                        value={ values.height }
                        onChange={ handleChange }
                        autoComplete='off'
                        />
                </div>
                <div>
                    <label>Peso: </label>
                    <input 
                        type='text'
                        name='weight'
                        value={ values.weight }
                        onChange={ handleChange }
                        autoComplete='off'
                        />
                </div>
                <div>
                    <label>años de vida: </label>
                    <input 
                        type='text'
                        name='lifeSpan'
                        value={ values.lifeSpan }
                        onChange ={ handleChange }
                        autoComplete='off'
                        /> 
                </div>
                <div>
                    <label>Temperamentos: </label>
                    <select 
                        onChange={ handleSelect } >
                            {
                                temperaments?.map( elem => (
                                    <option key ={ elem.id } value={ elem.id }>{ elem.name}</option>
                                ))
                            }                               
                    </select>                     
                </div>
            </form>
        </div>
    )
}
