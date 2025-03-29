import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Navigate,Route,Routes} from 'react-router'
import Home from './home.jsx'
import About from './About.jsx'
import Task from './Task.jsx'
import Project from './project.jsx'
import Contact from './contact.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<App/>}>
     <Route path  ='/Home' element ={<Home/>}></Route>
      <Route path = '/About' element ={<About/>}></Route>
      <Route path = '/Task' element= {<Task/>}></Route>
      <Route path = '/Project' element= {<Project/>}></Route>
      <Route path ='/Contact' element={<Contact/>}></Route>
      <Route path ='/' element={<Navigate to={'Home'}/>}></Route>
       </Route>
    </Routes>
  </BrowserRouter>
   
  </StrictMode>,
)
