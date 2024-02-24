import React from 'react'

export default function UseRefHook() {
  return (
    <div>
        <h2>
          React <span className="bgRed">useRef</span> Hook
        </h2>
        <p>
          The useRef Hook aapko renders ke beech mein values ko persist karne
          mein help karta hai.
        </p>
        <p>
          Iska istemal ek mutable value ko store karne ke liye kiya ja sakta hai
          jo update hone par re-render ko cause nahi karta.
        </p>
        <p>
          Iska istemal ek DOM element ko seedhe access karne ke liye bhi kiya ja
          sakta hai.
        </p>
        <h2>Re-Renders nahi karta hai.</h2>
        <p>
          Agar hum try karen ki hamara application kitni baar render hota hai,
          useState Hook ka istemal karke, toh ham khud ko ek infinite loop mein
          atak jayenge kyunki yah Hook hi khud ek re-render cause karta hai.
        </p>
        <p>Isse bachne ke liye, ham useRef Hook ka istemal kar sakte hain.</p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">useRef</span> application re-renders track
          karne ke liye
        </p>
        <p className="bgExample">
          <pre>
            {`
 import { useState, useEffect, useRef } from "react";
 import ReactDOM from "react-dom/client";
 
 function App() {
   const [inputValue, setInputValue] = useState("");
   const count = useRef(0);
 
   useEffect(() => {
     count.current = count.current + 1;
   });
 
   return (
     <>
       <input
         type="text"
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
       />
       <h1>Render Count: {count.current}</h1>
     </>
   );
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);`}{" "}
          </pre>
        </p>
        <p>
          <span className="clRed">useRef()</span> ek item hi return karta hai.
          Ye ek ' <span className="clrRed">current</span> ' named object return
          karta hai.
        </p>
        <p>
          Jab hum useRef ko initialize karte hain, toh hum initial value set
          karte hain: useRef(0).
        </p>
        <p>
          Yeh kuch iss tarah kaam karta hai: const count = {`{current: 0}`}. Hum
          count ko <span className="clrRed">count.current</span> ka istemal
          karke access kar sakte hain.
        </p>
        <p>
          Apne computer par ise run kare aur input mein likhne ki koshish
          karein, dekhein ki kaise application render count badhta hai.
        </p>
        <h2>Accessing DOM elements using useRef</h2>
        <p>
          in general, ham chahte hain ki React sab DOM manupulation handle kar
          le.
        </p>
        <p>
          Lekin kuch aise instances hain jahan{" "}
          <span className="clrRed">useRef</span> ka use bina kisi issue ke kiya
          ja sakta hai.
        </p>
        <p>
          React mein, ham ek element mein ref attribute jod sakte hain taki ham
          usse directly DOM se access kar sake.
        </p>
        <h3>Example</h3>
        <p>Input par focus karne ke liye useRef ka istemal karein.</p>
        <p className="bgExample">
          <pre>
            {`
        import { useRef } from "react";
        import ReactDOM from "react-dom/client";
        
        function App() {
          const inputElement = useRef();
        
          const focusInput = () => {
            inputElement.current.focus();
          };
        
          return (
            <>
              <input type="text" ref={inputElement} />
              <button onClick={focusInput}>Focus Input</button>
            </>
          );
        }
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);`}
          </pre>
        </p>
        <div className="bgYellow">
          <h4>Real life Example of useRef</h4>
          <p>
            Ek common real-life example jahan useRef ka istemal hota hai, vo ek
            form validation scenario hai. Suppose aap ek form banate hain jisme
            user ek field mein email address daal raha hai, aur aapko ye check
            karna hai ki vo email address valid hai ya nahi. Aise mein, aap
            useRef ka istemal karke previous value aur current value ko compare
            kar sakte hain. Jab user naya character type karta hai, aap useRef
            ke current value ko update karenge. Phir, useEffect ke andar, aap
            previous value aur current value ko compare karke validation logic
            chala sakte hain. Agar email address valid hai, toh aap kuch UI
            changes kar sakte hain, warna error message dikha sakte hain. Yeh
            approach form validation mein common hai kyunki useRef aapko allow
            karta hai previous aur current values ko track karke efficiently
            handle karna.
          </p>
        </div>
        <h2>State Change Tracking</h2>
        <p>
          The <span className="clrRed">useRef</span> Hook ka upayog previous
          state values ko track karne ke liye bhi kiya ja sakta hai.
        </p>
        <p>
          Yah isliye hai kyunki ham <span className="clrRed">useRef</span>{" "}
          values ko renders ke beech me persist kar sakte hain.
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
       import { useState, useEffect, useRef } from "react";
       import ReactDOM from "react-dom/client";
       
       function App() {
         const [inputValue, setInputValue] = useState("");
         const previousInputValue = useRef("");
       
         useEffect(() => {
           previousInputValue.current = inputValue;
         }, [inputValue]);
       
         return (
           <>
             <input
               type="text"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
             />
             <h2>Current Value: {inputValue}</h2>
             <h2>Previous Value: {previousInputValue.current}</h2>
           </>
         );
       }
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<App />);`}
          </pre>
        </p>
        <p>
          Is bar ham <span className="clrRed">useState</span>,{" "}
          <span className="clrRed">useEffect</span>, aur{" "}
          <span className="clrRed"></span> ke combination ka istemal karte hain
          previous state ko track karne ke liye.
        </p>
        <p>
          useEffect mein, har bar jab input field mein text daal kar inputValue
          update hota hai, tab hum useRef ke current value ko update kar rahe
          hain.
        </p>
    </div>
  )
}
