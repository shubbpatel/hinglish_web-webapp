import React from 'react'

export default function Hooks() {
  return (
    <div className='bContainer container'>
        <h2 id="react-Hooks-hindi">React Hooks in Hindi</h2>
        <p>hooks react mein version 16.8 mein add hue the</p>
        <p>
          Hooks function components ko state aur dusre React features ka access
          dene mein help karte hain. Is wajah se, generally class components ki
          zarurat nahi hoti hai.
        </p>
        <p className="bgYellow">
          Jabki Hooks generally class components ko replace karte hain, React
          mein classes ko hataane ki koi yojna nahi hai.
        </p>
        <h2>What is hook ? (hook kya hai ?)</h2>
        <p>
          Hooks humein React features mein "hook" karne me help karte hain,
          jaise ki state aur lifecycle methods.
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
        import React, { useState } from "react";
        import ReactDOM from "react-dom/client";
        
        function FavoriteColor() {
          const [color, setColor] = useState("red");
        
          return (
            <>
              <h1>My favorite color is {color}!</h1>
              <button
                type="button"
                onClick={() => setColor("blue")}
              >Blue</button>
              <button
                type="button"
                onClick={() => setColor("red")}
              >Red</button>
              <button
                type="button"
                onClick={() => setColor("pink")}
              >Pink</button>
              <button
                type="button"
                onClick={() => setColor("green")}
              >Green</button>
            </>
          );
        }
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<FavoriteColor />);`}
          </pre>
        </p>
        <p>aapko React se hooks import karna must hai.</p>
        <p>
          Yahan hum useState Hook ka istemal kar rahe hain taki application
          state ka track rakh sakein.
        </p>
        <p>
          state generally un data ya property ko refer karti hai jo hamen track
          karna hai.
        </p>
        <h2>Hooks rules</h2>
        <p>
          Hooks ko sirf React function components ke andar hi call kiya ja sakta
          hai.
        </p>
        <p>
          Hooks ko sirf component ke top level par hi call kiya ja sakta hai.
        </p>
        <p>hooks conditional nahi ho sakte</p>
        <p className="bgYellow">
          {" "}
          Hooks React class components mein kaam nahi karenge
        </p>

    </div>
  )
}
