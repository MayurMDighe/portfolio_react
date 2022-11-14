import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export const Projects = () => {
  return (
    <>
    <section class="projects_section">
       <div className="container"> 
       <h2 class="title text-white">
            Projects
          </h2> 
    <Carousel>
      <Carousel.Item>
             <div className="row">
                    <div className="col-md-6">
                    <div className="card">
                        <img src="https://www.teahub.io/photos/full/210-2104700_front-end-web-development.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Project Name - A</h5>
                        <p className="platform">Ecommerce</p>
                        <p className="card-text techs">HTML, CSS, Javscript, Bootstrap, Magento2(Framework)</p>
                        <a href="#" className="btn btn-primary">Explore Site</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card">
                        <img src="https://www.teahub.io/photos/full/210-2104700_front-end-web-development.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Project Name - B</h5>
                        <p className="platform">Ecommerce</p>
                        <p className="card-text techs">HTML, CSS, Javscript, Bootstrap, Magento2(Framework)</p>
                        <a href="#" className="btn btn-primary">Explore Site</a>
                        </div>
                    </div>   
                    </div>
                </div>
        </Carousel.Item>
         <Carousel.Item>
                  <div className="row">
                            <div className="col-md-6">
                              <div className="card">
                                <img src="https://thumbs.dreamstime.com/b/project-management-diagram-virtual-screen-business-finance-technology-concept-project-management-diagram-virtual-screen-130068869.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Project Name - C</h5>
                                  <p className="platform">Ecommerce</p>
                                  <p className="card-text techs">HTML, CSS, Javscript, Bootstrap, Magento2(Framework)</p>
                                  <a href="#" className="btn btn-primary">Explore Site</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card">
                                <img src="https://thumbs.dreamstime.com/b/project-management-diagram-virtual-screen-business-finance-technology-concept-project-management-diagram-virtual-screen-130068869.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Project Name - D</h5>
                                  <p className="platform">Ecommerce</p>
                                  <p className="card-text techs">HTML, CSS, Javscript, Bootstrap, Magento2(Framework)</p>
                                  <a href="#" className="btn btn-primary">Explore Site</a>
                                </div>
                              </div> 
                            </div>
                          </div>
      </Carousel.Item>
      <Carousel.Item>
              <div className="row">
                            <div className="col-md-6">
                              <div className="card" >
                                <img src="https://www.teahub.io/photos/full/210-2104700_front-end-web-development.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Project Name - E</h5> 
                                  <p className="platform">Ecommerce</p>
                                  <p className="card-text techs">HTML, CSS, Javscript, Bootstrap, Magento2(Framework)</p>
                                  <a href="#" className="btn btn-primary">Explore Site</a>
                                </div>
                              </div>  
                            </div>
                            <div className="col-md-6">
                              <div className="card" >
                                <img src="https://thumbs.dreamstime.com/b/project-management-diagram-virtual-screen-business-finance-technology-concept-project-management-diagram-virtual-screen-130068869.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Project Name - F</h5>
                                  <p className="platform">Ecommerce</p>
                                  <p className="card-text techs">HTML, CSS, Javscript, Bootstrap, Magento2(Framework)</p>
                                  <a href="#" className="btn btn-primary">Explore Site</a>
                                </div>
                              </div> 
                            </div>
                          </div>
          </Carousel.Item>
       </Carousel>
       </div>
     </section>
    </>
  )
}
export default Projects;

