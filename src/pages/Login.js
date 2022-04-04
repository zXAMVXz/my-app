import React, {useState} from 'react';

import Button from '@mui/material/Button';
import './Login.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const  Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const userLogin = {
            "email": user,
            "password": password
        }
        console.log('You clicked submit.', userLogin);
    }
    return ( 

        <div className="container">

            <div className="login">
                <form onSubmit={handleSubmit}>
                    <Stack direction="column" spacing={3}>
                        <p> Login to Your Accoount</p>
                        <TextField onChange={(e) => setUser(e.target.value)} id="outlined-basic" label="User / Mail" variant="outlined" />
                        <TextField onChange={(e) => setPassword(e.target.value)}  id="outlined-basic" label="Password" variant="outlined" />
                        
                    </Stack>
                    <Stack direction="column" spacing={3}>
                        <Button  type="submit" className="btnlogin" variant="contained" color="success">
                                Singin In
                        </Button>
                        <Button >Recoover your password</Button>
                    </Stack>
                </form>
                
            </div>

            
            
        </div>
     );
}

export default Login

