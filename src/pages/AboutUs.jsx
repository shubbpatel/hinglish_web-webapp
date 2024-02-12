import React from "react";
import "./style/CommonCss.css";
import ContactUs from "./ContactUs";

export default function AboutUs() {
  return (
    <div className="bContainer container aboutUs">
      <h1>About Hinglish Web</h1>
      <p>
        Hinglish Web is a indian platform for all the tech learners in india and
        neighbouring countries who want to learn technical stuff in there own
        language we provide all technical content full tutorials and courses on
        programming languages like JavaScript, Python, C++, C, HTML, CSS, React
        JS etc. and this we provide in hindi, hindi that is written in hinglish
        that makes learning extremely easy for all the learners. Our{" "}
        <a href="/javascript-hindi">JavaScript in Hindi</a> is the most popular
        course on hinglish web.
      </p>
      <h2>Hinglish Web Tutorials</h2>
      <p>
        <a href="/">Hinglish Web - Learn Programming in Hindi</a>
      </p>
      <p>
        <a href="/react-hindi">React JS Full Course in Hindi for Free</a>
      </p>
      <p>
        <a href="/javascript-hindi">JavaScript Full Course in Hindi for Free</a>
      </p>
      <p>
        <a href="/python-hindi">Python Full Course in Hindi for free</a>
      </p>
      <p>
        <a href="/cpp-hindi">C++ Full Course in Hindi for free</a>
      </p>
      <p>
        <a href="/c-hindi">C Language Full Course in Hindi for free</a>
      </p>
      <h2>Contact Info </h2>
      <p>
        If you have any questions, complaint, suggestion or feedback please feel free to
        reach us at{" "}
        <a href="mailto:services.physitask@gmail.com">services.physitask@gmail.com</a>
      </p>{" "}
    </div>
  );
}
