import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Crousel from '../Components/Crousel'

export default function Home() {
  return (
    <div>

      <div> <Navbar /> </div>
      <Crousel/>
      <div className='m-3'>

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </div>
      <div> <Footer /> </div>
    </div>
  )
}
