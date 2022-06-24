
import { setSuccess, setError, setWarning, setInfo} from './notificationSlice';




export const setNotificationSuccess = (succesMsg) => {

    return async ( dispatch ) => {
        dispatch(setSuccess(succesMsg));
    }

}

export const setNotificationError = (errorMsg) => {

    return async ( dispatch ) => {
        dispatch(setError(errorMsg));
    }

}