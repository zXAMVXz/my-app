import { checkingCredentials, login, logout } from './authSlice';
import { singInWithGoogle, registerUserWithMail, loginWithEmailPassword } from '../../firebase/providers';

export const checkingAuthentication = ( email, password ) => {

    return async( dispatch ) => {
         dispatch ( checkingCredentials() );
    }

};

export const startGoogleSingIn = () => {
    return async( dispatch ) =>{
        dispatch ( checkingCredentials() );
        let x = 'adrian';
        const result = await singInWithGoogle();
        console.log({result});
        console.log({dispatch});
        //si existe algun error
        if( !result.ok ) return dispatch( logout( result.errorMessage ));
        // si todo es correcto
        dispatch( login(result) );

    }
}


export const startCreatinUserWithEmailPassword = ({email, password, user}) => {

    return async ( dispatch ) => {
        dispatch ( checkingCredentials() );

        const result = await registerUserWithMail({email, password, user})
        console.log(result);
        //si existe algun error
        if( !result.ok ) return dispatch( logout( result.errorMessage ));
        // si todo es correcto
        dispatch( login(result) );
    }

}



export const startLoginWithEmailPassword = ({ email, password }) => {

    return  async ( dispatch ) => {

        dispatch ( checkingCredentials() );
        const result = await loginWithEmailPassword ({ email, password });
        console.log(result);
        if( !result.ok ) return dispatch( logout( result.errorMessage));
        // si todo es correcto
        dispatch( login(result) );
        

    }

}
