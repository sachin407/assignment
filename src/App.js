import React from "react";
// import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./Login";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
// import Registration from "./Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Registration" element={<Registration />} />
          {/* <Route exact path="/Contact" element={<Contact />} /> */}
          {/* <Route path="/about" component={""} />
          <Route path="/contact" component={""} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
