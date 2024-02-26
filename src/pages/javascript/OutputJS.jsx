import React from "react";

export default function OutputJS() {
  return (
    <div className="bContainer container">
      <h2>JavaScript Output in Hindi</h2>
      <h3>JavaScript Display Possibilities</h3>
      <p>JavaScript data ko alag-alag tareeko se 'display' kar sakta hai:</p>
      <p>HTML element mein likhne ke liye, innerHTML ka istemal karke.</p>
      <p>HTML output mein likhne ke liye, document.write() ka istemal karke.</p>
      <p>Alert box mein likhne ke liye, window.alert() ka istemal karke.</p>
      <p>
        Browser console mein likhne ke liye, console.log() ka istemal karke.
      </p>

      <h2>Using innerHTML</h2>
      <p>
        Ek HTML element tak pahunchne ke liye, JavaScript
        document.getElementById(id) method ka istemal kar sakta hai.
      </p>
      <p>
        "Id attribute HTML element ko define karta hai. InnerHTML property HTML
        content ko define karta hai:"
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
    <!DOCTYPE html>
    <html>
    <body>
    
    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>
    
    <p id="demo"></p>
    
    <script>
    document.getElementById("demo").innerHTML = 5 + 6;
    </script>
    
    </body>
    </html>
    `}
      </pre>
      <p className="bgYellow">
        "HTML element ki innerHTML property ko badalna HTML mein data dikhane ka
        ek common tareeka hai."
      </p>
      <h2>Using document.write()</h2>
      <p>Testing ke liye, document.write() ka istemal karna achcha hai:</p>
      <pre className="bgExample">
        {`
    <!DOCTYPE html>
    <html>
    <body>
    
    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>
    
    <script>
    document.write(5 + 6);
    </script>
    
    </body>
    </html>
    `}
      </pre>
      <p>
        HTML document load hone ke baad document.write() ka istemal karne par,
        ye all existing HTML ko delete kar dega:
      </p>
      <h3>Example </h3>
      <pre className="bgExample">
        {`
   <!DOCTYPE html>
   <html>
   <body>
   
   <h1>My First Web Page</h1>
   <p>My first paragraph.</p>
   
   <button type="button" onclick="document.write(5 + 6)">Try it</button>
   
   </body>
   </html> 
    `}
      </pre>
      <h3>Using window.alert()</h3>
      <p>Aap ek alert box istemal data dikhane ke liye use kar sakte hain:</p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
  
  <!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>

`}
      </pre>
      <p>Aap window keyword ko chhod sakte hain.</p>
      <p>
        JavaScript mein, window object global scope object hai. Iska matlab hai
        ki variables, properties, aur methods by default window object se belong
        karte hain. Iska yeh bhi matlab hai ki window keyword specify karna
        optional hai:
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
  <!DOCTYPE html>
  <html>
  <body>
  
  <h1>My First Web Page</h1>
  <p>My first paragraph.</p>
  
  <script>
  alert(5 + 6);
  </script>
  
  </body>
  </html>
  `}
      </pre>
      <h2>Using console.log()</h2>
      <p>
        Debugging karne ke liye, aap browser mein console.log() method ko call
        karke data ko display kar sakte hain.
      </p>
      <p>Aap debugging ke baare mein aage ke chapter mein aur bhi sikhenge.</p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
    <!DOCTYPE html>
    <html>
    <body>
    
    <script>
    console.log(5 + 6);
    </script>
    
    </body>
    </html>
    `}
      </pre>
      <h2>JavaScript Print</h2>
      <p>JavaScript mein koi print object ya print methods nahi hote.</p>
      <p>Aap JavaScript se output devices access nahi kar sakte hain</p>
      <p>
        Ek exception yeh hai ki aap browser mein window.print() method ko call
        karke current window ke content ko print kar sakte hain..
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`<!DOCTYPE html>
   <html>
   <body>
   
   <button onclick="window.print()">Print this page</button>
   
   </body>
   </html>
   `}
      </pre>
    </div>
  );
}
