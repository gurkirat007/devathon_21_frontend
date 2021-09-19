import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/auth/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile">
            <Profile
              name="Dr. K Ramesh"
              designation="Associate Professor"
              branch="Computer Science and Engineering"
              institute="National Institute of Technology, Warangal - 506004, Telangana, INDIA"
              email="srirameesh@yahoo.com"
              phone="9108702462712"
              specialisation="Computer Science and Engineering"
              degree="PHD, M.Tech"
              area_of_interest="Architectures and Coding infrastructures in Computer Networks, Service-oriented, Distributed, Secured, Cluster and Cloud Computing Environments in pursuit of Model Driven Framework-oriented Systems and Applications Software."
              courses="Operating Systems,   Computer Networks,   Socket Programming and Network Security,   Systems Programming,

              Cryptography and Network Security,    Advanced Operating Systems/Distributed Systems,    
              
              Data Structures and Algorithms ,   File Structures,   Problem Solving and Computer Programming,
              
              Software Engineering,  Programming language Concepts,   Computer Graphics,  Artificial Intelligence.
              
              "
              publication=" K.Ramesh, Venkateswarlu K., R. Chandra Sekharam,  Design and Implementation of Peer-to-Peer E-Mail System, International Conference on Advanced Computing and Communication(ADCOM-2006), pp. 54-57, December,2006

              K.Ramesh, T.Ramesh, ASWIN: Model Driven Framework for Automated Software Product Generation in a Distributed Network Environment,Proceedings of International Conference FACT-2009: Recent Trends in Computing and Communications, Chennai, TN, INDIA, pp. 25-30 December 18-19, 2009
             
              K.Ramesh, T.Ramesh, Model Driven Framework for Networked Application Software Generation, International Journal of Computing, Volume 2, Issue 7, (ISSN 2151-9617), pp. 143 -152, July 2010
             
              K.Ramesh, T.Ramesh, Domain-Specific Modeling and Synthesis of Distributed Networked Systems, International Journal of Computer Science and Communications Vol-II, Issue-II (ISSN: 0973-7391). pp 485-495, 2011.
             
             Workshops Organised: An Advanced Technology Programme on NETWORK PROGRAMMING & SECURITY,    9th June 2008 to 21st June 2008 , Sponsored by : Ministry of Human Resource and Development,Government of India, New Delhi
             
             "
              seminars="An Advanced Technology Programme on NETWORK PROGRAMMING & SECURITY,    9th June 2008 to 21st June 2008 , Sponsored by : Ministry of Human Resource and Development,Government of India, New Delhi"
              projects=""
              awards_and_honours=""
              research_papers=""
            />
          </Route>
          {/* <Route exact path="/forgot" component={Forgot} /> */}
        </div>
      </Router>
    );
  }
}
export default App;
