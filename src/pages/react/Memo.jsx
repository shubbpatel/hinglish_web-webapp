import React from 'react'

export default function Memo() {
  return (
    <div className='bContainer container'>
          <h2>React Memo</h2>

<p>
  <span className="clrRed">Memo</span> ka istemal karne se React
  component ko skip kar dega agar uske props mein koi change nahi hui
  hai.
</p>
<p>ye performance improve performance sakta hai.</p>
<h2>Problem</h2>
<p>
  Is example mein, <span className="clrRed">Todos</span> component
  re-render hota hai, tab bhi jab todos mein koi change nahi hua hai.
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
const [todos, setTodos] = useState(["todo 1", "todo 2"]);

const increment = () => {
setCount((c) => c + 1);
};

return (
<>
<Todos todos={todos} />
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
  <span className="clrRed">Todos.js</span>
  <pre className="bgExample">
    {`
const Todos = ({ todos }) => {
console.log("child render");
return (
<>
  <h2>My Todos</h2>
  {todos.map((todo, index) => {
    return <p key={index}>{todo}</p>;
  })}
</>
);
};

export default Todos;`}{" "}
  </pre>
</p>
<p>
  Jab aap increment button par click karte hain, to{" "}
  <span className="clrRed">Todos</span> component re-render hota hai.
</p>
<p>
  Agar yah component complex hota, to yah performance issue kar sakta
  tha.
</p>
<h2>Solution</h2>
<p>
  iss issue ko fix karne ke liye, we can use{" "}
  <span className="clrRed">memo</span>.
</p>
<p>
  <span className="clrRed">Memo</span> ka use karen, jisse{" "}
  <span className="clrRed">Todos</span> component ko needlessly
  re-render hone se roka ja sake.
</p>
<p>
  <span className="clrRed">Todos</span> component export ko{" "}
  <span className="clrRed">memo</span> ke inside wrap karein:
</p>
<h3>Example</h3>
<p>
  <span className="clrRed">index.js:</span>
  <pre className="bgExample">
    {`
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
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
  <span className="clrRed">Todos.js:</span>
  <pre className="bgExample">
    {`
import { memo } from "react";

const Todos = ({ todos }) => {
 console.log("child render");
 return (
   <>
     <h2>My Todos</h2>
     {todos.map((todo, index) => {
       return <p key={index}>{todo}</p>;
     })}
   </>
 );
};

export default memo(Todos);`}
  </pre>
</p>
<p>
  Ab <span className="clrRed">Todos</span> component sirf tab re-render
  hoga jab usko props ke through diye gaye{" "}
  <span className="clrRed">todos</span> update honge.
</p>
    </div>
  )
}
