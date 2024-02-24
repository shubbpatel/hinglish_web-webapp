import React from 'react'

export default function UseCallbackHok() {
  return (
    <div>
        <h2>
          <span className="bgRed">useCallback</span> Hook
        </h2>
        <p>
          React useCallback Hook ek memoized callback function return karta hai.
        </p>
        <p>
          Memoization ko ek value ko cache karna ke roop mein samjhein, jisse
          use dobara calculate karne ki zarurat na ho.
        </p>
        <p>
          Isse hume resource-intensive functions ko alag karne me help milti
          hai, taki ye har render par automatically run na ho.
        </p>
        <p>
          The useCallback Hook sirf tabhi chalta hai jab uske kisi dependency me
          koi update hota hai.
        </p>
        <p>ye performance improve kar sakta hai.</p>
        <p>
          The useCallback aur useMemo Hooks similar hote hain. Main difference
          yeh hai ki useMemo ek memoized value return karta hai, jabki
          useCallback ek memoized function return karta hai. Aap useMemo ke
          baare mein adhik jaankari aage padh sakte hain.
        </p>
        <h2>Problem </h2>
        <p>
          One reason to use useCallback is to prevent a component from
          re-rendering unless its props have changed.
        </p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">index.js</span>
          <pre className="bgExample">
            {`
       import { useState } from "react";
       import ReactDOM from "react-dom/client";
       import Todos from "./Todos";
       
       const App = () => {
         const [count, setCount] = useState(0);
         const [todos, setTodos] = useState([]);
       
         const increment = () => {
           setCount((c) => c + 1);
         };
         const addTodo = () => {
           setTodos((t) => [...t, "New Todo"]);
         };
       
         return (
           <>
             <Todos todos={todos} addTodo={addTodo} />
             <hr />
             <div>
               Count: {count}
               <button onClick={increment}>+</button>
             </div>
           </>
         );
       };
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<App />);`}
          </pre>
        </p>
        <p>
          <span className="clrRed">Todo.js</span>
          <pre className="bgExample">
            {`import { memo } from "react";

  const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  };
  
  export default memo(Todos);`}
          </pre>
        </p>
        <p>Try running this and click the count increment button.</p>
        <p>
          app dekhenge ki Todos component re-render hota hai, jabki todos mein
          koi change nahi hota
        </p>
        <p>
          Iska kaaran kya hai? Hum memo ka istemaal kar rahe hain, isliye Todos
          component re-render nahi hona chahiye, kyun ki na to todos state badal
          rahi hai aur na hi addTodo function count ko badhane par badal rahi
          hai.
        </p>
        <p>Iska karan hai 'referential equality'.</p>
        <p>
          Har baar jab ek component re-render hota hai, uske functions fir se
          create ho jaate hain. Is wajah se addTodo function asal mein badal
          gayi hai.
        </p>
        <h2>Solution</h2>
        <p>
          Isko theek karne ke liye, hum useCallback hook ka istemal kar sakte
          hain, taki yeh function har baar create na ho jabki zarurat na ho.
        </p>
        <p>
          Needlessly re-rendering se bachne ke liye useCallback Hook ka istemal
          karo Todos component mein:
        </p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">index.js</span>
          <pre className="bgExample">
            {`
        import { useState, useCallback } from "react";
        import ReactDOM from "react-dom/client";
        import Todos from "./Todos";
        
        const App = () => {
          const [count, setCount] = useState(0);
          const [todos, setTodos] = useState([]);
        
          const increment = () => {
            setCount((c) => c + 1);
          };
          const addTodo = useCallback(() => {
            setTodos((t) => [...t, "New Todo"]);
          }, [todos]);
        
          return (
            <>
              <Todos todos={todos} addTodo={addTodo} />
              <hr />
              <div>
                Count: {count}
                <button onClick={increment}>+</button>
              </div>
            </>
          );
        };
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
        `}
          </pre>
        </p>
        <p>
          <span className="clrRed">Todo.js</span>
          <pre className="bgExample">
            {`
       import { memo } from "react";

       const Todos = ({ todos, addTodo }) => {
         console.log("child render");
         return (
           <>
             <h2>My Todos</h2>
             {todos.map((todo, index) => {
               return <p key={index}>{todo}</p>;
             })}
             <button onClick={addTodo}>Add Todo</button>
           </>
         );
       };
       
       export default memo(Todos);`}
          </pre>
        </p>
        <p>
          Ab Todos component tabhi re-render hoga jab todos prop change hoga.
        </p>
    </div>
  )
}
