import React from "react";

export default function Operators() {
  return (
    <div>
      <h2>JavaScript Operators in Hindi</h2>
      <p>
        The <b>Addition Operator </b>+ adds numbers:
      </p>
      <p>
        The <b>Assignment Operator</b> = assigns a value to a variable.
      </p>
      <p>A + B = C</p>
      <h2>JavaScript Assignment</h2>
      <p>Assignment Operator (=) ek variable ko ek value assign karta hai:</p>
      <h3>Assignment Examples</h3>
      <pre className="bgExample">
        {`
    let x = 10;

    // Assign the value 5 to x
    let x = 5;
    // Assign the value 2 to y
    let y = 2;
    // Assign the value x + y to z:
    let z = x + y;
    `}
      </pre>
      <h2>JavaScript Addition</h2>
      <p>Addition Operator (+) numbers ko jodta hai:</p>
      <h3>Adding</h3>
      <p>
        let x = 5;
        <br />
        let y = 2;
        <br />
        let z = x + y;
      </p>
      <h2>JavaScript Multiplication</h2>
      <p>Multiplication Operator (*) numbers ko multiply karta hai:</p>
      <h3>Multiplying</h3>
      <p>
        let x = 5;
        <br />
        let y = 2; <br />
        let z = x * y;
      </p>
      <h2>Types of JavaScript Operators in Hindi</h2>
      <p>There are different types of JavaScript operators:</p>
      <table>
        <tr>
          <td>Arithmetic Operators</td>
        </tr>
        <tr>
          <td>Assignment Operators</td>{" "}
        </tr>
        <tr>
          <td>Comparison Operators</td>
        </tr>
        <tr>
          <td>String Operators</td>{" "}
        </tr>
        <tr>
          <td>Logical Operators</td>
        </tr>
        <tr>
          <td>Bitwise Operators</td>
        </tr>
        <tr>
          <td>Ternary Operators</td>
        </tr>
        <tr>
          <td>Type Operators</td>{" "}
        </tr>
      </table>
      <h2>JavaScript Arithmetic Operators</h2>
      <p>
        Arithmetic Operators ka istemal numbers par arithmetic operations karne
        ke liye hota hai.
      </p>
      <h3>Arithmetic Operators Example</h3>
      <pre className="bgExample">
        {`
    let a = 3;
    let x = (100 + 50) * a;
    `}
      </pre>
      <table>
        <tr>
          <th>Operator</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>+</td>
          <td>Addition</td>
        </tr>
        <tr>
          <td>-</td>
          <td>subtraction</td>
        </tr>
        <tr>
          <td>*</td>
          <td>Multiplication</td>
        </tr>
        <tr>
          <td>**</td>
          <td>Exponentiation</td>
        </tr>
        <tr>
          <td>/</td>
          <td>Division</td>
        </tr>
        <tr>
          <td>%</td>
          <td>Modulus (Division Remainder)</td>
        </tr>
        <tr>
          <td>++</td>
          <td>Increment</td>
        </tr>
        <tr>
          <td>--</td>
          <td>Decrement</td>
        </tr>
      </table>
      <h2>JavaScript Assignment Operators</h2>
      <p>
        Assignment operators JavaScript variables ko values assign karte hain.
      </p>
      <p>
        Addition Assignment Operator (+=) ek value ko ek variable mein add karta
        hai.
      </p>
      <h3>Assignment</h3>
      <p>
        let x = 10;
        <br />x += 5;
      </p>
      <table>
        <tr>
          <th>Operator</th>
          <th>Example</th>
          <th>Same As</th>
        </tr>
        <tr>
          <td>=</td>
          <td>a = b</td>
          <td>b = a</td>
        </tr>
        <tr>
          <td>+=</td>
          <td>a += b</td>
          <td>a = a + b</td>
        </tr>
        <tr>
          <td>-=</td>
          <td>a -= b</td>
          <td>a = a - b</td>
        </tr>
        <tr>
          <td>*=</td>
          <td>a *= b</td>
          <td>a = a * b</td>
        </tr>
        <tr>
          <td>/=</td>
          <td>a /= b</td>
          <td>a = a / b</td>
        </tr>
        <tr>
          <td>%=</td>
          <td>a %= b</td>
          <td>a = a % b</td>
        </tr>
        <tr>
          <td>**</td>
          <td>a **= b</td>
          <td>a = a ** b</td>
        </tr>
      </table>
      <p className="bgYellow">
        Assignment operators ko puri tarah se JS Assignment chapter mein
        describe kiya gaya hai.
      </p>
      <h2>JavaScript Comparison Operators</h2>
      <table>
        <tr>
          <th>Operator</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>==</td>
          <td>equal to</td>
        </tr>
        <tr>
          <td>===</td>
          <td>equal value and equal type</td>
        </tr>
        <tr>
          <td>!=</td>
          <td>not equal</td>
        </tr>
        <tr>
          <td>!==</td>
          <td>not equal value or not equal type</td>
        </tr>
        <tr>
          <td>{`>`}</td>
          <td>greater than</td>
        </tr>
        <tr>
          <td>{`<`}</td>
          <td>less thano</td>
        </tr>
        <tr>
          <td>{`>=`}</td>
          <td>greater than or equal to</td>
        </tr>
        <tr>
          <td>{`<=`}</td>
          <td>less than or equal to</td>
        </tr>
        <tr>
          <td>?</td>
          <td>ternary operator</td>
        </tr>
      </table>
      <p>
        Comparison operators ko puri tarah se <b>Comparisons</b> chapter mein
        describe kiya gaya hai.
      </p>
      <h2>JavaScript String Comparison</h2>
      <p>
        Upar diye gaye saare comparison operators ko strings par bhi istemal
        kiya ja sakta hai.
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
    let text1 = "A";
    let text2 = "B";
    let result = text1 < text2;
    `}
      </pre>
      <p>Dhyaan rakhe ki strings ko aksharik roop se tulna kiya jata hai.</p>
      <h3>Example</h3>
      <pre className="bgResult">
        {`
  let text1 = "20";
  let text2 = "5";
  let result = text1 < text2;
  `}
      </pre>
      <h2>JavaScript String Addition</h2>
      <p>
        <span className="clrRed">+</span> ka upayog strings ko jodne
        (concatenate) ke liye bhi kiya ja sakta hai.
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
    let text1 = "John";
    let text2 = "Doe";
    let text3 = text1 + " " + text2;
    `}
      </pre>
      <p>
        <span className="clrRed">+=</span> assignment operator ka upayog strings
        ko jodne (concatenate) ke liye bhi kiya ja sakta hai:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
    let text1 = "Kya kammaal website hai ";
    text1 += "Hinglish Web";
    `}
      </pre>
      <p>
        <b>output :</b>
        <br />

        <span>Kya kammaal website hai Hinglish Web</span>
      </p>
      <p>
        Jab strings par istemal hota hai, to <span className="clrRed">+</span>{" "}
        operator ko concatenation operator kaha jata hai.
      </p>
      <h3>Adding Strings and Numbers</h3>
      <p>
        Do numbers ko add karne par sum milega, lekin ek number aur ek string ko
        add karne par result ek string hoga:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
    let x = 5 + 5;
    let y = "5" + 5;
    let z = "Aur Batao" + 5;
    `}
      </pre>
      <p>
        <b>output of x, y, z </b>
        <br />
        10 <br />
        55 <br />
        Aur Batao5
      </p>
      <h2>JavaScript Logical Operators</h2>
      <table>
        <tr>
          <th>Operation</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>&&</td>
          <td>logical and</td>
        </tr>
        <tr>
          <td>||</td>
          <td>logical or</td>
        </tr>
        <tr>
          <td>!</td>
          <td>logical not</td>
        </tr>
      </table>
      <h2>JavaScript Type Operators</h2>
      <p>
        <b>1. typeof: </b>
        <br />
        Yeh ek variable ka type return karta hai.
        <br />
        <b>2. instanceof:</b> <br />
        agar ek object kisi object type ka ek instance hai, to true return karta
        hai.
      </p>
      <h2>JavaScript Bitwise Operators
</h2>
<p>Bit operators 32-bit numbers par kaam karte hain.
</p>
<p>Koi bhi numeric  operand operation mein 32-bit number mein convert ho jata hai. Result ko phir se JavaScript number mein convert kiya jata hai.
</p>

<hr />
    </div>
  );
}
