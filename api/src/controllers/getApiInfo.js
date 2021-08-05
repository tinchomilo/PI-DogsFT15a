const axios = require( 'axios' );

module.exports = async function getApiInfo() {

    const apiInfo = await axios.get( 'https://api.thedogapi.com/v1/breeds' )
    const data = await apiInfo.data.map( elem => {
        return {
            name: elem.name,
            lifeSpan: elem.life_span,
            id: elem.id,
            height: elem.height.metric,
            weight: elem.weight.metric,
            temperament: [elem.temperament].join().split(',').map( elem => elem.trim()),
            img: elem.image.url
        }
    })
    return data;
}