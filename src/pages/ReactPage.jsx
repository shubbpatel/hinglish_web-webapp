import React from "react";
import "./style/react.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bContainer">
        <h1 style={{paddingLeft:'5px'}}>React</h1>
        <div className="index">
          <a href="#top">Introduction</a>
          <a href="#ES6">React ES6</a>
          <a href="#jsx">React JSX</a>
          <a href="#components">React Components</a>
          <a href="#props">React Props</a>
          <a href="#conditionals">React Conditionals</a>
          <a href="#lists">React Lists</a>
          <a href="#forms">React Forms</a>
          <a href="#router">React Router</a>
          <a href="#Hooks">React Hooks</a>
        </div>
      <div className="container">
        <h2 id="top">Getting Started</h2>
        <p>
          React ek JavaScript library hai jise user interfaces banane ke liye
          design kiya gaya hai.
        </p>
        <p>React ka istemal single-page applications banane mein hota hai.</p>
        <p>React hamen reusable UI components banane me madad karta hai.</p>
        <h2>Learn by Examples</h2>
        <p className="bgExample">
          <pre>
            {` import React from 'react'; import ReactDOM from 'react-dom/client';
          function Hello(props){" "}
          {
              return <h1>Hello World!</h1>;
            }
            const container = document.getElementById("root"); const root =
            ReactDOM.createRoot(container);
        root.render(<Hello />); `}
          </pre>
        </p>
        <h2>Create React App</h2>
        <p>
          React sikhne aur test karne ke liye, aapko apne computer par ek React
          Environment set up karna chahiye. Is tutorial mein, create-react-app
          ka istemal kiya gaya hai. create-react-app ek official tareeka hai
          React applications banane ka. create-react-app ka istemal karne ke
          liye Node.js ki zarurat hoti hai. Apne terminal ko us directory mein
          kholiye jahan aap apni application banane chahte hain. Is command ko
          chalaiye to ek React application my-react-app naam se ban jayegi:
        </p>
        <p className="bgBlue">npx create-react-app my-react-app</p>
        <p>
          create-react-app sab kuch set up karega jo aapko ek React application
          chalane ke liye zaruri hogi."
        </p>
        <br />
        <h2>Run the React Application</h2>
        <p>my-react-app directory mein jaane ke liye is command ko chalaiye:</p>
        <p className="bgBlue">cd my-react-app</p>
        <p>
          React application my-react-app ko chalane ke liye is command ko
          execute karein:
        </p>
        <p className="bgBlue">npm start</p>
        <p>
          Ek naya browser window khulegi jisme aapke naye banaye gaye React App
          honge! Agar nahi khulta, to apne browser ko kholiye aur address bar
          mein localhost:3000 likhiye.
        </p>
        <img src="" alt="" />
        <br />
        <h2>Aapko Pehle Se Kya Pata Hona Chahiye ?</h2>
        <p>
          React.JS shuru karne se pehle, aapko inn topics ko pehle padhna
          chahiye:
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          Aapko ECMAScript 6 (ES6) mein aaye naye JavaScript features ke saath
          kuch anubhav bhi hona chahiye; aap inke baare mein React ES6 chapter
          mein seekhenge.
        </p>
        <br />
        <h2>What is React</h2>
        <p>
          React, ko ek frontend JavaScript framework bhi kaha jata hai, Facebook
          dwara banayi gayi ek JavaScript library hai. React UI components
          banane ka ek tool hai.
        </p>
        <br />
        <h2>React Kaise kaam Karta hai ?</h2>
        <p className="bgYellow">React memory mein ek VIRTUAL DOM banata hai</p>
        <p>
          Browser ke DOM me sidha badlaav karne ki jagah, React memory mein ek
          virtual DOM banata hai, jahan par sab jaruri badlaav hota hai, uske
          baad jo jaruri changes hain browser ke DOM mein kiya jata hai.
        </p>
        <p className="bgYellow">
          React keval tabhi changes karta hai jab avashyak ho!
        </p>
        <p>
          React ye jaan leta hai ki kaun-kya change hua hai, aur sirf wahi
          change karta hai jo jaruri hai. Aap is tutorial ke baki hisse mein ye
          samajhenge ki React ye kaise karta hai
        </p>
        <br />
        <h2 id="ES6">What is ES 6 ? (ES 6 kya hai ?)</h2>
        <p>
          ES6 ka matlab hai ECMAScript 6. ECMAScript ko JavaScript ko
          standardize karne ke liye banaya gaya tha, aur ES6 ECMAScript ka 6th
          version hai, jo 2015 mein launch hua tha, aur ise ECMAScript 2015 bhi
          kaha jata hai.
        </p>
        <h2>Why Should I Learn ES6? (Mujhe ES 6 kyu seekhna chahiye ?)</h2>
        <p>
          React ES6 ka istemal karta hai, aur aapko kuch naye features ke saath
          familiar hona chahiye, jaise ki:
          <ul>
            <li>Classes</li>
            <li>Arrow Functions</li>
            <li>Variables (let, const, var)</li>
            <li>Array Methods like .map()</li>
            <li>Destructuring</li>
            <li>Modules</li>
            <li>Ternary Operator</li>
            <li>Spread Operator</li>
          </ul>
        </p>
        <br />
        <h2>React ES 6 Classes</h2>
        <h3>Classes</h3>
        <p>
          Ek class ek prakar ka function hota hai, lekin isse shuru karne ke
          liye hum 'function' shabd ka istemal nahi karte, hum 'class' shabd ka
          istemal karte hain, aur properties ek 'constructor()' method ke andar
          assign kiye jaate hain
        </p>
        <h3>Example</h3>
        <p>A simple class constructor:</p>
        <p className="bgExample">
          <pre>
            {`class Bike {
              constructor(name) {
                  this.brand = name;
                }
            } `}
          </pre>
        </p>
        <p className="bgYellow">
          Class ke naam ka dhyan dijiye. Humne naam "bike" ko ek uppercase
          character ke saath shuru kiya hai. Ye ek class ke liye ek standard
          naming convention hai.
        </p>
        <p>Ab aap Car class ka istemal karke objects bana sakte hain</p>
        <br />
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`class Bike {
              constructor(name) {
                  this.brand = name;
                }
            }
            
        const mybike = new bike("BMW");`}
          </pre>
        </p>
        <br />
        <p className="bgYellow">
          Note: Constructor function autometically call ho jaati hai jab object
          initialize hota hai{" "}
        </p>
        <br />
        <h2>Method in Classes</h2>
        <p>Aap ek class mein apne methods add kar sakte hain.</p>
        <h4>Example</h4>
        <p>Ek method banaiye jiska naam "present" ho:</p>
        <p className="bgExample">
          <pre>
            {`class Truck {
              constructor(name) {
                  this.brand = name;
                }
                
                present() {
    return 'I have a ' + this.brand;
}
}

const mytruck = new Truck("Tata");
mytruck.present(); `}
          </pre>
        </p>
        <p>
          Jaise ki aap upar ke example mein dekh sakte hain, aap method ko
          object ke method ka naam refer karte hue bulate hain, jise parentheses
          ke saath follow kiya jata hai (parameters parentheses ke andar jaate
          hain).
        </p>
        <h3>Class Inheritance</h3>
        <p>
          Class inheritance banane ke liye, 'extends' shabd ka istemal karein.
        </p>
        <p>
          Ek class jise class inheritance ke saath banaya gaya hai, wo dusri
          class ke sabhi methods ko inherit karti hai:
        </p>
        <h3>Example</h3>
        <p>
          Ek class banaiye jiska naam "Model" hai, jo "Truck" class ke sabhi
          methods ko inherit karegi:
        </p>
        <p className="bgExample">
          <pre>
            {`class Truck {
              constructor(name) {
                  this.brand = name;
                }
                
  present() {
      return 'I have a ' + this.brand;
    }
}

class Model extends Truck {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
}
const mytruck = new Model("Tata", "Ashok leyland");
mytruck.show(); `}
          </pre>
        </p>
        <p>super() method parent class ko refer karta hai.</p>
        <p>
          "Constructor method mein super() method ko bulakar, hum parent class
          ke constructor method ko call karte hain aur parent class ke
          properties aur methods ka upayog karte hain.
        </p>
        <br />
        <br />
        <h2>ES6 Arrow Functions</h2>
        <p>
          in simple words: Arrow functions humein chhoti syntax mein function
          likhne me madad karte hain
        </p>
        <h3>Example </h3>
        <p>before: </p>
        <p className="bgExample">
          {`hello = function() {
  return "Hello World!";
} `}
        </p>
        <br />
        <h3>Example</h3>
        <p>with Arrow Function :</p>
        <p className="bgExample">
          {` hello = () => {
  return "Hello World!";
} `}
        </p>
        <p>
          <br />
          Yeh aur bhi chhota ho jaata hai! Agar function mein sirf ek statement
          hai, aur woh statement ek value return karta hai, to aap brackets aur
          return keyword ko hata sakte hain:
        </p>
        <h3>Example</h3>
        <p>Arrow Functions ka Return Value by Default:</p>
        <p className="bgExample">{`hello = () => "Hello World!"; `}</p>
        <p className="bgYellow">
          Note: Ye kaam tabhi karta hai agar function mein sirf ek statement hai
        </p>
        <p>
          Agar aapke pas parameters hain, to aap unhe parentheses ke andar pass
          karte hain:
        </p>
        <h3>Example</h3>
        <p>Arrow Function With Parameters:</p>
        <p className="bgExample">{` hello = (val) => "Hello " + val; `}</p>
        <p>
          Yadi aapke paas sirf ek parameter hai, to aap parentheses ko bhi chhod
          sakte hain:
        </p>
        <h3>Example</h3>
        <p>Arrow Function Without Parentheses:</p>
        <p className="bgExample">{`hello = val => "Hello " + val; `}</p>
        <br />
        <h2>
          What About <span style={{ color: "red" }}>this</span>?
        </h2>
        <p>
          'this' ka handling regular functions ke comparison mein arrow
          functions mein alag hai.
        </p>
        <p>
          Saral shabdon mein, arrow functions mein 'this' ka binding nahi hota.
        </p>
        <p>
          Sadharan functions mein 'this' keyword uss object ko represent karta
          hai jisne function call kiya, jo ki window, document, ek button ya
          kuch bhi ho sakta hai.
        </p>
        <p>
          Arrow functions mein, 'this' keyword hamesha woh object ko represent
          karta hai jo arrow function ko define karta hai.
        </p>
        <p>Is difference ko samajhne ke liye, do examples dekhte hain.</p>
        <p>
          Dono examples ek method ko do baar call karte hain, pehli baar jab
          page load hota hai, aur doosri baar jab user ek button par click karta
          hai
        </p>
        <p>
          Pehla example regular function ka istemal karta hai, aur doosra
          example ek arrow function ka istemal karta hai.
        </p>
        <p>
          result dikhata hai ki pehla example do alag-alag objects (window aur
          button) ko return karta hai, aur doosra example Header object ko do
          baar return karta hai
        </p>
        <h3>Example</h3>
        <p>
          regular function mein, 'this' uss object ko represent karta hai jo
          function call karta hai:
        </p>
        <p className="bgExample">
          <pre>
            {`class Header {
              constructor() {
                  this.color = "Red";
                }
                
                //Regular function:
                changeColor = function() {
                    document.getElementById("demo").innerHTML += this;
                }
            }
            
            const myheader = new Header();
            
            //The window object calls the function:
            window.addEventListener("load", myheader.changeColor);
            
            //A button object calls the function:
            document.getElementById("btn").addEventListener("click", myheader.changeColor);  `}
          </pre>
        </p>
        <h3>Example</h3>
        <p>
          Arrow function mein, 'this' Header object ko represent karta hai,
          chahe jo bhi function ko call kare:
        </p>
        <p className="bgExample">
          <pre>
            {`class Header {
              constructor() {
                  this.color = "Red";
                }
                
                //Arrow function:
                changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor); `}
          </pre>
        </p>
        <p>
          Jab aap functions ke saath kaam kar rahe hain, toh in differences ko
          yaad rakhein. Kabhi-kabhi regular functions ka behavior aapko chahiye
          hota hai, agar nahi, to arrow functions ka istemal karein."
        </p>
        <br />
        <h2>ES6 Variables</h2>
        <p>
          ES6 se pehle aapke variables ko define karne ka ek hi tareeka tha:
          'var' keyword ka istemal. Agar aap unhe define nahi karte the, toh woh
          global object ko assign ho jaate the. Lekin agar aap strict mode mein
          nahi the, toh aapko error milta tha agar aapke variables undefined the
        </p>
        <p>
          Ab, ES6 ke saath, aapke pas variables ko define karne ke liye teen
          tareeke hain: <span style={{ color: "green" }}>var</span> ,{" "}
          <span style={{ color: "purple" }}>let</span>, aur{" "}
          <span style={{ style: "pink" }}>const</span>.
        </p>
        <h3>Example</h3>
        <p>var</p>
        <p className="bgExample">var x = 5.6;</p>
        <p>
          Agar aap kisi function ke bahar{" "}
          <span style={{ color: "green" }}>var</span> ka istemal karte hain, toh
          woh global scope mein hota hai."
        </p>
        <p>
          Agar aap kisi function ke andar{" "}
          <span style={{ color: "green" }}>var</span> ka istemal karte hain, toh
          woh uss function ka hissa ban jata hai (it belongs to that function).
        </p>
        <p>
          Agar aap <span style={{ color: "green" }}>var</span> ka istemal kisi
          block ke andar karte hain, jaise ki ek for loop mein, toh woh variable
          uss block ke bahar bhi available rahega.
        </p>
        <p className="bgYellow">
          <span style={{ color: "green" }}>var</span> ka ek function scope hota
          hai, block scope nahi.
        </p>
        <h3>Example</h3>
        <p>let</p>
        <p className="bgExample">let x = 45.44;</p>
        <p>
          <span style={{ color: "purple" }}>let</span>{" "}
          <span style={{ color: "green" }}>var</span> ka block scoped version
          hai, aur yeh uss block (ya expression) tak hi limited hota hai jahan
          par yeh define kiya jata hai."
        </p>
        <p>
          Agar aap <span style={{ color: "purple" }}>let</span> ka istemal kisi
          block ke andar karte hain, jaise ki ek for loop mein, toh woh variable
          sirf uss loop ke andar hi available rahega
        </p>
        <p>
          <span style={{ color: "purple" }}>let</span> ka block scope hota hai.
        </p>
        <h3>Example</h3>
        <p>const</p>
        <p className="bgExample">const x = 52.6;</p>
        <p>
          <span style={{ style: "pink" }}>const</span> ek aisa variable hai jo
          ek baar create ho gya, to uski value kabhi nahi badal sakti.
        </p>
        <p>
          <span style={{ style: "pink" }}>const</span> has a block scope.
        </p>
        <p>
          Keyword <span style={{ style: "pink" }}>const</span> thoda misleading
          ho sakta hai.
        </p>
        <p>
          Ye ek constant value ko define nahi karta. Ye ek value ke liye
          constant reference ko define karta hai
        </p>
        <p>
          Is wajah se aap Nahi kar sakte hain :
          <ul>
            <li>ek constant value reassign nahi kar sakte</li>
            <li>ek constant array reassign nahi kar sakte</li>
            <li>ek constant object reassign nahi kar sakte</li>
          </ul>
          <p>Par aap kar sakte hain:</p>
          <ul>
            <li>constant array ke elements change kar sakte hain</li>
            <li>constant object ke properties change kar sakte hain</li>
          </ul>
        </p>
        <br />
        <h2>ES6 'Array Methods'</h2>
        <p>Bahut se JavaScript array methods hain.</p>
        <p>
          React mein ek bahut hi useful array method hai, jo hai .map() method
        </p>
        <p>
          .map() method aapko array ke har item par ek function chalane me help
          karta hai, jisse ek naya array result ke roop mein milta hai
        </p>
        <p>
          React mein, map() ka istemal lists banane ke liye kiya ja sakta hai.
        </p>
        <h3>Example</h3>
        <p>Ek array se items ki ek list banaiye:</p>
        <p className="bgExample">
          <pre>
            {`

          const myArray = ['apple', 'banana', 'orange'];
          const myList = myArray.map((item) => <p>{item}</p>)
`}
          </pre>
        </p>
        <br />
        <h2>ES6 Destructuring</h2>
        <p>
          Destructuring ko samjhaane ke liye, hum ek sandwich banayenge. Kya aap
          fridge se sab kuch nikal kar apna sandwich banate hain? Nahi, aap sirf
          woh cheezein nikalte hain jo aap apne sandwich mein istemal karna
          chahte hain.
        </p>
        <p>
          Destructuring bilkul waise hi hai. Hamare paas ek array ya object ho
          sakta hai jise hum istemal kar rahe hain, lekin hame inme se kuch hi
          items ki zarurat hoti hai.
        </p>
        <p>
          Destructuring se sirf wohi cheezein nikalna asaan ho jata hai jo
          zaruri hai.
        </p>
        <br />
        <h3>Destructing Arrays</h3>
        <p>
          Ye hai ek purane tareeke se array ke items ko ek variable mein assign
          karne ka tareeka:
        </p>
        <h3>Example</h3>
        <p>before:</p>
        <p className="bgExample">
          <pre>
            {`
          const vehicles = ['mustang', 'f-150', 'expedition']; <br />
          // old way const
          <br />
          car = vehicles[0]; <br />
          const truck = vehicles[1];
          <br />
          const suv = vehicles[2];
`}
          </pre>
        </p>
        <br />
        <p>
          Ye hai ek naye tareeke se array ke items ko ek variable mein assign
          karne ka tareeka
        </p>
        <h3>Example</h3>
        <p>With destructuring:</p>
        <p className="bgExample">
          const vehicles = ['mustang', 'f-150', 'expedition']; <br />
          const [car, truck, suv] = vehicles;
        </p>
        <p className="bgYellow">
          Arrays ki destructuring karte samay, variables ko declare karne ka
          order important hai.
        </p>
        <p>
          Agar hamein sirf car aur suv chahiye, toh hum truck ko bas bahar chhod
          sakte hain lekin comma rakh sakte hain:
        </p>
        <p className="bgExample">
          const vehicles = ['mustang', 'f-150', 'expedition'];
          <br />
          const [car,, suv] = vehicles;
        </p>
        <p>
          Destructuring ka istemal tab aur useful ho jata hai jab koi function
          ek array return karta hai:
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`

  function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7); 
`}
          </pre>
        </p>
        <br />
        <h2>Destructuring Objects</h2>
        <p>
          Ye hai ek object ko ek function ke andar istemal karne ka purana
          tareeka:
        </p>
        <h3>Exapmle</h3>
        <p className="bgExample">
          <pre>
            {`
                const vehicleOne = {
                    brand: 'Ford',
                    model: 'Mustang',
                    type: 'car',
                    year: 2021, 
                    color: 'red'
                  }
                  
                  myVehicle(vehicleOne);
                  
                  // old way
                  function myVehicle(vehicle) {
                    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
                  }
                `}
          </pre>
        </p>
        <p>
          Ye hai ek object ko ek function ke andar istemal karne ka naya
          tareeka:
        </p>
        <h3>Example</h3>
        <p>with destructuring:</p>
        <p className="bgExample">
          <pre>
            {`
                const vehicleOne = {
                    brand: 'Ford',
                    model: 'Mustang',
                    type: 'car',
                    year: 2021, 
                    color: 'red'
                  }
                  
                  myVehicle(vehicleOne);
                  
                  function myVehicle({type, color, brand, model}) {
                    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
                  }`}
          </pre>
        </p>
        <p>
          Dhyaan dijiye ki object properties ko kisi specific order mein declare
          karne ki jarurat nahi hoti.
        </p>
        <p>
          Hum deeply nested objects ki bhi destructuring kar sakte hain jise
          nested object ko refer karke fir ek colon aur curly braces ka istemal
          karke waha se zaruri items ki phir se destructuring kar sakte hain:
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
        const vehicleOne = {
            brand: 'Ford',
            model: 'Mustang',
            type: 'car',
            year: 2021, 
            color: 'red',
            registration: {
              city: 'Houston',
              state: 'Texas',
              country: 'USA'
            }
          }
          
          myVehicle(vehicleOne)
          
          function myVehicle({ model, registration: { state } }) {
            const message = 'My ' + model + ' is registered in ' + state + '.';
          }

       `}
          </pre>
        </p>
        <br />
        <h2>ES6 Spread Operator</h2>
        <p>
          Spread Operator : JavaScript spread operator (...) humein ek existing
          array ya object ka poora ya kuch hissa quickly doosre array ya object
          mein copy karne help karta hai.
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
        const numbersOne = [1, 2, 3];
        const numbersTwo = [4, 5, 6];
        const numbersCombined = [...numbersOne, ...numbersTwo];
        `}
          </pre>
        </p>
        <p>
          Spread operator aksar destructuring ke saath milakar istemal hota hai
        </p>
        <h3>Example</h3>
        <p>
          Pahle aur doosre item ko <span className="clrRed">numbers</span> se
          variables mein assign karein aur baki ko ek array mein rakh dein:
        </p>
        <p className="bgExample">
          <pre>
            {`
        const numbers = [1, 2, 3, 4, 5, 6];

        const [one, two, ...rest] = numbers;
        `}
          </pre>
        </p>
        <p>
          Hum objects ke saath bhi spread operator ka istemal kar sakte hain:
        </p>
        <h3>Example</h3>
        <p>Combine these two objects:</p>
        <p className="bgExample">
          <pre>
            {`
       const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
      }
      
      const updateMyVehicle = {
        type: 'car',
        year: 2021, 
        color: 'yellow'
      }
      
      const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
       `}
          </pre>
        </p>
        <p className="bgYellow">
          Dhyaan dijiye ki jo properties match nahi hui, woh combine ho gayi,
          lekin jo property match hui, jaise ki color, woh last object
          updateMyVehicle ke dvara di gayi value se overwrite ho gayi. Resultant
          color ab yellow hai.
        </p>
        <br />
        <h2>ES6 Modules</h2>
        <p>Modules:</p>
        <p>
          JavaScript modules aapko apne code ko alag-alag files mein baantne ko
          allow karta hain.
        </p>
        <p>Isse code-base ko maintain karna aasan ho jata hai.</p>
        <p>ES Modules import aur export statements par rely karte hain</p>
        <h3>Export</h3>
        <p>
          Aap kisi bhi file se ek function ya variable ko export kar sakte hain
        </p>
        <p>
          Chaliye ek file banate hain jiska naam{" "}
          <span className="clrRed">user.js</span> hai, aur usme woh cheezein
          fill karte hain jo hum export karna chahte hain
        </p>
        <p>2 prakar ke exports hote hain: Named aur Default.</p>
        <h3>Named Exports</h3>
        <p>
          Aap named exports do tareeke se bana sakte hain. Ek ek karke ya phir
          sabhi ek saath file ke bottom mein.
        </p>
        <h3>Example</h3>
        <p>In-line ek ek karke:</p>
        <p>
          <span className="clrRed">user.js</span>
        </p>
        <p className="bgExample">
          <pre>
            {`
    export const name = "Jesse"
    export const age = 40
    `}
          </pre>
        </p>
        <h3>All at once at the bottom (sabhi ek saath file ke bottom mein)</h3>
        <p className="bgExample">
          <pre>
            {`
         const name = "Jesse"
         const age = 40
         
         export { name, age }
         `}
          </pre>
        </p>
        <h3>Default Exports</h3>
        <p>
          Chaliye ek aur file banate hain, jiska naam{" "}
          <span className="clrRed">text.js</span> hai, aur ise default export ko
          dikhane ke liye istemal karte hain.
        </p>
        <p>Aap ek file mein keval ek default export rakh sakte hain.</p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">text.js</span>
        </p>
        <p className="bgExample">
          <pre>
            {`
         const text = () => {
            const name = "Jesse";
            const age = 40;
            return name + ' is ' + age + 'years old.';
          };
          
          export default text;
         `}
          </pre>
        </p>
        <h3>import</h3>
        <p>
          Aap modules ko ek file mein do tareeke se import kar sakte hain, based
          on ki woh named exports hain ya default exports.
        </p>
        <p>
          Named exports ko curly braces ka istemal karke destructuring karna
          padta hai. Default exports ko nahi karna padta.
        </p>
        <h3>Example</h3>
        <p>File user.js se named exports ko import karein:</p>
        <p className="bgExample">
          <pre>
            {`
  import { name, age } from "./user.js";
         `}
          </pre>
        </p>
        <p>Import a default export from the file text.js:</p>
        <p className="bgExample">
          <pre>
            {`
  import message from "./text.js";
  `}
          </pre>
        </p>
        <h2>ES6 Ternary Operator</h2>
        <p>
          Ternary Opeartor : Ternary operator ek simplified conditional operator
          hai, jaise ki if/else.
        </p>
        <p>
          {`
Syntax: condition ? <expression if true> : <expression if false>
 `}
        </p>
        <p>Yahan ek example if/else ka istemal karke:</p>
        <h3>Example</h3>
        <p>before:</p>
        <p className="bgExample">
          <pre>
            {`
        if (authenticated) {
            renderApp();
        } else {
            renderLogin();
        }
        `}
          </pre>
        </p>
        <p>Yahan ek example Ternary Operator ka istemal karke:</p>
        <h3>Example</h3>
        <p>with Ternary Operator</p>
        <p className="bgExample">
          {`authenticated ? renderApp() : renderLogin();`}
        </p>
        <br />
        <h2>React Render HTML</h2>
        <p>
          React ka goal hai in many ways ke ek web page mein HTML ko render
          karna hai.
        </p>
        <p>
          React HTML ko web page par createRoot() naam ke ek function aur uske
          render() method ka istemal karke render karta hai.
        </p>
        <h3>The createRoot Function</h3>
        <p>createRoot() function ek argument leta hai, ek HTML element</p>
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
          naam hai "public". Is folder mein ek index.html file hai.
        </p>
        <p>
          Aapko is file ke body mein ek {`<div>`}dikhayi dega. Yahi par hamara
          React application render hoga.
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
          Ek variable banaiye jo HTML code ko contain kare aur use "root" node
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
        <p>
          Root node ko aap jo kuch bhi chahein us naam se bulana sakte hain:
        </p>
        <p className="bgExample">
          <pre>
            {`
<body>

<header id="sandy"></header>

</body>

`}
          </pre>
        </p>
        <p>Display the result in the{` <header id="sandy"> `} element:</p>
        <p className="bgExample">
          <pre>
            {`
        const container = document.getElementById('sandy');
        const root = ReactDOM.createRoot(container);
        root.render(<p>Hallo</p>);
        `}
          </pre>
        </p>
        <br />
        <h2 id="jsx">React JSX</h2>
        <h3>What is JSX (JSX kya hai)?</h3>
        <p>JSX ka matlab hai JavaScript XML.</p>
        <p>JSX humein React mein HTML likhne me help karta hai.</p>
        <p>JSX se React mein HTML likhna aur use add karna aasan ho jata hai</p>
        <h3>Coding JSX</h3>
        <p>
          JSX humein HTML elements ko JavaScript mein likhne me help karta hai
          aur unhe createElement() aur appendChild() methods ke bina DOM mein
          place karna allow karta hai
        </p>
        <p>JSX HTML tags ko React elements mein convert karta hai.</p>
        <p className="bgYellow">
          Aapko JSX ka istemal karna necessary nahi hai, lekin JSX se React
          applications likhna aasan ho jata hai
        </p>
        <p>
          Yahan do examples hain. Pehla JSX ka istemal karta hai aur doosra
          nahi:
        </p>
        <h3>Example 1</h3>
        <p>JSX :</p>
        <p className="bgExample">
          <pre>
            {`
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
`}
          </pre>
        </p>
        <h3>Example 2</h3>
        <p>Without JSX :</p>
        <p className="bgExample">
          <pre>
            {`
    const myElement = React.createElement('h1', {}, 'I do not use JSX!');

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
    `}
          </pre>
        </p>
        <p>
          Jaise ki aap pehle example mein dekh sakte hain, JSX humein JavaScript
          code ke andar seedhe HTML likhna allow karta hai."
        </p>
        <p>
          JSX JavaScript ke ES6 par based ek extension hai, aur runtime mein ise
          regular JavaScript mein translate kiya jata hai.
        </p>
        <h3>Expressions in JSX</h3>
        <p>
          JSX ke saath aap curly braces {} ke andar expressions likh sakte hain.
        </p>
        <p>
          Expressions ek React variable, ya property, ya koi other JavaScript
          expression ho sakta hai. JSX expression execute karega aur result
          return karega:
        </p>
        <h3>Example</h3>
        <p>Execute the expression 5 + 5:</p>
        <p className="bgExample">
          <pre>
            {`
    const myElement = <h1>React is {5 + 5} times better with JSX</h1>;`}
          </pre>
        </p>
        <h3>Inserting a Large Block of HTML</h3>
        <p>
          HTML ko multiple lines par likhne ke liye, HTML ko parentheses ke
          andar rakhein:
        </p>
        <h3>Example</h3>
        <p>Create a list with three list items:</p>
        <p className="bgExample">
          <pre>
            {`
 const myElement = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );`}
          </pre>
        </p>
        <h3>One Top Level Element</h3>
        <p>HTML code ko ek hi top level element mein wrap kiya jana chahiye.</p>
        <p>
          To agar aap do paragraphs likhna chahte hain, to aapko unhe ek parent
          element ke andar rakhna hoga, jaise ki ek div element.
        </p>
        <h3>Example</h3>
        <p>Do paragraphs ko ek DIV element ke andar wrap karein:</p>
        <p className="bgExample">
          <pre>
            {`
    const myElement = (
        <div>
          <p>I am a paragraph.</p>
          <p>I am a paragraph too.</p>
        </div>
      );
    `}
          </pre>
        </p>
        <p className="bgYellow">
          Agar HTML sahi nahi hai ya HTML mein kisi parent element ki kami hai,
          to JSX ek error throw karega.
        </p>
        <p>
          Alternatively, aap "fragment" ka istemal karke multiple lines ko wrap
          kar sakte hain. Isse DOM mein unnecessarily extra nodes add hone se
          bacha ja sakta hai.
        </p>
        <p>
          Ek fragment ek empty HTML tag ki tarah dikhta hai: <></>
        </p>
        <h3>Example</h3>
        <p>Do paragraphs ko ek fragment ke andar wrap karein:</p>
        <p className="bgExample">
          <pre>
            {`
   const myElement = (
    <>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </>
  );`}
          </pre>
        </p>
        <h3>Elements Must be Closed</h3>
        <p>
          JSX XML ke rules follow karta hai, isliye HTML elements ko sahi se
          close karna zaroori hai.
        </p>
        <h3>Example</h3>
        <p>Close empty elements with {`/> `}</p>
        <p className="bgExample">{`const myElement = <input type="text" />;`}</p>
        <p className="bgYellow">
          Agar HTML sahi se close nahi kiya gaya hai, to JSX ek error throw
          karega."
        </p>
        <h3>Attribute class = className</h3>
        <p>
          <span className="clrRed">Class</span> attribute HTML mein ek bahut
          jyada istemal hone wala attribute hai, lekin kyun ki JSX JavaScript ke
          roop mein render hota hai, aur <span className="clrRed">class</span>{" "}
          keyword JavaScript mein ek reserved word hai, isliye aapko ise JSX
          mein istemal karne ki anumati nahi hai.
        </p>
        <p>Iski jagah attribute ka istemal karein.</p>
        <p>
          JSX ne is problem ko solve <span className="clrRed">className</span>{" "}
          ka istemal karke kiya. Jab JSX render hota hai, to ye attributes ko
          class attributes mein translate karta hai.
        </p>
        <h3>Example</h3>
        <p>
          Use karo attribute <span className="clrRed">className</span> instead
          of class in JSX:
        </p>
        <p className="bgExample">{`const myElement = <h1 className="myclass">Hello World</h1>;`}</p>
        <h3>Conditions - if statements</h3>
        <p>
          React <span className="clrRed">if</span> statements ko support karta
          hai, lekin JSX ke andar nahi.
        </p>
        <h4>Option 1 :</h4>
        <p>
          JSX code ke bahar <span className="clrRed">if</span> statements
          likhein:
        </p>
        <h3>Example</h3>
        <p>
          Write "Hello" if x is less than 10, otherwise "Goodbye": (Agar x 10 se
          kam hai, to "Hello" likhein, otherwise "Goodbye" likhein:)
        </p>
        <p className="bgExample">
          <pre>
            {`
        const x = 5;
        let text = "Goodbye";
        if (x < 10) {
          text = "Hello";
        }
        
        const myElement = <h1>{text}</h1>;`}
          </pre>
        </p>
        <h4>Option 2</h4>
        <p>ternary expressions ko istemal karein instead:</p>
        <h3>Example</h3>
        <p>
          Write "Hello" if x is less than 10, otherwise "Goodbye". (Agar x 10 se
          kam hai, to "Hello" likhein, anyatha "Goodbye" likhein:)
        </p>
        <p className="bgExample">
          <pre>
            {`
        const x = 5;

        const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;`}
          </pre>
        </p>
        <p className="bgYellow">
          Dhyaan rahe ki JSX ke andar ek JavaScript expression ko shamil karne
          ke liye, JavaScript ko curly braces, {} ke saath wrap kiya jana
          chahiye.
        </p>
        <br />
        <h2 id="components">React Components</h2>
        <p>
          Components functions jaise hote hain jo HTML elements return karte
          hain.
        </p>
        <h3>React Components</h3>
        <p>
          Components independent aur reusable code ke tukde hote hain. Ye
          JavaScript functions ke jaise kaam karte hain, lekin isolation mein
          kaam karte hain aur HTML return karte hain.
        </p>
        <p>
          Components do prakar ke hote hain, Class components aur Function
          components. Is tutorial mein ham Function components par dhyan denge.
        </p>
        <h3>Create Your First Component</h3>
        <p>
          Jab aap ek React component banate hain, to component ka naam UPAR CASE
          ke letter se shuru HONA CHAHIYE
        </p>
        <h4>Class Component</h4>
        <p>
          Ek class component mein extends React.Component statement include hona
          chahiye. Ye statement React.Component ke liye inheritance create karta
          hai, aur aapke component ko React.Component ke functions ko access
          karne ka permission deta hai.
        </p>
        <p>
          Component ko bhi ek render() method ki requirement hoti hai, yeh
          method HTML return karta hai.
        </p>
        <h3>Example</h3>
        <p>Create a Class component called Car</p>
        <p className="bgExample">
          <pre>
            {`
  class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }`}
          </pre>
        </p>
        <h2>Function Component</h2>
        <p>
          Yahan upar diye gaye example ka ek aur roop hai, lekin is bar ek
          Function component ka istemal kiya gaya hai.
        </p>
        <p>
          Ek Function component bhi HTML vapas karta hai, aur ek Class component
          ke jaisa same behave karta hai, lekin Function components ko likhne ke
          liye kam code ka istemal hota hai, samajhne mein aasan hai, aur it is
          more preffered now a days .
        </p>
        <h3>Example</h3>
        <p>Create a Function component called Truck</p>
        <p className="bgExample">
          <pre>
            {`
          function Truck() {
            return <h2>Hi, I am a yoyo Truck!</h2>;
          }`}
          </pre>
        </p>
        <h2>Rendering a Component</h2>
        <p>
          Ab aapke React application mein ek component hai jiska naam Truck hai,
          jo ek {`<h2>`} element vapas karta hai.
        </p>
        <p>
          Ise apne application mein istemal karne ke liye, normal HTML ke taur
          par is tarah ka syntax istemal karein: {`<Truck />`}
        </p>
        <h3>Example</h3>
        <p>Truck component ko "root" element mein dikhayein:</p>
        <p className="bgExample">
          <pre>
            {`
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Truck />);  `}
          </pre>
        </p>
        <h2>Props</h2>
        <p>
          Components ko props ke roop mein bheja ja sakta hai, props se matlab
          hai properties.
        </p>
        <p>
          Props function ke arguments ki tarah hote hain, aur aap unhe component
          mein attributes ke roop mein bhejte hain.
        </p>
        <p>Aap agle chapter mein props ke bare mein aur jaanenge.</p>
        <h3>Example</h3>
        <p>
          Truck component ko ek color pass karne ke liye ek attribute ka istemal
          karein, aur ise render() function mein istemal karein:
        </p>
        <p className="bgExample">
          <pre>
            {`
 function Truck(props) {
  return <h2>I am a {props.color} Truck!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Truck color="yellow"/>);`}
          </pre>
        </p>
        <h2>Components in Components</h2>
        <p>
          Hum ek component ke andar dusre components ka istemal kar sakte hain:
        </p>
        <h3>Exapmle</h3>
        <p>Use the Truck component inside the Garage component:</p>
        <p className="bgExample">
          <pre>
            {`
function Truck() {
  return <h2>I am a Truck!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Truck />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}
          </pre>
        </p>
        <h2>Components in Files</h2>
        <p>
          React ke sath code re-use karna boht asaan ho jata, aur yah
          recommended hai ki aap apne components ko alag-alag seprate files mein
          split karen
        </p>
        <p>
          Iske liye, ek naye file banayein .js file extension ke saath aur
          usmein code daalein:
        </p>
        <p className="bgYellow">
          Dhyaan rahe ki filename ek uppercase character se shuru hona chahiye.
        </p>
        <h3>Example</h3>
        <p>Ye hai naya file, humne iska naam "truck.js" rakha hai:</p>
        <p className="bgExample">
          <pre>
            {`
        function Truck() {
          return <h2>Hi, I am a Truck!</h2>;
        }
        
        export default Truck;`}
          </pre>
        </p>
        <p>
          Truck component ka istemal karne ke liye, aapko apne application mein
          file ko import karna hoga.
        </p>
        <h3>Example</h3>
        <p>
          Ab hum "Truck.js" file ko application mein import karte hain, aur hum
          Truck component ka istemal yahan kar sakte hain jaise ye yahin banaya
          gaya ho.
        </p>
        <p className="bgExample">
          <pre>
            {`
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import Truck from './Truck.js';
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Truck />);
      `}
          </pre>
        </p>
        <br />
        <h2>React Props</h2>
        <p>Props React components mein bheje jaane wale arguments hote hain.</p>
        <p>Props components ko HTML attributes ke through bheje jaate hain.</p>
        <p className="bgYellow">
          <span className="clrRed">props</span> se matlab hai properties.
        </p>
        <h2 id="props">Props</h2>
        <p>
          React Props vaise hi jaise JavaScript mein function arguments aur HTML
          mein attributes hote hain.
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
  return <h2>I am a { props.brand }!</h2>;
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
          Garage component se 'brand' property Truck component mein bhejein:
        </p>
        <p className="bgExample">
          <pre>
            {`
 function Truck(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Truck brand="TATA" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
 `}{" "}
          </pre>
        </p>
        <p>
          Agar aapke pass bhejne ke liye ek variable hai, upar diye gaye example
          ki tarah ek string nahi hai, toh aap bas variable name ko curly
          brackets ke andar daal dein:
        </p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">Truck</span> component ko bhejne ke liye ek
          variable banayein jiska naam <span className="clrRed">truckName</span>{" "}
          hai:
        </p>
        <p className="bgExample">
          <pre>
            {`
 function Truck(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const truckName = "TATA";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Truck brand={ truckName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}
          </pre>
        </p>
        <p>Ya agar yah ek object ho:</p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">Truck</span> component ko bhejne ke liye ek
          object banayein jiska naam <span className="clrRed">truckInfo</span>{" "}
          hai:
        </p>
        <p className="bgExample">
          <pre>
            {`
 function Truck(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function Garage() {
  const truckInfo = { name: "Tata", model: "Ashok Leyland" };
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
        </p>
        <br />
        <h2>React Events</h2>
        <p>
          Bilkul HTML DOM events ki tarah, React bhi actions perform kar sakta
          hai based on user event.
        </p>
        <p>
          React mein HTML ki tarah hi events hain: click, change, mouseover etc.
        </p>
        <h1>Adding Events</h1>
        <p>React events camelCase syntax mein likha jaata hai</p>
        <p>
          <span className="crlRed">onClick</span> instead of{" "}
          <span className="clrRed">onclick</span>.
        </p>
        <p>React event handlers curly braces ke andar likhe jate hain:</p>
        <p>onClick={`{shoot}`} instead of onclick="shoot()".</p>
        <h3>React</h3>
        <p className="bgExample">{`<button onClick={shoot}>Take the Shot!</button>`}</p>
        <h3>HTML</h3>
        <p className="bgExample">{`<button onclick="shoot()">Take the Shot!</button>`}</p>
        <br />
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
        <p className="bgExample">
          <pre>
            {`
 function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}`}
          </pre>
        </p>
        <h3>Example</h3>
        <p>
          Ab, hum ek aur component banayenge jo choose karega ke konsa component
          render karna hai based on a condition:
        </p>
        <p className="bgExample">
          <pre>
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
        </p>
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
        <p className="bgExample">
          <pre>
            {`
 function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);
 `}{" "}
          </pre>
        </p>
        <p>
          Agar <span className="clrRed">cars.length {`>`} 0</span> true ke
          barabar hai, to && ke baad ka expression render hoga.
        </p>
        <p>Koshish karein cars array ko empty karne ki:</p>
        <h3>Example</h3>
        <p className="bgExample">
          <p>
            {`
 const cars = [];
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Garage cars={cars} />);`}
          </p>
        </p>

        <h2>Ternary Operator</h2>
        <p>
          Ek aur tareeka elements ko conditionally render karne ka hai ternary
          operator ka istemal karna
        </p>
        <p className="bgExample">{`condition ? true : false`}</p>
        <p>We will go back to the goal example.</p>
        <h3>Example</h3>
        <p>
          Agar <span className="clrRed">isGoal</span> true hai, to{" "}
          <span className="clrRed">MadeGoal</span> component ko wapas karein,
          warna <span className="clrRed">MissedGoal</span> component ko wapas
          karein:
        </p>
        <p className="bgExample">
          <pre>
            {`
 function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);`}{" "}
          </pre>
        </p>
        <br />
        <h2 id="lists">React Lists</h2>
        <p>
          React mein aap ek tarah ke loop ke saath lists ko render karenge."
        </p>
        <p>JavaScript map() array method generally preffered method hai.</p>
        <h3>Example</h3>
        <p>chalo render kare all of the cars from our garage:</p>
        <p className="bgExample">
          <pre>
            {`
 function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}
          </pre>
        </p>
        <p>
          Jab aap is code ko apne <span className="clrRed">React App</span> mein
          chalayenge, to yeh kaam karega lekin aapko ek warning milegi ki list
          items ke liye 'key' nahi di gayi hai.
        </p>
        <h2>Keys</h2>
        <p>
          Keys React ko elements ke track mein rakhne mein help karti hain. Is
          tarah, agar koi item update ya remove hota hai, to sirf woh item
          dubara render hoga poori ki poori list nahi.
        </p>
        <p>
          Keys ko har sibling ke liye unique hona chahiye. Lekin globally
          duplicate ho sakte hain.
        </p>
        <p className="bgYellow">
          Aam taur par, key ek unique ID honi chahiye jo har item ko assign ki
          gayi ho. Ant mein, aap array index ko bhi ek key ke roop mein istemal
          kar sakte hain.
        </p>
        <h3>Example</h3>
        <p>
          Chaliye hamara previous example ko keys shamil karne ke liye refactor
          karte hain:
        </p>
        <p className="bgExample">
          <pre>
            {`
 function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}{" "}
          </pre>
        </p>
        <br />
        <h2 id="forms">React Forms</h2>
        <p>
          Jaise ki HTML mein hota hai, waise hi React bhi forms ka istemal karta
          hai jisse users web page ke saath interact kar sakein.
        </p>
        <h2>Adding Forms in react</h2>
        <p>
          Aap React mein form ko kisi bhi aur element ki tarah hi add karte hain
        </p>
        <h3>Example</h3>
        <p>ek form add karo jisme users apna naam likh sakte ho:</p>
        <p className="bgExample">
          <pre>
            {`
 function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);`}
          </pre>
        </p>
        <p>Yeh normal kaam karega, form submit hoga aur page refresh hoga.</p>
        <p>Lekin generally hum react mein aisa nahi chahte hain.</p>
        <p>
          hum iss behaviour ko rokna chahte hain aur hum chahte hain React form
          control kare
        </p>
        <h2>Handling Forms</h2>
        <p>
          Forms ko handle karna yeh hai ki aap data kaise handle karte hain jab
          yeh value change hoti hai ya form submit hota hai.
        </p>
        <p>
          HTML mein, usually form data DOM dwara handle hota hai.React mein,
          form data usually components dwara handle hota hai.
        </p>
        <p>
          Jab data components dwara sambhala jata hai, toh saara data component
          state mein stored hota hai.
        </p>
        <p>
          Aap changes ko control karne ke liye{" "}
          <span className="clrRed">onChange</span> attribute mein event handlers
          add kar sakte hain.
        </p>
        <p>
          Ham useState Hook ka istemal har input ke value ko track karne ke liye
          kar sakte hain aur poora application ke liye 'single source of truth'
          provide kar sakte hain."
        </p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">useState</span>hook ka istemaal karo input
          manage karne ke liye
        </p>
        <p className="bgExample">
          <pre>
            {`
  import { useState } from 'react';
  import ReactDOM from 'react-dom/client';
  
  function MyForm() {
    const [name, setName] = useState("");
  
    return (
      <form>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);`}
          </pre>
        </p>
        <h2>Submitting froms</h2>
        <p>
          Aap submit action ko control kar sakte hain{" "}
          <span className="clrRed">{`<form>`}</span> ke{" "}
          <span className="clrRed">onSubmit</span> attribute mein ek event
          handler add karke:
        </p>
        <p>
          Ek submit button aur ek event handler{" "}
          <span className="clrRed">onSubmit</span> attribute mein add karo:
        </p>
        <p className="bgExample">
          <pre>
            {`
    
    import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);`}
          </pre>
        </p>
        <h2>Multiple input fields</h2>
        <p>
          {" "}
          each element mein <span className="clrRed">name</span> attribute add
          karke aap ek se jada input fields ka value control kar sakte hain
        </p>
        <p>Ham apne state ko ek empty object se initialize karenge.</p>
        <p>
          Event handler mein fields ko access karne ke liye{" "}
          <span className="clrRed">event.target.name</span> aur{" "}
          <span className="clrRed">event.target.value</span> syntax ka istemal
          karen.
        </p>
        <p>
          State ko update karne ke liye, property name ke around sqaure brackets
          [bracket notation] ka istemal karen.
        </p>
        <h3>Example</h3>
        <p>two input fields wala ek form banaye</p>
        <p className="bgExample">
          <pre>
            {`
       import { useState } from 'react';
       import ReactDOM from 'react-dom/client';
       
       function MyForm() {
         const [inputs, setInputs] = useState({});
       
         const handleChange = (event) => {
           const name = event.target.name;
           const value = event.target.value;
           setInputs(values => ({...values, [name]: value}))
         }
       
         const handleSubmit = (event) => {
           event.preventDefault();
           alert(inputs);
         }
       
         return (
           <form onSubmit={handleSubmit}>
             <label>Enter your name:
             <input 
               type="text" 
               name="username" 
               value={inputs.username || ""} 
               onChange={handleChange}
             />
             </label>
             <label>Enter your age:
               <input 
                 type="number" 
                 name="age" 
                 value={inputs.age || ""} 
                 onChange={handleChange}
               />
               </label>
               <input type="submit" />
           </form>
         )
       }
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<MyForm />);`}
          </pre>
        </p>
        <p>
          Note that: Hum dono input fields ke liye ek hi event handler function
          ka istemal kar rahe hain, hum har ek ke liye ek alag event handler
          likh sakte hain, lekin yah hume jada clean code pradan karta hai aur
          React mein yah preffered tareeka hai.
        </p>
        <h2>Textarea</h2>
        <p>
          The textarea element in React slightly different hai ordinary HTML se.
        </p>
        <p>
          HTML mein, ek textarea ke value ko start tag{" "}
          <span>{`<textarea>`}</span> aur end tag
          <span className="clrRed">{`</textarea>`}</span> ke beech wala text
          maana jaata tha
        </p>
        <p className="bgExample">
          <pre>
            {`
  <textarea>
   textarea ka content.
