
import { createSlice } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        msgSuccess: null,
        msgError: null,
        msgInfo: null,
        msgWarning: null,
    },
    reducers: {
        setSuccess: ( state, {payload} ) => {
            state.msgSuccess = NotificationManager.success(payload);
        },
        setError: ( state, {payload} ) => {
            state.msgError = NotificationManager.error(payload);
        },
        setWarning: ( state, {payload} ) => { 
            state.msgWarning = NotificationManager.warning(payload);
        },
        setInfo: ( state, {payload} ) => { 
            state.msgInfo = NotificationManager.info(payload);
        },

    }
});

// Action creators are generated for each case reducer function
export const { setSuccess, setError, setWarning, setInfo } = notificationSlice.actions;