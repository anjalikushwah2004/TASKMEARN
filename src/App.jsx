import React from "react"
import Header from "./Header"
import { Outlet } from "react-router"
import Footer from "./footer"



function App() {
  

  return (
    <>
  <Header/>
  <Outlet/>
   
   <Footer/>
   
   
    </>
  )
    
  
}

export default App