</textarea>`}
          </pre>
        </p>
        <p>
          React mein, textarea ke value ko value attribute mein rakha jata hai.
          Hum <span className="clrRed">useState</span> Hook ka istemal karenge
          taki hum textarea ke value ko manage kar sakein:
        </p>
        <h3>Example</h3>
        <p>A simple textarea kuch content ke sath:</p>
        <p className="bgExample">
          <pre>
            {`
 import { useState } from 'react';
 import ReactDOM from 'react-dom/client';
 
 function MyForm() {
   const [textarea, setTextarea] = useState(
     "The content of a textarea goes in the value attribute"
   );
 
   const handleChange = (event) => {
     setTextarea(event.target.value)
   }
 
   return (
     <form>
       <textarea value={textarea} onChange={handleChange} />
     </form>
   )
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<MyForm />);`}{" "}
          </pre>
        </p>
        <h2>Select</h2>
        <p>
          Ek drop-down list, ya select box, React mein HTML se thoda alag hota
          hai.
        </p>
        <p></p>
        <p>
          <b>HTML:</b>
          <pre className="bgExample">
            {`
<select>
<option value="Ford">Ford</option>
<option value="Volvo" selected>Volvo</option>
<option value="Fiat">Fiat</option>
</select>`}
          </pre>
        </p>
        <p>
          React mein, selected value <span className="clrRed">select</span> tag
          par <span className="clrRed">value</span> attribute ke saath define
          hota hai:
        </p>
        <h3>Example</h3>
        <p>
          Ek simple select box, jahan selected value "Volvo" constructor mein
          initialize ki gayi hai:
        </p>
        <p className="bgExample">
          <pre>
            {`
 function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}`}{" "}
          </pre>
        </p>

        <p>
          <span className="clrRed"> {`<textarea>`}</span> aur{" "}
          <span className="clrRed">{`<select>`}</span> mein slight chnages
          karke, React all input elements ko ek hi tareeke se handle kar sakta
          hai.
        </p>
        <br />
        <h2 id="router">React Router</h2>
        <p>Create React App mein page routing included nahi rehta hai.</p>
        <p>iske liye React Router most popular solution hai.</p>
        <h2>Add React Router </h2>
        <p>
          React Router ko apne application mein include karne ke liye, terminal
          mein yeh command run karen, application ke root directory se:
        </p>
        <p className="bgBlue">npm i -D react-router-dom</p>
        <p className="bgYellow">
          Note: Is tutorial mein React Router v6 ka istemal hota hai. Agar aap
          v5 se upgrade kar rahe hain, toh aapko @latest flag ka istemal karna
          hoga:
        </p>
        <p className="bgBlue">npm i -D react-router-dom@latest</p>
        <h2>folder Structure</h2>
        <p>
          Multiple page routes wala ek application banane ke liye, sabse pehle
          file structure banaye.
        </p>
        <p>
          <span className="clrRed">src</span> folder ke andar, hum{" "}
          <span className="clrRed">pages</span> naam ka ek folder banayenge
          jisme kai saare files honge.
        </p>
        <p className="clrRed">
          src\pages\:
          <ul className="clrRed">
            <li>Layout.js</li>
            <li>Home.js</li>
            <li>Blogs.js</li>
            <li>Contact.js</li>
            <li>NoPage.js</li>
          </ul>
        </p>
        <p>
          Har file ek bahut basic React component contain karegi. <br />
          <br />
        </p>
        <p className="bgYellow">
          Aap yaha par file extention <b className="clrRed">.js</b> ki jagah par{" "}
          <b className="clrRed">.jsx</b> bhi use kar sakte hain now a days ye{" "}
          <span className="clrRed">.jsx</span> preffered tarika hai{" "}
        </p>
        <h2>Usage</h2>
        <p>hum index.js mein React Router ka use karenge.</p>
        <pre className="bgExample">
          {`
          import ReactDOM from "react-dom/client";
          import { BrowserRouter, Routes, Route } from "react-router-dom";
          import Layout from "./pages/Layout";
          import Home from "./pages/Home";
          import Blogs from "./pages/Blogs";
          import Contact from "./pages/Contact";
          import NoPage from "./pages/NoPage";
          
          export default function App() {
            return (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            );
          }
          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<App />);`}
        </pre>
        <h2>Example Explained</h2>
        <p>
          We wrap our content first with{" "}
          <span className="clrRed">{`<BrowserRouter>`}</span>.
        </p>
        <p>
          Phir hum apne <span className="clrRed">{`<Routes>`}</span> ko define
          karte hain. Ek application mein multiple{" "}
          <span className="clrRed">{`<Routes>`}</span> ho sakte hain. Hamara
          basic example sirf ek ka istemal karta hai.
        </p>
        <p>
          <span className="clrRed">{`<Route>`}</span> ko nested rakha ja sakta
          hai. Pehle <span className="clrRed">{`<Route>`}</span> ka path{" "}
          <span className="clrRed">/</span> hai aur yeh Layout component ko
          render karta hai.
        </p>
        <p>
          Nested <span className="clrRed">{`<Route>`}</span> s apne parent route
          se inherit karte hain aur usme add ho jate hain. Isliye, blogs ka path
          parent ke saath combine ho jata hai aur /blogs ban jata hai.
        </p>
        <p>
          Home component route ka koi path nahi hai, lekin usme ek{" "}
          <span className="clrRed">index</span> attribute hai. Ye index
          attribute parent route ke liye default route ko specify karta hai, jo
          ki <span className="clrRed">/</span> hai.
        </p>
        <p>
          Path ko <span className="clrRed">*</span> par set karna kisi bhi
          undefined URL ke liye catch-all ki tarah kaam karega. Ye ek 404 error
          page ke liye achha hai.
        </p>

        <h2>Pages Components</h2>
        <p>
          Layout component mein <span className="clrRed">{`<Outlet>`}</span> aur{" "}
          <span className="clrRed">{`<Link>`}</span> elements hain.
        </p>
        <p>
          The <span className="clrRed">{`<Outlet>`}</span> current selected
          route render karta hai.
        </p>
        <p>
          <span className="clrRed">{`<Link>`}</span> URL set karne aur browsing
          history ko track karne ke liye istemal hota hai.
        </p>
        <p>
          Ham kisi bhi samay kisi internal path ko link karne ke liye{" "}
          <span className="clrRed">{`<a href="">`}</span> ki bajaye{" "}
          <span className="clrRed">{`<Link> `}</span> ka istemal karenge
        </p>
        <p>
          Layout route" ek aisa shared component hai jo sabhi pages par ek jaisa
          content daalta hai, jaise ki ek navigation menu.
        </p>
        <p>
          <span className="clrRed">Layout.js:</span>
          <pre className="bgExample">
            {`
  import { Outlet, Link } from "react-router-dom";

  const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;`}
          </pre>
        </p>
        <p>
          <span className="clrRed">Home.js :</span>
          <pre className="bgExample">
            {`
  const Home = () => {
    return <h1>Home</h1>;
  };
  
  export default Home;
  `}
          </pre>
        </p>
        <p>
          <span className="clrRed">Blogs.js:</span>
          <pre className="bgExample">
            {`
  const Blogs = () => {
    return <h1>Blog Articles</h1>;
  };
  
  export default Blogs;
  `}
          </pre>
        </p>
        <p>
          <span className="clrRed">Contact.js:</span>
          <pre className="bgExample">
            {`
  const Contact = () => {
    return <h1>Contact Me</h1>;
  };
  
  export default Contact;
  `}
          </pre>
        </p>
        <p>
          <span className="clrRed">NoPage.js:</span>
          <pre className="bgExample">
            {`
