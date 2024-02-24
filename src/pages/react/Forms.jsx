import React from 'react'

export default function Forms() {
  return (
    <div>
        <h2 id="forms">React Forms</h2>
        <p>
          Jaise ki HTML mein hota hai, waise hi React bhi forms ka istemal karta
          hai jisse users web page ke saath interact kar sakein.
        </p>
        <h2>Adding Forms in react</h2>
        <p>
          Aap React mein form ko kisi bhi aur element ki tarah hi add karte hain
        </p>
        <h3>Example</h3>
        <p>ek form add karo jisme users apna naam likh sakte ho:</p>
        <p className="bgExample">
          <pre>
            {`
 function MyForm() {
  return (
    <form>
      <label>What is your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);`}
          </pre>
        </p>
        <p>Yeh normal kaam karega, form submit hoga aur page refresh hoga.</p>
        <p>Lekin generally hum react mein aisa nahi chahte hain.</p>
        <p>
          hum iss behaviour ko rokna chahte hain aur hum chahte hain React form
          control kare
        </p>
        <h2>Handling Forms</h2>
        <p>
          Forms ko handle karna yeh hai ki aap data kaise handle karte hain jab
          yeh value change hoti hai ya form submit hota hai.
        </p>
        <p>
          HTML mein, usually form data DOM dwara handle hota hai.React mein,
          form data usually components dwara handle hota hai.
        </p>
        <p>
          Jab data components dwara sambhala jata hai, toh saara data component
          state mein stored hota hai.
        </p>
        <p>
          Aap changes ko control karne ke liye{" "}
          <span className="clrRed">onChange</span> attribute mein event handlers
          add kar sakte hain.
        </p>
        <p>
          Hum <b>useState</b> Hook ka istemal har input ke value ko track karne
          ke liye kar sakte hain aur poora application ke liye 'single source of
          truth' provide kar sakte hain."
        </p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">useState</span> hook ka istemaal karo input
          manage karne ke liye
        </p>
        <p className="bgExample">
          <pre>
            {`
  import { useState } from 'react';
  import ReactDOM from 'react-dom/client';
  
  function MyForm() {
    const [name, setName] = useState("");
  
    return (
      <form>
        <label>What is your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);`}
          </pre>
        </p>
        <h2>Submitting froms</h2>
        <p>
          Aap submit action ko control kar sakte hain{" "}
          <span className="clrRed">{`<form>`}</span> ke{" "}
          <span className="clrRed">onSubmit</span> attribute mein ek event
          handler add karke:
        </p>
        <p>
          Ek submit button aur ek event handler{" "}
          <span className="clrRed">onSubmit</span> attribute mein add karo:
        </p>
        <p className="bgExample">
          <pre>
            {`
    
    import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);`}
          </pre>
        </p>
        <h2>Multiple input fields</h2>
        <p>
          {" "}
          har ek element mein <span className="clrRed">name</span> attribute add
          karke aap ek se jada input fields ka value control kar sakte hain
        </p>
        <p>Ham apne state ko ek empty object se initialize karenge.</p>
        <p>
          Event handler mein fields ko access karne ke liye{" "}
          <span className="clrRed">event.target.name</span> aur{" "}
          <span className="clrRed">event.target.value</span> syntax ka istemal
          karen.
        </p>
        <p>
          State ko update karne ke liye, property name ke around sqaure brackets
          [bracket notation] ka istemal karen.
        </p>
        <h3>Example</h3>
        <p>two input fields wala ek form banaye</p>
        <p className="bgExample">
          <pre>
            {`
       import { useState } from 'react';
       import ReactDOM from 'react-dom/client';
       
       function MyForm() {
         const [inputs, setInputs] = useState({});
       
         const handleChange = (event) => {
           const name = event.target.name;
           const value = event.target.value;
           setInputs(values => ({...values, [name]: value}))
         }
       
         const handleSubmit = (event) => {
           event.preventDefault();
           alert(inputs);
         }
       
         return (
           <form onSubmit={handleSubmit}>
             <label>Enter your name:
             <input 
               type="text" 
               name="username" 
               value={inputs.username || ""} 
               onChange={handleChange}
             />
             </label>
             <label>Enter your age:
               <input 
                 type="number" 
                 name="age" 
                 value={inputs.age || ""} 
                 onChange={handleChange}
               />
               </label>
               <input type="submit" />
           </form>
         )
       }
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<MyForm />);`}
          </pre>
        </p>
        <p>
          Note that: Hum dono input fields ke liye ek hi event handler function
          ka istemal kar rahe hain, hum har ek ke liye ek alag event handler
          likh sakte hain, lekin yah hume jada clean code pradan karta hai aur
          React mein yah preffered tareeka hai.
        </p>
        <h2>Textarea</h2>
        <p>
          The textarea element in React slightly different hai ordinary HTML se.
        </p>
        <p>
          HTML mein, ek textarea ke value ko start tag{" "}
          <span>{`<textarea>`}</span> aur end tag
          <span className="clrRed">{`</textarea>`}</span> ke beech wala text
          maana jaata tha
        </p>
        <p className="bgExample">
          <pre>
            {`
  <textarea>
   textarea ka content.
</textarea>`}
          </pre>
        </p>
        <p>
          React mein, textarea ke value ko value attribute mein rakha jata hai.
          Hum <span className="clrRed">useState</span> Hook ka istemal karenge
          taki hum textarea ke value ko manage kar sakein:
        </p>
        <h3>Example</h3>
        <p>A simple textarea kuch content ke sath:</p>
        <p className="bgExample">
          <pre>
            {`
 import { useState } from 'react';
 import ReactDOM from 'react-dom/client';
 
 function MyForm() {
   const [textarea, setTextarea] = useState(
     "The content of a textarea goes in the value attribute"
   );
 
   const handleChange = (event) => {
     setTextarea(event.target.value)
   }
 
   return (
     <form>
       <textarea value={textarea} onChange={handleChange} />
     </form>
   )
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<MyForm />);`}{" "}
          </pre>
        </p>
        <h2>Select</h2>
        <p>
          Ek drop-down list, ya select box, React mein HTML se thoda alag hota
          hai.
        </p>
        <p></p>
        <p>
          <b>HTML:</b>
          <pre className="bgExample">
            {`
<select>
<option value="Ford">Ford</option>
<option value="Volvo" selected>Volvo</option>
<option value="Fiat">Fiat</option>
</select>`}
          </pre>
        </p>
        <p>
          React mein, selected value <span className="clrRed">select</span> tag
          par <span className="clrRed">value</span> attribute ke saath define
          hota hai:
        </p>
        <h3>Example</h3>
        <p>
          Ek simple select box, jahan selected value "Volvo" constructor mein
          initialize ki gayi hai:
        </p>
        <p className="bgExample">
          <pre>
            {`
 function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}`}{" "}
          </pre>
        </p>

        <p>
          <span className="clrRed"> {`<textarea>`}</span> aur{" "}
          <span className="clrRed">{`<select>`}</span> mein slight chnages
          karke, React all input elements ko ek hi tareeke se handle kar sakta
          hai.
        </p>
    </div>
  )
}
