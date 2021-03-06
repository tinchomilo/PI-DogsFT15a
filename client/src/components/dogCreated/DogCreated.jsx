import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDog } from '../../redux/actions/addDog'
import { getTemperaments } from '../../redux/actions/getTemperaments'

import style from '../../styles/dogCreated.module.css';


export const DogCreated = ( { history } ) => {

    const temperaments = useSelector( state => state.temperaments )
    const dispatch = useDispatch()
    const initialState = {
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        yearsMin: '',
        yearsMax: '',
        temperament: [],
    }

    const [values, setValues] = useState(initialState)
    const [namesTemp, setNamesTemp] = useState([])
    const [errors, setErrors] = useState(false)
    const [succes, setSucces] = useState(false)   

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
            temperament: [...values.temperament, Number(e.target.value)]            
        }))
    }

    const handleReturn = () => {
        history.goBack()
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        if( values.name && values.heightMin && values.heightMax && 
            values.weightMin && values.weightMax && values.temperament.length) {
            dispatch( addDog( values ) )
            setErrors( false )
            setSucces( true )
            setValues(initialState)
            setNamesTemp([])
        } else {
            setSucces( false )
            setErrors( true )
        }
    }

    useEffect(() => {
        dispatch( getTemperaments() ) 
    }, [dispatch])

    return (
        <div className={ style.grilla }>
            <h1>Crea tu raza</h1>                        
            <form className={ style.formAdd }onSubmit={ handleSubmit }>
                <div>
                <label>Nombre: </label>
                <input  
                    type='text'
                    name='name'
                    value={ values.name }
                    onChange={ handleChange }
                    autoComplete='off'
                    />
                    {/* {
                        errors.name && 
                        <p className='error'>{ errors.name }</p>                        
                    } */}
                </div>
                <div>
                    <label>Altura min: </label>
                    <input 
                        type='text'
                        name='heightMin'
                        value={ values.heightMin }
                        onChange={ handleChange }
                        autoComplete='off'
                        />
                </div>
                <div>
                    <label>Altura max: </label>
                    <input 
                        type='text'
                        name='heightMax'
                        value={ values.heightMax }
                        onChange={ handleChange }
                        autoComplete='off'
                        />
                </div>
                <div>
                    <label>Peso min: </label>
                    <input 
                        type='text'
                        name='weightMin'
                        value={ values.weightMin }
                        onChange={ handleChange }
                        autoComplete='off'
                        />
                </div>
                <div>
                    <label>Peso max: </label>
                    <input 
                        type='text'
                        name='weightMax'
                        value={ values.weightMax }
                        onChange={ handleChange }
                        autoComplete='off'
                        />
                </div>
                <div>
                    <label>a??os de vida min: </label>
                    <input 
                        type='text'
                        name='yearsMin'
                        value={ values.yearsMin }
                        onChange ={ handleChange }
                        autoComplete='off'
                        /> 
                </div>
                <div>
                    <label>a??os de vida max: </label>
                    <input 
                        type='text'
                        name='yearsMax'
                        value={ values.yearsMax }
                        onChange ={ handleChange }
                        autoComplete='off'
                        /> 
                </div>
                <div>
                    <label>Temperamentos: </label>
                    <select 
                        onChange={ handleSelect } >
                            <option value='all'>Todos</option>
                            {
                                temperaments?.map( elem => (
                                    <option key ={ elem.id } value={ elem.id }>{ elem.name }</option>
                                ))
                            }                               
                    </select>                                       
                    <ul>
                    <h3>Temperamentos cargados: </h3>
                    <div className={ style.temps} >
                        {                            
                            namesTemp?.map( ( elem, i ) => (                                                                
                                    <div key={ i }>                                    
                                        <p>{ elem }</p>
                                    </div>                         
                            ))
                        }
                        </div>
                    </ul>
                </div>
                <div className={ style.buttons }>
                    <button type='submit'>Crear!!</button>                    
                    <button onClick={ handleReturn }>Regresar</button>
                </div>
            </form>
            {
                succes ? <h2>Creacion exitosa</h2> : null
            }
            {
                errors ? <h2>Te faltan completar datos </h2> : null
            }           
        </div>
    )
}
