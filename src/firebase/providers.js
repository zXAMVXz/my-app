import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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