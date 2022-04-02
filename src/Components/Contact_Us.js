import React from 'react'

function Contact_Us() {
  return (
    <div className='contact_us pb-5'>
        <div className='container '>
            <div className='row m-0 p-0 justify-content-between'>
                <div className='col-12 col-lg-4 m-0 p-0'>
                    <h3 className='text-left pt-5 mydarkgray'>Contact Us</h3>
                    <p className='text-justify mygray'>
                        We are a family owned and operated business based in Miami, Florida and servicing southeast Florida. All our customer base are repeating customers or mouth to mouth recommendation, so we really take pride in our job and everything we do. For any inquire please feel free to contact us.
                    </p>

                    <h3 className='text-left mt-4 mb-3 mydarkgray'>MaxCompany</h3>
                    <div className='d-flex mt-4'>
                        <img src={require('../Images/location.png')} alt=""/>  
                        <div className='contact_info mygray'>Miami, Florida</div> 
                    </div>
                    <div className='d-flex mt-4'>
                        <img src={require('../Images/phone.png')} alt=""/>  
                        <div className='contact_info mygray'>(444)-432-4432</div> 
                    </div>
                    <div className='d-flex mt-4'>
                        <img src={require('../Images/mail.png')} alt=""/>  
                        <div className='contact_info mygray'>example@example.com</div> 
                    </div>
                </div>


                <div className='col-12 col-lg-7 pt-5'>
                    <form action="" className='contact_form'>
                         <div class="form-group">
                            <label for="InputName">Name</label>
                            <input type="text" class="form-control" id="InputName" aria-describedby="nameHelp" placeholder="Enter name" required/>
                            <small id="nameHelp" class="form-text text-muted">How should we call you?</small>
                        </div>
                        <div class="form-group mt-3">
                            <label for="InputEmail">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group mt-3">
                            <label for="InputMessage">Message</label>
                            <textarea rows='5' type="text" class="form-control" id="InputMessage" placeholder="Leave us a message." required/>
                        </div>
                        <button class="btn btn-primary mt-3" type="submit">Send Message</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact_Us