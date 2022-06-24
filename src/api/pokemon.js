
import axios from 'axios';

let baseUrl = 'https://pokeapi.co/api/v2';

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

