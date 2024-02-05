import React from "react";

export default function Functions() {
  return (
    <div>
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
      <p></p>
    </div>
  );
}
