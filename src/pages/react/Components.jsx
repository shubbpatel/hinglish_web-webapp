import React from 'react'

export default function Components() {
  return (
    <div>
        <h2 id="react-components-hindi">React Components in Hindi</h2>
        <p>
          Components functions jaise hote hain jo HTML elements return karte
          hain.
        </p>
        <h3>React Components</h3>
        <p>
          Components independent aur reusable code ke pieces hote hain. Ye
          JavaScript functions ke jaise kaam karte hain, lekin isolation mein
          kaam karte hain aur HTML return karte hain.
        </p>
        <p>
          Components do prakar ke hote hain, Class components aur Function
          components. Is tutorial mein hum Functional components par jyada dhyan
          denge.
        </p>
        <h3>Create Your First Component</h3>
        <p>
          Jab aap ek React component create karte hain, to component ka naam
          UPAR CASE ke letter se shuru HONA CHAHIYE
        </p>
        <h2>Class Component</h2>
        <p>
          Ek class component mein extends <b>React.Component</b> statement
          include hona chahiye. Ye statement <b>React.Component</b> ke liye
          inheritance create karta hai, aur aapke component ko{" "}
          <b>React.Component</b> ke functions ko access karne ka permission deta
          hai.
        </p>
        <p>
          Component ko bhi ek render() method ki requirement hoti hai, yeh
          method HTML return karta hai.
        </p>
        <h3>Example</h3>
        <p>Create a Class component called Meme</p>
        <pre className="bgExample">
          {`
  class Meme extends React.Component {
    render() {
      return <h2>Khopdi Tod Saale Ka</h2>;
    }
  }`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h2>Khopdi Tod Saale Ka</h2>
        </div>

        <h2>React Function Component in Hindi</h2>
        <p>
          Yahan upar diye gaye example ki tarah same example, lekin is bar ek
          Function component ka istemal kiya gaya hai.
        </p>
        <p>
          Ek Functional component bhi HTML return karta hai, aur ek Class
          component ke jaisa same behave karta hai, lekin Function components ko
          likhne ke liye kam code ka istemal hota hai, samajhne mein aasan hai,
          and it is more preffered now a days .
        </p>
        <h3>Example</h3>
        <p>Create a Function component called Truck</p>
        <pre className="bgExample">
          {`
          function Meme() {
            return <h2>Khopdi Tod Saale Ka</h2>;
          }`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h2>Khopdi Tod Saale Ka</h2>
        </div>
        <h2>Rendering a Component</h2>
        <p>
          Ab aapke React application mein ek component hai jiska naam{" "}
          <span className="clrRed">Meme</span> hai, jo ek {`<h2>`} element
          return karta hai.
        </p>
        <p>
          Ise apne application mein istemal karne ke liye, normal HTML ke taur
          par is tarah ka syntax istemal karein: {`<Truck />`}
        </p>
        <h3>Example</h3>
        <p>Truck component ko "root" element mein dikhayein:</p>
        <pre className="bgExample">
          {`
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Meme />);  `}
        </pre>
        <h2>Props in React In hinglish</h2>
        <p>
          Components ko as props pass kiya ja sakta hai, props se matlab hai
          properties.
        </p>
        <p>
          Props function ke arguments ki tarah hote hain, aur aap unhe component
          mein as attributes pass kar skate hain.
        </p>
        <p>Aap agle chapter mein props ke bare mein aur jaanenge.</p>
        <h3>Example</h3>
        <p>
          Meme component ko ek <b>name</b> pass karne ke liye ek attribute ka
          istemal karein, aur ise render() function mein istemal karein:
        </p>
        <pre className="bgExample">
          {`
 function Meme(props) {
  return <h2>{props.name}, Khopdi Tod Saale Ka</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Meme name="Shyaam"/>);`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h2>Shyaam, Khopdi Tod Saale Ka</h2>
        </div>

        <h2>Components in Components</h2>
        <p>
          Hum ek component ke andar dusre components ka istemal kar sakte hain:
        </p>
        <h3>Exapmle</h3>
        <p>
          Use the <b>Meme</b> component inside the <b>Instagram</b> component:
        </p>
        <pre className="bgExample">
          {`
function Meme() {
  return <h2>Khopdi Tod Saale Ka</h2>;
}

function Instagram() {
  return (
    <>
      <h1>Instagram </h1>
      <Truck />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Instagram />);`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h1>Instagram </h1>
          <h2>Khopdi Tod Saale Ka</h2>
        </div>

        <h2>Components in Files</h2>
        <p>
          React ke sath code re-use karna boht asaan ho jata, aur yah
          recommended hai ki aap apne components ko alag-alag seprate files mein
          split karein
        </p>
        <p>
          Iske liye, ek naye file banayein .js file extension ke saath aur
          usmein code daalein:
        </p>
        <p className="bgYellow">
          Dhyaan rahe ki Filename ek uppercase character se shuru hona chahiye.
        </p>
        <h3>Example</h3>
        <p>
          Ye hai naya file, humne iska naam{" "}
          <span className="clrRed">"Meme.jsx"</span> rakha hai:
        </p>
        <pre className="bgExample">
          {`
        function Meme() {
          return <h2>Khopdi Tod Saale Ka</h2>;
        }
        
        export default Meme;`}
        </pre>
        <p>
          <b>Meme</b> component ka istemal karne ke liye, aapko apne application
          mein file ko import karna hoga.
        </p>
        <h3>Example</h3>
        <p>
          Ab hum "Meme.jsx" file ko application mein import karte hain, aur hum
          Truck component ka istemal yahan kar sakte hain jaise ye yahin banaya
          gaya ho.
        </p>
        <pre className="bgExample">
          {`
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import Meme from './Meme.jsx';
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Meme />);
      `}
        </pre>
    </div>
  )
}
