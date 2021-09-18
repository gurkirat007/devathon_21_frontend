import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed" >
        <nav className="z-depth-0" >
          <div  className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
              }}
              className="col s5 brand-logo center black-text"
            >
            </Link>
            <div className="col s12 center-align">
              <div className="col s6">
                <Link
                to="/login"
                style={{
                  float: "right",
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
              <Link
                to="/register"
                style={{
                  float: "right",
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register 
              </Link>
              
            </div>
          </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;