import { SEARCH_BY_NAME, USERS_ERRORS } from ".";
import axios from 'axios';


export const searchByName = ( name ) => {
    return async ( dispatch ) =>{
        try {
            
            const nameSearched = await axios.get(`http://localhost:3001/dogs?name=${ name }`)
            return dispatch( {
                type: SEARCH_BY_NAME,
                payload: nameSearched.data
            })

        } catch ( error ) {
            return dispatch({
                type: USERS_ERRORS,
                payload: console.log( error )
            })
        }
    }
}
