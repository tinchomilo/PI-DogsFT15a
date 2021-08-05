const router = require( 'express' ).Router();
const { Dog } = require( '../db' );
// const { Temperament } = require( '../db' );
const getAllDogs = require( '../controllers/getAllDogs' );

router.get( '/', async ( req, res ) => {

    const { name } = req.query

    try {
        const allDogs = await getAllDogs()        

        if( name ) {
            const razaFinded = allDogs.filter( elem => elem.name.toLowerCase().includes( name.toLowerCase() ))
            console.log( razaFinded )
            if( razaFinded.length > 0 )
                return res.status( 200 ).send( razaFinded )
            
                    return res.status( 404 ).send('no existe la raza solicitada')    
        }

        return res.status( 200 ).send( allDogs )

    } catch ( error ) {
        return res.send( error )        
    }
    
})


router.get( '/:id', async ( req, res ) => {

    const { id } = req.params

    try {
        if( id ) {
            const allDogs = await getAllDogs()
            const razaFinded = allDogs.filter( elem => elem.id == id )
            if( razaFinded.length > 0)
                return res.status( 200 ).send( razaFinded )

                    return res.status( 404 ).send( 'el id ingresado es incorrecto' )
                }
    } catch (error) {
        return res.send( error )        
    }
})


router.post( '/', async ( req, res ) => {

    const { name, height, weight, lifeSpan, createdInDb, temperament } = req.body;
    
    try {
        if( !name || !height || !weight )
            return res.status( 404 ).send( 'nombre, altura y peso son obligatorios' )

        const razaCreated = await Dog.create({ name, height, weight, lifeSpan, createdInDb })

        await razaCreated.setTemperaments( temperament )

        return res.status( 200 ).send( 'Creacion exitosa' )

    } catch ( error ) {
        return res.send( error )        
    }
})

module.exports = router;