import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'not-authenticated', // 'cheking', 'not-authenticated'. 'authenticated',
        uid:null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessage:null

    },
    reducers: {
        login: ( state, action ) => {
            
        },
        logout: ( state, { payload } ) => {
            state.status='not-authenticated'; // 'cheking', 'not-authenticated'. 'authenticated',
            state.uid=null;
            state.email=null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload;
            console.log({ payload });
        },
        checkingCredentials: (state) => {
            console.log(state.uui);
            state.status = 'cheking';
        }
    }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;