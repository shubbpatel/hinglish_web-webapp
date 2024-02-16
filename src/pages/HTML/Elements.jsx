import React from "react";

export default function Elements() {
  return (
    <div>
      <h2>HTML Elements in Hindi</h2>
      <p>
        HTML element start tag se lekar end tag tak sab kuch hai like : <br />
        {`<p>content can be anything</p>`}
      </p>
      <h2>Nested HTML Elements</h2>
      <p>
        HTML elements dusre elements ko contain kar sakte hain. <br />
        Sabhi HTML document nested HTML elements se milkar bane hote hain.
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
      <h3>Explaination of above example</h3>
      <p>
        {`<html>`} elements root elements hai aur yah poora HTML documents ko
        define karta hai.
      </p>
      <p>
        ye iska starting tag hai <html>, aur ek end tag </html> hai.
      </p>
      <p>
        {`<html>`} element ke inside ek {`<body>`} element hota hai:
      </p>
      <pre className="bgExample">
        {`
        <body>
        
        
        <h1>Mai Hoon Heading</h1>
        <p>Mai hoon ek paragraph.</p>
        <p>Mai hoon ek paragraph.</p>
        
        
        </body>`}
      </pre>
      <p>The {`<body>`} element define karta hai document ki body.</p>
      <p>
        ye iska starting tag hai <body>, and ye end tag </body> hai.
      </p>
      <p>
        Then, {`<body>`} element ke inside 3 aur elements hain : {`<h1>`},{" "}
        {`<p>`} and {`<p>`}:
      </p>
      <pre className="bgExample">
        {`
    <h1>Mai Hoon Heading</h1>
    <p>Mai hoon ek paragraph.</p>
    `}
      </pre>
      <p>The {`<h1>`} element heading define karta hai.</p>
      <p>
        iska starting tag hai <h1> and an end tag hai</h1>
      </p>
      <p>The {`<p>`} element paragraph defines karta hai.</p>
      <p>
        iska starting tag hai {`<p>`} and an end tag hai{`</p>`}
      </p>
      <h3>We Can Not Skip The End Tag</h3>
      <p>
        Kuch HTML elements dekhne mein sahi show honge, agar aap end-tag bhool
        jaate hain tab bhi However, is par kabhi bharosa na karein! Aagar aap
        end-tag bhool jaate hain, to unexpected results , error ho sakte hain!
      </p>
      <h3>Empty Elements in HTML</h3>
      <p>
        HTML elements jisme koi content nahi hota are called empty elements.
      </p>
      <p>
        jaise {`<br>`} tag line break define karta hai, isme closing tag nahi
        hota ye ek empty element hai:
      </p>
      <pre className="bgExample">
        {`
    <p>i am a <br> paragraph with line break.</p>
    `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        i am a <br />
        paragraph with a line break.
      </p>
      <h3>HTML is Not Case Sensitive
</h3>
<p>
HTML tags case sensitive nahi hote hain: {`<P>`} same hai as this p {`<p>`}.

</p>
    </div>
  );
}
