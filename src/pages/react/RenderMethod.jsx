import React from 'react'

export default function RenderMethod() {
  return (
    <div>
        <h2>React Render HTML</h2>
        <p>
          React ka goal hai in many ways ke ek web page mein HTML ko render
          karna hai.
        </p>
        <p>
          React HTML ko web page par createRoot( ) naam ke ek function aur uske
          render( ) method ka istemal karke render karta hai.
        </p>
        <h3>The createRoot Function</h3>
        <p>createRoot( ) function ek argument leta hai, ek HTML element</p>
        <p>
          Is function ka purpose yeh hai ki define kare ki kahan ek React
          component ko dikhaya jana chahiye.
        </p>
        <h3>The render Method</h3>
        <p>
          Phir render() method ko call kiya jata hai taki define ho sake ki
          kaunsa React component render kiya jana chahiye.
        </p>
        <p>Lekin kahaan render karein?</p>
        <p>
          Aapke React project ke root directory mein ek aur folder hai jiska
          naam hai <span className="clrRed">"public"</span>. Is folder mein ek{" "}
          <span className="clrRed">index.html</span> file hai.
        </p>
        <p>
          Aapko is file ke body mein ek{" "}
          <span className="clrRed">{`<div>`} </span>dikhayi dega. Yahi par
          hamara React application render hoga.
        </p>
        <h3>Example</h3>
        <p>Ek paragraph ko id "root" wale element ke andar display karien</p>
        <p className="bgExample">
          <pre>
            {`
 const container = document.getElementById('root');
 const root = ReactDOM.createRoot(container);
 root.render(<p>Hello</p>);`}
          </pre>
        </p>
        <p>result id "root" wale {`<div>`} element mein display hota hai</p>
        <p className="bgExample">
          <pre>
            {`<body>
      <div id="root"></div>
      </body>`}
          </pre>
        </p>
        <p>
          Dhyaan rahe ki element id ko "root" hi kaha jana jaruri nahi hai,
          lekin yeh ek standard convention hai.
        </p>
        <h3>The HTML Code</h3>
        <p>
          Is tutorial mein istemal ki gayi HTML code JSX ka istemal karta hai,
          jo aapko JavaScript code ke andar HTML tags likhne me help karti hai:
        </p>
        <p>
          Ghabrayein nahi agar syntax naya lag raha hai, aap agle chapter mein
          JSX ke baare mein aur bhi seekhenge.
        </p>
        <h3>Example</h3>
        <p>
          Ek variable banaiye jo HTML code ko contain kare aur usse "root" node
          mein dikhayein:
        </p>
        <p className="bgExample">
          <pre>
            {`
        const myelement = (
            <table>
              <tr>
                <th>Name</th>
              </tr>
              <tr>
                <td>John</td>
              </tr>
              <tr>
                <td>Elsa</td>
              </tr>
            </table>
          );
          
          const container = document.getElementById('root');
          const root = ReactDOM.createRoot(container);
          root.render(myelement);
        `}
          </pre>
        </p>
        <h3>The Root Node</h3>
        <p>
          Root node woh HTML element hai jahan aap result dikhana chahte hain.
        </p>
        <p>
          Yeh React dwara manage kiye gaye content ke liye ek container ki tarah
          hai.
        </p>
        <p>
          {" "}
          ise ek {`<div>`} element hone ki jarurat nahi hai aur isme id='root'
          hone ki bhi zarurat nahi hai:
        </p>
        <h3>Example</h3>
        <p>Root node ko aap jo kuch bhi chahein vo naam de sakte hain:</p>
        <p className="bgExample">
          <pre>
            {`
<body>

<header id="Labbo"></header>

</body>

`}
          </pre>
        </p>
        <p>Display the result in the{` <header id="Labbo"> `} element:</p>
        <p className="bgExample">
          <pre>
            {`
        const container = document.getElementById('Labbo');
        const root = ReactDOM.createRoot(container);
        root.render(<p>Namaste</p>);
        `}
          </pre>
        </p>
    </div>
  )
}
