import React, {useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import './Login.scss'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth/thunks';


import { setError , removeError} from '../../actions/ui';
import { useForm } from  '../../hooks/useForm';
import 'react-notifications/lib/notifications.css';
import GoogleIcon from '@mui/icons-material/Google';
import validator from 'validator';

const  Login = () => {

    const [register, setRegister] = useState(false)

    //const {msgError} = useSelector( state => state.ui);

    //console.log(msgError);

    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm({
        email:'adrianmtno@gmail.com',
        password:'123456'
    })

    // const [ formValuesRegister, handleInputChangeRegister] = useForm({
    //     userRegister:'',
    //     emailRegister:'',
    //     passwordRegister:'',
    //     confirmPasswordRegister:''
    // })

    

    //const { email, password } = formValues;
    //const { userRegister ,emailRegister, passwordRegister, confirmPasswordRegister } = formValuesRegister;
    

    const handleSubmit = (e) => {

        console.log({email, password});
        e.preventDefault();
        dispatch(checkingAuthentication())
        //dispatch( starLogin(1234,'adrian') );

    }

    const handleSubmitRegister = (e) =>{

        //console.log(formValuesRegister);
        e.preventDefault();
        // if(isFormRegisterValid()){
        //     console.log('formulario correcto');
        //     dispatch( removeError() );

        // }
    }
    

    const googleLogin = () => {
        dispatch( startGoogleSingIn() );
    }


    // const isFormRegisterValid = () => {

    //     if(userRegister.trim().length === 0){
    //         console.log('Name is required');
    //         dispatch( setError('El usuario es requerido')  );
    //         //NotificationManager.info('Info message');
    //         return false;
    //     }else if ( !validator.isEmail(emailRegister) ){
    //         console.log('email is not valid');
    //         dispatch( setError('email no valido')  );
    //         return false;
    //     }else if( passwordRegister !== confirmPasswordRegister || passwordRegister.length < 5){
    //         console.log('las contraseñas no coinciden');
    //         dispatch( setError('password dont match')  );
    //         return false
    //     }

    //     return true;

    // }




    return ( 
        <div className="container">
            <div className="login">
                
                    
                        
                        {
                            register ? 
                            (
                                <>
                                    {/* <form onSubmit={handleSubmitRegister}>
                                    <Stack direction="column" spacing={3}>
                                        <p id="p-sing-iing"> Register </p>
                                        <p id="p-sing-subtitle"> Create yor account with your <span> mail </span> and <span> password</span> </p>
                                        <TextField style={{color:'white'}} color="warning" value={userRegister} name="userRegister" onChange={handleInputChangeRegister} id="outlined-basic" label="User" variant="outlined" />
                                        <TextField color="warning" value={emailRegister} name="emailRegister" onChange={handleInputChangeRegister} id="outlined-basic" label="Mail" variant="outlined" />
                                        <TextField color="warning" value={passwordRegister} name="passwordRegister" onChange={handleInputChangeRegister} id="outlined-basic" label="Password" variant="outlined" />
                                        <TextField color="warning" value={confirmPasswordRegister} name="confirmPasswordRegister" onChange={handleInputChangeRegister} id="outlined-basic" label="Confirm Password" variant="outlined" /> 
                                        <Stack direction="column" spacing={3}>
                                            <Button  type="submit" className="btn-login" >
                                                    Register with email
                                            </Button>
                                        </Stack>

                                        <p onClick={(e) => setRegister(false)}> Already reggistered ? </p>
                                        </Stack>
                                    </form> */}
                                </>
                            
                            ): 
                            (
                                <>
                                    <form onSubmit={handleSubmit}>
                                    <Stack direction="column" spacing={3}>
                                        <p id="p-sing-iing"> Sign in </p>
                                        <p id="p-sing-subtitle"> Don't hae an account yet ? <span  onClick={(e) => setRegister(true)}> Sign up </span> </p>
                                        <Button onClick={googleLogin} className='btn-google' startIcon={<GoogleIcon sx={{ color: '#3F72D8' }} />}>Sing in with Google</Button>
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

