import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* <img src="/logo.png" alt="Website Logo" className="logo" /> */}
        <Link className="logotxt" to="/">
          Hinglish Web
        </Link>
        {/* <p className="description">Your brief description here</p> */}
      </div>
      <div className="footer-links">
        <ul className="social-links">
          {/* <li>
            <Link to="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </Link>
          </li> */}
          {/* <li>
            <Link to="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </Link>
          </li> */}
          <li>
            <Link
              to="https://www.instagram.com/hinglishweb/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul className="footer-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="legal-links">
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-of-service">Terms of Service</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
