import React, { Component } from "react";
import img from "../assets/images/img.jpeg";
import Button from "./Button";
import Scroll from "./scrol";
import { Link } from "react-router-dom";
const tthis = {
  height: "100vh",
};
class Exercise extends Component {
  render() {
    return (
      <div style={tthis}>
        <div>
          <center>
            <img src={img} width="200px" alt="img" />
            <h1>
              <Scroll />
            </h1>
            <p> check out what i am building </p>
            <Link to="/display">
              <Button name={"show"} />
            </Link>
          </center>
        </div>
      </div>
    );
  }
}

export default Exercise;
