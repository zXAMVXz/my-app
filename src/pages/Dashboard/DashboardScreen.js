


import React from 'react';
import './DashboardScreen.scss';
import { useEffect, useState } from 'react';
import { pokemonList }  from '../../api/pokemon';
import NavBarComponent  from '../../components/nvarcomponent/NavBarComponent';
import CardComponent from '../../components/card/CardComponent';


const  DashboardScreen = () => {

  const [listPokemon, setlistPokemon] = useState([{}]);

  //Get pokemon from API
  useEffect(() => {
    pokemonList().then(res => {
      const { results } = res;
      results.map( pokemon => {
        //console.log(pokemon.url)
        //get id from url
        const id = (pokemon.url).split("/");
        //console.log(pokemon)
        setlistPokemon( [ ...results, pokemon.idPokemon = id[id.length-2]] );
      })

      console.log(listPokemon);
  

    })
  }, [])



  return (
    <div className="containerDashboard">
      <NavBarComponent />  
      <div className="infoContainer">
        {
          listPokemon.map( listPokemon => (
            <CardComponent nombrePokemon={listPokemon.name} idPokemon={listPokemon.idPokemon} />
          ))
        }
      </div>
    </div>  
    
  )
}

export default DashboardScreen;