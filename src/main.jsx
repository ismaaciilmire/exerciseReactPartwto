import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import Home from "./ComponentsExer26/Home.jsx"
import Blogs from './ComponentsExer26/Blogs.jsx'
import NewPosts from "./ComponentsExer26/NewPosts.jsx"

import {RouterProvider,Route,createBrowserRouter,createRoutesFromElements, } from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route   path='/' element={<App />}>
      <Route path='/' element={<Home />}/>
      <Route path='/Blogs' element={<Blogs />}/>
      <Route path='/NewPosts' element={<NewPosts />}/>

    </Route>
  
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  
  </StrictMode>,
)
