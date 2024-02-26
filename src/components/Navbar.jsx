import React from "react";
import "./style/nav.css";
import { Link, NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, DropdownButton } from "react-bootstrap";

export default function Navbar() {
  return (
    <div className="nav">
      <nav className="navbarr">
        {" "}
        {/* <button className="logobnt">Hinglish.Web</button> */}
        <div>

        <Link className="logotxt" to="/" >
          Hinglish Web
        </Link>
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
       
        <NavLink to="/html-hindi" style={{backgroundColor:'rgb(71, 196, 71)', color:'black'}}>HTML</NavLink>
        {/* <NavLink to="/css" style={{backgroundColor:'purple'}}>CSS</NavLink> */}
        <NavLink to="/react-hindi" style={{backgroundColor:'rgb(122, 245, 245)',color:'black'}}>React</NavLink>
        <NavLink to="/javascript-hindi" style={{backgroundColor:'rgb(250, 234, 22)',color:'black'}}>JavaScript</NavLink>
        {/* <NavLink to="/python" style={{backgroundColor:'grey',padding:'0px 5px'}}>C</NavLink> */}
        {/* <NavLink to="/python" style={{backgroundColor:'red'}}>C++</NavLink> */}
        {/* <NavLink to="/python" style={{backgroundColor:'blue'}}>Python</NavLink> */}
      </div>
    </div>
  );
}
