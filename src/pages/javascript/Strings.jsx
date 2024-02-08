import React from "react";

export default function Strings() {
  return (
    <div>
      <h2>JavaScript Strings in Hindi</h2>
      <p>
        javascript mein <span className="clrRed">Strings</span> <b>text</b>{" "}
        store karne ke liye hoti hai. <span>strings</span> ko quotes "" ke sath
        likhte hain.{" "}
      </p>
      <h3>Ex.</h3>
      <p className="bgExample">var text = "Rajnikant";</p>
      <p>
        Hum single quotes ya fir double quotes dono mein se koi use kar sakte
        hain:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        var name = "Superstar Rajnikant";  // Double quotes
        var movie = 'Lal Salaam';  // Single quotes`}
      </pre>
      <h3>
        Ek string ke andar quotes ka istemal kiya ja sakta hai, jab tak yeh
        string ke surrounding quotes ke saath match na karein.
      </h3>
      <h3>Ex.</h3>
      <pre className="bgExample">{`
let plan1 = "Trip to 'Goa'";
let plan2 = "Bike BMW G 310 RR";
let plan3 = 'Hyundai Exter "green"';`}</pre>
      <h3>Template Strings</h3>
      <p>
        Templates ko ES6 (JavaScript 2016) ke saath introduce kiya gaya tha.
      </p>
      <p>
        Templates backticks (``) ke andar string hote hain (`Yeh ek template
        string hai`).
      </p>
      <p>
        Templates string ke andar single aur double quotes ka istemal karne me
        help karte hain:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        let {`text`} = ` What the mind can "conceive" and "believe" it can
        achieve is true in every area of life`;
      </pre>
      <h3>String Length</h3>
      <p>
        Ek string ki length pata karne ke liye, built-in{" "}
        <span className="clrRed">length</span> property ka istemal karein:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        let heyYou = "JustBelieveInYourself";
        let length = text.length;`}
      </pre>
      <p>
        <b>OutPut</b>
      </p>
      <p className="clrBlack">17</p>

      <h3>Breaking Long String Lines </h3>
      <p>
        Readability ke liye, coders often long code lines se bachne ki koshish
        karte hain.
      </p>
      <p>Ek safe tareeka ek statement ko todne ka hai ek operator use karke:</p>
      <pre className="bgExample">
        {`
        document.getElementById("demo").innerHTML =
        "Holi kab hai, kab hai holi!";`}
      </pre>
      <p>
        safe tareeka ek string ko todne ka hai string addition ka istemal karna
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        document.getElementById("demo").innerHTML = "Holi kab hai " +
        "kab hai holi!";`}
      </pre>
     
     <hr />
    </div>
  );
}
