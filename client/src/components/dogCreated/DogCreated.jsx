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
    const [namesTemp, setNamesTemp] = useState([])
   

    const handleChange = ( e ) => {
        e.preventDefault()
        setValues( values => ({ 
            ...values, 
            [e.target.name]: e.target.value }))
    }

    const handleSelect = ( e ) => {
        let index = e.target.selectedIndex
        setNamesTemp( (names) => [...names, e.target.options[index].text] )
        setValues( values => ({
            ...values,
            temperament: [...values.temperament, e.target.value]
            
        }))
    }

    // const handleClick = ( e ) => {
        
    //     setNamesTemp( namesTemp.filter( elem => elem !== e ))
    // }

    const handleReturn = () => {
        history.goBack()
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()

    }


    useEffect(() => {
        dispatch( getTemperaments() ) 
    }, [dispatch])


    return (
        <div>
            <h1>Crea tu raza</h1>            
            <h3>{ values.temperament}</h3>
            
            <form onSubmit={ handleSubmit }>
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
                                    <option key ={ elem.id } value={ elem.id }>{ elem.name }</option>
                                ))
                            }                               
                    </select>                     
                    <ul>
                        {
                            namesTemp?.map( ( elem, i ) => (
                                <div key={ i }>
                                    <p>{ elem }</p>
                                    {/* <button onClick={ handleClick } >X</button> */}
                                </div>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <button type='submit'>Crear!!</button>                    
                </div>
            </form>
            <button onClick={ handleReturn }>Regresar</button>
        </div>
    )
}
