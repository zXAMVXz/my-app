



import axios from 'axios';


let baseUrl = 'https://pokeapi.co/api/v2';
let baseUrlSpritesSVG = 'https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world'


export function pokemonList  () {
    return axios.get(`${baseUrl}/pokemon`)
      .then(res => {
        const pokemons = res.data;
        console.log(pokemons);
        //this.setState({ persons });
        return pokemons;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
   
}


export function getSVGsprites  (id) {
  return axios.get(`${baseUrlSpritesSVG}/${id}.svg`)
    .then(res => {
      const sprites = res.data;
      console.log(sprites);
      //this.setState({ persons });
      return sprites;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
 
}
