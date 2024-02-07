import React from "react";

export default function Events() {
  return (
    <div>
      <h2>JavaScript Events in hindi</h2>
      <p>
        JavaScript events ko samajhne ke liye, yeh jaanna zaroori hai ki jab
        kisi webpage par user interact karta hai, jaise ki click karta hai, koi
        keyboard key dabaata hai, ya mouse ka movement karta hai, tab events
        generate hote hain. Events JavaScript mein kaafi important hote hain
        kyunki yeh webpage ke behaviour ko control karte hain.
      </p>
      <p>
        <b>Important JavaScript Events:</b>
      </p>
      <p>
        Jab JavaScript HTML pages mein istemal hota hai, tab JavaScript HTML
        events par response kar sakta hai
      </p>
      <h3>HTML Events</h3>
      <p>
        Ek HTML event kuch bhi ho sakta hai, jaise ki browser ke dwara kiya gaya
        koi action ya fir user ke dwara kiya gaya koi action. Ye events webpage
        ke state changes, user interactions, ya browser actions ke wakt generate
        hote hain. Kuch common HTML events hain:
      </p>
      <p>
        <b>onload</b>: Jab webpage puri tarah se load ho jati hai, tab ye event
        generate hota hai.
      </p>
      <p>
        <b>onclick</b>: Jab user kisi element ya button par click karta hai, tab
        ye event generate hota hai.
      </p>
      <p>
        <b>onmouseover</b>: Jab user mouse kisi element par le jata hai, tab ye
        event generate hota hai.
      </p>
      <p>
        <b>onkeydown</b>: Jab user koi keyboard key press karta hai, tab ye
        event generate hota hai.
      </p>
      <p>
        Neeche diye gaye example mein, ek {`<button>`} element mein ek onclick
        attribute add kiya gaya hai
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">{`<button onclick="document.getElementById('tryBall').innerHTML = Date()">Aaj date kya hai?</button>`}</pre>
      <p>Upar ke example mein, JavaScript code id="tryBall" wale element ka content badal deta hai.</p>
      <p>Agle example mein, yeh code apne element ka content badal deta hai (this.innerHTML ka istemal karke).</p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        <button onclick="this.innerHTML = Date()">Aaj date kya hai?</button>`}
      </pre>
      <p>JavaScript code often several lines long hota hai.  Event attributes functions ko call karte hue zyada dekha jata hai.</p>
<hr />
    </div>
  );
}
