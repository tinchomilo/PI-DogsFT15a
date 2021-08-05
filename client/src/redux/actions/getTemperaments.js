import axios from "axios";
import { GET_TEMPERAMENTS, USERS_ERRORS } from ".";


export function getTemperaments() {
    return async ( dispatch ) => {

        try {
            let temperaments = await axios.get("http://localhost:3001/temperaments")
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: temperaments.data
            })
            
        } catch ( error ) {
            return dispatch( {
                type: USERS_ERRORS,
                payload: console.log( error )
            } )
        }


    }
}