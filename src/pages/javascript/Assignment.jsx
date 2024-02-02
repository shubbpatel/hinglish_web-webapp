import React from "react";

export default function Assignment() {
  return (
    <div>
      <h2>JavaScript Assignment Operators</h2>
      <p>
        Assignment operators JavaScript variables ko values assign karte hain.
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
      <h2>Shift Assignment Operators</h2>
      <p>
        Programming mein, shift assignment operators ka istemal bitwise shift
        operations perform karne aur uska result ek variable mein assign karne
        ke liye kiya jata hai. Ye operators aam taur par C, C++, Java,javascript
        aur dusre languages mein istemal hote hain. Yahan shift assignment
        operators aur unke explanations hain:
      </p>
      <h4>Left Shift with Assignment {`(<<=)`}:</h4>
      <p>
        {"<<="} operator left shift assignment operator hai. Isse left operand
        ke bits ko left mein right operand dvara specified number of positions
        shift kiya jata hai aur result ko phir se left operand mein assign kiya
        jata hai.
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
        int x = 5;
        x <<= 2;  // Equivalent to x = x << 2;`}
      </pre>
      <p>
        Ismein, x (5) ka binary representation two positions left mein shift
        kiya gaya hai, jiski wajah se 20 aaya hai.
      </p>
      <h4>ght Shift with Assignment {`(>>=)`}:</h4>
      <p>
        {`(>>=)`} Is operator ko right shift assignment operator kehte hain. Ye
        operator left operand ke bits ko right direction mein shift karta hai,
        jo ki right operand dvara specify kiye gaye positions ke hisab se hota
        hai, aur fir usse left operand mein assign kar deta hai.
      </p>
      <pre className="bgExample">
        {`
        int y = 16;
        y >>= 2;  // Equivalent to y = y >> 2;`}
      </pre>
      <p>
        Is udaharan mein, y (16) ke binary representation ko do sthanon se
        daayein shift kiya gaya hai, jiski wajah se 4 ka result milta hai.
      </p>
      <p>
        Ye operators aksar low-level programming aur aise situations mein
        istemal hote hain jahan bitwise operations ki zarurat hoti hai. Right
        shift ka behavior programming language par depend karta hai. Kuch
        languages mein, signed integers ko right shift karne se vacant bit
        positions sign bit se fill ho sakti hai (arithmetic shift), jabki kuch
        languages mein ye zeros se fill ho sakti hain (logical shift). Yeh yaad
        rakhna zaroori hai ki aapko detailed information ke liye specific
        programming language ki documentation ko refer karna chahiye.
      </p>
      <table>
        <tr>
          <th>Operator</th>
          <th>Example</th>
          <th>Same As</th>
        </tr>
        <tr>
          <td>{`<<=`} </td>
          <td>{`x <<= y`}</td>
          <td>{`x = x << y`}</td>
        </tr>
        <tr>
          <td>{`>>=`} </td>
          <td>{`x >>= y`}</td>
          <td>{`x = x >> y`}</td>
        </tr>
        <tr>
          <td>{`>>>=`}</td>
          <td>{`x >>>= y`}</td>
          <td>{`x = x >>> y`}</td>
        </tr>
      </table>
      <h2>Bitwise Assignment Operators</h2>
      <p>
        Bitwise assignment operators ka upayog bitwise operations perform karne
        aur uska result ek variable mein assign karne ke liye hota hai. Ye
        operators aam taur par low-level programming mein istemaal hote hain
        jisme variables ke andar individual bits ko manipulate karne ke liye.
        Yahaan bitwise assignment operators hain:
      </p>
      <ol>
        <li>&=: Bitwise AND assignment operator.</li>
        <li>|=: Bitwise OR assignment operator.</li>
        <li>^=: Bitwise XOR assignment operator.</li>
        <li>{`<<=`}: Left shift assignment operator.</li>
        <li>{`>>=`}: Right shift assignment operator.</li>
      </ol>
      <p>
        In operators ka istemaal aksar binary representation mein bit-level
        operations perform karne ke liye hota hai.
      </p>
      <h2>Logical Assignment Operators</h2>
      <p>
        && (logical AND) aur || (logical OR) aise logical operators hain jo
        boolean expressions ko evaluate karne aur conditions ke truth value ke
        adhar par decisions lene ke liye aksar istemal hote hain.
      </p>
      <h3>Logical AND (&&):</h3>
      <p>
        Yeh operator dono operands ko evaluate karta hai aur true tab hota hai
        jab dono operands true hote hain. Agar koi bhi operand false hai, toh
        result false hota hai.
      </p>
      <pre className="bgExample">
        {`
        var x = true;
        var y = false;
        
        var result = x && y; // Result: false`}
      </pre>
      <h3>Logical OR (||): </h3>
      <p>
        Yeh operator dono operands ko evaluate karta hai aur true tab hota hai
        jab kam se kam ek operand true hota hai. Agar dono operands false hain,
        toh result false hota hai.
      </p>
      <pre className="bgExample">
        {`
        var a = true;
        var b = false;
        
        var result = a || b; // Result: true`}
      </pre>
      <p>
        In operators ka istemal boolean expressions ke saath kiya jaata hai,
        jisse hum various conditions ko check kar sakte hain aur unke based par
        decisions le sakte hain.
      </p>
      <h2>The Nullish Coalescing Operator (??)</h2>
      <p>
        ??= yeh ek nullish coalescing assignment operator hai, jo ki JavaScript
        mein ECMAScript 2022 ke standard ke tahat aaya hai. Iska istemal
        variables ko assign karne mein hota hai, lekin sirf jab variable null ya
        undefined hota hai.
      </p>
      <p>
        Yeh operator ek variable ko assign karta hai, agar woh null ya undefined
        hota hai, warna existing value ko maintain karta hai:
      </p>
      <pre className="bgExample">
        {`
        let x;

        // Agar x null ya undefined hai, toh usko 10 assign karo.
        x ??= 10;
        
        console.log(x); // Output: 10
        
        // Agar x already defined hai, toh uski value maintain karo.
        x ??= 20;
        
        console.log(x); // Output: 10 (Kyunki x pehle se defined tha)`}
      </pre>
      <p>Yeh operator "nullish coalescing" ka matlab hai ki woh sirf null ya undefined ke against kaam karta hai, lekin falsy values jaise 0, empty string, false, etc. ke against nahi.</p>
      <hr />
    </div>
  );
}
