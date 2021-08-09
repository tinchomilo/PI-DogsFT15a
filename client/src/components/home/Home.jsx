import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'; 
import { getAllDogs } from '../../redux/actions/getAllDogs'
import { getTemperaments } from '../../redux/actions/getTemperaments';
import { orderByName } from '../../redux/actions/orderByName';
import { filterCreated } from '../../redux/actions/filterCreated';
import { filterByTemperament } from '../../redux/actions/filterTemperament';
import { Paginado } from '../paginado/Paginado';
import { Card } from '../card/Card';
import { Search } from '../search/Search';

import style from '../../styles/home.module.css'
export const Home = () => {
    
    const dogsLoaded = useSelector( state => state.dogsLoaded )
    const temperaments = useSelector( state => state.temperaments )

    //necesito el state de temperamentos 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getAllDogs() )
        dispatch( getTemperaments() )
    }, [ dispatch ])

    const [currentPage, setCurrentPage] = useState(1);
    const [orden, setOrden] = useState('')
    const [dogsPerPage, setdogsPerPage] = useState(9)
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogsLoaded.slice( indexOfFirstDog, indexOfLastDog )

    const paginado = ( pageNumber ) => {
        setCurrentPage( pageNumber )
    }

    // orden ascendente o descendente
    const handleSort = ( e ) => {
        dispatch( orderByName( e.target.value ) )
        setCurrentPage( 1 )
        setOrden( `Ordenado ${ e.target.value }` )
    }

    //filtro creados, de la api y todos
    const handleFilterCreated = ( e ) => {
        dispatch( filterCreated( e.target.value ) )

    }

    //filtro por temperamento
    const handleFilterTemperament = ( e ) => {
        console.log(e.target.value)
        dispatch( filterByTemperament( e.target.value ) )

    }

    //recargo las razas
    const handleClick = ( e ) => {
        e.preventDefault()
        dispatch( getAllDogs() )
    }

    return (
        <div className={ style.conteiner }>
            <div className={ style.filters }>

                <label>Orden</label>
                <select onChange={ handleSort } className={ style.orden }>
                    <option value='asc'>Ascendente</option>
                    <option value='des'>Descendente</option>
                </select>

                <label>Origen</label>
                <select onChange={ handleFilterCreated } className={ style.origen }>
                    <option value='all'>Todos</option>
                    <option value='created'>Creados</option>
                    <option value='api'>De la Api</option>                
                </select>

                <label>Temperamento</label>
                <select onChange={ handleFilterTemperament} className={ style.temps }>
                    <option value='all'>Todos</option>
                    {
                        temperaments?.map( elem => (
                            <option value={ elem.name } key={ elem.id }>{ elem.name }</option>
                        ))
                    }
                </select>

                <button onClick={ handleClick } className={ style.btn }>
                    Recargar razas
                </button>
            </div>

            <Search />

            <h1 className={ style.title }>The DoggyApp</h1>

            <Paginado 
                dogsPerPage={ dogsPerPage }
                allDogsLoaded={ dogsLoaded.length }
                paginado={ paginado } />

            <div className={ style.grilla }>
                {
                    currentDogs?.map( ( dog ) => (
                        <Card key={ dog.id }
                        { ...dog } 
                        />
                    ))
                }
            </div>
        </div>
    )
}
