import React from "react";

export default function Arithmetic() {
  return (
    <div>
      <h2>JavaScript Arithmetic Operators</h2>
      <p>
        Arithmetic operators numbers (literals ya variables) par arithmetic
        operation perform karte hain.
      </p>
      <ul>
        <li>
          <span className="clrRed">(+)</span> Addition
        </li>
        <li>
          <span className="clrRed">(-)</span> Subtraction
        </li>
        <li>
          <span className="clrRed">(*)</span> Multiplication
        </li>
        <li>
          <span className="clrRed">(**)</span> Exponentiation
        </li>
        <li>
          <span className="clrRed">(/)</span> Division
        </li>
        <li>
          <span className="clrRed">(%)</span> Modulus (Remainder)
        </li>
        <li>
          <span className="clrRed">(++)</span> Increment
        </li>
        <li>
          <span className="clrRed">(--)</span> Decrement
        </li>
      </ul>
      <h2>Arithmetic Operations</h2>
      <p>Ek normal arithmetic operation do numbers par operate hota hai.</p>
      <p>The two numbers can be literals:</p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`let x = 100 + 50;
`}
      </pre>
      <p>or variables:</p>
      <h3>Example</h3>
      <pre className="bgExample">{`
let x = a + b;
`}</pre>
      <p>or expressions:</p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
    let x = (100 + 50) * a;
    `}
      </pre>
      <h2>Operators and Operands</h2>
      <p>
        Arithmetic operation mein, jo numbers use hoti hain, unhe operands kehte
        hain.
      </p>
      <p>
        Yeh operation, jo do operands ke beech mein perform kiya jata hai, woh
        ek operator dwara define hota hai.
      </p>
      <table>
        <tr>
          <th>Operand</th>
          <th>Operator</th>
          <th>Operand</th>
        </tr>
        <tr>
            <td>200</td>
            <td>-</td>
            <td>40</td>
        </tr>
      </table>
      <h2>Adding</h2>
      <p>The addition operator (+) adds numbers:
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    let x = 5;
    let y = 2;
    let z = x + y;
    `}
</pre>
<h2>Subtracting</h2>
<p>The subtraction operator (-) subtracts numbers.
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    let x = 5;
    let y = 2;
    let z = x - y;
    `}
</pre>
<h2>Multiplying</h2>
<p>The multiplication operator (*) multiplies numbers.
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    let x = 5;
    let y = 2;
    let z = x * y;
    `}
</pre>
<h2>Dividing</h2>
<p>The division operator (/) divides numbers.
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    let x = 5;
    let y = 2;
    let z = x / y; 
    `}
</pre>
<h2>Remainder</h2>
<p>Modulus operator (%) ka istemal division ke remainder ko nikalne ke liye hota hai.
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    let x = 5;
    let y = 2;
    let z = x % y;
    `}
</pre>
<p>Arithmetic mein, do integers ke division se quotient aur remainder milta hai.
</p>
<p>Mathematics mein , modulo operation ka result ek arithmetic division ka remainder hota hai.
</p>
<h2>Incrementing
</h2>
<p>Increment operator (++) numbers increment karta hai. 
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    let x = 5;
    X++;
    let z = x;
    `}
</pre>
<h2>Decrementing</h2>
<p>The decrement operator (--)  number decrement karta hai.
</p>
<h3>Example</h3>
<pre className="bgExample">{`
let x = 5;
x--;
let z = x;
`}</pre>
<h2>Exponentiation
</h2>
<p>The exponentiation operator (**) pahle operand ko doosre operand ki power par uthata hai.
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    let x = 5;
    let z = x ** 2;
    `}
</pre>
<p>x ** y ek hi result deta hai jo <span className="clrRed">Math.pow(x, y)</span> deta hai:
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    let x = 5;
    let z = Math.pow(x,2);`}
</pre>
<h2>Operator Precedence
</h2>
<p>Operator precedence ko describe karta hai ki ek arithmetic expression mein operations kis order  mein perform honge.
</p>
<h3>Example</h3>
<pre className="bgExample">{`let x = 100 + 50 * 3;
`}</pre>
<p>Upar ke example  ka rseult 150 * 3 ke saath same  hai ya 100 + 150 ke saath, yeh operator precedence par depend karta hai.
</p>
<p>addition pehle hua ya fir  multiplication ?
</p>
<p>Jaise ki traditional school mathematics mein, multiplication hamesha addition se pehle hota hai.
</p>
<p>Multiplication (*) aur division (/) ka precedence addition (+) aur subtraction (-) se zyada hota hai.
</p>
<p>Aur (school mathematics ki tarah) precedence ko parentheses ka istemal karke badla ja sakta hai.
</p>
<p>Jab parentheses ka istemal hota hai, to parentheses ke andar ke operations ko sabse pehle calculate kiya jata hai:
</p>
<h3>Example</h3>
<pre className="bgExample">{`let x = (100 + 50) * 3;
`} </pre>
<p>Jab bahut se operations ka ek hi precedence level hota hai (jaise ki addition aur subtraction ya multiplication aur division), toh unhe left se right ki taraf calculate kiya jata hai:
</p>
<h3>Example</h3>
<pre className="bgExample">
    {`
    let x = 100 + 50 - 3;
    let x = 100 / 50 * 3;
    `}
</pre>
<hr />
    </div>
  );
}
