import { ADD_DOG, FILTER_CREATED, FILTER_TEMPERAMENT, GET_ALL_DOGS, GET_DETAILS, GET_TEMPERAMENTS, ORDER_BY_NAME, SEARCH_BY_NAME } from '../actions/index'

const initialState = {
    dogsLoaded: [],
    allDogsLoaded: [],
    temperaments: [],
    detail: {}
}

function rootReducer( state = initialState, action ) {
    switch( action.type ) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogsLoaded: action.payload,
                allDogsLoaded: action.payload
            }
        
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }

        case SEARCH_BY_NAME:
            return {
                ...state,
                dogsLoaded: action.payload
            }

        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload
            }
        
        case ADD_DOG: 
            return state;

        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asc' ?
                state.dogsLoaded.sort( function (a, b) {
                    if(a.name > b.name ){
                        return 1;
                    }
                    if( b.name > a.name ){
                        return -1;
                    }
                    return 0;
                }) : 
                action.payload === 'des' ?
                state.dogsLoaded.sort( function (a, b) {
                    if(a.name > b.name ){
                        return -1;
                    }
                    if( b.name > a.name ){
                        return 1;
                    }
                    return 0;
                }) : 
                action.payload === 'ascWeight' ?                    
                state.dogsLoaded.sort( function (a, b) {
                    if(Number(a.weight.split('-')[0]) > (Number(b.weight.split('-')[0] ))) {
                        return 1;
                    }
                    if(Number(b.weight.split('-')[0]) > (Number(a.weight.split('-')[0] ))) {
                        return -1;
                    }
                    return 0;
                }) : 
                state.dogsLoaded.sort( function (a, b) {
                    if(Number(a.weight.split('-')[0]) > (Number(b.weight.split('-')[0] ))) {
                        return -1;
                    }
                    if(Number(b.weight.split('-')[0]) > (Number(a.weight.split('-')[0] ))) {
                        return 1;
                    }
                    return 0;
                }) 
                    return {
                ...state,
                dogsLoaded: sortedArr
            }

        case FILTER_CREATED:
            let createdOrApi = action.payload === 'created' ? 
            state.allDogsLoaded.filter( dog => dog.createdInDb) : 
            state.allDogsLoaded.filter( dog => !dog.createdInDb)
            return {
                ...state,
                dogsLoaded: action.payload === 'all' ? state.allDogsLoaded : createdOrApi
            }

        case FILTER_TEMPERAMENT:
            let allDogs = state.allDogsLoaded                       
            let temperamentsFiltered = action.payload === 'all' ? allDogs : allDogs.filter( elem => elem.temperament?.includes(action.payload))
            return {
                ...state,
                dogsLoaded: temperamentsFiltered
            }

        default:
            return state;
    }
}

export default rootReducer;