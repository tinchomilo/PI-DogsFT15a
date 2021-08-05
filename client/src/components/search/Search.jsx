import React, { useState } from 'react'

export const Search = () => {

    const [inputValue, setInputValue] = useState('')
    
    const handleSubmit = () => {

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value= { inputValue }
                placeholder='Descubri tu raza favorita' 
                />
            <button type='submit'> Buscar</button>
            
        </form>
    )
}
