import React from "react";
// import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./Login";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Contact from "./Contact";
// import Registration from "./Registration";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/registration" element={<Registration />} />

          {/* <Route path="/about" component={""} />
          <Route path="/contact" component={""} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
