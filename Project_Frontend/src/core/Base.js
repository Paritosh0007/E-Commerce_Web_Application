import React from "react";
import Menu from "./Menu";
import "../styles.css";
import { Link } from "react-router-dom";
const Base = ({
  className = "background text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container">
     
      <div className={className} >{children}</div>
    </div>
    <footer className="footer mt-auto py-3">
      <div className="container bg-success text-white text-center ">
        <h5>If you got any questions, feel free to reach out!</h5>
        <a href="https://www.linkedin.com/in/paritoshkarnatak"className="btn btn-warning btn-lg">Contact Us</a>
      </div>
      <div className="container">
        <span className="text-dark">
          Made with &#10084;&#65039; by <span className="text-primary"><a href="https://paritosh0007.github.io/"><b>Paritosh Karnatak</b></a></span> 
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
