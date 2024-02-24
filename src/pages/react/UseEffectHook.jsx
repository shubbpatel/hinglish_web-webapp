import React from 'react'

export default function UseEffectHook() {
  return (
    <div>
         <h2>
          React <span className="bgRed">useEffect</span> Hook
        </h2>
        <p>
          <span className="clrRed">UseEffect</span> Hook components mein side
          effects perform karne ka kaam aata hai.
        </p>
        <p>
          Kuch side effects ke examples hain: data fetch karna, DOM ko direct
          update karna, aur timers
        </p>
        <p>
          <span className="clrRed">useEffect</span> do arguments accept karta
          hai. Dusra argument optional hota hai.
        </p>
        <p>
          <span className="clrRed">useEffect</span>
          {`(<function>, <dependency>)`}
        </p>
        <p> timer as an example dekhte hain .</p>
        <h3>Example</h3>
        <p>
          Use <span className="clrRed">setTimeout()</span> to count 1 second
          after initial render:
        </p>
        <p className="bgExample">
          <pre>
            {`
 import { useState, useEffect } from "react";
 import ReactDOM from "react-dom/client";
 
 function Timer() {
   const [count, setCount] = useState(0);
 
   useEffect(() => {
     setTimeout(() => {
       setCount((count) => count + 1);
     }, 1000);
   });
 
   return <h1>I've rendered {count} times!</h1>;
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Timer />);`}
          </pre>
        </p>
        <p>
          par ruko! Yeh count karte ja raha hai jabki yeh sirf ek baar hona
          chahiye tha!
        </p>
        <p>
          useEffect har render par chalta hai. Iska matlab hai ki jab count
          badalta hai, ek render hota hai, jo phir dusre effect ko trigger karta
          hai.
        </p>
        <p>
          "hum ye nahi chahte. Side effects kab run ho, isko control karne ke
          liye several ways hain."
        </p>
        <p>
          Hamesha second parameter ko include karna chahiye, jo ek array accept
          karta hai. Is array mein useEffect ko optional taur par dependencies
          bhi diye ja sakte hain.
        </p>
        <h3>Example</h3>
        <p>1. No dependency (jab humne koi dependency pass nahi ki ho)</p>
        <p className="bgExample">
          <pre>
            {`
useEffect(() => {
  //every render pe run karega
});`}
          </pre>
        </p>
        <h3>Example</h3>
        <p>2. An empty array (jab empty array ho dependency):</p>
        <p className="bgExample">
          <pre>
            {`
    useEffect(() => {
      //Runs only on the first render
    }, []);`}
          </pre>
        </p>
        <h3>Example</h3>
        <p>
          3. Props or state values (jab dependency mein prop ya state value di
          gai ho)
        </p>
        <p className="bgExample">
          <pre>
            {`
 useEffect(() => {
  //first render pe run karega
  //And any time jab koi dependency ki value change hogi tab render hoga
}, [prop, state]);`}
          </pre>
        </p>
        <p>
          Toh, is samasya ko dur karne ke liye, chaliye is effect ko sirf
          initial render par run karaate hain.
        </p>
        <h3>Example</h3>
        <p>only run the effect on first render</p>
        <pre className="bgExample">
          {`
 import { useState, useEffect } from "react";
 import ReactDOM from "react-dom/client";
 
 function Timer() {
   const [count, setCount] = useState(0);
 
   useEffect(() => {
     setTimeout(() => {
       setCount((count) => count + 1);
     }, 1000);
   }, []); // < sirf first render par run kare iske liye yaha par empty brackets added hain dependency jaisa upar bataya gya hai
 
   return <h1>I've rendered {count} times!</h1>;
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Timer />);`}{" "}
        </pre>
        <h3>Example</h3>
        <p>
          Yahaan ek <span className="clrRed">useEffect</span> Hook ka ek example
          hai jo ek variable par dependent hai. Agar count variable update hota
          hai, toh effect phir se run hoga.
        </p>
        <pre className="bgExample">
          {`
 import { useState, useEffect } from "react";
 import ReactDOM from "react-dom/client";
 
 function Counter() {
   const [count, setCount] = useState(0);
   const [calculation, setCalculation] = useState(0);
 
   useEffect(() => {
     setCalculation(() => count * 2);
   }, [count]); // <- add the count variable here
 
   return (
     <>
       <p>Count: {count}</p>
       <button onClick={() => setCount((c) => c + 1)}>+</button>
       <p>Calculation: {calculation}</p>
     </>
   );
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Counter />);`}
        </pre>
        <p>
          Agar multiple dependencies hain, toh unko useEffect ki dependency
          array mein include kiya jaana chahiye.
        </p>
        <div className="bgYellow">
          <h4>Real Life Example of useEffect Hook</h4>
          <p>
            Ek common real-life example useEffect ka istemal karte hue, data
            fetching aur API calls ke liye hota hai. Niche ek simple example
            hai, jisme hum useEffect ka istemal karke fake API se data fetch
            karte hain.
          </p>
          <p className="bgExample">
            <pre>
              {`import React, { useState, useEffect } from 'react';

const DataFetchingExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fake API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
        
        // Data fetch
        const response = await fetch(apiUrl);
        const result = await response.json();

        // Set state based on fetched data
        setData(result);
        setLoading(false);
      } catch (error) {
        // Handle error
        setError(error);
        setLoading(false);
      }
    };

    // Call fetchData function
    fetchData();
  }, []); // Empty dependency array ensures that useEffect runs only once on component mount

  // JSX rendering based on state
  return (
    <div>
      <h2>Data Fetching Example</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>User ID: {data.userId}</p>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default DataFetchingExample;

         `}
            </pre>
          </p>
          <p>
            Is example mein, useEffect ka istemal kiya gaya hai to fetch data
            jab component mount hota hai ([] dependency array se ensure kiya
            gaya hai ki useEffect sirf ek baar chale). fetchData function async
            tareeke se data fetch karti hai aur state ko set karti hai. State ke
            changes ke basis par, appropriate JSX render hota hai, jisme
            loading, error, aur fetched data ko handle kiya gaya hai.
          </p>
        </div>
        <h2>Effect Cleanup process</h2>
        <p>
          Kuch effects ko memory leaks kam karne ke liye cleanup ki zarurat hoti
          hai.
        </p>
        <p>
          Timeouts, subscriptions, event listeners, aur doosre effects jinki
          zarurat nahi reh gai ho, unhe dispose kiya jaana chahiye.
        </p>
        <p>
          Hum ye useEffect Hook ke end mein ek return function include karke
          karte hain."
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
  import { useState, useEffect } from "react";
  import ReactDOM from "react-dom/client";
  
  function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
    }, []);
  
    return <h1>I've rendered {count} times!</h1>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Timer />);`}
          </pre>
        </p>
        <p className="bgYellow">
          Note that : Timer ko clear karne ke liye, humein ise ek naam dena
          pada.
        </p>
    </div>
  )
}
