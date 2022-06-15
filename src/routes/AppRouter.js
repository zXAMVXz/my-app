

import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { HomeScreen } from '../pages/Home/HomeScreen';
import Login from '../pages/Login/LoginScreen';
export const AppRouter = () => {
    return (
        // <Routes>
        //     <Route path="/" element={<Login />}>
        //         <Route>
        //             <Route path='/home' element={ <HomeScreen/> } />
        //         </Route>
        //     </Route>
            
        // </Routes>
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="/Home" element={<HomeScreen />} />

            <Route path="*" element={<Login />} />
            
        </Routes>
    )
}
