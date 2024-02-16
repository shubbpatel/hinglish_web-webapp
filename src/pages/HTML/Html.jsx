import React from "react";
import BasicExamples from "./BasicExamples";
import Elements from "./Elements";
import Attributes from "./Attributes";

export default function Html() {
  return (
    <div className="bContainer container htmlPage">
      <h1>HTML in hindi</h1>
      <h2>What is HTML? </h2>
      <p>
        HTML ka full form hai Hyper Text Markup Language
        <br />
        HTML web pages create karne ke liye main markup language hai.
        <br />
        HTML ek web page ke structure ko describe karta hai.
        <br />
        its like ke agar human body ek website hai to HTML uska skeleton hai.
        <br />
        HTML ke elements browser ko batate hain ki content ko kaise dikhana hai
        <br />
        HTML ke elements content ke pieces ko label karte hain jaise ki "ye ek
        heading hai", "ye ek paragraph hai", "ye ek link hai", etc.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`<!DOCTYPE html>
          <html>
          <head>
          <title>Page Title</title>
          </head>
          <body>
          
          <h1>Ye Heading Hai</h1>
          <p>Aur ye paragraph hai.</p>
          
          </body>
          </html>`}
      </pre>
      <p>
        <b>Detailed Explaination of Example</b>
        <br />
        {`<!DOCTYPE html>`} Doctype declare karta hai ki yeh document ek HTML5
        document hai. <br />
        {`<html>`} element ek HTML page ka root element hai. <br />
        {`<head>`} element HTML page ki meta information contain karta hai.{" "}
        <br />
        {`<title>`} element HTML page ke liye ek title specifie karta hai (jo
        browser ke title bar mein ya page ke tab mein show hota hai) <br />
        {`<body>`} element document ki body define karta hai, aur all visible
        content, like title, paragraph, image, hyperlinks, table, list, etc. ke
        liye ek container hai. <br />
        {`<h1>`} element sabse badi heading defines karta hai. <br />
        {`<p>`} element paragraph defines karta hai.
      </p>
      <h2>What is an HTML Element in hindi? (HTML kya hai )</h2>
      <p>
        Ek HTML element ko ek start tag, kuch content, aur ek end tag se define
        kiya jata hai jaise ki <br />
        <span className="clrRed">
          {" "}
          {`<h1>Mai Hoon Ek Heading, sabse Badi Heading.</h1>`}{" "}
        </span>{" "}
        <br />
        <span className="clrRed">
          {" "}
          {`<h2>Mai Hoon Ek h1 se chhoti Heading.</h2>`}{" "}
        </span>{" "}
        <br />
        <span className="clrRed"> {`<p>Mai Hoon Ek Paragraph.</p>`} </span>{" "}
        <br /> <br />
        <span className="clrRed"> {`Ye hai Starting tag : <p>`} </span> <br />
        <span className="clrRed"> {`Mai Hoon Content`} </span> <br />
        <span className="clrRed"> {`Ye hai ending tag : </p>`} </span> <br />
      </p>
      <p>
        Note: Kuch HTML elements mein koi content nahi hota hai (jaise ki{" "}
        {`<hr>`}elements). Ye elements empty elements kehlaate hain. empty
        elements ka koi end-tag nahi hota hai!
      </p>
      <h2>How Browsers use HTML</h2>
      <p>
        Web browsers (Chrome, Firefox, Safari) ka purpose HTML documents ko
        padhna aur unhe sahi tarike se show karna hota hai. <br />
        Browser HTML tags show nahi karta hai, lekin unka use karta hai document
        ko kaise show karna hai, ye show karne ke liye.
      </p>
      <h2>Construction of a HTML Page</h2>
      <div className="brder">
        {`<html>`}
        <div className="brder">
          {`<head>`}
          <div className="brder">
            {`<title>`} Main Hoon Title {`</title>`}
          </div>
          {`</head>`}
        </div>
        <div className="brder" style={{ marginTop: "2rem" }}>
          {`<body>`}
          <div className="brder">
            {`<h1>`}Mai Hoon Ek Heading.{`</h1>`} <br />
            {`<p>`}Mai Hoon Ek Paragraph.{`</p>`} <br />
            {`<h2>`}Mai Hoon h1 se chhoti Heading.{`</h2>`} <br />
            {`<p>`}Mai bhi Hoon Ek Paragraph.{`</p>`}
          </div>
          {`</body>`}
        </div>
        {`</html>`}
      </div>
      <p>
        {`<body>`} section ke andar ka content browser mein show hota hai, aur{" "}
        {`<title> `} element ke andar ka content browser ke title bar mein ya
        page ke tab mein show hota hai.
      </p>
      <h2>HTML Editors in Hindi</h2>
      <p>HTML sikhne ke liye ek simple text editor ki jarurat hoti hai.</p>
      <p>
        Aap use kar sakte hain <b>Notepad,</b> <b>TextEdit</b> ya fir{" "}
        <b>VS Code</b>{" "}
      </p>
      <p>
        To better understand ke kaise suru karna hai see this youtube video on how to download <b>VS Code </b> 
        below:
      </p>
      <div className="mAuto">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/aqQfPgmW05o?si=0L1F7qZ_62SN3n9o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="bgYellow">NOTE: Ye video dekhke youtube pe nahi jana hai distraction se door padhai ho paye iske liye ye video add kiya gaya hai.</p>
      <hr />
      <div>
        <BasicExamples/>
      </div>
      <div>
        <Elements/>
      </div>
      <div>
        <Attributes/>
      </div>
    </div>
  );
}
