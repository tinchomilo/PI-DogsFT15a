import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/actions/searchByName';

export const Search = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleNameChange = ( e ) => {
        setName( e.target.value )
    }
    
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( name.trim().length > 2 ){
            dispatch( searchByName( name ) )
            setName('')
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value= { name }
                onChange={ handleNameChange }
                placeholder='Descubri tu raza favorita' 
                />
            <button type='submit'> Buscar</button>
            
        </form>
    )
}
