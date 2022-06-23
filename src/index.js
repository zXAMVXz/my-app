import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login/Login';
import DashboardScreen from './pages/Dashboard/DashboardScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {NotificationContainer} from 'react-notifications';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRouter } from './routes/AppRouter';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
          {/* <NotificationContainer /> */}  
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
