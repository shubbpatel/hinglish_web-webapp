import React from 'react'

export default function Props() {
  return (
    <div>
        <h2 id="react-props-hindi">React Props in Hindi</h2>
        <p>Props React components mein bheje jaane wale arguments hote hain.</p>
        <p>
          Props components mein HTML attributes ke through bheje jaate hain.
        </p>
        <p className="bgYellow">
          <span className="clrRed">props</span> se matlab hai properties.
        </p>
        <h2>Props</h2>
        <p>
          React Props vaise hi hain jaise JavaScript mein function arguments aur
          HTML mein attributes hote hain.
        </p>
        <p>
          Props ko ek component mein bhejne ke liye, HTML attributes ki tarah hi
          same syntax ka istemal karein:
        </p>
        <h3>Example</h3>
        <p>Add karo "brand" attribute to the Truck element:</p>
        <p className="bgExample">
          {`const myElement = <Truck brand="TATA" />;`}
        </p>
        <p>
          Component argument ko <span className="crlRed">props</span> object ke
          roop mein recieve karta hai:
        </p>
        <h3>Example</h3>
        <p>Component mein brand attribute ka istemal karein:</p>
        <p className="bgExample">
          <pre>
            {`
 function Truck(props) {
  return <h2>I am a { props.brand } Truck!</h2>;
}`}
          </pre>
        </p>
        <h2>Press Data</h2>
        <p>
          Props are also how jisse aap data ko ek component se doosre component
          tak bhejte hain, parameters ki tarah.
        </p>
        <h3>Example</h3>
        <p>
          Garage component se 'brand' property Truck component mein pass
          karenge:
        </p>
        <pre className="bgExample">
          {`
 function Truck(props) {
  return <h2>I am a { props.brand } Truck!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Mere garage mein konsi gaadi hai?</h1>
      <Truck brand="TATA" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
 `}{" "}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h1>Mere garage mein konsi gaadi hai?</h1>
          <h2>I am a TATA Truck!</h2>
        </div>
        <p>
          Agar aapke pass ek variable hai pass karne ke liye , upar diye gaye
          example ki tarah ek string nahi hai, toh aap bas variable name ko
          curly brackets ke andar daal dein:
        </p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">Truck</span> component ko pass karne ke liye
          ek variable banayein jiska naam{" "}
          <span className="clrRed">truckName</span> hai:
        </p>
        <pre className="bgExample">
          {`
 function Truck(props) {
  return <h2>I am a { props.brand } Truck!</h2>;
}

function Garage() {
  const truckName = "TATA";
  return (
    <>
      <h1>Mere garage mein konsi gaadi hai?</h1>
      <Truck brand={ truckName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h1>Mere garage mein konsi gaadi hai?</h1>
          <h2>I am a TATA Truck!</h2>
        </div>
        <p>Ya agar yah ek object ho:</p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">Truck</span> component ko pass karne ke liye
          ek object banayein jiska naam{" "}
          <span className="clrRed">truckInfo</span> hai:
        </p>
        <pre className="bgExample">
          {`
 function Truck(props) {
  return <h2>I am a { props.brand.model } Truck!</h2>;
}

function Garage() {
  const truckInfo = { name: "Truck", model: "Ashok Leyland" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Truck brand={ truckInfo } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h1>Who lives in my garage?</h1>
          <h2>I am a Ashok Leyland Truck!</h2>
        </div>
    </div>
  )
}
