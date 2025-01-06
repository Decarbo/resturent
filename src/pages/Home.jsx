import React from 'react'
import Navbar from '../Components/Navbar'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'
import SidePannel from '../Components/sidePannel'
import { Route, Routes } from 'react-router-dom'
import Crousel from '../Components/Crousel'

function Home() {
  return (
    <div>
        <Navbar/>
        <Crousel/>
        <AboutUs/>
        <SidePannel/>
        <Footer/>
       
        

		


    </div>
  )
}

export default Home