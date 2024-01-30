import React from "react";
import Navbar from "../components/Navbar";

export default function JavaScript() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>JavaScript</h1>
        <p>Agar jaldi seekhna hai to apni language mein seekho</p>
        <p>
          Is tutorial mein aapko JavaScript sikhaya jayega, start se lekar
          advanced tak.
        </p>
        <p>JavaScript world's ki most popular programming language hai</p>
        <p>JavaScript seekhna asaan hai.</p>
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
        <p>Example ke liye, ek function ko tab call kiya ja sakta hai jab koi ‘event’ hota hai, jaise ki jab user ek button par click karta hai.
</p>
<p>Aap functions aur events ke baare mein aage ke chapters mein bahut kuch sikhenge.
</p>
<h2>JavaScript in {`<head> or <body>`}
</h2>

      </div>
    </div>
  );
}
