import React from "react";

export default function Objects() {
  return (
    <div className="bContainer container">
      <h2>JavaScript Objects in Hindi</h2>
      <p className="bgYellow">
        <b>
          JavaScript mein Objects boht important topic hai isliye boht hi dhyan
          se samajhna jaruri hai.
        </b>
      </p>
      <p>
        Simple language mein samjhein to in real life <b>Object</b> matlab ki
        koi 'वस्तु' like ek 'Bike' ya 'Car' aur <b>Properties</b> matlab uske
        'गुण' like model : 'BMW G 310 RR', weight :'174kg' color :'white',
        capacity:'312 cc' aur <b>Object Methods</b> hum aage padhenge
      </p>
      <p>
        Sabhi bikes mein same properties hoti hain, lekin property values bike
        to bike different ho sakti hain.
      </p>
      <h3>JavaScript Objects in hindi</h3>
      <p>
        humne pehle hi seekha hai ki JavaScript variables data values ke liye
        containers hote hain.
      </p>
      <p>
        Ye code ek variable bike ko many different values (BMW G 310 RR, 312 cc,
        white) assign karta hai.
      </p>
      <pre className="bgExample">
        {`const bike = {model:"BMW G 310 RR", capacity:"312 cc", color:"white"};`}
      </pre>
      <p>
        Values ko as name:value pairs likha gaya hai (name aur value ko colon se
        alag kiya gaya hai).
      </p>
      <p>
        object ko "const" keyword ke saath declare karna common practice hai.
      </p>
      <p>
        hum ek JavaScript object ko ek object literal ke saath define karte
        hain:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">{`const user = {firstName:"Honey", lastName:"Singh", age:40, eyeColor:"black"};`}</pre>
      <p>
        line breaks aur Spaces important nahi hain. Ek object definition
        multiple lines par span ho sakti hai:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
      const user = {
        firstName: "Honey",
        lastName: "Singh",
        age: 40 ,
        eyeColor: "black"
      };`}{" "}
      </pre>
      <h3>Object Properties</h3>
      <p>
        JavaScript objects mein name: value pairs ko "properties" kaha jata hai:
      </p>
      <table>
        <tr>
          <th>Property</th>
          <th>Property Value</th>
        </tr>
        <tr>
          <td>firstName</td>
          <td>Honey</td>
        </tr>
        <tr>
          <td>lastName</td>
          <td>Singh</td>
        </tr>
        <tr>
          <td>age</td>
          <td>40</td>
        </tr>
        <tr>
          <td>Song</td>
          <td>Dope Shope</td>
        </tr>
      </table>
      <h3>Accessing Object Properties</h3>
      <p>hum do tareeko se object ki properties ko access kar sakte hain:</p>
      <p className="bgExample">{`objectName.propertyName
`}</p>
      <b>Or</b>
      <p className="bgExample">{`objectName["propertyName"]
`}</p>
      <h3>Ex. (a)</h3>
      <pre className="bgExample">{`user.firstName;`}</pre>
      <p>
        <b>Output:</b>
      </p>
      <p className="clrBlack">Honey</p>
      <h3>Ex. (b)</h3>
      <pre className="bgExample">{`user["firstName"];`}</pre>
      <p>
        <b>Output:</b>
      </p>
      <p className="clrBlack">Honey</p>
      <p>
        JavaScript objects "properties" ke liye name:value ko contain karne ke
        containers hote hain.
      </p>
      <h3>javascript Object Methods in hindi</h3>
      <p>Objects mein bhi "methods" hote hain.</p>
      <p>
        Methods "actions" hote hain jo objects par perform kiye ja sakte hain.
      </p>
      <p>
        Methods ko properties me function definitions ke roop me store kiya jata
        hai.
      </p>
      <table>
        <tr>
          <th>Property</th>
          <th>Property Value</th>
        </tr>
        <tr>
          <td>firstName</td>
          <td>Honey</td>
        </tr>
        <tr>
          <td>lastName</td>
          <td>Singh</td>
        </tr>
        <tr>
          <td>age</td>
          <td>40</td>
        </tr>
        <tr>
          <td>Song</td>
          <td>Dope Shope</td>
        </tr>
        <tr>
          <td>fullName</td>
          <td>{`function() {
    return this.firstName + " " + this.lastName;
  }`}</td>
        </tr>
      </table>
      <p>
        Methods ko properties me as function definitions store kiya jata hai.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
       const user = {
        firstName: "honey",
        lastName : "Singh",
        id       : "Vol.1",
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      }; `}
      </pre>
      <p>
        Upar ke example me, "this" <b>user</b> object ko refer karr raha hai.
      </p>
      <p>
        "this.firstName" <b>user</b> ke "firstName" property ko refer karta hai.
      </p>
      <p>
        "this.lastName" <b>user</b> ke "lastName" property ko refer karta hai.
      </p>
      <h3>
        What is <span className="clrRed">this</span> keyword?
      </h3>
      Yeh 'this' keyword typically object-oriented programming mein use hota
      hai, jahan ek object ke through function ko invoke kiya jaata hai. 'this'
      us object ko refer karta hai jis ke through function ko invoke kiya gaya
      hai.
      <p>JavaScript mein, 'this' keyword ek object ko refer karta hai.</p>
      <p>
        'this' keyword alag-alag objects ko refer karta hai, aur ye depend karta
        hai iss baat par ke hum ise kaise use karte hain:
      </p>
      <p>
        <b>Function Invocation</b>: Jab ek function direct call kiya jata hai,
        tab 'this' global object ko ya undefined ko refer karta hai, depending
        on whether the function is in strict mode or not.
      </p>
      <p>
        <b>Method Invocation</b>: Jab ek function object ke through as a method
        call kiya jata hai, tab 'this' us object ko refer karta hai jis par woh
        method call kiya gaya hai.
      </p>
      <p>
        <b>Constructor Invocation</b>: Jab ek function constructor ke roop mein
        call kiya jata hai (new keyword ke sath), tab 'this' ek naya empty
        object ko refer karta hai jo abhi ban raha hai
      </p>
      <p>
        <b>Explicit Binding</b>: Agar hum call(), apply(), ya bind() ka use
        karte hain, tab 'this' un arguments ko refer karta hai jo in functions
        ke through pass kiye gaye hain
      </p>
      <p>
        <b>Arrow Functions</b>: Arrow functions mein 'this' function ke bahar ke
        context ko capture karta hai, isliye 'this' us lexical scope ko refer
        karta hai jismein woh define hua hai.
      </p>
      <p>
        <b>NOTE:</b> 'this' ek variable nahi hai, ye ek keyword hai. hum 'this'
        ki value ko change nahi kar sakte.
      </p>
      <h3>The this Keyword</h3>
      <p>
        function definition mein, this function "owner" ko refer karta hai.
      </p>
      <p>Upar ke example mein, 'this' user object hai jo 'fullName' function own karta hai.</p>
      <p>Doosre shabdon mein, 'this.firstName' 'this' object ki 'firstName' property ko refer karta hai.</p>
      <h3>How to access Object Methods</h3>
      <p>Object ke methods ko access karne ke liye, hum dot notation ka istemal karte hain. Yah kisi object ke naam ke saath use kiya jata hai, jisse followed by a dot aur method ka naam aata hai. Jaise:</p>
      <p className="bgExample">{`objectName.methodName()`}</p>
      <p>ye method call karne ke liye hota hai, jahan <b>objectName</b> object ko specify karta hai aur <b>methodName</b> us method ka naam hai jo hum call kar rahe hain.</p>
      <h3>Ex.</h3>
      <p className="bgExample">{`name = user.fullName();`}</p>
      <p>Agar aap <span className="clrRed">()</span> ke bina ek method ko access karte hain, to yah us function ka definition return karega:</p>
      <pre className="bgExample">{`name = user.fullName;`}</pre>
      <p><b>Output</b></p>
       <pre className="bgExample">
        {`function() { return this.firstName + " " + this.lastName; }`}
       </pre>
       <hr />
    </div>
  );
}
