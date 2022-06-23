


import React from 'react';
import './DashboardScreen.scss';
import { useEffect, useState } from 'react';
import NavBarComponent  from '../../components/nvarcomponent/NavBarComponent';
import CardComponent from '../../components/card/CardComponent';
import  {pokemonList}  from '../../api/pokemon';

import axios from 'axios';
const  DashboardScreen = () => {

  const [listPokemon, setlistPokemon] = useState([{}]);

  useEffect(() => {
    pokemonList().then(res => {
      const { results } = res;
      results.map( pokemon => {
        
        console.log(pokemon.url)

        
        const id = (pokemon.url).split("/");
        console.log(id[id.length-2])
        //pokemon['idPokemon'] = id[id.length-2];
    
        console.log(pokemon)

        //setlistPokemon( [ ...results, pokemon ] );
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