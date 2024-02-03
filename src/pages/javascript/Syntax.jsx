import React from "react";

export default function Syntax() {
  return (
    <div>
      <h2>JavaScript Syntax in Hindi</h2>
      <p>
        JavaScript syntax wo set of rules hai, jisme define kiya gaya hai ki
        JavaScript programs kaise banaye jate hain:
      </p>
      <p>variables kaise create karein:</p>
      <pre className="bgExmaple">
        {`
var x;
let y;
`}
      </pre>
      <p>Variable use kaise karein</p>
      <pre className="bgExample">
        {`x = 5;
y = 6;
let z = x + y;
`}
      </pre>
      <h2>JavaScript Values</h2>
      <p>JavaScript syntax do prakar ke values ko define karta hai:</p>
      <ul>
        <li>Fixed value</li>
        <li>Variable value</li>
      </ul>
      <p>
        Fixed values ko hum <b>Literals</b> kehte hain.
      </p>
      <p>
        Variable values ko hum <b>Variables</b> kehte hain.
      </p>
      <h2>JavaScript Literals</h2>
      <p>The two most important syntax rules for fixed values are:</p>
      <p>
        1. Numbers ko decimals ke saath ya bina decimals ke likha ja sakta hai:
      </p>
      <pre>
        {`
    12.98
    3323`}
      </pre>
      <p>
        2. Strings text hote hain, jo double ya single quotes ke beech mein
        likha ja sakta hai:
      </p>
      <h2>JavaScript Variables</h2>
      <p>
        Ek programming language mein, variables ka istemal data values store
        karne ke liye hota hai.
      </p>
      <p>
        JavaScript <span className="clrRed">var</span>,{" "}
        <span className="clrRed">let</span> aur{" "}
        <span className="clrRed">const</span> keywords ka istemal variables
        declare karne ke liye karta hai.
      </p>
      <p>
        <b>Equal sign</b> ka istemal values ko variables ko assign karne ke liye
        hota hai.
      </p>
      <p>
        Is example mein, x ko variable ke roop mein define kiya gaya hai. Fir, x
        ko value 34 assign ki gayi hai:
      </p>
      <pre>
        {`
    var x ;
    x = 34;
    `}
      </pre>
      <h2>JavaScript Operators</h2>
      <p>
        JavaScript arithmetic operators ( + - * / ) ka istemal values compute
        karne ke liye karta hai:
      </p>
      <p>{`(5 + 4) * 9`}</p>
      <p>
        JavaScript values ko variables ko assign karne ke liye assignment
        operator ( = ) ka istemal karta hai:
      </p>
      <pre>
        {`
    let x, y;
    x = 3;
    y = 2;
    
    `}
      </pre>
      <h2>JavaScript Expressions</h2>
      <p>
        Ek expression values, variables, aur operators ka combination hota hai,
        jo ek value ko compute karta hai.
      </p>
      <p>Is computation ko evaluation kehte hain.</p>
      <p>example ke liye, 2 * 12 ka evaluation 24 hota hai:</p>
      <p>{`2 * 12`}</p>
      <p>Expressions mein variable values bhi shamil ho sakti hain:</p>
      <p>{`x * 22`}</p>
      <p>
        Values alag-alag types ke ho sakte hain, jaise ki numbers aur strings.
      </p>
      <p>For example, "DJ" + " " + "Wale Babu", evaluates to "DJ Wale Babu":</p>
      <pre>{`"DJ" + " " + "Wale Babu"`}</pre>
      <h2>Javascript keywrods</h2>
      <p>
        JavaScript keywords ka istemal actions ko identify karne ke liye hota
        hai.
      </p>
      <p>
        <span clrRed>let</span> keyword browser ko variables create karne ke
        liye kehta hai:
      </p>
      <p>let x, y;</p>
      <p>x = 5 + 6;</p>
      <p>y = x * 10;</p>
      <p>
        <span className="clrRed">var</span> keyword bhi browser ko variables
        create karne ke liye kehta hai:
      </p>
      <p>var x, y;</p>
      <p>x = 5 + 6;</p>
      <p>y = x * 10;</p>
      <p>
        is examples mein, var ya let ka istemal karne se same result milega.
      </p>
      <p>
        Aap var aur let ke baare mein is tutorial ke aage ke hisse mein aur bhi
        sikhenge.
      </p>
      <h2>JavaScript Comments</h2>
      <p>Sabhi JavaScript statements 'executed' nahi hote.</p>
      <p>
        Double slashes // ya /* aur */ ke beech mein jo bhi code hota hai, wo
        comment ke roop mein treat hota hai.
      </p>
      <p>Comments ko ignore kiya jata hai, aur unhe execute nahi kiya jata:</p>
      <pre className="bgExample">
        {`
   let x = 5;   // I will be executed
   // x = 6;   I will NOT be executed

   `}
      </pre>
      <h2>JavaScript Identifiers / Names</h2>
      <p>Identifiers JavaScript ke names hote hain.</p>
      <p>
        Identifiers ko variables, keywords, aur functions ka naam dene ke liye
        istemal kiya jata hai.
      </p>
      <p>
        Legal names ke liye rules all programming languages mein same hote hain.
      </p>
      <p>Ek JavaScript name ki shuruat honi chahiye:</p>
      <ul>
        <li>A dollar sign ($)</li>
        <li>A letter (A-Z or a-z)</li>
        <li>Or an underscore (_)</li>
      </ul>
      <p>
        Aage ke characters letters, digits, underscores, ya dollar signs ho
        sakte hain.
      </p>
      <p className="bgYellow">
        NOTE: Numbers, names ke pehle character ke roop mein allowed nahi hote.
        Is tareeke se JavaScript aasani se identifiers ko numbers se distinguish
        kar sakta hai.
      </p>
<h2>JavaScript is Case Sensitive
</h2>
      <p>Sabhi JavaScript identifiers case sensitive hote hain
</p>
<p>The variables <span className="clrRed">lastName</span> and <span className="clrRed">lastname</span>, do alag-alag variables hain:
</p>
<p>let lastname, lastName;
</p>
<p>lastName = "Hola";
</p>
<p>lastname = "Modi";
</p>
<p>JavaScript <b>LET</b> ya <b>Let</b> ko keyword <b>let</b> ke roop mein interpret nahi karta hai.
</p>
<h2>JavaScript and Camel Case
</h2>
<p>Historically, programmers ne multiple words ko ek variable name mein join karne ke liye alag-alag tareeko ka istemal kiya hai:
</p>
<p>Hyphens:</p>
<p>first-name, last-name, master-card, inter-city.
</p>
<p>"Hyphens JavaScript mein allowed nahi hain. Ye subtractions ke liye reserved hote hain."
</p>
<p><b>Underscore_</b></p>
<p>first_name, last_name, master_card, inter_city.
</p>
<p><b>Upper Camel Case (Pascal Case):
</b></p>
<p>FirstName, LastName, MasterCard, InterCity.
</p>
<p><b>Lower Camel Case:
</b></p>
<p>JavaScript programmers camel case ka istemal karte hain jo ek lowercase letter se shuru hota hai: 
</p>
<p>firstName, lastName, masterCard, interCity.
</p>
<h2>JavaScript Character Set
</h2>
<p>JavaScript <b>Unicode</b> character set ka istemal karta hai.
</p>
<p>Unicode duniya ke (lagbhag) sabhi characters, punctuations, aur symbols ko cover karta hai.
</p>
<p>Gahraai se dekhne ke liye, kripya hamare Complete Unicode Reference ko padhein.
</p>
<hr />
    </div>
  );
}
