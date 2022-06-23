
import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './NavBarComponent.scss';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
const  NavBarComponent = () => {
  return (
        <Box sx={{ width: '20%', maxWidth: 360, bgcolor: '#8039DF', position:'fixed', height:'100vh' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <img className="logoNbar" src={require('../../assets/logo_pokemon.png')} />
                    <Paper component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '95%' }}
                    >
    
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Pokemón"
                            inputProps={{ 'aria-label': 'search Pokemón' }}
                        />
                        
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    
                    </Paper>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <CatchingPokemonTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText style={{color:'white'}} primary="Show all pokemons" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <FavoriteTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText style={{color:'white'}} primary="Favorites" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText primary="Log Out" />
                        </ListItemButton>
                    </ListItem>
                
                </List>
            </nav>
    </Box>

  )
}

export default NavBarComponent;