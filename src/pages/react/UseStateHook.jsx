import React, { useState } from 'react'

export default function useStateHook() {
    const [message, setMessage] = useState(false);
    const [color, setColor] = useState("blue");

    const handleClick = () => {
        setMessage(!message);
      };
  return (
    <div>
         <h2>
          React <span className="bgRed">useState</span> Hook
        </h2>
        <p>
          React <span className="clrRed">useState</span> Hook hume function
          component mein state track karne me help karta hai.
        </p>
        <p>
          "state" generally aise data ya properties ko refer karta hai jo kisi
          application mein track kiye jaane ki zarurat hai.
        </p>
        <div className="bgYellow">
          <h2>Real Life Example of useState Hook</h2>
          <p>
            State ek concept hai jo batata hai ki ek component ke andar kuch
            data hai jo change ho sakta hai. Agar hum ise simple shabdon mein
            samjhein, toh state component ke "mood" ya "situation" ko updated
            rakhne ka tareeka hai. <br />
            <br />
            Imagine karo ki ek React component ek insan ki tarah hai. Is insan
            ke mood ko hum state kehte hain. Kabhi khush, kabhi gussa, aur kabhi
            udas. useState ka istemal is mood ya state ko change karne ke liye
            hota hai. Jab aap apne component ke andar useState ka istemal karte
            hain, toh aap ek variable ko state banate hain. Jab aap us variable
            ki value badalte hain, toh React component re-render hota hai aur
            naya mood ya state dikhta hai. Udaharan ke taur par, ek button ke
            click se message badalna:
          </p>
          <pre className="bgExample">
            {`
        import React, { useState } from 'react';

        const StateExample = () => {
          // message variable ko state banaya gaya hai
          
          const [message, setMessage] = useState(false);
        
          // Jab button par click hota hai, message ka text badal jata hai

          const handleClick = () => {
            setMessage(!message);
          };
        
          return (
            <div>
            <h2 className="bgWhite">{message?"Hello ! React Learner" :"Aajao React Hooks Seekhte Hain.."}</h2>

            <button 
            style={{fontSize: '1rem',cursor: 'pointer', backgroundColor:'rgb(144, 234, 245)' }} 
            onClick={handleClick}> Click me! to Change Message</button>

          </div>
          );
        };
        
        export default StateExample;
        `}{" "}
          </pre>
          <p>
            <b>Output on your screen will be:</b>
          </p>

          <div className="bgWhite">
            <h2>
              {message ? "Hello ! React Learner " : "Aajao React Hooks Seekhte Hain.."}
            </h2>
            <button className="reactExampleBtn" onClick={handleClick}>
              Click me! to Change Message
            </button>
          </div>
          <p>
            Is example mein message variable state hai. Jab button par click
            hota hai, setMessage ke madhyam se message ki value badli jati hai
            aur component re-render hota hai, jisse naya message dikhega.
          </p>
        </div>
        <h2>import useState</h2>
        <p>
          To use the <span className="clrRed">useState</span> Hook, we first
          need to import it into our component.
        </p>
        <h3>Example:</h3>
        <p>Apne component mein top mein useState Hook ko import karein.</p>
        <p className="bgExample">{`import { useState } from "react";`}</p>
        <p>
          Dekho ki hum <span className="clrRed">useState</span> Hook ko{" "}
          <span className="clrRed">react</span> se import karte waqt
          destructuring kar rahe hain, kyun ki yeh ek named export hai.
        </p>
        <h2>initialize useState</h2>
        <p>
          function component mein <span className="clrRed">useState</span> ko
          call karke state initialize karte hain.
        </p>
        <p>
          useState ek initial state (shuruaati sthiti) ko accept karta hai aur
          do values return karta hai:
        </p>
        <p>1. Current state</p>
        <p>2. ek function jo state update karta hai</p>
        <h3>Example :</h3>
        <p>state Function component ke top mein initialize karen.</p>
        <p>
          <pre className="bgExample">
            {`
         import { useState } from "react";

         function FavoriteColor() {
           const [color, setColor] = useState("");
         }`}{" "}
          </pre>
        </p>
        <p>
          {" "}
          Notice karo, ham <span className="clrRed">useState</span> se returned
          values ki destructuring kar rahe hain.
        </p>
        <p>
          first value <span className="clrRed">color</span> current state hai.
        </p>
        <p>
          Second value <span className="clrRed">setColor</span>, function hai jo
          state ko update karne ke liye istemal kiya jata hai.
        </p>
        <p className="bgYellow">
          Yeh naam, `<span className="clrRed">color</span>` aur `
          <span className="clrRed">setColor</span>`, variables hain jinka aap jo
          bhi chahe naam rakh sakte hain.
        </p>
        <p>
          Lastly, hum ne initial state ko ek khali string par set kiya hai: `
          <span className="clrRed">useState("")</span>`.
        </p>
        <h2>Read State</h2>
        <p>
          Ab hum apne state ko apne component mein kahin bhi include kar sakte
          hain.
        </p>
        <h3>Example</h3>
        <p>Render kiye gaye component mein state variable ka istemal karen.</p>
          <pre className="bgExample">
            {`
       import { useState } from "react";
       import ReactDOM from "react-dom/client";
       
       function FavoriteColor() {
         const [color, setColor] = useState("Blue");
       
         return <h1>Mera favourite color hai {color}!</h1>
       }
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<FavoriteColor />);`}{" "}
          </pre>
          <p><b>Output on your screen will be:</b></p>
          <div className="bgWhite">
          <h1>Mera favourite color hai Blue!</h1>

          </div>
        <h2>Update State</h2>
        <p>
          Apne state ko update karne ke liye hum apne state updater function ka
          istemal karte hain.
        </p>
        <p className="bgYellow">
          Hume kabhi bhi state ko seedhe update nahi karna chahiye. Jaise ki,
          `color = "red"` yeh allow nahi hai.
        </p>
        <h3>Example</h3>
        <p>Use a button to update the state:</p>
          <pre className="bgExample">
            {`
     import { useState } from "react";
     import ReactDOM from "react-dom/client";
     
     function FavoriteColor() {
       const [color, setColor] = useState("Blue");
     
       return (
         <>
           <h1>Mera favourite color hai {color}!</h1>

           <button
             type="button"
             onClick={() => setColor("Grey")}
           >Blue</button>

           <button
             type="button"
             onClick={() => setColor("Green")}
           >Green</button>

           <button
             type="button"
             onClick={() => setColor("Yellow")}
           >Yellow</button>
         </>
       )
     }
     
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(<FavoriteColor />);`}
          </pre>
        <p><b>Output on your screen will be:</b></p>

        <div className="bgWhite">
        <h1>Mera favourite color hai {color}!</h1>
           <button
             type="button"
             onClick={() => setColor("Grey")}
           >Grey</button>
           <button
             type="button"
             onClick={() => setColor("Green")}
           >Green</button>
           <button
             type="button"
             onClick={() => setColor("Yellow")}
           >Yellow</button>
        </div>
        <h2>What Can State Hold</h2>
        <p>
          <span className="clrRed">useState</span> Hook ka istemal strings,
          numbers, booleans, arrays, objects, aur inmein se kisi bhi combination
          ko track karne ke liye kiya ja sakta hai!
        </p>
        <p>
          Hum multiple state Hooks create kar sakte hain jisse individual values
          ko track kiya ja sake.
        </p>
        <h3>Example:</h3>
        <p>Create karo multiple state Hooks:</p>
        <p className="bgExample">
          <pre>
            {`
        import { useState } from "react";
        import ReactDOM from "react-dom/client";
        
        function Car() {
          const [brand, setBrand] = useState("Ford");
          const [model, setModel] = useState("Mustang");
          const [year, setYear] = useState("1964");
          const [color, setColor] = useState("red");
        
          return (
            <>
              <h1>My {brand}</h1>
              <p>
                It is a {color} {model} from {year}.
              </p>
            </>
          )
        }
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Car />);`}
          </pre>
        </p>
        <p>
          Ya fir, hum ek state ka use karke ek object include kar sakte hain!
        </p>
        <h3>Example</h3>
        <p> ek Hook create karo jo ek object hold karta hai:</p>
          <pre className="bgExample">
            {`
       import { useState } from "react";
       import ReactDOM from "react-dom/client";
       
       function Car() {
         const [car, setCar] = useState({
           brand: "Ford",
           model: "Mustang",
           year: "1964",
           color: "red"
         });
       
         return (
           <>
             <h1>My {car.brand}</h1>
             <p>
               It is a {car.color} {car.model} from {car.year}.
             </p>
           </>
         )
       }
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<Car />);`}{" "}
          </pre>
          <p><b>Output on your screen will be:</b></p>
          <div className="bgWhite">
            
          </div>

        <p>
          Jab hum ab ek object ko track kar rahe hain, hamein ab us object ko
          reference karna hoga, phir us object ke property ko render karte waqt.
          (example: `car.brand`)
        </p>
        <h2>Updating Objects and Arrays in State</h2>
        <p>Jab state update hota hai, toh poora state overwrite ho jata hai.</p>
        <p>Agar hum sirf apne car ke color ko update karna chahte hain?</p>
        <p>
          Agar hum sirf setCar({`color: "blue"`}) ko call karte hain, to yeh
          hamare state se brand, model, aur year ko hata dega.
        </p>
        <p>
          Hum JavaScript ke spread operator ka istemal karke ismein help le
          sakte hain.
        </p>
        <h3>Example</h3>
        <p>
          Use the JavaScript spread operator to update only the color of the
          car:
        </p>
        <p className="bgExample">
          <pre>
            {`
 import { useState } from "react";
 import ReactDOM from "react-dom/client";
 
 function Car() {
   const [car, setCar] = useState({
     brand: "Ford",
     model: "Mustang",
     year: "1964",
     color: "red"
   });
 
   const updateColor = () => {
     setCar(previousState => {
       return { ...previousState, color: "blue" }
     });
   }
 
   return (
     <>
       <h1>My {car.brand}</h1>
       <p>
         It is a {car.color} {car.model} from {car.year}.
       </p>
       <button
         type="button"
         onClick={updateColor}
       >Blue</button>
     </>
   )
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Car />);`}{" "}
          </pre>
        </p>
        <p>
          Kyunki humein state ki current value ki zarurat hai, isliye hum ek
          function ko apne `<span className="clrRed">setCar</span>` function
          mein pass karte hain. Ye function previous value ko recieve karta hai.
        </p>
        <p>
          Phir hum ek object return karte hain, previous state ko spread karte
          hain aur sirf <span className="clrRed">color</span> ko update karte
          hain.
        </p>
    </div>
  )
}
