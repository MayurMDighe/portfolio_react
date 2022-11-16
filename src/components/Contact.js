import React from 'react'
import { NavLink , Outlet} from 'react-router-dom';

const Contact = () => {
  return (
    <>
       <section class="contact-me-section">
         <div class="container">
            <h1 class="text-center title"><span>Contact Me</span></h1>
            <div class="contact-form col-md-6 offset-md-3">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="fname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="First Name"/>
                          </div>  
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="lname" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
                          </div>  
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="emailid" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="emailid" placeholder="name@example.com"/>
                          </div>  
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="contactno" class="form-label">Contact Number</label>
                            <input type="number" class="form-control" id="contactno" placeholder="contact no"/>
                          </div>  
                    </div>
                </div>
                  <div class="mb-3">
                    <label for="msg" class="form-label">Message</label>
                    <textarea class="form-control" id="msg" rows="7"></textarea>
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="mb-3">Submit</button>
                  </div>
            </div>
         </div> 
    </section>
  
    <NavLink to={'/contact/test'}>Test</NavLink> 
    <Outlet/>
     
    </>
  )
}

export default Contact;