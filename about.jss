import React from 'react'
import pics from "../images/";

const About = () => {
    return (
          <div className="container emp-profile">
              <form method=" ">
                  <div className="row">
                      <div className="col-md-4">
                          <img src={pictures} alt = "devathon" />
                      </div>

                      <div className="col-md-6">
                          <div className="profile-head">
                              <h5>Dr.K Ramesh </h5>
                              <h6>Assistant Professor </h6>

                              <ul className="nav nav-tabs" role="tablist">
                                 <li className="nav-item">
                                     <a className="nav-link active" id="home-tab" data-toggle="tab" href="home" role="tab">About</a>
                                 </li>
                            </ul>
                          </div>
                </div>
                </div>
              </form>
          </div>
        
    )
}
