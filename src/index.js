import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import routers from './components/router/router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);