const NoPage = () => {
  return <h1>404</h1>;
};

export default NoPage;
`}
          </pre>
        </p>
        <br />
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
        <br />
        <h2 id="Hooks">React Hooks</h2>
        <p>hooks react mein version 16.8 mein add hue the</p>
        <p>
          Hooks function components ko state aur dusre React features ka access
          dene mein madad karte hain. Is wajah se, generally class components ki
          zarurat nahi hoti hai.
        </p>
        <p className="bgYellow">
          Jabki Hooks generally class components ko replace karte hain, React
          mein classes ko hataane ki koi yojna nahi hai.
        </p>
        <h2>What is hook ? (hook kya hai ?)</h2>
        <p>
          Hooks humein React features mein "hook" karne me help karte hain,
          jaise ki state aur lifecycle methods.
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
        import React, { useState } from "react";
        import ReactDOM from "react-dom/client";
        
        function FavoriteColor() {
          const [color, setColor] = useState("red");
        
          return (
            <>
              <h1>My favorite color is {color}!</h1>
              <button
                type="button"
                onClick={() => setColor("blue")}
              >Blue</button>
              <button
                type="button"
                onClick={() => setColor("red")}
              >Red</button>
              <button
                type="button"
                onClick={() => setColor("pink")}
              >Pink</button>
              <button
                type="button"
                onClick={() => setColor("green")}
              >Green</button>
            </>
          );
        }
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<FavoriteColor />);`}
          </pre>
        </p>
        <p>aapko React se hooks import karna must hai.</p>
        <p>
          Yahan hum useState Hook ka istemal kar rahe hain taki application
          state ka track rakh sakein.
        </p>
        <p>
          state generally un data ya property ko refer karti hai jo hamen
          track karna hai.
        </p>
        <h2>Hooks rules</h2>
        <p>
          Hooks ko sirf React function components ke andar hi call kiya ja sakta
          hai.
        </p>
        <p>
          Hooks ko sirf component ke top level par hi call kiya ja sakta hai.
        </p>
        <p>hooks conditional nahi ho sakte</p>
        <p className="bgYellow">
          {" "}
          Hooks React class components mein kaam nahi karenge
        </p>

        <br />
        <h2>React <span className="bgRed">useState</span> Hook</h2>
        <p>
          React <span className="clrRed">useState</span> Hook hume function
          component mein state track karne me help karta hai.
        </p>
        <p>
          "state" generally aise data ya properties ko refer karta hai jo kisi
          application mein track kiye jaane ki zarurat hai.
        </p>
        <div className="bgYellow">
          <h2>Real Life Example of useState Hook</h2>
          <p>
            State ek concept hai jo batata hai ki ek component ke andar kuch
            data hai jo badal sakta hai. Agar hum ise simple shabdon mein
            samjhein, toh state component ke "mood" ya "halat" ko darust rakhne
            ka tareeka hai. <br />
            <br />
            Imagine karo ki ek React component ek insan ki tarah hai. Is insan
            ke mood ko hum state kehte hain. Kabhi khush, kabhi gussa, aur kabhi
            udas. useState ka istemal is mood ya state ko badalne ke liye hota
            hai. Jab aap apne component ke andar useState ka istemal karte hain,
            toh aap ek variable ko state banate hain. Jab aap us variable ki
            value badalte hain, toh React component re-render hota hai aur naya
            mood ya state dikhta hai. Udaharan ke taur par, ek button ke click
            se message badalna:
          </p>
          <p className="bgExample">
            <pre>
              {`
        import React, { useState } from 'react';

        const StateExample = () => {
          // message variable ko state banaya gaya hai
          const [message, setMessage] = useState('Hello, React!');
        
          // Jab button par click hota hai, message ki value badal jati hai
          const handleClick = () => {
            setMessage('Welcome to the world of React!');
          };
        
          return (
            <div>
              <h2>{message}</h2>
              <button onClick={handleClick}>Change Message</button>
            </div>
          );
        };
        
        export default StateExample;
        `}{" "}
            </pre>
          </p>
          <p>
            Is example mein message variable state hai. Jab button par click
            hota hai, setMessage ke madhyam se message ki value badli jati hai
            aur component re-render hota hai, jisse naya message dikhega.
          </p>
        </div>
        <h2>import useState</h2>
        <p>
          To use the <span className="clrRed">useState</span> Hook, we first
          need to import it into our component.
        </p>
        <h3>Example:</h3>
        <p>Apne component mein top mein useState Hook ko import karein.</p>
        <p className="bgExample">{`import { useState } from "react";`}</p>
        <p>
          Dekho ki hum <span className="clrRed">useState</span> Hook ko{" "}
          <span className="clrRed">react</span> se import karte waqt
          destructuring kar rahe hain, kyun ki yeh ek named export hai.
        </p>
        <h2>initialize useState</h2>
        <p>
          function component mein <span className="clrRed">useState</span> ko
          call karke state initialize karte hain.
        </p>
        <p>
          useState ek initial state (shuruaati sthiti) ko accept karta hai aur
          do values return karta hai:
        </p>
        <p>1. Current state</p>
        <p>2. ek function jo state update kart hai</p>
        <h3>Example :</h3>
        <p>state Function component ke top mein initialize karen.</p>
        <p>
          <pre className="bgExample">
            {`
         import { useState } from "react";

         function FavoriteColor() {
           const [color, setColor] = useState("");
         }`}{" "}
          </pre>
        </p>
        <p>
          {" "}
          Notice karo, ham <span className="clrRed">useState</span> se returned
          values ki destructuring kar rahe hain.
        </p>
        <p>
          first value <span className="clrRed">color</span> current state hai.
        </p>
        <p>
          Second value <span className="clrRed">setColor</span>, function hai jo
          state ko update karne ke liye istemal kiya jata hai.
        </p>
        <p className="bgYellow">
          Yeh naam, `<span className="clrRed">color</span>` aur `
          <span className="clrRed">setColor</span>`, variables hain jinka aap jo
          bhi chahe naam rakh sakte hain.
        </p>
        <p>
          Lastly, hum ne initial state ko ek khali string par set kiya hai: `
          <span className="clrRed">useState("")</span>`.
        </p>
        <h2>Read State</h2>
        <p>
          Ab hum apne state ko apne component mein kahin bhi include kar sakte
          hain.
        </p>
        <h3>Example</h3>
        <p>Render kiye gaye component mein state variable ka istemal karen.</p>
        <p className="bgExample">
          <pre>
            {`
       import { useState } from "react";
       import ReactDOM from "react-dom/client";
       
       function FavoriteColor() {
         const [color, setColor] = useState("red");
       
         return <h1>My favorite color is {color}!</h1>
       }
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<FavoriteColor />);`}{" "}
          </pre>
        </p>
        <h2>Update State</h2>
        <p>
          Apne state ko update karne ke liye hum apne state updater function ka
          istemal karte hain.
        </p>
        <p className="bgYellow">
          Hume kabhi bhi state ko seedhe update nahi karna chahiye. Jaise ki,
          `color = "red"` yeh allow nahi hai.
        </p>
        <h3>Example</h3>
        <p>Use a button to update the state:</p>
        <p className="bgExample">
          <pre>
            {`
     import { useState } from "react";
     import ReactDOM from "react-dom/client";
     
     function FavoriteColor() {
       const [color, setColor] = useState("red");
     
       return (
         <>
           <h1>My favorite color is {color}!</h1>
           <button
             type="button"
             onClick={() => setColor("blue")}
           >Blue</button>
         </>
       )
     }
     
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(<FavoriteColor />);`}
          </pre>
        </p>
        <h2>What Can State Hold</h2>
        <p>
          <span className="clrRed">useState</span> Hook ka istemal strings,
          numbers, booleans, arrays, objects, aur inmein se kisi bhi combination
          ko track karne ke liye kiya ja sakta hai!
        </p>
        <p>
          Hum multiple state Hooks create kar sakte hain jisse individual values
          ko track kiya ja sake.
        </p>
        <h3>Example:</h3>
        <p>Create karo multiple state Hooks:</p>
        <p className="bgExample">
          <pre>
            {`
        import { useState } from "react";
        import ReactDOM from "react-dom/client";
        
        function Car() {
          const [brand, setBrand] = useState("Ford");
          const [model, setModel] = useState("Mustang");
          const [year, setYear] = useState("1964");
          const [color, setColor] = useState("red");
        
          return (
            <>
              <h1>My {brand}</h1>
              <p>
                It is a {color} {model} from {year}.
              </p>
            </>
          )
        }
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Car />);`}
          </pre>
        </p>
        <p>
          Ya fir, hum ek state ka use karke ek object include kar sakte hain!
        </p>
        <h3>Example</h3>
        <p> ek Hook create karo jo ek object hold karta hai:</p>
        <p className="bgExample">
          <pre>
            {`
       import { useState } from "react";
       import ReactDOM from "react-dom/client";
       
       function Car() {
         const [car, setCar] = useState({
           brand: "Ford",
           model: "Mustang",
           year: "1964",
           color: "red"
         });
       
         return (
           <>
             <h1>My {car.brand}</h1>
             <p>
               It is a {car.color} {car.model} from {car.year}.
             </p>
           </>
         )
       }
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<Car />);`}{" "}
          </pre>
        </p>
        <p>
          Jab hum ab ek object ko track kar rahe hain, hamein ab us object ko
          reference karna hoga, phir us object ke property ko render karte waqt.
          (example: `car.brand`)
        </p>
        <h2>Updating Objects and Arrays in State</h2>
        <p>Jab state update hota hai, toh poora state overwrite ho jata hai.</p>
        <p>Agar hum sirf apne car ke color ko update karna chahte hain?</p>
        <p>
          Agar hum sirf setCar({`color: "blue"`}) ko call karte hain, to yeh
          hamare state se brand, model, aur year ko hata dega.
        </p>
        <p>
          Hum JavaScript ke spread operator ka istemal karke ismein help le
          sakte hain.
        </p>
        <h3>Example</h3>
        <p>
          Use the JavaScript spread operator to update only the color of the
          car:
        </p>
        <p className="bgExample">
          <pre>
            {`
 import { useState } from "react";
 import ReactDOM from "react-dom/client";
 
 function Car() {
   const [car, setCar] = useState({
     brand: "Ford",
     model: "Mustang",
     year: "1964",
     color: "red"
   });
 
   const updateColor = () => {
     setCar(previousState => {
       return { ...previousState, color: "blue" }
     });
   }
 
   return (
     <>
       <h1>My {car.brand}</h1>
       <p>
         It is a {car.color} {car.model} from {car.year}.
       </p>
       <button
         type="button"
         onClick={updateColor}
       >Blue</button>
     </>
   )
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Car />);`}{" "}
          </pre>
        </p>
        <p>
          Kyunki humein state ki current value ki zarurat hai, isliye hum ek
          function ko apne `<span className="clrRed">setCar</span>` function
          mein pass karte hain. Ye function previous value ko recieve karta hai.
        </p>
        <p>
          Phir hum ek object return karte hain, previous state ko spread karte
          hain aur sirf <span className="clrRed">color</span> ko update karte
          hain.
        </p>
        <br />
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
   }, []); // < sirf first render par run kare iske liye yaha par empty brackets added hain dependency jaisa upar bataya gya hai
 
   return <h1>I've rendered {count} times!</h1>;
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Timer />);`}{" "}
          </pre>
        </p>
        <h3>Example</h3>
        <p>
          Yahaan ek <span className="clrRed">useEffect</span> Hook ka ek example
          hai jo ek variable par dependent hai. Agar count variable update hota
          hai, toh effect phir se run hoga.
        </p>
        <p className="bgExample">
          <pre>
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
        </p>
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
        <br />
        <h2><span className="bgRed">useContext</span> Hook</h2>
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
        <h2>React <span className="bgRed">useRef</span> Hook</h2>
        <p>
          The useRef Hook aapko renders ke beech mein values ko persist karne
          mein help karta hai.
        </p>
        <p>
          Iska istemal ek mutable value ko store karne ke liye kiya ja sakta hai
          jo update hone par re-render ko cause nahi karta.
        </p>
        <p>
          Iska istemal ek DOM element ko seedhe access karne ke liye bhi kiya ja
          sakta hai.
        </p>
        <h2>Re-Renders nahi karta hai.</h2>
        <p>
          Agar hum try karen ki hamara application kitni baar render hota hai,
          useState Hook ka istemal karke, toh ham khud ko ek infinite loop mein
          atak jayenge kyunki yah Hook hi khud ek re-render cause karta hai.
        </p>
        <p>Isse bachne ke liye, ham useRef Hook ka istemal kar sakte hain.</p>
        <h3>Example</h3>
        <p>
          <span className="clrRed">useRef</span> application re-renders track
          karne ke liye
        </p>
        <p className="bgExample">
          <pre>
            {`
 import { useState, useEffect, useRef } from "react";
 import ReactDOM from "react-dom/client";
 
 function App() {
   const [inputValue, setInputValue] = useState("");
   const count = useRef(0);
 
   useEffect(() => {
     count.current = count.current + 1;
   });
 
   return (
     <>
       <input
         type="text"
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
       />
       <h1>Render Count: {count.current}</h1>
     </>
   );
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);`}{" "}
          </pre>
        </p>
        <p>
          <span className="clRed">useRef()</span> ek item hi return karta hai.
          Ye ek ' <span className="clrRed">current</span> ' named object return
          karta hai.
        </p>
        <p>
          Jab hum useRef ko initialize karte hain, toh hum initial value set
          karte hain: useRef(0).
        </p>
        <p>
          Yeh kuch iss tarah kaam karta hai: const count = {`{current: 0}`}. Hum
          count ko <span className="clrRed">count.current</span> ka istemal
          karke access kar sakte hain.
        </p>
        <p>
          Apne computer par ise run kare aur input mein likhne ki koshish
          karein, dekhein ki kaise application render count badhta hai.
        </p>
        <h2>Accessing DOM elements using useRef</h2>
        <p>
          in general, ham chahte hain ki React sab DOM manupulation handle kar
          le.
        </p>
        <p>
          Lekin kuch aise instances hain jahan{" "}
          <span className="clrRed">useRef</span> ka use bina kisi issue ke kiya
          ja sakta hai.
        </p>
        <p>
          React mein, ham ek element mein ref attribute jod sakte hain taki ham
          usse directly DOM se access kar sake.
        </p>
        <h3>Example</h3>
        <p>Input par focus karne ke liye useRef ka istemal karein.</p>
        <p className="bgExample">
          <pre>
            {`
        import { useRef } from "react";
        import ReactDOM from "react-dom/client";
        
        function App() {
          const inputElement = useRef();
        
          const focusInput = () => {
            inputElement.current.focus();
          };
        
          return (
            <>
              <input type="text" ref={inputElement} />
              <button onClick={focusInput}>Focus Input</button>
            </>
          );
        }
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);`}
          </pre>
        </p>
        <div className="bgYellow">
          <h4>Real life Example of useRef</h4>
          <p>
            Ek common real-life example jahan useRef ka istemal hota hai, vo ek
            form validation scenario hai. Suppose aap ek form banate hain jisme
            user ek field mein email address daal raha hai, aur aapko ye check
            karna hai ki vo email address valid hai ya nahi. Aise mein, aap
            useRef ka istemal karke previous value aur current value ko compare
            kar sakte hain. Jab user naya character type karta hai, aap useRef
            ke current value ko update karenge. Phir, useEffect ke andar, aap
            previous value aur current value ko compare karke validation logic
            chala sakte hain. Agar email address valid hai, toh aap kuch UI
            changes kar sakte hain, warna error message dikha sakte hain. Yeh
            approach form validation mein common hai kyunki useRef aapko allow
            karta hai previous aur current values ko track karke efficiently
            handle karna.
          </p>
        </div>
        <h2>State Change Tracking</h2>
        <p>
          The <span className="clrRed">useRef</span> Hook ka upayog previous
          state values ko track karne ke liye bhi kiya ja sakta hai.
        </p>
        <p>
          Yah isliye hai kyunki ham <span className="clrRed">useRef</span>{" "}
          values ko renders ke beech me persist kar sakte hain.
        </p>
        <h3>Example</h3>
        <p className="bgExample">
          <pre>
            {`
       import { useState, useEffect, useRef } from "react";
       import ReactDOM from "react-dom/client";
       
       function App() {
         const [inputValue, setInputValue] = useState("");
         const previousInputValue = useRef("");
       
         useEffect(() => {
           previousInputValue.current = inputValue;
         }, [inputValue]);
       
         return (
           <>
             <input
               type="text"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
             />
             <h2>Current Value: {inputValue}</h2>
             <h2>Previous Value: {previousInputValue.current}</h2>
           </>
         );
       }
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<App />);`}
          </pre>
        </p>
        <p>
          Is bar ham <span className="clrRed">useState</span>,{" "}
          <span className="clrRed">useEffect</span>, aur{" "}
          <span className="clrRed"></span> ke combination ka istemal karte hain
          previous state ko track karne ke liye.
        </p>
        <p>
          useEffect mein, har bar jab input field mein text daal kar inputValue
          update hota hai, tab hum useRef ke current value ko update kar rahe
          hain.
        </p>
        <br />
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
        <p><span className="clrRed">reducer</span> function mein aap apni custom state logic rakh sakte hain. <span className="clrRed">initialState</span> generally ek simple value ho sakta hai, lekin aksar ye ek object bhi hota hai, jise aap apne component ke state ka initial structure define karne ke liye use karte hain.</p>
        <p>useReducer Hook current state aur ek dispatch method return karta hai.</p>
        <p>Yeh state ko modify karne ke liye actions ko dispatch karne ka kaam karta hai. Dispatch function ko action object ke saath call kiya jata hai, jiska structure aap khud tay karte hain. Yeh action object reducer function ke through pass hota hai, jahan aap state ko modify kar sakte hain.</p>
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
        <p>Sare todo ko add, delete, aur complete karne ka pura logic ek hi <span className="clrRed">useReducer</span> Hook me ho sakta hai, aur isme aur actions add karke kiya ja sakta hai.</p>
        <br />
        <h2><span className="bgRed">useCallback</span> Hook</h2>
        <p>React useCallback Hook ek memoized callback function return karta hai.</p>
        <p>Memoization ko ek value ko cache karna ke roop mein samjhein, jisse use dobara calculate karne ki zarurat na ho.</p>
        <p>Isse hume resource-intensive functions ko alag karne me help milti hai, taki ye har render par automatically run na ho.</p>
        <p>The useCallback Hook sirf tabhi chalta hai jab uske kisi dependency me koi update hota hai.</p>
        <p>ye performance improve kar sakta hai.</p>
        <p>The useCallback aur useMemo Hooks similar hote hain. Main difference yeh hai ki useMemo ek memoized value return karta hai, jabki useCallback ek memoized function return karta hai. Aap useMemo ke baare mein adhik jaankari aage padh sakte hain.</p>
        <h2>Problem </h2>
        <p>One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.</p>
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
          <span>Todo.js</span>
          <pre className="bgExample">
{
  `import { memo } from "react";

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
  
  export default memo(Todos);`
}
          </pre>
        </p>
        <p>Try running this and click the count increment button.</p>
        <p>app dekhenge ki Todos component re-render hota hai, jabki todos mein koi change nahi hota</p>
        <p>Iska kaaran kya hai? Hum memo ka istemaal kar rahe hain, isliye Todos component re-render nahi hona chahiye, kyun ki na to todos state badal rahi hai aur na hi addTodo function count ko badhane par badal rahi hai.</p>
        <p>Iska karan hai  'referential equality'.</p>
        <p>Har baar jab ek component re-render hota hai, uske functions fir se create ho jaate hain. Is wajah se addTodo function asal mein badal gayi hai.</p>
        <h2>
          Solution
        </h2>
        <p>Isko theek karne ke liye, hum useCallback hook ka istemal kar sakte hain, taki yeh function har baar create na ho jabki zarurat na ho.</p>
        <p>Needlessly re-rendering se bachne ke liye useCallback Hook ka istemal karo Todos component mein:</p>
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
        <p>Ab Todos component tabhi re-render hoga jab todos prop change hoga.</p>
        <br />
        {/* <h2>useMemo Hook</h2>
        <p>React useMemo Hook ek memoized value return karta hai.</p>
        <p className="bgYellow">Memoization ko ek value ko cache karna samjho jise dobara calculate na karna pade.</p>
        <p>useMemo Hook tabhi chalta hai jab uske kisi dependency me koi update hota hai.</p> */}
      </div>
    </div>
  );
}
