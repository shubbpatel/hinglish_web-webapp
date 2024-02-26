import React from "react";

export default function Comments() {
  return (
    <div className="bContainer container">
      <h2>Comments</h2>
      <p>
        JavaScript comments ka istemal JavaScript code ko explain karne aur usse
        more readable banane ke liye kiya ja sakta hai.
      </p>
      <p>
        JavaScript comments ka istemal alternative code ko test karte waqt
        execution rokne ke liye bhi kiya ja sakta hai.
      </p>
      <h2>Single Line Comments</h2>
      <p>
        Single line comments <span className="clrRed">//</span> se shuru hote
        hain.
      </p>
      <p>{`// aur line ke end ke beech ka koi bhi text JavaScript ke dwara ignore kiya jayega (execute nahi hoga).
`}</p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`// Change heading:
    document.getElementById("myH").innerHTML = "My First Page";
    
    // Change paragraph:
    document.getElementById("myP").innerHTML = "My first paragraph.";
    `}
      </pre>
      <p>
        Is example mein har line ke end mein ek single line comment ka istemal
        kiya gaya hai code ko explain karne ke liye:
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`let x = 5;      // Declare x, give it the value of 5
    let y = x + 2;  // Declare y, give it the value of x + 2
    `}
      </pre>
      <h2>Multi-line Comments</h2>
      <p>
        Multi-line comments /* se shuru hote hain aur */ ke saath khatam hote
        hain.
      </p>
      <p>
        {`/* aur */ ke beech ka koi bhi text JavaScript execute nahi karti ignore
        karti hai.`}
      </p>
      <p>
        Is example mein ek multi-line comment (comment block) ka istemal kiya
        gaya hai code ko explain karne ke liye:
      </p>
      <h3>Example</h3>
      <p className="bgExample">
        {`/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
`}
      </p>
      <pre className="bgExample">
        {`
 document.getElementById("myH").innerHTML = "My First Page";
 document.getElementById("myP").innerHTML = "My first paragraph.";
 `}
      </pre>
      <p>
        Single line comments ka istemal karna sabse common hai. Block comments
        ko aksar formal documentation ke liye istemal kiya jata hai.
      </p>
      <h2>
      Using Comments to Prevent Execution

      </h2>
      <p>Code testing ke liye code ki execution rokne ke liye comments ka istemal karna upyukt hai.
</p>
<p> <span className="clrRed">//</span> ko ek code line ke samne add karna code line ko ek executable line se comment mein badal deta hai.
</p>
<p>Is example mein // ka istemal kiya gaya hai ek code line ki execution rokne ke liye:
</p>
<h3>Example</h3>
<pre className="bgExample"> 
    {
  `//document.getElementById("myH").innerHTML = "My First Page";
  document.getElementById("myP").innerHTML = "My first paragraph.";
  `      
    }
</pre>
<p>Is example mein ek comment block ka istemal kiya gaya hai multiple lines ki execution rokne ke liye:
</p>
<h3>Example</h3>
<p className="bgExample">
    {`
    /*
    document.getElementById("myH").innerHTML = "My First Page";
    document.getElementById("myP").innerHTML = "My first paragraph.";
    */
    `}
</p>
<hr />
    </div>
    
  );
}
