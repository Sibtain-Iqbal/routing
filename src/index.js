import Blog from "./pages/Blog";
import { blogs } from "./pages/Blogs";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Course from  './pages/Course'
import About from './pages/About'
import Blogdetails from "./pages/Blogdetails";
import Error404 from "./pages/Error404";

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
  },
  {
    path:'Blogs',
    element:<Blog/>
  },
  {
    path: 'blog/:id',
    element: <Blogdetails/>
  },
  {
    path:'*',
    element:<Error404/>
  }
 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);
reportWebVitals();
