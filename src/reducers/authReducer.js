import { types } from '../types/types'

/*
    cuando el usuario este autenticado este sera el estado

    {
        uid: 'asdadsasd'
        name: 'Adrian'
    }

*/

export const authReducer = ( state = {} , action) => {


    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}
        
    
        default:
            return state;
    }


}