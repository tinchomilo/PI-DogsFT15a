import { GET_ALL_DOGS,USERS_ERRORS } from ".";
import axios from 'axios';

export const getAllDogs = () => {
    return async ( dispatch ) => {
        
        try {
            let dogs = await axios.get("http://localhost:3001/dogs")
            return dispatch({
                type: GET_ALL_DOGS,
                payload: dogs.data
            })            
        } catch ( error ) {
            return dispatch({
                type: USERS_ERRORS,
                payload: console.log( error )
            })
        }
    }
}
