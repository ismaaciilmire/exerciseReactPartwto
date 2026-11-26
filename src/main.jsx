import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import Home from './ComponentsExer25/Home.jsx'
import About from './ComponentsExer25/About.jsx'
import Features from './ComponentsExer25/Features.jsx'

import {RouterProvider,Route,createBrowserRouter,createRoutesFromElements, } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route   path='/' element={<App />}>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Features' element={<Features />}/>

    </Route>
  
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  
  </StrictMode>,
)
