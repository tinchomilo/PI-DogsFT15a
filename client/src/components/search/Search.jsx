import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/actions/searchByName';

import style from '../../styles/search.module.css'

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
        <form onSubmit={ handleSubmit } className={ style.form }>
            <input 
                type='text'
                value= { name }
                onChange={ handleNameChange }
                placeholder='Descubri tu raza favorita' 
                />
            <button type='submit' className={ style.btn }> Buscar</button>
            
        </form>
    )
}
