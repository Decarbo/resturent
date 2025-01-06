import React from 'react'
import Navbar from '../Components/Navbar'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'
import SidePannel from '../Components/sidePannel'
import { Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Navbar/>
        <AboutUs/>
        <SidePannel/>
        <Footer/>
       
        

		


    </div>
  )
}

export default Home