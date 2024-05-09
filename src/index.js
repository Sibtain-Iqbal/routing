import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Course from  './pages/Course'
import About from './pages/About'

const allRoutes = createBrowserRouter([
  {
    path: '/',
    element : <Home/>
  },
  {
    path: 'About-us',
   element:<About/>
  },
  {
    path : 'Course',
    element:<Course/>
  }

 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);
reportWebVitals();
