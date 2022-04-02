import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Contact_Us from './Contact_Us'

function Contact() {
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='contact_page_img'></div>
        </div>
        <Contact_Us/>
        <Footer/>
    </div>
  )
}

export default Contact