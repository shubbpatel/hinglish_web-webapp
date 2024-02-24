import React from 'react'

export default function ConditionalRendering() {
  return (
    <div>
        <h2 id="conditionals">React.JS Conditional Rendering</h2>
        <p>
          React mein, aap conditionally components ko render kar sakte hain.
        </p>
        <p>aisa karne ke multiple tareeqe hain.</p>
        <h2>
          <span className="clrRed">if</span> Statement
        </h2>
        <p>
          Hum <span className="clrRed">if</span> JavaScript operator ka istemal
          kar sakte hain decide karne ke liye ke konsa component render karna
          hai
        </p>
        <h3>Example</h3>
        <p>
          We'll use these two components (hum in dono components ka istemaal
          karenge)
        </p>
        <pre className="bgExample">
          {`
 function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}`}
        </pre>
        <h3>Example</h3>
        <p>
          Ab, hum ek aur component banayenge jo choose karega ke konsa component
          render karna hai based on a condition:
        </p>
        <pre className="bgExample">
          {`
  function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Goal isGoal={false} />);`}
        </pre>
        <p>
          Koshish karein <span className="clrRed">isGoal</span> attribute ko{" "}
          <span className="clrRed">true</span> mein badalne ki:
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Goal isGoal={true} />);`}
          </pre>
        </p>
        <h2>Logical && Operator</h2>
        <p>
          React component ko conditionally render karne ka ek aur tareeka hai
          aur wo hai && operator ka istemal karna.
        </p>
        <h3>Example</h3>
        <p>
          Hum JSX mein JavaScript expressions ko curly braces ka istemal karke
          shamil kar sakte hain:
        </p>
        <pre className="bgExample">
          {`
 function Garage(props) {
  const bikes = props.bikes;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {bikes.length} bikes in your garage.
        </h2>
      }
    </>
  );
}

const bikes = ['Hero', 'Honda', 'Yamaha', 'Bajaj'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage bikes={bikes} />);
 `}{" "}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h1>Garage</h1>
          <h2>You have 4 bikes in your garage.</h2>
        </div>
        <p>
          Agar <span className="clrRed">bikes.length {`>`} 0</span> true ke
          barabar hai, to && ke baad ka expression render hoga.
        </p>
        <p>Koshish karein cars array ko empty karne ki:</p>
        <h3>Example</h3>
        <pre className="bgExample">
          {`
 const bikes = [];
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Garage bikes={bikes} />);`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h1>Garage</h1>
        </div>

        <h2>Ternary Operator</h2>
        <p>
          Ek aur tareeka elements ko conditionally render karne ka hai ternary
          operator ka istemal karna.
        </p>
        <p className="bgExample">{`condition ? true : false`}</p>
        <h3>Example</h3>

        <pre className="bgExample">
          {`
 // Define a function to check if a number is greater than 10 using the ternary operator
 function checkNumber(number) {
   // Use the ternary operator to check if the number is greater than 10
   const result = number > 10 ? 'Number is greater than 10' : 'Number is not greater than 10';
 
   // Return the result
   return result;
 }
 
 // Call the function with different numbers
 console.log(checkNumber(5));  // Output: Number is not greater than 10
 console.log(checkNumber(15)); // Output: Number is greater than 10
 
`}{" "}
        </pre>
        <p>
          <b>Output</b>
        </p>
        <p className="clrBlack">
          Number is not greater than 10 <br />
          Number is greater than 10
        </p>
    </div>
  )
}
