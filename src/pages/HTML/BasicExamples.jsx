import React from "react";

export default function BasicExamples() {
  return (
    <div>
      <h2>HTML Usecase</h2>
      <p>Is chapter mein hum kuch basic HTML Example dekhenge.</p>
      <p>
        is tutorial mein aage aap naye HTML tags ke baare mein learn karenge.
      </p>
      <h2>Documents in HTML</h2>
      <p>
        All HTML documents shuru hone chahiye ek document type declaration ke
        saath: {`<!DOCTYPE html>`}.
      </p>
      <p>
        HTML document {`<html>`} se shuru hota hai aur {`</html>`} se end hota
        hai. <br />
        HTML document ka show hone wala part {`<body> `}aur {`</body>`} ke andar
        hota hai.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        <!DOCTYPE html>
        <html>
        <body>
        
        
        <h1>Mai Hoon Heading</h1>
        <p>Mai hoon ek paragraph.</p>
        
        
        </body>
        </html>
        `}
      </pre>
      <h2>
      Declaration of {`<!DOCTYPE>`} 

      </h2>
      <p>{`<!DOCTYPE>`} declaration document type ko represent karta hai, aur browser ko web pages ko sahi se show mein help karta hai. <br />
      Yah sirf ek baar hi use hona chahiye, page ke start mein (kisi bhi HTML tag se pahle).
<br /> 
{`<!DOCTYPE>`} declaration case sensitive nahi hota hai."
<br />
The {`<!DOCTYPE>`} declaration for HTML5 is this : <span className="clrRed">{`<!DOCTYPE html>`}</span>

</p>
    </div>
  );
}
