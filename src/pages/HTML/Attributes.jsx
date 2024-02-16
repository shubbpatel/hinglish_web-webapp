import React, { useState } from "react";

export default function Attributes() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <h2>Attributes in HTML</h2>
      <p>Sab HTML elements ke mein attributes ho sakte hain.</p>
      <p>Attributes additional information provide karte hain about elements</p>
      <p>Attributes hamesha start tag mein specified hote hain </p>
      <p>Attributes usually come in name/value pairs like: name="value"</p>
      <h3>href Attribute</h3>
      <p>
        {`<a>`} tag ek hyperlink ko define karta hai. href attribute linked page
        ka URL specifie karta hai:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`<a href="https://hinglishweb.physitask.com">Hinglish Web</a>`}
      </pre>
      <p>Click on the yellow link inside output box :</p>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        <a
          href="https://hinglishweb.physitask.com"
          target="blank"
          style={{ color: "yellow" }}
        >
          Visit Hinglish Web
        </a>
      </p>
      <h2>src Attribute</h2>
      <p>
        {`<img>`} tag ka use ek image ko HTML page mein embed karne ke liye hota
        hai. src attribute image ko show karne ke liye path define karta hai:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
 <img src="https://www.dropbox.com/scl/fi/m3p0yhwrrnsnqshncacxs/Your-paragraph-text-2.png?rlkey=1z6muym5k31fkquwgyds95ypp&dl=1" alt="" />
`}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="">
        <button
          onClick={() => {
            setShowImage(!showImage);
          }}
        >
          {showImage ? "Hide Output" : "Show Output"}
        </button>
      </p>
      {showImage && (
        <img
          src="https://www.dropbox.com/scl/fi/m3p0yhwrrnsnqshncacxs/Your-paragraph-text-2.png?rlkey=1z6muym5k31fkquwgyds95ypp&dl=1"
          alt="logo_image"
        />
      )}
      <p>
        1. Absolute URL - Ye ek external image ko define karta hai jo doosre
        website par host kiya gaya hai. example:
      </p>
      <pre className="bgExample">
        {`
        src="https://www.google.com/images/img_girl.jpg".
                `}
      </pre>
      <p>
        Note: Bahari image copyright ke under ho sakti hai. Agar aapke use ke
        liye permission nahi milti, to ye copyright laws ka violation ho sakta
        hai. Iske alawa, aap bahari images ko control nahi kar sakte; yah
        achanak hata diya ja sakta hai ya badal diya ja sakta hai.
      </p>
      <h2>The width and height Attributes</h2>
      <p>
        The {`<img> `}tag should also contain the width and height attributes,
        jo image ka width aur hights pixels mein define karte hain:
      </p>
      <h3>Ex.</h3>
      <p className="bgExample">{`
<img src="img_girl.jpg" width="500" height="600">
`}</p>
      <h2>The alt Attribute</h2>
      <p>
        Agar kisi wajah se image show nahi sakta, toh {`<img>`} tag ke liye
        zaroori <span className="clrRed"> alt</span> attribute ek image ke liye
        ek optional path ka specifie karta hai. Iska reason ho sakta hai slow
        internet connection, ya <span className="clrRed">src</span> attribute
        mein koi galti, ya agar user ek screen reader ka use karta hai.
      </p>
      <pre className="bgExample">
        {`
        <img src="myLogo.jpg" alt="logo_image">
        `}
      </pre>
      <img 
        src="https://www.dropbox.com/scl/fi/m3p0yhwrrnsnqshncacxs/Your-paragraph-text-2.png?rlkey=1z6muym5k31fkquwgyds95ypp&dl=1" className="widHund"
        alt="logo_image"
      />
      <p>
        Dekhiye kya hota hai agar hum koshish karte hain ek aisi image ko
        display karne ka jo exist nahi karti ya fir URL mein koi mistake ho:
      </p>
      <img
        src="https://www.dropbox.com/scl/fi/m3p0yhwrrnsnqacxs/Your-paragraph-text-2.png?rlkey=1z6muym5k31fkquwgyds95ypp&dl=1"
        alt="logo_image"
      />
      <h2>Title Attribute</h2>
      <p>
        Title attribute thodi extra information deta hai about an element.{" "}
        <br />
        Title attribute ki value ko as tooltip show hota hai jab aap element par
        mouse le jaate hain:
      </p>
      <pre className="bgExample">{`
      <p title="Mai Hoon Tooltip">Mai Hoon Ek Paragraph.</p>
      `}</pre>
      <p title="Mai Hoon Tooltip">
        {" "}
        <b>
          Mouse hover (hold) kariye mere upar, title attribute ko as{" "}
          <span className="clrRed">tooltip</span> dekhne ke liye.
        </b>
      </p>
      <h2>Style Attribute in HTML</h2>
      <p>
        The style attribute use hota hai to add styles to an element, such as
        color, font, size, and more.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        <p style="color:yellow;">Mai hoon ek yellow paragraph.</p>
`}
      </pre>
      <p>
        <b>Output:</b>
      </p>
      <p style={{ color: "yellow" }} className="clrBlack">
        Mai hoon ek yellow paragraph.
      </p>
      <h2>Lang Attribute</h2>
      <p>
        Aapko hamesha {`<html>`} tag ke andar lang attribute shamil karna
        chahiye, Web page ka language declare karne ke liye. Yeh search engines
        aur browsers ki help ke liye hai.
      </p>
      <p>The following example specifies English as the language:</p>
      <pre className="bgExample">
        {`
<!DOCTYPE html>
<html lang="en">
<body>
hey...
</body>
</html>`}
      </pre>
      <p>
        country codes ko bhi <span className="clrRed">lang</span> attribute mein
        language code mein add kiya ja sakta hai. Is tarah, pehle two characters
        mein HTML page ki language ko define kiya jata hai, aur last two
        characters mein country ko define kiya jata hai.
      </p>
      <p>
        Following example English as the language and United States as the
        country specifie karta hai:
      </p>
      <pre className="bgExample">
        {`
    <!DOCTYPE html>
    <html lang="en-US">
    <body>
    hey...
    </body>
    </html>`}
      </pre>
      <p className="bgYellow">
        <b>NOTE: Always Use Lowercase Attributes</b>
      </p>
    </div>
  );
}
