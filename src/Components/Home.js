import React from 'react'
import Contact_Us from './Contact_Us'
import Footer from './Footer'
import Navbar from './Navbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Contact_Us/>
        <Footer/>
    </div>
  )
}

export default Home