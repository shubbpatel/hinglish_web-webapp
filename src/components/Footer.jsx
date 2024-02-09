import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* <img src="/logo.png" alt="Website Logo" className="logo" /> */}
        <a className="logotxt" href="/">
          Hinglish Web
        </a>
        {/* <p className="description">Your brief description here</p> */}
      </div>
      <div className="footer-links">
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul className="footer-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <ul className="legal-links">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
