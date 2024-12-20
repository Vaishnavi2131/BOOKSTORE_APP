import React from 'react'
import Navbar from '../components/Navbar'
//import Login from '../components'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
    <Navbar/>
    
      <Banner/>
      <Freebook/>
      <Footer/>
    </>
  )
}

export default Home
