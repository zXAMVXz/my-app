
import{ types } from '../types/types';
import { NotificationManager } from 'react-notifications';

const initialState = {
    loading: false,
    msgSuccess: null,
    msgError: null,
    msgInfo: null,
    msgWarning: null,
    
}

export const uiReducer = (state  = initialState, action) => {
    console.log('el sig es el payload');
    console.log(action.payload);
    switch ( action.type ) {
        case types.uiSetSucces:
            return {
                ...initialState,
                msgSuccess: NotificationManager.success(action.payload)
            }
        case types.uiRemoveSuccess:
            return {
                ...initialState,
                msgSuccess: null
            }


        case types.uiSetError:
            return {
                ...initialState,
                msgError: action.payload,
                showErrorNotification : NotificationManager.error(action.payload)
            }
        case types.uiRemoveError:
            return {
                ...initialState,
                msgError: null
            }


        case types.uiSetInfo:
            return {
                ...initialState,
                msgInfo: NotificationManager.info(action.payload)
            }
        case types.uiRemoveSuccess:
            return {
                ...initialState,
                msgSuccess: null
            }


        case types.uiSetWarning:
            return {
                ...initialState,
                msgWarning: NotificationManager.warning(action.payload)
            }
        case types.uiRemoveWarning:
            return {
                ...initialState,
                msgWarning: null
            }






    
        default:
            return state;
    }


}