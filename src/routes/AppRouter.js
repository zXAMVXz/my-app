

import React from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import  Login  from '../pages/Login/Login';
import { DashboardRoutes } from './DashboarRouter';
export const AppRouter = () => {

    const { status } = useSelector( state => state.auth );
    console.log(status);

    //loading
    // if( status === 'checking'){
    //     return 
    // }

    // if( status === 'authenticated' ){
        
    //     navigate('/dashboard',{replace:true}); 
    // } 


    return (

        <Routes>
            {
                (status === 'authenticated')
                ? <Route path="/*" element={ <DashboardRoutes /> } />
                : <Route path='login' element={ <Login /> } />
            }
            <Route path="/*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
        
    )
}
