


import React from 'react';
import './CardComponent.scss';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const  CardComponent = () => {
  return (

        <Card className="card">
          
          <div className='pokeContent'>
            
                <img src='https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/6.svg' />
                <h2>Charizard</h2>
            
          </div>
          <div className='pokeInfo' >
            <h2>Tipo: </h2>
            <Chip label="Fuego" variant="outlined" />
            <Chip label="Fuego" variant="outlined" />
          </div>

        </Card>
       
  )
}

export default CardComponent;