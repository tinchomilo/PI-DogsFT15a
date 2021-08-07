import { GET_DETAILS, USERS_ERRORS } from '.';
import axios from 'axios';


export const getDetails = ( id ) => {
    return async ( dispatch ) => {
            
        try {
            const detail = await axios.get( `http://localhost:3001/dogs/${ id }` )
            return dispatch({
                type: GET_DETAILS,
                payload: detail.data
            })

        } catch ( error ) {
            return dispatch({
                type: USERS_ERRORS,
                payload: console.log( error )
            })
        }        
    }    
}
