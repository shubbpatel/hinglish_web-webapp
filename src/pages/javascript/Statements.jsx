import React from 'react'

export default function Statements() {
  return (
    <div>
        <h2>
JavaScript Statements

</h2>
<h3>
    Example
</h3>
<pre className='bgExample'>
  {`
  let x, y, z;    // Statement 1
  x = 5;          // Statement 2
  y = 6;          // Statement 3
  z = x + y;      // Statement 4
  `}  
</pre>
<h2>JavaScript Programs
</h2>
<p>Ek computer program ek list hoti hai jisme computer dwara 'execute' hone wale 'instructions' hote hain.
</p>
<p>Programming language mein, ye programming instructions ko 'statements' kehte hain.
</p>
<p>Ek JavaScript program ek list hoti hai programming statements ki.
</p>
<p>"HTML mein, JavaScript programs ko web browser execute karta hai."
</p>
<h2>JavaScript Statements
</h2>
<p>JavaScript statements :
</p>
<p>values, operators, expressions, keywords, aur comments se bane hote hain.
</p>
<p>Yeh statement browser ko kehta hai ki 'Hello Dolly.' ko id="demo" wale HTML element ke andar likhe."
</p>
<h3>
    Example
</h3>
<p className='bgExample'>document.getElementById("demo").innerHTML = "Hello Dolly.";
</p>
<p>most JavaScript programs mein multiple JavaScript statements hote hain.
</p>
<p>Statements ek ke baad ek, usi order mein execute hote hain jis order mein likhe gaye hain.
</p>
<p>JavaScript programs (aur JavaScript statements) ko hi often JavaScript code bhi kehte.
</p>

<h2>Semicolons ;
</h2>
<p>Semicolons JavaScript statements ko separate karte hain.
</p>
<p>Har executable statement ke end mein ek semicolon add karein:
</p>
<h3>Example</h3>
<pre className='bgExample'>
    {`
   let a, b, c;  // Declare 3 variables
   a = 5;        // Assign the value 5 to a
   b = 6;        // Assign the value 6 to b
   c = a + b;    // Assign the sum of a and b to c
    `}
</pre>
<p>When separated by semicolons, multiple statements on one line are allowed:

</p>
<h3>Example</h3>
<p className='bgExample'>{`a = 5; b = 6; c = a + b;
`}</p>
<p>Web par aap semicolons ke bina examples dekhe sakte hain. Statements ko semicolon se end karna zaroori nahi hai, lekin highly recommended hai.
</p>
<h2>JavaScript White Space
</h2>
<p>JavaScript multiple spaces ko ignore karta hai. Aap apne script mein white space add kar sakte hain taaki wo padhne mein aasan ho.
</p>
<p>Niche di gayi lines equivalent hai:
</p>
<pre className='bgExample'>
    {`let person = "Hege";
let person="Hege";
`}
</pre>
<p>Achhi practice hai ki aap operators ke aas-pass spaces daalein.  ( = + - * / ):
</p>
<p className='bgExample'>{`let x = y + z;
`}</p>
<h2>JavaScript Line Length and Line Breaks
</h2>
<p>Best readability ke liye, programmers often code lines ko 80 characters se lambi nahi banane ki koshish karte hain.
</p>
<p>Agar ek JavaScript statement ek line mein fit nahi hoti, toh use break karne ka sabse acchi place kisi operator ke baad hai:
</p>
<h3>Example</h3>
<pre className='bgExample'>
  {`
  document.getElementById("demo").innerHTML =
  "Hello Dolly!";
  `}  
</pre>
<h2>JavaScript Code Blocks
</h2>
<p>JavaScript statements ko code blocks mein group kiya ja sakta hai, jise curly brackets ke andar <span className='clrRed'>{`{...}`}</span> represent karte hain.
</p>
<p>Code blocks ka purpose hai ki statements ko ek saath execute hone ke liye define kiya jaye.
</p>
<p>Ek jagah jahaan aap statements ko blocks mein group kiye hue dekhenge, vo hai JavaScript functions mein:
</p>
<h3>Example</h3>
<pre className='bgExample'>
    {`
    function myFunction() {
        document.getElementById("demo1").innerHTML = "Hello Dolly!";
        document.getElementById("demo2").innerHTML = "How are you?";
      }
      `}
</pre>
<p>Is tutorial mein hum code blocks ke liye 2 spaces ka indentation istemal karte hain. Aap functions ke baare mein aage is tutorial mein aur bhi sikhenge.
</p>
<h2>JavaScript Keywords
</h2>
<p>JavaScript statements often ek keyword ke saath shuru hote hain jisse JavaScript action ko identify kiya ja sake.
</p>
<p>Hamaare Reserved Words Reference mein saare JavaScript keywords ki list di gayi hai.
</p>
<p>Yahaan kuch keywords ki ek list hai jinhe aap is tutorial mein sikhenge:
</p>
<pre className='bgExample'>
    {`
   Keyword	    Description
   var	        Declares a variable
   let	        Declares a block variable
   const	    Declares a block constant
   if	        Marks a block of statements to be executed on a condition
   switch	    Marks a block of statements to be executed in different cases
   for	        Marks a block of statements to be executed in a loop
   function	    Declares a function
   return	    Exits a function
   try	        Implements error handling to a block of statements
   
    
    `}
</pre>
<p>JavaScript keywords reserved words hote hain. Reserved words ko variables ke names ke roop mein use nahi kiya ja sakta.
</p>
    </div>
  )
}
