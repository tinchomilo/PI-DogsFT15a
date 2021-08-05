const router = require( 'express' ).Router();
const apiInfo = require( '../controllers/getApiInfo' );
const { Temperament } = require( '../db' )

router.get( '/', async ( req, res ) => {

    try {
        const dogsApi = await apiInfo();
        const dogsDb = dogsApi.map( elem => elem.temperament ).join().split(',')
        const dogsDbTrim = dogsDb.map( elem => elem.trim())
        
        dogsDbTrim.forEach( elem => {
            
            if(elem !== '') {
                Temperament.findOrCreate({
                    where: {
                        name: elem
                    }
                })
            }
        })

        const allTemperaments = await Temperament.findAll();

        return res.status( 200 ).send( allTemperaments )

    } catch ( error ) {
        return res.send( error )
    }
})

module.exports = router;