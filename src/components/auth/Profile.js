import React, { Component } from "react";
// import pics from "../images/";


class Profile extends Component {
   render () {
     return (
        
          <div className="container emp-profile">
              <form method=" ">
                  <div className="row">
                      <div className="col-md-4">
                          <div className="profile-img">
                          {/* <img src={pictures} alt = "devathon"/> */}
                      </div>
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

                <div className="col-md-2">
                    <input type="submit" className="profile-edit-btn" value="Edit Profile"/>
                    </div>

                    <div className="row">
                        {/*left side url */}
                        <div className="col-md-4">
                            <div className="profile-work"></div>
                            <p>Profiles</p>
                        </div>
                </div>
                      {/* right side data toogle */}

                      <div className="col-md-8 pl-5 about-info">
                          <div className="tab-content profile-tab" id="myTabContent">
                              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                 
                                 <div className="row">
                                  <div className="col-md-6">
                                      <label>NAME</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>Dr.K Ramesh</p>
                                  </div>
                            </div>

                            <div className="row">
                                  <div className="col-md-6">
                                      <label>EMAIL</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>ramesh@nitw.ac.in</p>
                                  </div>
                            </div>

                            <div className="row">
                                  <div className="col-md-6">
                                      <label>PHONE</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>1234567890</p>
                                  </div>
                            </div>

                            <div className="row">
                                  <div className="col-md-6">
                                      <label>EDUCATION</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>B.tech , M.Tech
                                      </p>
                                  </div>
                            </div>

                            <div className="row">
                                  <div className="col-md-6">
                                      <label>Phone</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>1234567890</p>
                                  </div>
                            </div>

                            <div className="row">
                                  <div className="col-md-6">
                                      <label>Phone</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p>1234567890</p>
                                  </div>
                            </div>

                            <div className="row">
                                  <div className="col-md-6">
                                      <label>Interests</label>
                                  </div>
                                  <div className="col-md-6">
                                      <p> Architectures and Coding infrastructures in Computer Networks, Service-oriented, Distributed, Secured, Cluster and Cloud Computing Environments in pursuit of Model Driven Framework-oriented Systems and Applications Software.</p>
                                  </div>
                            </div>
                      </div>
                   </div>
                   </div>
                </div>
              </form>
          </div>
        
    )
}
}
export default Profile;