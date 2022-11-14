import React from 'react'

export const Skills = () => {
  return (
    <>
     <section className="skills-set">
       <div className="container">
         <h2 className="title text-white">
           Skills, Jobs and Responsiblities
         </h2> 
         <div className="row">
             <div className="col-md-4">
              <div className="card">
                <img src="https://www.teahub.io/photos/full/210-2104700_front-end-web-development.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Frontend Developer</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  {/* <a href="#" className="btn text-dark"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>  */}
                </div>
              </div>
             </div>
             <div className="col-md-4">
              <div className="card" >
                <img src="https://www.teahub.io/photos/full/210-2104700_front-end-web-development.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Backend Developer</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  {/* <a href="#" className="btn text-dark"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>  */}
                </div>
              </div>
             </div>
             <div className="col-md-4">
              <div className="card" >
                <img src="https://thumbs.dreamstime.com/b/project-management-diagram-virtual-screen-business-finance-technology-concept-project-management-diagram-virtual-screen-130068869.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Project Management</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  {/* <a href="#" className="btn text-dark"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a> */}
                </div>
              </div>
             </div>
         </div>
       </div>
    </section>
    </>
  )
}
export default Skills;
