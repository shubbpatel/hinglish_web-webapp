import React from 'react'

export default function UseContextHook() {
  return (
    <div>
         <h2>
          <span className="bgRed">useContext</span> Hook
        </h2>
        <p>React Context ek tareeka hai state ko globally manage karne ka.</p>
        <p>
          Ye useState Hook ke saath istemal kiya ja sakta hai taki state ko deep
          nested components ke beech mein share karna aasaan ho, jo ke sirf
          useState use karke par mushkil hota hai.
        </p>
        <h2>Problem</h2>
        <p>
          State stack mein highest parent components mein rakha jana chahiye jo
          state ko access karna chahte hain{" "}
        </p>
        <p>
          Iska illustration ke liye, hamare paas kai nested components hain.
          Stack ke upar aur neeche wale component ko state ki access ki zarurat
          hai
        </p>
        <p>
          Isko Context hook ke bina karne ke par, hamein har nested component ke
          through state ko 'props' ke roop mein bhejna hoga. jisko 'prop
          drilling' kehte hain.
        </p>
        <h3>Example</h3>
        <p>
          Passing "props" through nested components (Nested components ke
          through props pass karne pe)
        </p>
        <p className="bgExample">
          <pre>
            <code>
              {`
 import { useState } from "react";
 import ReactDOM from "react-dom/client";
 
 function Component1() {
   const [user, setUser] = useState("Jesse Hall");
   
   return (
     <>
     <h1>Hello {user}!</h1>
     <Component2 user={user} />
     </>
     );
    }
    
    function Component2({ user }) {
      return (
        <>
        <h1>Component 2</h1>
        <Component3 user={user} />
        </>
        );
      }
      
      function Component3({ user }) {
        return (
          <>
          <h1>Component 3</h1>
          <Component4 user={user} />
          </>
          );
        }
        
        function Component4({ user }) {
          return (
            <>
            <h1>Component 4</h1>
            <Component5 user={user} />
            </>
            );
          }
          
          function Component5({ user }) {
            return (
              <>
              <h1>Component 5</h1>
              <h2>Hello {user} again!</h2>
              </>
              );
            }
            
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<Component1 />);`}
            </code>
          </pre>
        </p>
        <p>
          "even though components 2,3,4 ko state ki jaruart nahi thi, lekin
          state ko component 5 tak pahunchane ke liye usey unke through aage
          bhejna pada."
        </p>

        <h2>Solution</h2>
        <p>iska Solution hai context create karna</p>
        <h4>Create Context</h4>
        <p>
          To create context, you must Import{" "}
          <span className="clrRed">createContext</span> and initialize it:
        </p>
        <p className="bgExample">
          <pre>
            {`import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()`}
          </pre>
        </p>
        <p>
          next step hai Context Provider ka istemaal karke un component ke tree
          ko wrap karna jinko state Context ki zarurat hai.
        </p>
        <div className="bgYellow">
          <h4>Real Life Example of useContext Hook</h4>
          <p>
            Ek common real-life example useContext ka istemal karte hue,
            multiple components ke beech data ko share karna hai, jaise ki theme
            (dark mode ya light mode) ko. Niche ek simple example hai, jisme hum
            theme ko global context ke through share karte hain.
          </p>
          <p className="bgExample">
            <pre>
              {`
            import React, { createContext, useContext, useState } from 'react';

            // ThemeContext create karna
            const ThemeContext = createContext();
            
            // Custom hook banakar ThemeContext ka istemal karna
            const useTheme = () => {
              const context = useContext(ThemeContext);
              if (!context) {
                throw new Error('useTheme must be used within a ThemeProvider');
              }
              return context;
            };
            
            // ThemeProvider component create karna
            const ThemeProvider = ({ children }) => {
              const [theme, setTheme] = useState('light');
            
              const toggleTheme = () => {
                setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
              };
            
              return (
                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                  {children}
                </ThemeContext.Provider>
              );
            };
            
            // Child component create karna jo useContext ka istemal kare
            const ThemedComponent = () => {
              const { theme, toggleTheme } = useTheme();
            
              return (
                <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff', padding: '20px', textAlign: 'center' }}>
                  <h2>Themed Component</h2>
                  <p>Current Theme: {theme}</p>
                  <button onClick={toggleTheme}>Toggle Theme</button>
                </div>
              );
            };
            
            // Parent component create karna jisme ThemeProvider wrap ho
            const App = () => {
              return (
                <ThemeProvider>
                  <ThemedComponent />
                </ThemeProvider>
              );
            };
            
            export default App;
            `}
            </pre>
          </p>
          <p>
            Is example mein, useContext ka istemal ThemedComponent component
            mein theme aur toggleTheme function ko access karne ke liye kiya
            gaya hai. ThemedComponent ke bina hi direct access karne ke liye,
            useTheme custom hook ka istemal kiya gaya hai. ThemeProvider
            component, ThemeContext.Provider ke through, theme state aur
            toggleTheme function ko provide karta hai. Iske alawa, jab button
            click hota hai, theme change hota hai aur ye change ThemedComponent
            ko reflect hota hai.
          </p>
        </div>
        <h4>Context Provider </h4>
        <p>
          child components ko Context Provider mein wrap karein aur state ki
          value provide karein
        </p>
        <p className="bgExample">
          <pre>
            {`function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello{user}!</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}`}
          </pre>
        </p>
        <h2>
          Use the <span className="clrRed">useContext</span> Hook
        </h2>

        <p>
          child component mein Context ka istemal karne ke liye, hamein{" "}
          <span className="clrRed">useContext</span> Hook ka istemal karna padta
          hai."
        </p>
        <p>
          First, <span className="clrRed">useContext</span> include karo in the
          import statement:
        </p>
        <p className="bgExample">
          {`import { useState, createContext, useContext } from "react";`}
        </p>
        <p>Then aap user Context all components mein access kar sakte hain:</p>
        <p className="bgExample">
          <pre>
            {`function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>Hello {user} again!</h2>
    </>
  );
}`}
          </pre>
        </p>
        <h2>Example</h2>
        <p>example using React Context :</p>
        <p className="bgExample">
          <pre>
            {`import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}!</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>Hello {user} again!</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);`}
          </pre>
        </p>
    </div>
  )
}
