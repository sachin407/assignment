import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Login from "./Login";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import License from "./Lincense";
import DrivingSchool from "./DrivingSchool";
import Appointment from "./Appointment";
import LearnerLicense from "./LearnerLicense";

function NavbarWithLocation() {
  const location = useLocation();
  const isNavbarVisible = !["/", "/registration"].includes(location.pathname);

  return isNavbarVisible && <Navbar />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarWithLocation />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/license" element={<License />} />
          <Route exact path="/driving/school" element={<DrivingSchool />} />
          <Route exact path="/appointment" element={<Appointment />} />
          <Route exact path="/create/license" element={<LearnerLicense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
