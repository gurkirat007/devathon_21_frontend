import React, { Component } from "react";
// import pics from "../images/";

class Profile extends Component {
  render() {
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
                <h5>{this.props.name}</h5>
                <h6>{this.props.designation}</h6>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                value="Edit Profile"
              />
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
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Branch</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.props.branch}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Institute</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.props.institute}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Contact info</label>
                    </div>
                    <div className="col-md-6">
                      <p>
                        {this.props.email}
                        <br />
                        {this.props.phone}
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Specialization</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.props.specialization}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Degree</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.props.degree}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Areas of Interests</label>
                    </div>
                    <div className="col-md-6">
                      <p style={{ width: "600px" }}>
                        {this.props.area_of_interest}
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Courses</label>
                    </div>
                    <div className="col-md-6">
                      <p style={{ width: "600px" }}>{this.props.courses}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Publications</label>
                    </div>
                    <div className="col-md-6">
                      <p style={{ width: "600px" }}>{this.props.publication}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Seminars</label>
                    </div>
                    <div className="col-md-6">
                      <p style={{ width: "600px" }}>{this.props.seminars}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p style={{ width: "600px" }}>{this.props.projects}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Awards and Honours</label>
                    </div>
                    <div className="col-md-6">
                      <p style={{ width: "600px" }}>
                        {this.props.awards_and_honours}
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Research Papers</label>
                    </div>
                    <div className="col-md-6">
                      <p style={{ width: "600px" }}>
                        {this.props.research_papers}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Profile;
