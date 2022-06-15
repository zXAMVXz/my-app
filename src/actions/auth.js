


import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';



export const starLogin = (email, password) => {

    return( dispatch ) => {

        setTimeout(() => {
            dispatch( login(email,password) )
        },3500)

    }

}


export const startGoogleLogin = () => {

    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then(({user})  => {
           
            let { uid, displayName } = user;
            dispatch(login(uid, displayName));
        })
    }
}



export const login = (uid, displayName) => ({

   
        type: types.login,
        payload:{
            uid,
            displayName
        }
    

})
