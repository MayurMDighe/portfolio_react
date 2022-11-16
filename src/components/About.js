import React from 'react';
import Menu from './Menu';

const About = () => {
  return (
    <>
       <section class="about-wrapper">
        <div class="container">
            <h1 class="text-center title"><span>About Me</span></h1>
            <p class="greet">Hi There</p>
            <div class="row">
                <div class="col-md-6">
                    <div class="about-details">
                      <p class="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit quos, iure facilis quasi fugit id ducimus cupiditate corrupti 
                        perferendis laborum nesciunt praesentium tempore iusto eaque, reiciendis 
                        earum obcaecati, a reprehenderit!</p>
                        <div class="details-table d-flex justify-content-between">
                          <div class="left-tab">
                              <p class="head">Name</p>
                              <span>Mayur M. Dighe</span>
                              <p class="head">Phone</p>
                              <span class="tail">9766786816</span>
                          </div>
                          <div class="right-tab">
                            <p class="head">Email</p>
                            <span>dighemayur16@gmail.com</span>
                            <p class="head">Address</p>
                            <span class="tail">A/p:Narayangaon</span>
                        </div>
                        </div>
                     </div>
                  </div>  
              <div class="col-md-6">
               <div class="about-skills">
                   <p class="skill-title text-white">My Skills</p> 
                   <div class="skill-set">
                       <p class="skill">HTML<span>100%</span></p>
                       <p class="skill">CSS3<span>80%</span></p> 
                       <p class="skill">Bootstrap<span>70%</span></p>
                       <p class="skill">Javascript<span>70%</span></p>
                   </div>
               </div>
              </div>
            </div>
          </div>
      </section>
      <section class="work-together">
          <div class="container">
             <div class="row">
                 <div class="col-md-12">
                     <div class="work-wrapper">
                         <p class="tag text-center">Let's work together on your next project !</p>
                         <div class="connect-btns text-center">
                             <a href="contact.html" class="btn contact"><span class="slide-in-left">Contact me</span><span class="slide-in-right">Contact me</span></a>
                             <a href="#" class="btn cv"><span class="slide-in-left">Download CV</span><span class="slide-in-right">Download CV</span></a> 
                         </div>  
                     </div> 
                 </div>
             </div> 
          </div>  
      </section> 
    </>
  )
}

export default About