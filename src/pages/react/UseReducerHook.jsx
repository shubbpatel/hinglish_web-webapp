import React from 'react'

export default function UseReducerHook() {
  return (
    <div className='bContainer container'>
         <h2>
          React <span className="bgRed">useReducer</span> Hook
        </h2>
        <p>
          useReducer Hook useState Hook ke kuch similar hai, lekin thoda alag
          tareeke se kaam karta hai. useReducer Hook ka main goal complex state
          management ko handle karna hai.
        </p>
        <p>
          useReducer Hook custom state logic implement karne mein madad karta
          hai. Iska use karke aap complex state logic ko asaan tareeke se handle
          kar sakte hain. Iska use ek reducer function ke through state ko
          update karna hai.
        </p>
        <p>
          Yadi aapke component ka state bahut complex hai aur usme multiple
          fields hain jo alag-alag tareeke se update hote hain, to useReducer ek
          acchi choice ho sakti hai.
        </p>
        <p>
          Agar aapko lagta hai ki aap more than one state variables ko track kar
          rahe hain jo complex logic par depend karte hain, to useReducer ka
          istemal beneficial ho sakta hai. Is Hook ki madad se aap ek custom
          reducer function ka upayog karke state ko manage kar sakte hain, aur
          isse aapko component ke state management mein flexibility milti hai.
        </p>
        <h2>Syntax </h2>
        <p>useReducer Hook do arguments accept karta hai.</p>
        <p>
          1. educer Function: Ye ek function hai jo state ko modify karta hai.
          Ye function do parameters accept karta hai: current state (state) aur
          action.
        </p>
        <p>
          2. Initial State: Ye woh initial value hai jo aap apne state ko set
          karne ke liye istemal karte hain.
        </p>
        <p className="bgYellow">{`useReducer(<reducer>, <initialState>)`}</p>
        <p>
          <span className="clrRed">reducer</span> function mein aap apni custom
          state logic rakh sakte hain.{" "}
          <span className="clrRed">initialState</span> generally ek simple value
          ho sakta hai, lekin aksar ye ek object bhi hota hai, jise aap apne
          component ke state ka initial structure define karne ke liye use karte
          hain.
        </p>
        <p>
          useReducer Hook current state aur ek dispatch method return karta hai.
        </p>
        <p>
          Yeh state ko modify karne ke liye actions ko dispatch karne ka kaam
          karta hai. Dispatch function ko action object ke saath call kiya jata
          hai, jiska structure aap khud tay karte hain. Yeh action object
          reducer function ke through pass hota hai, jahan aap state ko modify
          kar sakte hain.
        </p>
        <p>example of useReducer in a counter app:</p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
       import { useReducer } from "react";
       import ReactDOM from "react-dom/client";
       
       const initialTodos = [
         {
           id: 1,
           title: "Todo 1",
           complete: false,
         },
         {
           id: 2,
           title: "Todo 2",
           complete: false,
         },
       ];
       
       const reducer = (state, action) => {
         switch (action.type) {
           case "COMPLETE":
             return state.map((todo) => {
               if (todo.id === action.id) {
                 return { ...todo, complete: !todo.complete };
               } else {
                 return todo;
               }
             });
           default:
             return state;
         }
       };
       
       function Todos() {
         const [todos, dispatch] = useReducer(reducer, initialTodos);
       
         const handleComplete = (todo) => {
           dispatch({ type: "COMPLETE", id: todo.id });
         };
       
         return (
           <>
             {todos.map((todo) => (
               <div key={todo.id}>
                 <label>
                   <input
                     type="checkbox"
                     checked={todo.complete}
                     onChange={() => handleComplete(todo)}
                   />
                   {todo.title}
                 </label>
               </div>
             ))}
           </>
         );
       }
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<Todos />);`}
          </pre>
        </p>
        <p>Ye sirf todo ke complete status ko track karne ka logic hai.</p>
        <p>
          Sare todo ko add, delete, aur complete karne ka pura logic ek hi{" "}
          <span className="clrRed">useReducer</span> Hook me ho sakta hai, aur
          isme aur actions add karke kiya ja sakta hai.
        </p>
    </div>
  )
}
