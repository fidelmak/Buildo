import React from "react";

import {
  Link,
  outlet,
  Route,
  Routes,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import DisplayAll from "../components/project/DisplayAll";
import Exercise from "./Exercise";
import Contact from "./Contact";

function Navbar() {
  return (
    <Router>
      {" "}
      <div className="nav">
        {/* <Link path="/display" element={<DisplayAll />}>
        <h1>project</h1>
      </Link> */}
        <Link to="/">
          <h1> Home </h1>
        </Link>
        <h1> Blog </h1>
        <h1>About</h1>
        <Link to="/contact">
          <h1> Contact </h1>
        </Link>
        <Link to="/display">
          <h1>Project</h1>
        </Link>
      </div>
      <Routes>
        <Route exact path="/display" element={<DisplayAll />}></Route>
        <Route exact path="/" element={<Exercise />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}
export default Navbar;
