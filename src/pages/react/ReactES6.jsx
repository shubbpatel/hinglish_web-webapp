import React from "react";

export default function ReactES6() {
  return (
    <div>
      <h2 id="javascript-ES6-hindi">What is ES6 in Hindi ? (ES 6 kya hai ?)</h2>
      <p>
        ES6 ka matlab hai ECMAScript 6. ECMAScript ko JavaScript ko standardize
        karne ke liye banaya gaya tha, aur ES6 ECMAScript ka 6th version hai, jo
        2015 mein launch hua tha, aur ise ECMAScript 2015 bhi kaha jata hai.
      </p>
      <h2>Why Should I Learn ES6? (ES6 kyu seekhna chahiye ?)</h2>
      <p>
        Because react ES6 ka istemal karta hai, aur aapko kuch naye features ke
        saath familiar hona chahiye, jaise ki:
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
        Ek class ek prakar ka function hota hai, lekin isse shuru karne ke liye
        hum 'function' shabd ka istemal nahi karte, hum 'class' shabd ka istemal
        karte hain, aur properties ek 'constructor()' method ke andar assign
        kiye jaate hain
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
        Class ke naam par dhyan dijiye. Humne Name "Bike" ko ek uppercase
        character ke saath shuru kiya hai. Ye ek class ke liye ek standard
        naming convention hai.
      </p>
      <p>Ab aap Bike class ka istemal karke objects bana sakte hain</p>
      <br />
      <h3>Example</h3>
      <p className="bgExample">
        <pre>
          {`class Bike {
              constructor(name) {
                  this.brand = name;
                }
            }
            
        const mybike = new bike("Hero");`}
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
      <p>Ek method create kariye jiska naam "present" ho:</p>
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
        Jaise ki aap upar ke example mein dekh sakte hain, aap method ko object
        ke method ka name refer karte hue call karte hain, jise parentheses ke
        saath follow kiya jata hai (parameters parentheses ke andar jaate hain).
      </p>
      <h3>Class Inheritance</h3>
      <p>
        Class inheritance banane ke liye, 'extends' shabd ka istemal karein.
      </p>
      <p>
        Ek class jise class inheritance ke saath banaya gaya hai, wo dusri class
        ke sabhi methods ko inherit karti hai:
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
const mytruck = new Model("Tata", "Ashok Leyland");
mytruck.show(); `}
        </pre>
      </p>
      <p>super() method parent class ko refer karta hai.</p>
      <p>
        "Constructor method mein super() method ko call karke, hum parent class
        ke constructor method ko call karte hain aur parent class ke properties
        aur methods ka use karte hain.
      </p>
      <br />
      <br />
      <h2>ES6 Arrow Functions</h2>
      <p>
        In simple words: Arrow functions humein chhoti syntax mein function
        likhne me madad karte hain.
      </p>
      <h3>Example </h3>
      <p>before: </p>
      <p className="bgExample">
        {`hello = function() {
  return "Hello Bharat!";
} `}
      </p>
      <br />
      <h3>Example</h3>
      <p>with Arrow Function :</p>
      <p className="bgExample">
        {` hello = () => {
  return "Hello Bharat!";
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
      <p className="bgExample">{`hello = () => "Hello Bharat!"; `}</p>
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
        'this' ka handling regular functions ke comparison mein arrow functions
        mein alag hai.
      </p>
      <p>
        Saral shabdon mein, arrow functions mein 'this' ka binding nahi hota.
      </p>
      <p>
        Sadharan functions mein 'this' keyword uss object ko represent karta hai
        jisne function call kiya, jo ki window, document, ek button ya kuch bhi
        ho sakta hai.
      </p>
      <p>
        Arrow functions mein, 'this' keyword hamesha uss object ko represent
        karta hai jo arrow function ko define karta hai.
      </p>
      <p>Is difference ko samajhne ke liye, do examples dekhte hain.</p>
      <p>
        Dono examples ek method ko do baar call karte hain, pehli baar jab page
        load hota hai, aur doosri baar jab user ek button par click karta hai
      </p>
      <p>
        Pehla example regular function ka istemal karta hai, aur doosra example
        ek arrow function ka istemal karta hai.
      </p>
      <p>
        result dikhata hai ki pehla example do alag-alag objects (window aur
        button) ko return karta hai, aur doosra example Header object ko do baar
        return karta hai
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
        Arrow function mein, 'this' Header object ko represent karta hai, chahe
        jo bhi function ko call kare:
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
        yaad rakhein. Kabhi-kabhi aapko regular functions ka behavior chahiye
        hota hai, agar nahi, to arrow functions ka istemal karein."
      </p>
      <br />
      <h2>ES6 Variables</h2>
      <p>
        ES6 se pehle aapke variables ko define karne ka ek hi tareeka tha: 'var'
        keyword ka istemal. Agar aap unhe define nahi karte the, toh woh global
        object ko assign ho jaate the. Lekin agar aap strict mode mein nahi the,
        toh aapko error milta tha agar aapke variables undefined the
      </p>
      <p>
        Ab, ES6 ke saath, aapke pas variables ko define karne ke liye teen
        tareeke hain: <span style={{ color: "green" }}>var</span> ,{" "}
        <span style={{ color: "purple" }}>let</span>, aur{" "}
        <span style={{ color: "red" }}>const</span>.
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
        <span style={{ color: "green" }}>var</span> ka block scoped version hai,
        aur yeh uss block (ya expression) tak hi limited hota hai jahan par yeh
        define kiya jata hai."
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
        <span style={{ style: "pink" }}>const</span> ek aisa variable hai jo ek
        baar create ho gya, to uski value kabhi nahi badal sakti.
      </p>
      <p>
        <span style={{ style: "pink" }}>const</span> has a block scope.
      </p>
      <p>
        Keyword <span style={{ style: "pink" }}>const</span> thoda misleading ho
        sakta hai.
      </p>
      <p>
        Ye ek constant value ko define nahi karta. Ye ek value ke liye constant
        reference ko define karta hai
      </p>
      <p>
        You can not do this :
        <ul>
          <li>ek constant value reassign nahi kar sakte</li>
          <li>ek constant array reassign nahi kar sakte</li>
          <li>ek constant object reassign nahi kar sakte</li>
        </ul>
        <p>You can do this:</p>
        <ul>
          <li>constant array ke elements change kar sakte hain</li>
          <li>constant object ke properties change kar sakte hain</li>
        </ul>
      </p>
      <br />
      <h2>ES6 'Array Methods'</h2>
      <p>JavaScript mein multiple array methods hain.</p>
      <p>React mein ek bahut hi useful array method hai, jo hai method</p>
      <p>
        <span className="clrRed">.map()</span> method aapko array ke har item
        par ek function chalane me help karta hai, jisse ek naya array as result
        return hota hai
      </p>
      <p>
        React mein, <span className="clrRed">.map()</span> ka istemal lists
        banane ke liye kiya ja sakta hai.
      </p>
      <h3>Example</h3>
      <p>Ek array se items ki ek list banaiye:</p>
      <pre className="bgExample">
        {`

          const myArray = ['Mobile', 'Tab', 'Laptop'];
          const myList = myArray.map((item) => <p>{item}</p>)
`}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        Mobile <br />
        Tab <br />
        Laptop
      </p>
      <br />
      <h2>ES6 Destructuring</h2>
      <p>
        Destructuring ko samjhaane ke liye, hum ek sandwich banayenge. Kya aap
        fridge se sab kuch nikal kar apna sandwich banate hain? Nahi, aap sirf
        woh cheezein nikalte hain jo aap apne sandwich mein istemal karna chahte
        hain.
      </p>
      <p>
        Destructuring bilkul waise hi hai. Hamare paas ek array ya object ho
        sakta hai jise hum istemal kar rahe hain, lekin hame inme se kuch hi
        items ki zarurat hoti hai.
      </p>
      <p>
        Destructuring se sirf wohi cheezein nikalna asaan ho jata hai jo zaruri
        hain.
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
          const vehicles = ['Mahindra', 'f-150', 'expedition'];
          // old way const
          
          car = vehicles[0]; 
          const truck = vehicles[1];
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
        Arrays ki destructuring karte samay, variables ko declare karne ka order
        important hai.
      </p>
      <p>
        Agar hamein sirf car aur suv chahiye, toh hum truck ko bas bahar chhod
        sakte hain lekin comma rakh sakte hain:
      </p>
      <p className="bgExample">
        const vehicles = ['Mahindra', 'f-150', 'expedition'];
        <br />
        const [car,, suv] = vehicles;
      </p>
      <p>
        Destructuring ka istemal tab aur useful ho jata hai jab koi function ek
        array return karta hai:
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`

  function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7); 
console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);

`}
      </pre>
      <p>
        <b>Output:</b>
      </p>
      <p className="clrBlack">
        11 <br />
        -3 <br />
        28 <br />
        0.57
      </p>
      <br />
      <h2>Destructuring Objects</h2>
      <p>
        Ye hai ek object ko ek function ke andar istemal karne ka purana
        tareeka:
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
                const vehicleOne = {
                    brand: 'Mahindra',
                    model: 'Bolero',
                    type: 'SUV',
                    year: 2021, 
                    color: 'White'
                  }
                  
                  myVehicle(vehicleOne);
                  
                  // old way
                  function myVehicle(vehicle) {
                    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
                    console.log(message);
                  }
                `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">My SUV is a White Mahindra Bolero.</p>
      <p>
        Ye hai ek object ko ek function ke andar istemal karne ka naya tareeka:
      </p>
      <h3>Example</h3>
      <p>with destructuring:</p>
      <pre className="bgExample">
        {`
                 const vehicleOne = {
                  brand: 'Mahindra',
                  model: 'Bolero',
                  type: 'SUV',
                  year: 2021, 
                  color: 'White'
                }
                
                  
                  myVehicle(vehicleOne);
                  
                  function myVehicle({type, color, brand, model}) {
                    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
                  }
                  `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">My SUV is a White Mahindra Bolero.</p>
      <p className="bgBlue">
        Dhyaan dijiye ki object properties ko kisi specific order mein declare
        karne ki jarurat nahi hoti.
      </p>
      <p>
        Hum deeply nested objects ki bhi destructuring kar sakte hain jise
        nested object ko refer karke fir ek colon aur curly braces ka istemal
        karke waha se zaruri items ki phir se destructuring kar sakte hain:
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
        const vehicleOne = {
            brand: 'Mahindra',
            model: 'Bolero',
            type: 'SUV',
            year: 2021, 
            color: 'White',
            registration: {
              city: 'Inodre',
              state: 'Madhya Pradesh',
              country: 'India'
            }
          }
          
          myVehicle(vehicleOne)
          
          function myVehicle({ model, registration: { state } }) {
            const message = 'My ' + model + ' is registered in ' + state + '.';
            console.log(message)
          }

       `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">My Bolero is registered in Madhya Pradesh.</p>
      <br />
      <h2>ES6 Spread Operator</h2>
      <p>
        Spread Operator : JavaScript spread operator (...) humein ek existing
        array ya object ka poora ya kuch hissa quickly doosre array ya object
        mein copy karne help karta hai.
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
        const numbersOne = [2, 4, 6];
        const numbersTwo = [8, 10, 12];
        const numbersCombined = [...numbersOne, ...numbersTwo];
        console.log(numbersCombined);
        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">[2, 4, 6, 8, 10, 12]</p>
      <p>Spread operator aksar destructuring ke saath istemal hota hai</p>
      <h3>Example</h3>
      <p>
        Pahle aur doosre item ko <span className="clrRed">numbers</span> se
        variables mein assign karein aur baki ko ek array mein rakh dein:
      </p>
      <pre className="bgExample">
        {`
        const table = [2, 4, 6, 8, 10, 12];

        const [part1, part2, ...rest] = table;
        console.log(part1);
        console.log(part2);
        console.log(rest);

        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        2 <br />
        4 <br />
        [6, 8, 10, 12]
      </p>
      <p>Aap objects ke saath bhi spread operator ka istemal kar sakte hain:</p>
      <h3>Example</h3>
      <p>Combine these two objects:</p>
      <pre className="bgExample">
        {`
       const vehicle = {
        brand: 'TATA',
        model: 'PUNCH',
        color: 'red'
      }
      
      const updateMyVehicle = {
        type: 'car',
        year: 2021, 
        color: 'yellow'
      }
      
      const myUpdatedVehicleDetails = {...vehicle, ...updateMyVehicle}
      console.log(myUpdatedVehicleDetails)
       `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        {`{brand: 'TATA', model: 'PUNCH', color: 'yellow', type: 'car', year: 2021}`}
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
        <span className="clrRed">user.js</span> hai, aur usme woh cheezein fill
        karte hain jo hum export karna chahte hain
      </p>
      <p>2 type ke exports hote hain: Named aur Default.</p>
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
    export const name = "katrina"
    export const age = 40
    `}
        </pre>
      </p>
      <h3>All at once at the bottom (sabhi ek saath file ke bottom mein)</h3>
      <p className="bgExample">
        <pre>
          {`
         const name = "katrina"
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
            const name = "Disha";
            const age = 35;
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
        Named exports ko curly braces ka istemal karke destructuring karni padti
        hai. Default exports ko nahi karni padti.
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
    </div>
  );
}
