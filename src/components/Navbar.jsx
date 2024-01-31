import React from "react";
import "./style/nav.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <nav className="navbarr">
        {" "}
        <a className="logotxt" href="/">
          Hinglish Web
        </a>
        {/* <a className="logotxt" href="#JSX">
          JSX
        </a> */}
      </nav>

      <div className="topics">
        {" "}
        {/* <Link to="/html">HTML</Link> */}
        {/* <Link to="/css">CSS</Link> */}
        <Link to="/javascript">JavaScript</Link>
        <Link to="/">React</Link>
      </div>
    </div>
  );
}
