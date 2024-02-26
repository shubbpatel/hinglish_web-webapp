import React from "react";

export default function Let() {
  return (
    <div className="bContainer container">
      <h2>JavaScript Let</h2>
      <p>
        <span className="clrRed">"let"</span> keyword ko ES6 (2015) mein
        introduce kiya gaya tha.
      </p>
      <p>
        <span className="clrRed">let</span> keyword ke sath declare kiye gaye
        variables ka Block Scope hota hai. Yani ki, (jahaan aapne let use kiya
        hai, uss block ke bahar vo variable access nahi hoga.)
      </p>
      <p>
        <span className="clrRed">let</span> ke sath declare kiye gaye variables
        ko use karne se pahle unhe Declare karna zaroori hai. Agar aap unhe
        pahle declare nahi karte, toh error aayega.
      </p>
      <p>
        Ek block mein <span className="clrRed">let</span> ke sath declare kiye
        gaye variables ko usi block mein Redeclared nahi kiya ja sakta hai.
      </p>
      <h2>Block Scope</h2>
      <p>ES6 (2015) ke pahle, JavaScript mein Block Scope nahi tha.</p>
      <p>
        JavaScript mein, variables ko do main scopes mein divide kiya gaya tha -
        Global Scope aur Function Scope.
      </p>
      <p>
        ES6 (ECMAScript 2015) ne JavaScript mein do naye keywords introduce
        kiye: <span className="clrRed">let</span> aur{" "}
        <span className="clrRed">const</span>.
      </p>
      <p>In keywords ne JavaScript mein Block Scope ko introduce kiya hai.</p>
      <h3>Example</h3>
      <p>
        Variables jo {} block ke andar declare hote hain, unhe bahar se access
        nahi kiya ja sakta:
      </p>
      <pre className="bgExample">
        {`
    {
        let x = 2;
      }
      // x can NOT be used here
      `}
      </pre>
      <h2>Global Scope</h2>
      <p>
        Jo variables <span className="clrRed">var</span> ke saath declare hote
        hain, unka hamesha Global Scope hota hai.
      </p>
      <p>
        Jo variables <span className="clrRed">var</span> keyword ke saath
        declare hote hain, unka Block Scope nahi ho sakta hai.
      </p>
      <h3>Example</h3>
      <p>
        Jo variables {} block ke andar var keyword ke saath declare hote hain,
        unko block ke bahar se access kiya ja sakta hai.
      </p>
      <pre className="bgExample">
        {`
    {
        var x = 2;
      }
      // x CAN be used here
      `}
      </pre>
      <h2>Cannot be Redeclared</h2>
      <p>
        <span className="clrRed">"let"</span> ke sath define kiye gaye variables
        ko dobara declare nahi kiya ja sakta.
      </p>
      <p>
        Aap kisi bhi tarah se bhool se let ke sath declare kiye gaye ek variable
        ko dobara declare nahi kar sakte hain.
      </p>
      <p>"let" ke sath aap yeh nahi kar sakte:</p>
      <p>let x = "Elon Mast";</p>
      <p>let x = 0;</p>
      <p>
        <span className="clrRed">Var</span> ke sath define kiye gaye variables
        ko dobara declare kiya ja sakta hai.
      </p>
      <p>
        <span className="clrRed">Var</span> ke sath aap ye kar sakte hain:
      </p>
      <p>var x = "Elon Mast";</p>
      <h2>Redeclaring Variables</h2>
      <p>
        <span className="clrRed">Var</span> keyword ka istemal karke ek variable
        ko dobara declare karna mushkil sakta hai.
      </p>
      <p>
        Ek block ke andar ek variable ko dobara declare karne se yeh variable
        block ke bahar bhi dobara declare ho jayega:
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
        Example
        var x = 10;
        // Here x is 10
        
        {
        var x = 2;
        // Here x is 2
        }
        
        // Here x is 2
        
        `}
      </pre>
      <p>
        <span className="clrRed"> Let</span> keyword ka istemal karke ek
        variable ko dobara declare karna is problem ko solve kar sakta hai
      </p>
      <p>
        Block ke andar ek variable ko dobara declare karne se bahar wale block
        mein variable ko dobara declare nahi kiya jayega..
      </p>
      <pre className="bgExample">
        {`
    let x = 10;
    // Here x is 10
    
    {
    let x = 2;
    // Here x is 2
    }
    
    // Here x is 10
    `}
      </pre>
<h2>What is Good?
</h2>      
<p><span className="clrRed">let</span> aur  ka block scope hota hai.
</p>
<p><span className="clrRed">let</span> aur <span className="clrRed">const</span> dobara declare nahi kiya ja sakte.
</p>
<p><span className="clrRed">let</span> aur <span className="clrRed">const</span> ko istemaal se pehle declare karna zaroori hai.
</p>
<p><span className="clrRed">let</span> aur <span className="clrRed">const</span> "this" se bind nahi hote.
</p>
<p><span className="clrRed">let</span> aur <span className="clrRed">const</span> ko hoisted nahi kiya jata.
</p>
<h2>
What is Not Good?

</h2>
<p>`<span className="clrRed">var</span>` ko declare nahi karna padta.
</p>
<p>`<span className="clrRed">var</span>` hoisted hota hai.
</p>
<p><span className="clrRed">var</span> this se bind hota hai.
</p>
<h2>Browser Support
</h2>
<p>Internet Explorer 11 ya usse pehle versions mein let aur const keywords ka support nahi hai.
</p>

<h2>Redeclaring
</h2>
<p>JavaScript mein var ke sath ek variable ko dobara declare karna kahi bhi program mein allowed hai:
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    var x = 2;
    // Now x is 2
    
    var x = 3;
    // Now x is 3
    `}
</pre>
<p><span className="clrRed">let</span> ke sath, ek block mein ek variable ko dobara declare karna ALLOWED nahi hai:
</p>
<h3>Example</h3>
<pre className="bgExample">
   {`
   var x = 2;   // Allowed
   let x = 3;   // Not allowed
   
   {
   let x = 2;   // Allowed
   let x = 3;   // Not allowed
   }
   
   {
   let x = 2;   // Allowed
   var x = 3;   // Not allowed
   }
   `} 
</pre>
<p><span className="clrRed">let</span> ke sath, doosre block mein ek variable ko dobara declare karna ALLOWED hai:
</p>
<h3>Example</h3>
<pre className="bgExample">
   {`
   let x = 2;   // Allowed

   {
   let x = 3;   // Allowed
   }
   
   {
   let x = 4;    // Allowed
   }
   `} 
</pre>
<h2>Let Hoisting
</h2>
<p><span className="clrRed">var</span> ke sath define kiye gaye variables top par hoisted hote hain aur inhe kabhi bhi initialize kiya ja sakta hai.
</p>
<p>Meaning: Aap variable ka istemal usse declare kiye jaane se pehle bhi kar sakte hain.
</p>
<h3>Example</h3>
<pre className="bgExample">
    {
   `movieName = "Animal";
   var movieName;
   `     
    }
</pre>
<p><span className="clrRed">let</span> ke saath define kiye gaye variables bhi block ke shuruwat mein hoisted hote hain, lekin unka initialization nahi hota.
</p>
<p><span className="clrRed">let</span> ke istemal se pehle variable ka istemal karna ReferenceError declare hoga.
</p>
<h3>Example</h3>

<pre className="bgExample">
{`
movieName = "Animal";
let movieName = "12th Fail";
`}
</pre>
<hr />
    </div>
  );
}
