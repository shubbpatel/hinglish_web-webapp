import React from "react";

export default function Functions() {
  return (
    <div className="bContainer container">
      <h1>Javascript Functions in hindi</h1>
      <p>
        JavaScript mein, ek function ek set of statements hota hai jo specific
        computation ko execute karta hai. Function inputs (arguments) leta hai,
        unpar kuch specific calculations apply karta hai, aur ek result produce
        karta hai. Function define karne ke liye function keyword ka istemal
        hota hai. Ek basic function ka structure is tarah hota hai:
      </p>
      <p>
        Ek JavaScript function tab execute hota hai jab use invoke (call) kiya
        jata hai.
      </p>
      <p>
        Ek basic JavaScript function, yahan hum ek aisa function banate hain jo
        do elements ko add karta hai.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
     function myFunction(g1, g2) {
      return g1 + g2;
         }
     const value = myFunction(6, 2); // Calling the function
     console.log(value);`}
      </pre>
      <p>
        <b>Output:</b>
      </p>
      <p className="clrBlack">8</p>
      <p>
        JavaScript mein ek function banane ke liye basic syntax niche diya gaya
        hai.
      </p>
      <pre className="bgExample">
        {`
      function functionName(Parameter1, Parameter2, ...)
      {
          // Function body
      }`}
      </pre>
      <p>
        JavaScript mein ek function banane ke liye, sabse pehle function keyword
        ka istemal karna hota hai, uske baad function ka naam aur uske baad
        parameter jo parenthesis ke andar likha jata hai. Function ke body curly
        braces {} ke andar hoti hai. Yeh function ka basic structure hota hai.
      </p>
      <p>
        JavaScript mein, functions ko variables ki tarah istemal kiya ja sakta
        hai assignments ya calculations mein.
      </p>
      <h3>Function Call (execute) Kaise hota Hai ?</h3>
      <p>Ek event ke dvara jaise ki, ek user ke kisi button click karne par.</p>
      <p>Jab JavaScript code se direct function call kiya gaya ho.</p>
      <p>
        self-invoking function, jaise ki khud ko call karne wale functions, jo
        autometically execute hote hain.
      </p>
      <p>
        User-defined function ka use karne se pehle, hamein ek banana padega.
        Hum JavaScript mein function banane ke liye upar di gayi syntax ka
        istemaal kar sakte hain. Function ki definition ko kabhi-kabhi function
        declaration ya function statement bhi kaha jata hai. Niche kuch niyam
        hain jo JavaScript mein function banane ke liye hain:
      </p>
      <p>
        Har function ki beginning "function" keyword ke saath karni chahiye,
        jise ke baad,
      </p>
      <p>Har user-defined function ka ek unique naam hona chahiye,</p>
      <p>
        Har function ke liye, ek ya multiple parameters ka list hona chahiye.
        Yeh parentheses ke andar hote hain aur commas se separate kiye jaate
        hain.
      </p>
      <p>
        Har function ke andar ek set of statements hota hai jo function ke kaam
        ko define karte hain. Ye statements curly braces ke andar hote hain.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
      function Addition(number1, number2) { 
        return number1 + number2; 
    }
    console.log(Addition(3,3));`}
      </pre>
      <p>
        <b>Output:</b>
      </p>
      <p className="clrBlack">6</p>
      <p>
        Ye function do numbers ko as parameters accept karta hai aur inka
        addition return karta hai.
      </p>
      <p>
        Keval function naam ke saath () bina use kiye function ke object ko
        laayega, function ke parinaam ke bajaye.
      </p>
      <p>
        <b>There are three ways of writing a function in JavaScript:</b>
      </p>
      <h4>
        Function Declaration: Isme function keyword ka use hota hai. Function
        declaration ke sath ek function name hona chahiye.{" "}
      </h4>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        function javascriptFunction(parameterX, parameterY) {
            // Set of statements
        }`}
      </pre>

      <h4>Functions Expression in JavaScript in hindi</h4>
      <p>
        Aise ek function anonymous bhi ho sakta hai; iske paas ek naam hone ki
        jarurat nahi hoti. example ke liye, function dj ko iss tarah se define
        kiya ja sakta tha:
      </p>
      <pre className="bgExample">
        {`
        const dj = function (number) {
            return number * number;
      };
      const x = dj(5); // x gets the value 25
      console.log(x);`}
      </pre>
      <p className="clrBlack">
        <b>25</b>
      </p>
      <p>
        Haa, ek function expression ke saath ek naam provide kiya ja sakta hai.
        Ek naam dene se function ko khud se refer karne ka option milta hai, aur
        ye debugger ke stack traces mein function ko identify karne mein help
        karta hai:
      </p>

      <h2>Function return in javascript in hindi</h2>
      <p>
        Jab JavaScript return statement tak pahunchta hai, tab function ka
        execution ruk jata hai.
      </p>
      <p>
        Agar function kisi statement se invoke hua tha, to JavaScript uske baad
        wale code ko execute karne ke liye "return" karega.
      </p>
      <p>
        Functions bahut baar ek return value calculate karte hain. Ye return
        value "caller" ko "return" kiya jata hai.
      </p>
      <pre className="bgExample">
        {`
        // Function is called, the return value will end up in x
        let x = myFunction(4, 3);
        
        function myFunction(a, b) {
        // Function returns the product of a and b
          return a * b;
        }`}
      </pre>
      <p>
        Functions ka istemal code ko reuse karne me help karta hai. <br />
        Aap aise code likh sakte hain jo bar-bar istemal kiya ja sakta hai.
      </p>
      <h2>The Operator ()</h2>
      <p>() operator function ko invoke (call) karta hai:</p>
      <h3>Ex.</h3>
      <p>Fahrenheit to Celsius:</p>
      <pre className="bgExample">
        {`
         function toCelsius(fahrenheit) {
            return (5/9) * (fahrenheit-32);
          }
          
          let value = toCelsius(89);`}
      </pre>
      <p>
        Galat parameters ke sath ek function ko access karna galat javab laa
        sakta hai:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();`}
      </pre>
      <p>
        Accessing a function without () returns the function and not the
        function result:
      </p>
      <pre className="bgExample">
       {`
       function toCelsius(fahrenheit) {
        return (5/9) * (fahrenheit-32);
      }
      
      let value = toCelsius;`} 
      </pre>
      <p>Jaise ki aap upar ke example mein dekh sakte hain, toCelsius function object ko refer karta hai, aur toCelsius() function ke result ko refer karta hai.</p>
      <h2>
      Functions Used as Variable Values in javascript in hindi
      </h2>
      <p>Functions ko aap variables ke tarah istemal kar sakte hain, sabhi prakar ke formulas, assignments, aur calculations mein.</p>
      <p>Iske bajaye, aap seedhe function ko istemal kar sakte hain:</p>
      <pre className="bgExample">
        {`
        let x = toCelsius(89);
        let text = "The temperature is " + x + " Celsius";`}
      </pre>
      <p>You can use the function directly, as a variable value:</p>
      <pre className="bgExample">
       {`let text = "The temperature is " + toCelsius(77) + " Celsius";`} 
      </pre>
      <h2>JavaScript Local Variables in hindi</h2>
      <p>JavaScript function ke andar declare kiye gaye variables, function ke liye LOCAL ho jate hain.</p>
      <p>local variables ko sirf function ke andar se hi access kiya ja sakta hai.</p>
      <pre className="bgExample">
      {`
      // bikeName yahan par use nahi ho sakta

      function myFunction() {
        let bikeName = "BMW G 310 R";
        // bikeName yahan par use ho sakta
      }
      
      // bikeName yahan par use nahi ho sakta`}  
      </pre>
      <p>Kyunki local variables sirf apne functions ke andar recognize hote hain, isliye alag-alag functions mein unhi naam ke variables ka use kiya ja sakta hai.</p>
      <p>local variables ek function start hota hai tab create hote hain, aur jab function end hota hai tab delete hote hain.</p>
      <hr />
    </div>
  );
}
