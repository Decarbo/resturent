import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "../pages/menu.css"


function Menu(){
    return (
    <>
        <Navbar/>
        <div className='cardcom'>
          <Card/>
        </div>
        <Footer/>
    </>
  )
}

export default Menu