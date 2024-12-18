import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Blogs from './Component/Blogs/Blogs.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    children:[
      {path: '/about', element:<About/>},
      {path: '/blogs', element:<Blogs/>},
      {path: '/contact', element:<Contact/>},
    ]
  },
  {path: '/about', element:<About/>},
      {path: '/blogs', element:<Blogs/>},
      {path: '/contact', element:<Contact/>},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)