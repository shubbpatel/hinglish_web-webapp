import React from "react";

export default function Arrays() {
    
  return (
    <div>
      <h2>Arrays in Javascript in Hindi</h2>
      <p>
        avaScript mein, ek array ek ordered collection hoti hai jisme multiple
        values store kiye jaate hain. Yeh values strings, numbers, objects,
        functions, ya kisi aur data type ke ho sakte hain. Array ko brackets []
        ke andar comma separated values ke form mein declare kiya jaata hai.
        Neeche kuch basic operations aur examples diye gaye hain:
      </p>
      <p>
        <b>Array declaration:</b>
      </p>
      <pre className="bgExample">
        {`
        var songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
        `}
      </pre>
      <h3>Hum Arrays kyu Use karte hain?</h3>
      <p>
        Agar aapke paas items ki ek list hai for example songs ki ek list, toh
        songs ko single variables mein store karna aise dikh sakta hai.
      </p>
      <pre className="bgExample">
        {`
        let song1 = "Tere Vaste";
        let song2 = "HUA MAIN";
        let song3 = "HUSN";
        let song4 = "Ankhiyaan Gulaab";
        `}
      </pre>
      <p>
        Lekin agar aap chahte hain ki aap songs mein loop chalayein aur apne
        favourite song ko dhoondhein? Aur agar aapke paas 4 songs nahi, balki
        200 songs tab aap kya karenge?
      </p>
      <p>
        Iska solution <b>Array</b> hai Ek array ek hi naam ke neeche bahut saare
        values ko hold kar sakta hai, aur aap values ko ek index number ka use
        karke through access kar sakte hain.
      </p>
      <p>
        <b>
          JavaScript Array banane ka sabse simple tarika ek array literal ka
          istemal karna hai
        </b>
      </p>
      <p>
        <b>Code Syntax:</b>
      </p>
      <pre className="bgExample">
        {`const arrayName = [value1, value2, value3, ...];`}
      </pre>
      <p className="bgYellow">
        Arrays ko <span className="clrRed">const</span> keyword ke saath declare
        karna ek best practice maani jaati hai.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
    const movies = ["Animal", "RRR", "Sam Bahadur", "12th Fail"];
    `}
      </pre>
      <p>
        Spaces aur line breaks important nahi hain. Ek declaration kai lines par
        faili hui ho sakti hai:
      </p>
      <pre className="bgExample">
        {`
        const cars = [
            "Animal",
            "RRR",
            "Sam Bahadur"
            "12th Fail"
          ];`}
      </pre>
      <p>
        Hum pehle ek empty array create karke, aur phir usme elements add kar
        sakte hain:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        const movies = [];
        movies[0]= "Animal";
        movies[1]= "Sam Bahadur";
        movies[2]= "12th Fail";
        movies[3]= "RRR";
        `}
      </pre>
      <h3>
        Use of <span className="clrRed">new</span> keyword in Javascript{" "}
      </h3>
      <p>
        Neeche di gaye example mein bhi ek Array banaya gaya hai, aur usmein
        values ko assign ki gai hai:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">{`
    const movies = new Array("Animal", "RRR", "Sam Bahadur", "12th Fail");`}</pre>
      <p>
        Upar diye gaye do examples bilkul same hain. <b>new Array()</b> ka
        istemal karne ki koi zarurat nahi hai. simplicity, padhne mein asaan aur
        execution speed ke liye, array literal method ka istemal karein.
      </p>
      <h3>How to access Array Elements</h3>
      <p>
        Aap ek array element ko index number ke through access kar sakte hain:
      </p>
      <pre className="bgExample">
        {`
        const movies = ["Animal", "RRR", "Sam Bahadur", "12th Fail"];
        let movie = movies[2];
        console.log(movie);
        `}
      </pre>
      <p>Output</p>
      <p className="clrBlack">Sam Bahadur</p>
      <p className="bgYellow">
        NOTE:: Array indexes 0 se shuru hote hain. [0] pehla element hai. [1]
        doosra element hai.
      </p>
      <h3>How to change an Array element</h3>
      <p>
        Yeh statement <b>movies</b> ke pehle element ki value change karega:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">{`movies[0] = "Animal";`}</pre>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        const movies = ["Animal", "RRR", "Sam Bahadur", "12th Fail"];
        movies[1] = "KGF";
        console.log(movies);
        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">["Animal", "KGF", "Sam Bahadur", "12th Fail"]</p>
      <h3>How to convert an Array to a String in javascript in hindi</h3>
      <p>
        JavaScript method toString() ek array ko (comma separated) array values
        ka ek string mein change kar deta hai.
      </p>
      <h3>Ex</h3>
      <pre className="bgExample">
        {`
       var songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste];
       var songsAsString = songs.toString();
       console.log(songsAsString);
        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        DJ Wale Babu,Jhoome Jo Pathaan,Arjan Vailly,Tere Vaaste
      </p>
      <h3>How to access full Array</h3>
      <p>
        JavaScript ke saath, full array <b>array</b> name ko refer karke access
        kiya ja sakta hai:
      </p>
      <pre className="bgExample">
        {`
        const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste];
        console.log(songs);
`}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        ["DJ Wale Babu", "Jhoome Jo Pathaan", "Arjan Vailly", "Tere Vaaste"]{" "}
      </p>
      <h3>Arrays are also Objects</h3>
      <p>
        Arrays ek special type ke objects hote hain. JavaScript mein typeof
        operator arrays ke liye "object" return karta hai.
      </p>
      <p>
        Lekin, JavaScript arrays ko best describe kiya ja sakta hai as arrays.
      </p>
      <p>Arrays mein "elements" ko access karne ke liye numbers ka istemal kiya jata hai. Is example mein, user[0] Honey return karta hai</p>
      <h3>Ex : Array</h3>
      <pre className="bgExample">
        {`
        const user = ["Honey", "Singh", 40];
        console.log(user[0]);
        `}
      </pre>
      <p><b>Output</b></p>
      <p className="clrBlack">Honey</p>
      <h3>Ex: Object</h3>
      <p>Objects mein "elements" ko access karne ke liye names ka istemal kiya jata hai. Is example mein, user.firstName <span className="clrRed">Honey</span> return karta hai:</p>
       <pre className="bgExample">
       {`
       const user = {firstName:"Honey", lastName:"Singh", age:40};
       `} 
       </pre>
       <p><b>Output</b></p>
       <p className="clrBlack">Honey</p>
       
    </div>
  );
}
