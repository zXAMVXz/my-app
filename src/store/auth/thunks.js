import { checkingCredentials, logout } from './authSlice';
import { singInWithGoogle } from '../../firebase/providers';

export const checkingAuthentication = ( email, password ) => {

    return async( dispatch ) => {
         dispatch ( checkingCredentials() );
    }

};

export const startGoogleSingIn = () => {
    return async( dispatch ) =>{
        dispatch ( checkingCredentials() );

        const result = await singInWithGoogle();
        console.log({result});
        console.log({dispatch});
        if( !result.ok ) return dispatch( logout( result.errorMessage) )
    }
}