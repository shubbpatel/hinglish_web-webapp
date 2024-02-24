import React from 'react'

export default function ReactJSX() {
  return (
    <div>
        <h2 id="jsx">React JSX</h2>
        <h3>What is JSX (JSX kya hai)?</h3>
        <p>JSX ka matlab hai JavaScript XML.</p>
        <p>JSX humein React mein HTML likhne me help karta hai.</p>
        <p>JSX se React mein HTML likhna aur use add karna aasan ho jata hai</p>
        <h3>Coding JSX</h3>
        <p>
          JSX humein HTML elements ko JavaScript mein likhne me help karta hai
          aur unhe createElement() aur appendChild() methods ke bina DOM mein
          place karna allow karta hai
        </p>
        <p>JSX HTML tags ko React elements mein convert karta hai.</p>
        <p className="bgYellow">
          Aapko JSX ka istemal karna necessary nahi hai, lekin JSX se React
          applications likhna aasan ho jata hai
        </p>
        <p>
          Yahan do examples hain. Pehla JSX ka istemal karta hai aur doosra
          nahi:
        </p>
        <h3>Example 1</h3>
        <p>JSX :</p>
        <p className="bgExample">
          <pre>
            {`
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
`}
          </pre>
        </p>
        <h3>Example 2</h3>
        <p>Without JSX :</p>
        <p className="bgExample">
          <pre>
            {`
    const myElement = React.createElement('h1', {}, 'I do not use JSX!');

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
    `}
          </pre>
        </p>
        <p>
          Jaise ki aap pehle example mein dekh sakte hain, JSX humein JavaScript
          code ke andar seedhe HTML likhna allow karta hai."
        </p>
        <p>
          JSX JavaScript ke ES6 par based ek extension hai, aur runtime mein ise
          regular JavaScript mein translate kiya jata hai.
        </p>
        <h3>Expressions in JSX</h3>
        <p>
          JSX ke saath aap curly braces {} ke andar expressions likh sakte hain.
        </p>
        <p>
          Expressions ek React variable, ya property, ya koi other JavaScript
          expression ho sakta hai. JSX expression execute karega aur result
          return karega:
        </p>
        <h3>Example</h3>
        <p>Execute the expression 10 - 2:</p>
        <pre className="bgExample">
          {`
    const myElement = <h1>React is {10 - 2} times better with JSX</h1>;`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h1>React is {10 - 2} times better with JSX</h1>
        </div>
        <h3>Inserting a Large Block of HTML</h3>
        <p>
          HTML ko multiple lines par likhne ke liye, HTML ko parentheses ke
          andar rakhein:
        </p>
        <h3>Example</h3>
        <p>Create a list with three list items:</p>
        <pre className="bgExample">
          {`
 const myElement = (
    <ul>
      <li>Kela</li>
      <li>Sev</li>
      <li>Anaar</li>
      <li>Papita</li>
    </ul>
  );`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <ul>
            <li>Kela</li>
            <li>Sev</li>
            <li>Anaar</li>
            <li>Papita</li>
          </ul>
        </div>

        <h3>One Top Level Element</h3>
        <p>HTML code ko ek hi top level element mein wrap kiya jana chahiye.</p>
        <p>
          To agar aap do paragraphs likhna chahte hain, to aapko unhe ek parent
          element ke andar rakhna hoga, jaise ki ek div element.
        </p>
        <h3>Example</h3>
        <p>
          Do paragraphs ko ek <span className="clrRed">{`</div>`}</span> element
          ke andar wrap karein:
        </p>
        <p className="bgExample">
          <pre>
            {`
    const myElement = (
        <div>
          <p>Main ek paragraph hoon.</p>
          <p>Main bhi ek paragraph hoon.</p>
        </div>
      );
    `}
          </pre>
        </p>
        <p className="bgYellow">
          Agar HTML sahi nahi hai ya HTML mein kisi parent element ki kami hai,
          to JSX ek error throw karega.
        </p>
        <p>
          Alternatively, aap "fragment" ka istemal karke multiple lines ko wrap
          kar sakte hain. Isse DOM mein unnecessarily extra nodes add hone se
          bacha ja sakta hai.
        </p>
        <p>
          Ek fragment ek empty HTML tag ki tarah dikhta hai: <></>
        </p>
        <h3>Example</h3>
        <p>Do paragraphs ko ek fragment ke andar wrap karein:</p>
        <p className="bgExample">
          <pre>
            {`
   const myElement = (
    <>
      <p>Namaste from a paragraph.</p>
      <p>Namaste from a paragraph again.</p>
    </>
  );`}
          </pre>
        </p>
        <h3>Elements Must be Closed</h3>
        <p>
          JSX XML ke rules follow karta hai, isliye HTML elements ko sahi se
          close karna zaroori hai.
        </p>
        <h3>Example</h3>
        <p>Close empty elements with {`/> `}</p>
        <p className="bgExample">{`const myElement = <input type="text" />;`}</p>
        <p className="bgYellow">
          Agar HTML sahi se close nahi kiya gaya hai, to JSX ek error throw
          karega."
        </p>
        <h3>Attribute class = className</h3>
        <p>
          <span className="clrRed">Class</span> attribute HTML mein ek bahut
          jyada istemal hone wala attribute hai, lekin kyun ki JSX as JavaScript
          render hota hai, aur <span className="clrRed">class</span> keyword
          JavaScript mein ek reserved word hai, isliye aapko ise JSX mein use
          karna allowed nahi hai.
        </p>
        <p>Iski jagah attribute ka istemal karein.</p>
        <p>
          JSX ne is problem ko solve <span className="clrRed">className</span>{" "}
          ka istemal karke kiya. Jab JSX render hota hai, to ye attributes ko
          class attributes mein translate karta hai.
        </p>
        <h3>Example</h3>
        <p>
          Use karo attribute <span className="clrRed">className</span> instead
          of class in JSX:
        </p>
        <p className="bgExample">{`const myElement = <h1 className="myclass">Hello World</h1>;`}</p>
        <h3>Conditions - if statements</h3>
        <p>
          React <span className="clrRed">if</span> statements ko support karta
          hai, lekin JSX ke andar nahi.
        </p>
        <h4>Option 1 :</h4>
        <p>
          JSX code ke bahar <span className="clrRed">if</span> statements
          likhein:
        </p>
        <h3>Example</h3>
        <p>
          Write "Melodi" if x is less than 10, otherwise "Khatam bye bye tata
          goodbye gaya": (Agar x 10 se kam hai, to "Melodi" likhein, otherwise
          "Khatam bye bye tata goodbye gaya" likhein:)
        </p>
        <pre className="bgExample">
          {`
        const x = 5;
        let text = "Khatam bye bye tata goodbye gaya";
        if (x < 10) {
          text = "Melodi";
        }
        
        const myElement = <h1>{text}</h1>;`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h1>Melodi</h1>
        </div>
        <h4>Option 2</h4>
        <p>ternary expressions ko istemal karein instead:</p>
        <h3>Example</h3>
        <p>
          Write "Melodi" if x is less than 7, otherwise "Khatam bye bye tata
          goodbye gaya". (Agar x 7 se kam hai, to "Melodi" likhein, anyatha
          "Khatam bye bye tata goodbye gaya" likhein:)
        </p>
        <pre className="bgExample">
          {`
        const x = 8;

        const myElement = <h1>{(x) < 7 ? "Melodi" : "Khatam bye bye tata goodbye gaya"}</h1>;`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>

        <div className="bgWhite">
          <h1>Khatam bye bye tata goodbye gaya</h1>
        </div>
        <p className="bgYellow">
          Dhyaan rahe ki JSX ke andar ek JavaScript expression ko shamil karne
          ke liye, JavaScript ko curly braces, {} ke saath wrap kiya jana
          chahiye.
        </p>
    </div>
  )
}
