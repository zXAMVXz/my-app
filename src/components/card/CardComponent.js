


import React from 'react';
import './CardComponent.scss';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';

const  CardComponent = ({nombrePokemon = '',idPokemon}) => {
   
  return (

        <Card className="card">
          <div className='pokeContent'>
                <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${idPokemon}.svg`} />
                <h2>{nombrePokemon}</h2> 
          </div>
          <div className='pokeInfo' >
            <h2>Tipo: </h2>
            <Chip label="Fuego" variant="outlined" />
            <Chip label="Fuego" variant="outlined" />
            <Chip label={idPokemon} variant="outlined" />
          </div>

        </Card>
       
  )
}

export default CardComponent;