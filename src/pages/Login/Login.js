import React, {useState,useEffect, useMemo} from 'react';
import Button from '@mui/material/Button';
import './Login.scss'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSingIn, startCreatinUserWithEmailPassword, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { Navigate } from "react-router-dom";
import { useForm } from  '../../hooks/useForm';
import 'react-notifications/lib/notifications.css';
import GoogleIcon from '@mui/icons-material/Google';


const  Login = () => {

    const [register, setRegister] = useState(false)
    const navigate = useNavigate();
    //const {msgError} = useSelector( state => state.ui);

    const { status } = useSelector( state => state.auth );
    console.log( status );

    const isAuthenticating = useMemo( () => status === 'checking', [status] );
    console.log(isAuthenticating);

    const dispatch = useDispatch();
    const { user, email, password, confirmPassword, onInputChange } = useForm({
        email:'adrianmtno@gmail.com',
        password:'123456',
        confirmPassword:''
    })

    const handleSubmit = (e) => {

        console.log({email, password});
        e.preventDefault();
        dispatch(startLoginWithEmailPassword({email, password}))


    }

    const handleSubmitRegister = (e) =>{


        e.preventDefault();
        console.log({email, password, user})
        dispatch( startCreatinUserWithEmailPassword({email,password,user}) )
        // if(isFormRegisterValid()){
        //     console.log('formulario correcto');
        //     dispatch( removeError() );

        // }
    }
    

    const googleLogin = () => {
        dispatch( startGoogleSingIn() );
    }


    return ( 
        <div className="container">
            <div className="login">
                
                    
                        
                        {
                            register ? 
                            (
                                <>
                                    <form onSubmit={handleSubmitRegister}>
                                    <Stack direction="column" spacing={3}>
                                        <p id="p-sing-iing"> Register </p>
                                        <p id="p-sing-subtitle"> Create yor account with your <span> mail </span> and <span> password</span> </p>
                                        <TextField style={{color:'white'}} color="warning" value={user} name="user" onChange={ onInputChange } id="outlined-basic" label="User" variant="outlined" />
                                        <TextField color="warning" value={email} name="email" onChange={ onInputChange } id="outlined-basic" label="Mail" variant="outlined" />
                                        <TextField color="warning" value={password} name="pasword" onChange={ onInputChange } id="outlined-basic" label="Password" variant="outlined" />
                                        <TextField color="warning" value={confirmPassword} name="confirmPassword" onChange={ onInputChange } id="outlined-basic" label="Confirm Password" variant="outlined" /> 
                                        <Stack direction="column" spacing={3}>
                                            <Button  type="submit" className="btn-login" >
                                                    Register with email
                                            </Button>
                                        </Stack>

                                        <p onClick={(e) => setRegister(false)}> Already reggistered ? </p>
                                        </Stack>
                                    </form>
                                </>
                            
                            ): 
                            (
                                <>
                                    <form onSubmit={handleSubmit}>
                                    <Stack direction="column" spacing={3}>
                                        <p id="p-sing-iing"> Sign in </p>
                                        <p id="p-sing-subtitle"> Don't hae an account yet ? <span  onClick={(e) => setRegister(true)}> Sign up </span> </p>
                                        <Button onClick={googleLogin} className='btn-google' startIcon={<GoogleIcon sx={{ color: '#3F72D8' }} />} disabled={isAuthenticating}>Sing in with Google</Button>
                                        <p className="divider"><span> Or </span></p>
                                        <TextField color="warning" value={email}    name="email" onChange={ onInputChange }   id="outlined-basic mail" label="User / Mail" variant="outlined" />
                                        <TextField color="warning" value={password} name="password" onChange={ onInputChange }  id="outlined-basic pass" label="Password" variant="outlined" />
                                        <Stack direction="column" spacing={3}>
                                            <Button  type="submit" className="btn-login">
                                                    Singin in with email
                                            </Button>
                                        </Stack>
                                        </Stack>
                                    </form>
                                </>

                            ) 
                            
                            
                        }
                        
                    

               
            </div>  
            
 
        </div>
     );
}



export default Login

