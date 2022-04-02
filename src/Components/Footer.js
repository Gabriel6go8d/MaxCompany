import React from 'react'

function Footer() {
  return (
    <div className='footer pb-4 myshadow shadow-top'>
        <div className='container'>
          <div className='row m-0 p-0 justify-content-between'>

            <div className='col-12 col-lg-4'>         
              <div className='logo mt-3'>
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

            <div className='col-12 col-lg-4 mt-4'>
              <div className='text-left mydarkgray footer_text1'>
                We get the Job Done
              </div>
              <div className='text-left mydarkgray'>
                MaxCompany offer Air Conditioning and Electrical Services to Miami-Dade, Broward and Florida Keys.
              </div>
              <div className='text-left copyr mydarkgray'>
                Copyright © 2022 MaxCompany Website developed by Gabriel Gutierrez.
              </div>
            </div>

            <div className='col-12 col-lg-4 mt-4'>
              <div className='row m-0 p-0'>
                <div className='col-6 text-left'>
                  <div className='footer_titles'>Links</div>
                  <div className='footer_links'>Residencial</div>
                  <div className='footer_links'>Commersial</div>
                  <div className='footer_links'>About Us</div>
                </div>
                <div className='col-6  text-left'>
                  <div className='footer_titles'>Social Media</div>
                  <div className='footer_links'>Facebook</div>
                  <div className='footer_links'>Google</div>
                  <div className='footer_links'>Yelp</div>
                </div>
              </div>
              
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default Footer