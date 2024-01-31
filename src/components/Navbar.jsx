import React from "react";
import "./style/nav.css";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, DropdownButton } from "react-bootstrap";

export default function Navbar() {
  return (
    <div className="nav">
      <nav className="navbarr">
        {" "}
        {/* <button className="logobnt">Hinglish.Web</button> */}
        <div>

        <a className="logotxt" href="/">
          Hinglish Web
        </a>
        </div>
        {/* <div>
          {" "}
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu style={{backgroundColor:'rgb(64, 190, 228)'}}>
              <Dropdown.Item href="/javascript">JavaScript</Dropdown.Item>
              <Dropdown.Item href="/">React</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div> */}
      </nav>

      <div className="topics">
       
        {/* <Link to="/html" style={{backgroundColor:'green'}}>HTML</Link> */}
        {/* <Link to="/css" style={{backgroundColor:'purple'}}>CSS</Link> */}
        <Link to="/javascript" style={{backgroundColor:'yellow',color:'black'}}>JavaScript</Link>
        <Link to="/" style={{backgroundColor:'skyblue',color:'black'}}>React</Link>
        {/* <Link to="/python" style={{backgroundColor:'grey',padding:'0px 5px'}}>C</Link> */}
        {/* <Link to="/python" style={{backgroundColor:'red'}}>C++</Link> */}
        {/* <Link to="/python" style={{backgroundColor:'blue'}}>Python</Link> */}
      </div>
    </div>
  );
}
