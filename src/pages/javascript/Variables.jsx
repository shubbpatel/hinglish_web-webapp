import React from "react";

export default function Variables() {
  return (
    <div>
      <h2>JavaScript Variables</h2>
      <p>
        <b>Variables are Containers for Storing Data</b>
      </p>
      <p>JavaScript variables ko 4 tareeko se declare kiya ja sakta hai:</p>
      <ul>
        <li>Automatically</li>
        <li>
          Using <span className="clrRed">var</span>
        </li>
        <li>
          Using <span className="clrRed">let</span>
        </li>
        <li>
          Using <span className="clrRed"></span>
        </li>
      </ul>
      <p>pehle example mein, x, y, aur z undeclared variables hain.</p>
      <p>
        Jab inka pehli baar istemal hota hai, tab ye automatic declare ho jaate
        hain:
      </p>
      <h3>Example</h3>
      <pre className="bgExample">
        {`
    x = 8;
    y = 4;
    z = x + y;
    `}
      </pre>
      <p className="bgYellow">
        NOTE: Hamesha variables ka use karne se pehle unhe declare karna achha
        programming practice mana jata hai.
      </p>
      <p>Examples se aap guess kar sakte hain:</p>
      <ul>
        <li>x stores the value 8</li>
        <li>y stores the value 4</li>
        <li>z stores the value 12</li>
      </ul>
      <h3>Example</h3>
      <pre>
        {`
    var x = 5;
    var y = 6;
    var z = x + y;
    `}
      </pre>
      <p>
        NOTE: <span className="clrRed">Var</span> keyword ka istemal 1995 se
        2015 tak sabhi JavaScript code mein hua.
        <br />
        <span className="bgYellow">Let</span> aur{" "}
        <span className="bgYellow">const</span> keywords ko JavaScript mein 2015
        mein add kiya gaya.
        <br />
        <span className="bgYellow">Var</span> keyword ko sirf older browsers ke
        liye likhe gaye code mein istemal karna chahiye.
      </p>
      <h3>Example using let
</h3>
<pre className="bgExample">
    {`
    let x = 5;
    let y = 6;
    let z = x + y;
    
    `}
</pre>
<h3>Example using const</h3>
<pre className="bgExample">
    {`
    const x = 5;
    const y = 6;
    const z = x + y;
    `}
</pre>
<h3>
Mixed Example

</h3>
<pre className="bgExample">
    {`
    const price1 = 5;
    const price2 = 6;
    let total = price1 + price2;
    `}
</pre>
<p><b>price1</b> aur <b>price2</b> variables ko const keyword ke saath declare kiya gaya hai.
</p>
<p>Ye constant values hain aur inhe change nahi kiya ja sakta.
</p>
<p><span className="clrRed">total</span> variable ko <span className="clrRed">let</span> keyword ke saath declare kiya gaya hai.
</p>
<p>total ki value ko change kiya ja sakta hai.
</p>
<h2>When to Use var, let, or const?
</h2>
<p>1. Hamesha variables ko declare karein
</p>
<p>2. Hamesha <span className="clrRed">const</span> ka istemal karein agar value change nahi karni honi hai.
</p>
<p>3. Always use <span className="clrRed"> const</span> if the type should not be changed (Arrays and Objects)
</p>
<p>4. Sirf tab <span className="clrRed">let</span> ka istemal karein jab aap <span className="clrRed">const</span> ka istemal nahi kar sakte.
</p>
<p>5. Sirf tab <span className="clrRed">var</span> ka istemal karein jab aapko old browsers ko support karna zaruri hai.
</p>
<h2>Just Like Algebra
</h2>
<p>Bilkul algebra ke tarah, variables values ko hold karte hain:
</p>
<pre>
 {`
 let x = 2;
 let y = 3
 `}   
</pre>
<p>Bilkul algebra ke tarah, variables ko expressions mein istemal kiya jata hai:
</p>
<p>let z = x + y;
</p>
<p>Upar diye gaye example se aap guess kar sakte hain ki total ko calculate kiya gaya hai aur uska result 11 hai.
</p>
<p className="bgYellow">NOTE: Variables values ko store karne ke liye containers hote hain.
</p>
<h2>JavaScript Identifiers
</h2>
<p>Sabhi JavaScript <b>variables</b> ko <b>unique names</b> se identify kiya jana chahiye.
</p>
<p>In unique names ko <b>identifiers</b> kehte hain.
</p>
<p>Identifiers chhote names (jaise x aur y) ya fir descriptive names (age, sum, totalVolume) ho sakte hain.
</p>
<p>Variables ke liye names banane ke (unique identifiers) general rules hain:
</p>
<p>Names mein letters, digits, underscores, aur dollar signs shamil ho sakte hain.
</p>
<p>Names ko ek letter se shuru karna chahiye.
</p>
<p>Names $ aur _ se shuru ho sakte hain (lekin is tutorial mein hum iska istemal nahi karenge).
</p>
<p>Names case sensitive hote hain (y aur Y alag variables hote hain).
</p>
<p>Reserved words (jaise JavaScript keywords) names ke roop mein nahi istemal kiye ja sakte.
</p>
<p><b>NOTE</b>:JavaScript identifiers case-sensitive hote hain.
</p>
<h2>The Assignment Operator
</h2>
<p>JavaScript mein, equal sign (=) ek 'assignment' operator hai, 'equal to' operator nahi hai.
</p>
<p>(Ye x + 5 ka result calculate karta hai aur usse x mein dal deta hai. x ki value 5 se badha di jati hai.)
</p>
<p><b>NOTE:</b> JavaScript mein 'equal to' operator == ke roop mein likha jata hai.
</p>
<h2>JavaScript Data Types
</h2>
<p>JavaScript variables numbers jaise 100 aur text values jaise 'DJ Wale Babu' ko hold kar sakte hain.
</p>
<p>Programming mein, text values ko text strings kehte hain.
</p>
<p>JavaScript bahut se types ke data ko handle kar sakta hai, lekin abhi ke liye sirf numbers aur strings ko consider karein.
</p>
<p>Strings double ya single quotes ke ander likhe jaate hain. Numbers bina quotes ke likhe jaate hain.
</p>
<p>Agar aap ek number ko quotes mein rakhte hain, toh use text string ki tarah treat kiya jayega.
</p>
<h3>Example</h3>
<pre className="bgExample">
 {`
 const pi = 3.14;
 let person = "John Doe";
 let answer = 'Yes I am!';`}   
</pre>
<h2>Declaring a JavaScript Variable
</h2>
<p>JavaScript mein ek variable ko banane ko "declaring" ya "variable declare karna" kehte hain.
</p>
<p>var songName;
</p>
<p>Or</p>
let songName;
<p>Declaration ke baad, variable ki koi value nahi hoti hai (technically ise <span className="clrRed">undefined</span> kaha jata hai).
</p>
<p>Variable ko value <span className="clrRed">assign</span> karne ke liye, equal sign ka istemal karein:
</p>
<p>songName = "Kabhi Jo Baadal Barse";
</p>
<p>Aap variable ko declare karte waqt hi usme value assign kar sakte hain:
</p>
<p>let songName = "Kabhi Jo Baadal Barse"</p>
<p>Niche diye gaye example mein, humne ek variable banaya hai jiska naam songName hai aur humne usme value "Kabhi Jo Baadal Barse" assign ki hai.
</p>
<p>Fir hum us value ko HTML paragraph ke andar id="demo" ke sath "output" karte hain:
</p>
<h3>Example</h3>
<pre className="bgExample">
    {
    `<p id="demo"></p>

    <script>
    let songName = "Kabhi Jo Baadal Barse";
    document.getElementById("demo").innerHTML = songName;
    </script>
    `
    }
</pre>
<p>NOTE:Sabhi variables ko script ke shuruwat mein declare karna ek achhi programming practice hai.
</p>
<h2>One Statement, Many Variables
</h2>
<p>Aap ek statement mein multiple variables declare kar sakte hain.
</p>
<p>Statement ko let ke sath shuru karein aur variables ko comma se separate karein:
</p>
<h3>Example</h3>
<pre className="bgExample">{`let person = "Badshah", songName = "Dj Wale Babu", price = 200;
`}</pre>
<p>Ek declaration kai lines ko cover kar sakti hai:
</p>
<h3>Example</h3>
<pre className="bgExample">{`
let person = "Badshah",
carName = "Dj Wale Babu",
price = 200;
`}</pre>
<h2>Value = undefined
</h2>
<p>Computer programs mein, variables ko often bina kisi value ke declare kiya jata hai. Value kuch aisi ho sakti hai jo calculate karna hoga, ya phir kuch aisa jo baad mein diya jayega, jaise user input.
</p>
<p>Bina kisi value ke declare kiye gaye variable ki value <span className="clrRed">undefined</span> hoti hai.
</p>
<p>Is statement ko execute karne ke baad, songName variable ki value undefined hogi:
</p>
<h3>Example</h3>
<p>let songName;
</p>
<h2>Re-Declaring JavaScript Variables
</h2>
<p>Agar aap ek JavaScript variable ko <b>var</b> ke sath re-declare karte hain, toh uski value nahi gayegi.
</p>
<p>In statements ko execute karne ke baad bhi, carName variable ki value "Volvo" rahegi:
</p>
<h3>Example</h3>
<pre className="bgExample">{`
var songName = "Kabhi Jo Baadal Barse";
var songName;
`}</pre>
<p>NOTE:Aap ek variable ko <span className="clrRed">let</span> ya <span className="clrRed"></span> ke sath declare karke dobara se declare nahi kar sakte.
</p>
<p>Ye kaam nahi karega:
</p>
<pre className="bgExample">
    {`
    let songName = "Kabhi Jo Baadal Barse";
    let songName;
    `}
</pre>
<h2>JavaScript Arithmetic
</h2>
<p>Algebra ki tarah, aap JavaScript variables ke sath arithmetic operations kar sakte hain, jaise ki = aur + ka istemal karke:
</p>
<h3>Example</h3>
<p>let x = 5 + 2 + 3;
</p>
<p>Aap strings ko bhi add kar sakte hain, lekin strings concatenate ho jayengi:
</p>
<h3>
    Example
</h3>
<pre className="bgExample">{`let x = "Nitish" + " " + "Kumar";
`}</pre>
<p>Isko bhi try karein:
</p>
<h3>Example</h3>
<p>let x = "5" + 2 + 3;
</p>
<p className="bgYellow">NOTE: Bilkul, agar aap quotes mein number daalenge to baaki ke numbers ko string ke roop mein treat kiya jayega aur unko concatenate kiya jayega.
</p>
<p>Now try this:
</p>
<h3>Example</h3>
<p>let x = 2 + 3 + "5";
</p>
<h2>JavaScript Dollar Sign $
</h2>
<p>Kyunki JavaScript dollar sign ko ek letter ke roop mein dekhta hai, isliye dollar sign ko shamil karne wale identifiers valid variable names hain:
</p>
<h3>Example</h3>
<pre className="bgExample">
{`
  let $ = "Vasudhaiva Kutumbakam";
  let $$$ = 2;
  let $myMoney = 5;
  `}   
</pre>
<p>JavaScript mein dollar sign ka upayog bahut common nahin hai, lekin professional programmers ise often ek JavaScript library ke main function ke liye ek alias ke roop mein istemal karte hain.
</p>
<p>JavaScript library jQuery mein, example ke liye, main function $ ko HTML elements ko select karne ke liye istemal kiya jata hai. jQuery mein $("p");  means "sabhi p elements ko select karo".
</p>
<h2>JavaScript Underscore (_)
</h2>
<p>Kyunki JavaScript underscore ko ek letter ke roop mein dekhta hai, isliye _ shamil kiye hue identifiers valid variable names hote hain:
</p>
<h3>Example</h3>
<pre className="bgExample">
 {`
 let _lastName = "Singh";
 let _x = 2;
 let _100 = 5;
 `}   
</pre>
<p>JavaScript mein underscore ka use bahut normal nahin hai, lekin professional programmers ke beech ek convention hai ki ise 'private (hidden)' variables ke liye ek alias ke roop mein istemal kiya jata hai.
</p>
<hr />
    </div>
  );
}
