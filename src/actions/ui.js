import { types } from '../types/types';

// Mensaje success action
export const setSuccess = ( successMsg ) => ({

    type: types.uiSetSucces,
    payload: successMsg

})

//Quitar mensaje de success
export const removeSuccess = ( successMsg ) => ({

    type: types.uiRemoveSuccess

})


// Mensaje de error action
export const setError = ( errMsg ) => ({

    type: types.uiSetError,
    payload: errMsg,
    

})

//Quitar mensaje de error
export const removeError = ( errMsg ) => ({

    type: types.uiRemoveError

})


// Mensaje de info action
export const setInfo = ( infoMsg ) => ({

    type: types.uiSetInfo,
    payload: infoMsg

})

//Quitar mensaje de info
export const removeInfo = ( infoMsg ) => ({

    type: types.uiRemoveInfo

})

// Mensaje de warning action
export const setWarning = ( warningMsg ) => ({

    type: types.uiSetWarning,
    payload: warningMsg

})

//Quitar mensaje de warning
export const removeWarning = ( warningMsg ) => ({

    type: types.uiRemoveWarning

})










