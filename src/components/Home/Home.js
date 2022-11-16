import React from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Menu from '../Menu';
const Home = () => {
  return (
    <>
    {/* <Menu/> */}
    <section className="intro-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 re-order">
                    <div className="left-section">
                      <h1 className="title main">Mayur Dighe</h1>
                      <p className="designation"><span><i className="fa fa-code" aria-hidden="true"></i>
                      </span>Frontend Developer</p>
                       <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa tenetur recusandae totam similique facere mollitia laudantium 
                         voluptatibus consequatur! Eaque excepturi vitae tenetur id laudantium.</p>
                    </div>
                </div>
                <div className="col-md-6">
                   <div className="profile-img right-section">
                       <img src="./images/user.png" alt="profile" className="w-50"/>
                   </div>  
                </div>
            </div> 
        </div>
    </section>
    <Skills/>
    <Projects/>
    </>
  )
}

export default Home;