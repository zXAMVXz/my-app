


import React from 'react';
import './DashboardScreen.scss';
import NavBarComponent  from '../../components/nvarcomponent/NavBarComponent';
import CardComponent from '../../components/card/CardComponent'
const  DashboardScreen = () => {
  return (

 

    <div className="containerDashboard">

      <NavBarComponent />  
      <div className="infoContainer">

        {/* <CardComponent pokemonName="picachu"/> */}
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        
      
      </div>

      
    
    </div>  
    
  )
}

export default DashboardScreen;