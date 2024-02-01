import React from "react";
import OutputJS from "./OutputJS";
import Statements from "./Statements";
import "./js.css";
import Syntax from "./Syntax";
import Comments from "./Comments";
import Variables from "./Variables";

export default function JavaScript() {
  return (
    <div className="bContainer">
      <h1 id="introduction" style={{ paddingLeft: "5px" }}>
        JavaScript
      </h1>
      <div className="index">
        <a href="#introduction">Introduction</a>
        <a href="#output">Javascript Output</a>
        <a href="#Statements">Javascript Statements</a>
        <a href="#syntax">Javascript Syntax</a>
        <a href="#comments">Javascript Comments</a>
        <a href="#variables">Javascript Variables</a>
      </div>
      <div className="container">
        <p>Agar jaldi seekhna hai to apni language mein seekho</p>
        <p>
          Is tutorial mein aapko JavaScript sikhaya jayega, start se lekar
          advanced tak.
        </p>
        <p>JavaScript world ki most popular programming language hai</p>
        <p>JavaScript seekhna boht asaan hai just learn with us.</p>
        <h5 className="bgYellow">
          Is page mein kuch examples hain jo dikhate hain ki JavaScript kya kar
          sakta hai.
        </h5>
        <h2>Can Change HTML Content</h2>
        <p>
          JavaScript ke bahut se HTML methods mein se ek hai getElementById().
        </p>
        <p>
          method ek HTML element ko 'find' karta hai (with id="demo"), aur
          element ka content badal deta hai (innerHTML) to "Hello JavaScript":
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          {`document.getElementById("demo").innerHTML = "Hello JavaScript";`}
        </p>
        <p>JavaScript dono double aur single quotes ko accept karta hai:</p>
        <h3>Example</h3>
        <p className="bgExample">
          {`document.getElementById('demo').innerHTML = 'Hello JavaScript';
`}
        </p>
        <h2>Can Change HTML Styles (CSS)</h2>
        <p>
          HTML element ke style ko badalna, ek HTML attribute ko badalne ka ek
          variant hai:
        </p>
        <h3>Example</h3>
        <p className="bgExample">{`document.getElementById("demo").style.fontSize = "35px";
`}</p>
        <h2>Can Hide HTML Elements</h2>
        <p>
          HTML elements ko hide display style ko badal kar kiya ja sakta hai:
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          {`document.getElementById("demo").style.display = "none";
`}{" "}
        </p>
        <h2>Can Show HTML Elements</h2>
        <p>
          hide hui HTML elements ko show karna display style ko badal kar bhi
          kiya ja sakta hai:
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          {`document.getElementById("demo").style.display = "block";
`}{" "}
        </p>
        <h2>
          <b>Kya Aapko Pata Hai?</b>
        </h2>
        <p>
          JavaScript aur Java poori tarah alag bhashayein hain, concept aur
          design dono mein.
        </p>
        <p>
          JavaScript ko Brendan Eich ne 1995 mein invent kiya, aur ye 1997 mein
          ECMA standard ban gaya.
        </p>
        <p>
          Standard ka official naam ECMA-262 hai. Bhasha ka official naam
          ECMAScript hai.
        </p>
        <br />
        <h2>Where to put JavaScript</h2>
        <h3>The {`<script>`} Tag</h3>
        <p>
          HTML mein, JavaScript code <script> and </script> ke beech mein insert
          hota hai.
        </p>
        <h3>Example</h3>
        <pre className="bgExample">
          {`<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>`}
        </pre>
        <p>
          Purane JavaScript examples mein 'type' attribute ka istemal hota tha:{" "}
          {`<script type="text/javascript">`}.
        </p>
        <p>
          Lekin ab 'type' attribute ki jaruarat nahi hai. JavaScript HTML mein
          default scripting language hai
        </p>
        <h2>JavaScript Functions and Events</h2>
        <p>
          JavaScript function ek block hota hai jo JavaScript code ka ek hissa
          hota hai, aur jab 'called' kiya jata hai, tab ye execute ho sakta hai.
        </p>
        <p>
          Example ke liye, ek function ko tab call kiya ja sakta hai jab koi
          ‘event’ hota hai, jaise ki jab user ek button par click karta hai.
        </p>
        <p>
          Aap functions aur events ke baare mein aage ke chapters mein bahut
          kuch sikhenge.
        </p>
        <h2>JavaScript in {`<head> or <body>`}</h2>
        <p>Aap HTML document mein kitni bhi scripts rakh sakte hain.</p>
        <p>
          Scripts ko {`<body>`} ya fir HTML page ke {`<head>`} section mein rakh
          sakte hain, ya dono jagah rakh sakte hain.
        </p>
        <h2>JavaScript in {`<head>`}</h2>
        <p>
          Is example mein, ek JavaScript function ko ek HTML page ke {`<head>`}{" "}
          section mein rakha gaya hai.
        </p>
        <p>
          Jab koi button click hota hai, tab ye function invoke (call) hota hai:
        </p>
        <h3>Example</h3>
        <pre className="bgExample">
          {`<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
</body>
</html>
`}
        </pre>
        <h2>JavaScript in {`<body>`}</h2>
        <p>
          Is example mein, ek JavaScript function ko ek HTML page ke {`<body>`}{" "}
          section mein rakha gaya hai.
        </p>
        <p>
          Jab koi button click hota hai, tab ye function invoke (call) hota hai:
        </p>
        <h3>Example</h3>
        <pre className="bgExample">
          {`<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
`}
        </pre>
        <p className="bgYellow">
          {`<body>`} element ke neeche scripts rakhna display ki speed ko behtar
          banata hai, kyun ki script interpretation display ko dheema kar deta
          hai.
        </p>
        <h2>External JavaScript</h2>
        <p>Scripts ko external files mein bhi rakha ja sakta hai:</p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">myScript.js</span>
        </p>
        <pre className="bgExample">
          {`function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
`}
        </pre>
        <p>
          External scripts useful hote hain jab ek hi code ko alag-alag web
          pages mein istemal kiya jata hai.
        </p>
        <p>JavaScript files ka file extension .js hota hai.</p>
        <p>
          External script ka istemal karne ke liye,{" "}
          <span className="clrRed">{`<script>`}</span> tag ke{" "}
          <span className="clrRed">src</span> (source) attribute mein script
          file ka naam daalein:
        </p>
        <h3>Example</h3>
        <p>{`<script src="myScript.js"></script>
`}</p>
        <p>
          Aap external script reference ko {`<head>`} ya {`<body>`} mein rakh
          sakte hain, jaise aapko accha lage.
        </p>
        <p>
          Script aise behave karega jaise woh exact wahi ho jahan {`<script>`}{" "}
          tag hai.
        </p>
        <h2>External JavaScript Advantages</h2>
        <p>
          Scripts ko external files mein rakhne ke kuch advantages hain hote
          hain:
        </p>
        <p>- Ye HTML aur code ko alag kar deta hai</p>
        <p>
          - Ye HTML aur JavaScript ko padhne aur maintain karne mein easy karta
          hai
        </p>
        <p>- Cached JavaScript files se page load speed badha sakta hai.</p>
        <p>
          Agar aap ek page mein multiple script files add karna chahte hain -
          toh multiple script tags ka istemal karein
        </p>
        <h3>Example</h3>
        <pre className="bgExample">
          {`
    <script src="myScript1.js"></script>
    <script src="myScript2.js"></script>
    `}
        </pre>
        <h2>External References</h2>
        <p>
          Ek external script ko 3 alag tareeko se reference kiya ja sakta hai
        </p>
        <p>Ek full URL ke saath (ek pura web address ke saath)</p>
        <p>Ek file path ke saath (jaise ki /js/)</p>
        <p>Kisi bhi path ke bina</p>
        <br />
        <p>
          Is example mein ek full <b>URL</b> ka istemal kiya gaya hai
          myScript.js ko link karne ke liye:
        </p>
        <h3>Example</h3>
        <p className="bgExample">{`<script src="https:/hinglishweb.js"></script>
`}</p>
        <br />
        <p>
          Is example mein ek file URL ka istemal kiya gaya hai myScript.js ko
          link karne ke liye:
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          {`<script src="/js/myScript.js"></script>
`}{" "}
        </p>
        <br />
        <p>
          Is example mein myScript.js ko link karne ke liye koi path ka istemal
          nahi kiya gaya hai:
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          {`<script src="myScript.js"></script>
`}{" "}
        </p>
        <br /> <hr />
        <div id="output">
          <OutputJS />
        </div>
        <br /> <hr />
        <div id="Statements">
          <Statements />
        </div>
        <div id="syntax">
          <Syntax/>
        </div>
        <div id="comments">
          <Comments/>
        </div>
        <div id="variables">
          <Variables/>
        </div>
      </div>
    </div>
  );
}
