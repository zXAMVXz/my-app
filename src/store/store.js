import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { notificationSlice } from './notifications/notificationSlice';

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        notifications: notificationSlice.reducer
    }
});