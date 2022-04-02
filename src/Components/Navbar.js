import React from 'react'
import { Navigate } from 'react-router-dom';

function Navbar() {

  window.onscroll = function() {
    if (window.pageYOffset > 50) {
      document.getElementById("mynavbar").classList.add("out")
    }else{
      document.getElementById("mynavbar").classList.remove("out")
    }
    document.getElementById("mynavbar").classList.remove("togg_open")
  };

  function ToggleMenu() {
    if(document.getElementById("mynavbar").classList.contains("togg_open")){
      document.getElementById("mynavbar").classList.remove("togg_open")
    }else{
      document.getElementById("mynavbar").classList.add("togg_open")
    }
  }

  return (
    
    <div className='mynavbar myshadow shadow-bottom' id='mynavbar'>
      <div className='container'>
        <div className='row m-0 p-0'>

          <div className='col-7 col-lg-4 m-0 p-0'>          
            <div className='logo' onClick={() => window.location = "./"}>
              <img src={require('../Images/elect2.png')} alt=""/>  
              <div>
                <div className='logo_name'>
                  MaxCompany
                </div>
                <div className='logo_phone'>
                  432-432-4432
                </div>
              </div>              
            </div> 
          </div>

          <div className='item col-2 menu' onClick={() => window.location = "./residencial"}>
            Residencial
            <div className='sub'></div>
          </div>
          <div className='item col-2 menu' onClick={() => window.location = "./commercial"}>
            Commercial
            <div className='sub'></div>
          </div>
          <div className='item col-2 menu' onClick={() => window.location = "./contactus"}>
            Contact Us
            <div className='sub'></div>
          </div>

          <div className='col-2 menutg  m-0 p-0' onClick={() => ToggleMenu()}>
            <div className='menutg_icon'></div>
          </div>

          <div className='col-3 col-lg-2  m-0 p-0'>
            <div className='mybutton'>Free Quote</div>
          </div>

        </div>
        <div className='col m-0 p-0 open_navbar'>
          <div className='item2' onClick={() => window.location = "./residencial"}>
            Residencial
          </div>
          <div className='sub2'></div>
          <div className='item2' onClick={() => window.location = "./commercial"}>
            Commercial
          </div>
          <div className='sub2'></div>
          <div className='item2' onClick={() => window.location = "./contactus"}>
            Contact Us
          </div>
        </div>        
      </div>        
    </div>
  )
}

export default Navbar