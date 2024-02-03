import React from 'react'

export default function DataTypes() {
  return (
    <div>
        <h2>JavaScript Data Types in Hindi
</h2>
<h3>JavaScript has many Datatypes
</h3>
<ol>
    <li>Undefined</li>
    <li>String</li>
    <li>Number</li>
    <li>Boolean</li>
    <li>Symbol</li>
    <li>Null</li>
    <li>Object</li>
    <li>Bigint</li>
</ol>
<h3>The Object Datatype
</h3>
<p>ye hain Object data type :
</p>
<p>Array</p>
<p>Object</p>
<p>date</p>
<h3>Ex.</h3>
<pre className='bgExample'>
    {`
    // Numbers:
    let length = 16;
    let weight = 7.5;
    
    // Strings:
    let color = "blue";
    let lastName = "Singh";
    
    // Booleans
    let x = true;
    let y = false;
    
    // Object:
    const person = {firstName:"Gabbar", lastName:"Singh"};
    
    // Array object:
    const bikes = ["Honda", "JAVA", "BMW"];
    
    // Date object:
    const date = new Date("2022-03-25");`}
</pre>
<p className='bgYellow'>NOTE: Ek JavaScript variable kisi bhi tarah ke data ko hold kar sakta hai.
</p>
<h2>The Concept of Data Types in Hindi
</h2>
<p>Programming mein, data types ek important concept hai.
</p>
<p>Variables ke upar operation karne ke liye, type ke bare mein kuch jaan lena important hai.
</p>
<p>Bina data types ke, ek computer is problem  ko surakshit taur par nahi suljha sakta:
</p>
<pre className='bgExample'>{`let x = 16 + "TATA";
`}</pre>
<p>"TATA" ko sixteen ke saath jodne ka koi matlab hai kya? Kya isse ek error aayega ya ek result aayega?
</p>
<p>JavaScript will treat the example above as:
</p>
<pre className='bgExample'> 
    {`let x = "16" + "Volvo";
`}
</pre>
<p className='bgYellow'>NOTE: Jab aap ek number aur ek string ko jodte hain, to JavaScript number ko as a string treat karega. 
</p>
<h3>Ex.</h3>
<pre className='bgExample'>
    {`
    let x = 16 + "TATA";
    `}
</pre>
<h3>EX.</h3>
<pre className='bgExample'>
    {`
    let x = "TATA" + 16;
    `}
</pre>
<p>JavaScript expressions ko left se right ki or se evaluate karta hai. Alag-alag sequences  se alag-alag result show  ho sakte hain:
</p>
<h3>Ex. 1</h3>
<pre className='bgExample'>
    {`
    let x = 10 + 4 + "TATA";
    `}
</pre>
<p><b>Output :</b> 14TATA</p>
<h3>Ex. 2</h3>
<pre className='bgExample'>
    {`
    let x = "TATA" + 42 + 2;
    `}
</pre>
<p><b>Output:</b> TATA422</p>
<p>Pahle example mein, JavaScript 10 aur 4 ko numbers manta hai, jab tak use "TATA" tak pahunchta hai.
</p>
<p>Doosre example  mein, kyonki pehla operand ek string hai, sab operands ko string ke roop mein liya jata hai.
</p>
<h2>JavaScript Types are Dynamic
</h2>
<p>JavaScript mein dynamic types hote hain. Iska matlab hai ki ek hi variable ko alag-alag data types hold karne ke liye istemal kiya ja sakta hai:
</p>
<h3>Ex.</h3>
<pre className='bgExample'>
    {`
    let x;       // Now x is undefined
    x = 5;       // Now x is a Number
    x = "Gabbar";  // Now x is a String
    `}
</pre>
<h2>JavaScript Strings
</h2>
<p>Ek string (ya text string) ek series hoti hai jisme kai characters hote hain, jaise ki "Gabbar Singh".
</p>
<p>Strings ko quotes ke saath likha jata hai. Aap single ya double quotes ka istemal kar sakte hain:
</p>
<h3>Ex.</h3>
<pre className='bgExample'>{`
// Using double quotes:
let carName1 = "TATA Punch";


// Using single quotes:
let carName2 = 'TATA Punch';
`}</pre>
<p>Aap ek string ke andar quotes ka istemal kar sakte hain, jab tak vo string ko surround kar rahe quotes ke saath match na karein:
</p>
<h3>Ex.</h3>
<pre className='bgExample'>
    {`
    // Single quote inside double quotes:
    let answer1 = "Sab badhiya hai";
    
    
    // Single quotes inside double quotes:
    let answer2 = "Bhaago 'Gabbar' aa gya";
    
    
    // Double quotes inside single quotes:
    let answer3 = 'Are o "Sambha" kitne aadmi the ?';
    `}
</pre>
<h2>JavaScript Numbers
</h2>
<p>JavaScript mein sabhi numbers decimal numbers (floating point) ke roop mein store hote hain.
</p>
<p>Numbers ko decimals ke saath ya bina decimals ke likha ja sakta hai:
</p>
<h3>Ex.</h3>
<pre className='bgExample'>{`
// With decimals:
let x1 = 34.00;


// Without decimals:
let x2 = 34;
`}</pre>
<h2>Exponential Notation
</h2>
<p>Extra large ya extra small numbers ko scientific (exponential) notation ke saath likha ja sakta hai:
</p>
<h3>Ex.</h3>
<pre className='bgExample'>{`
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
`}</pre>
<h2>JavaScript BigInt
</h2>
<p>Sabhi JavaScript numbers ko ek 64-bit floating-point format mein store kiya jata hai.
</p>
<p>JavaScript BigInt ek naya datatype hai (ES2020) jo normal JavaScript Number se adhik bade integer values ko store karne ke liye istemal ho sakta hai.
</p>
<h3>Ex.</h3>
<pre className='bgExample'>
    {`
    let x = BigInt("123456789012345678901234567890");
    `}
</pre>
<h2>JavaScript Booleans
</h2>
<p>Booleans can only have two values: <span className='clrRed'>true</span> or <span className='clrRed'>false</span>.
</p>
<h3>Ex.</h3>
<pre className='bgExample'>
    {`
    let x = 5;
    let y = 5;
    let z = 6;
    (x == y)       // Returns true
    (x == z)       // Returns false
    `}
</pre>
<p>Booleans ko aksar conditional testing mein istemal kiya jata hai.
</p>
<h2>JavaScript Arrays in Hindi
</h2>
<p>JavaScript arrays ko square brackets ke saath likha jata hai.
</p>
<p> Array items commas ke saath separate kiye jate hain.
</p>
<p>Niche diye gaye code mein ek array ko declare (create) kiya gaya hai, jo ki 3 items (car names) ko contain karta hai:
</p>
<h3>Ex.</h3>
<pre className='bgExample'>{`const cars = ["TATA", "MARUTI SUZUKI", "MAHINDRA"];
`}</pre>
<p>Array indexes zero-based hote hain, jiska matlab hai ki pehla item [0], doosra [1], aur aage aise hi chalte jata hai.
</p>
<h2>JavaScript Objects in Hindi
</h2>
<p>JavaScript objects ko curly braces `{}` mein likha jata hai.
</p>
<p>Object properties name:value pairs ke roop mein likhe jate hain, jo commas se alag hote hain.
</p>
<h3>Ex.</h3>
<pre className='bgExample'>{`
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
`}</pre>
<p>Upar ke example  mein (person) object ke 4 properties hain: firstName, lastName, age, aur eyeColor.
</p>
<h2>The typeof Operator
</h2>
<p>Aap JavaScript ke typeof operator ka istemal karke ek JavaScript variable ki type jaan sakte hain.
</p>
<p>typeof operator ek variable ya expression ki type return karta hai:
</p>
<h3>Ex.</h3>
<pre className='bgExample'>{`
typeof ""	         // Returns "string"
typeof "Gabbar"         // Returns "string"
typeof "Gabbar Singh"     // Returns "string"
`}</pre>
<h3>
Ex.
</h3>
<pre className='bgExample'>
    {`
    typeof 0	          // Returns "number"
    typeof 314            // Returns "number"
    typeof 3.14           // Returns "number"
    typeof (3)            // Returns "number"
    typeof (3 + 4)        // Returns "number"
    `}
</pre>
<h2>Undefined</h2>
<p>JavaScript mein, ek variable jiska koi value nahi hai, uska value undefined hota hai. Uski type bhi undefined hoti hai.
</p>
<h3>Ex.</h3>
<pre className='bgExample'>{`
let bike;    // Value is undefined, type is undefined
`}</pre>
    </div>
  )
}
