import { ADD_DOG, USERS_ERRORS } from '.';
import axios from 'axios';


export const addDog = ( { name, heightMin, heightMax, weightMin, weightMax, yearsMin, yearsMax, temperament } ) => {
    return async ( dispatch) => {
        
        try {
            await axios.post( 'http://localhost:3001/dogs/', {
                name,
                height: heightMin + ' - ' + heightMax + ' Kg',
                weight: weightMin + ' - ' + weightMax + ' Cm',
                lifeSpan: yearsMin + ' - ' + yearsMax + ' years',
                temperament
            })
            dispatch({
                type: ADD_DOG,
            })

        } catch ( error ) {
            return dispatch({
                type: USERS_ERRORS,
                payload: console.log( error )
            })
            
        }
    }
}
