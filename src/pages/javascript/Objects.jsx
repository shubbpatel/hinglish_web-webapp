import React from "react";

export default function Objects() {
  return (
    <div>
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
          <td>lasttName</td>
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
<p><b>Output:</b></p>
<p className="clrBlack">Honey</p>
<h3>Ex. (b)</h3>
<pre className="bgExample">{`user["firstName"];`}</pre>
<p><b>Output:</b></p>
<p className="clrBlack">Honey</p>
    </div>
  );
}
