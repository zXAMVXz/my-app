import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import  DashboardScreen  from '../pages/Dashboard/DashboardScreen';


export const DashboardRoutes = () => {

    console.log('dashboad');
    return (
    
        
        
            <Routes>
                <Route path='/dashboard' element={ <DashboardScreen /> } />
                <Route path="/*" element={ <Navigate to="/dashboard" /> } />

            </Routes>

          
       

    )
}
