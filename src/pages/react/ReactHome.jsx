import React from 'react'

export default function ReactHome() {
  return (
    <div>
           <div className='bContainer container'>
         <h2 id="react-in-hindi">Getting Started</h2>
        <p>
          React ek JavaScript library hai jise user interfaces create karne ke
          liye design kiya gaya hai.
        </p>
        <p>React ka istemal single-page applications banane mein hota hai.</p>
        <p>
          React hamen reusable UI components create karne me help karta hai.
        </p>
        <h2>Learn by Examples</h2>
        <p className="bgExample">
          <pre>
            {` import React from 'react'; import ReactDOM from 'react-dom/client';
          function Hello(props){" "}
          {
              return <h1>Namaste India!</h1>;
            }
            const container = document.getElementById("root"); const root =
            ReactDOM.createRoot(container);
        root.render(<Hello />); `}
          </pre>
        </p>
        <h2>Create React App</h2>
        <p>
          React learn karne aur test karne ke liye, aapko apne computer par ek
          React Environment set up karna hoga. Is tutorial mein,{" "}
          <span className="clrBlack">create-react-app</span>
          ka use kiya gaya hai.{" "}
          <span className="clrBlack">create-react-app</span> ek official tareeka
          hai React applications banane ka.{" "}
          <span className="clrBlack">create-react-app</span> ka istemal karne ke
          liye Node.js ki zarurat hoti hai. Apne terminal ko us directory mein
          kholiye jahan aap apni application banane chahte hain. Is command ko
          chalaiye to ek React application my-react-app naam se ban jayegi:
        </p>
        <p className="bgBlue">npx create-react-app my-react-app</p>
        <p>
          create-react-app sab kuch set up karega jo aapko ek React application
          chalane ke liye zaruri hai."
        </p>
        <br />
        <h2>Run the React Application</h2>
        <p>my-react-app directory mein jaane ke liye ye command run kijiye:</p>
        <p className="bgBlue">cd my-react-app</p>
        <p>
          React application my-react-app ko run run karne ke liye is command ko
          execute karein:
        </p>
        <p className="bgBlue">npm start</p>
        <p>
          Browser mein ek naya window open hoga jisme aapka naya create kiya
          gaya React App hoga! Agar nahi khulta, to apne browser ko kholiye aur
          address bar mein <span className="clrBlack">localhost:3000</span>{" "}
          likhiye.
        </p>
        <img src="" alt="" />
        <br />
        <h2>To Learn React Aapko Pehle Se Kya Pata Hona Chahiye ?</h2>
        <p>
          React.JS shuru karne se pehle, aapko inn topics ko pehle padhna
          chahiye:
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          Aapko ECMAScript 6 (ES6) mein aaye naye JavaScript features ke saath
          bhi kuch experience hona chahiye; aap inke baare mein React ES6
          chapter mein seekhenge.
        </p>
        <br />
        <h2>What is React</h2>
        <p>
          React, ko ek frontend JavaScript framework bhi kehte hain, Facebook
          dwara developed ek JavaScript library hai. React UI components banane
          ka ek tool hai.
        </p>
        <br />
        <h2>React Kaise kaam Karta hai ?</h2>
        <p className="bgYellow">
          React memory mein ek VIRTUAL DOM Create karta hai
        </p>
        <p>
          Browser ke DOM me direct changes karne ki jagah, React memory mein ek
          virtual DOM create karta hai, jahan par sabhi necessary changes hote
          hain, uske baad jo jaruri changes hain browser ke DOM mein kiya jata
          hai.
        </p>
        <p className="bgYellow">
          React keval vahi changes karta hai jo jaruri ho!
        </p>
        <p>
          React ye find kar leta hai ki kya change hua hai, aur sirf wahi change
          karta hai jo jaruri hai. Aap is tutorial ke baki hisse mein ye
          samajhenge ki React ye kaise karta hai
        </p>
      
    </div>
    </div>
  )
}
