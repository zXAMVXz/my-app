import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './firebase-config';



const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try{

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        const {displayName, email, photoURL, uid} = result.user;
        console.log({displayName, email, photoURL, uid});

        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        return {
            ok:false,
            errorCode:error.code,
            errorMessage: error.message



        }
        
    }

}

export const registerUserWithMail = async({ email, password, user }) => {

    try {

        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(result);
        const {uid,photoURL} = result.user;
        return {
            ok: true,
            //user info
            photoURL, uid
        }
        
    } catch (error) {
        console.log(error)
        return {
            ok:false,
            errorMessage: error.message
        }
    }


}


export const loginWithEmailPassword = async ({ email, password })  => {

    try {

        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(result);
        const {uid,photoURL} = result.user;
        //console.log({uid,email,photoURL});
        return{
            ok: true,
            //user info
            photoURL, uid
        }

        
    } catch (error) {
        
        return {
            ok:false,
            errorMessage:error.message
        }

    }

}