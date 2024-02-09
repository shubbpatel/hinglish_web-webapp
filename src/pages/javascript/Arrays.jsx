import React from "react";

export default function Arrays() {
  const songs = [
    "DJ Wale Babu",
    "Jhoome Jo Pathaan",
    "Arjan Vailly",
    "Tere Vaaste",
  ];
  let deletedSongs = songs.splice(1, 3, "Husn", "Ankhiyaan Gulaab", "Hua Main");
  console.log("original array: ", songs);
  console.log("Deleted songs array: ", deletedSongs);
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
       var songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
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
        const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
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
      <p>
        Arrays mein "elements" ko access karne ke liye numbers ka istemal kiya
        jata hai. Is example mein, user[0] Honey return karta hai
      </p>
      <h3>Ex : Array</h3>
      <pre className="bgExample">
        {`
        const user = ["Honey", "Singh", 40];
        console.log(user[0]);
        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">Honey</p>
      <h3>Ex: Object</h3>
      <p>
        Objects mein "elements" ko access karne ke liye names ka istemal kiya
        jata hai. Is example mein, user.firstName{" "}
        <span className="clrRed">Honey</span> return karta hai:
      </p>
      <pre className="bgExample">
        {`
       const user = {firstName:"Honey", lastName:"Singh", age:40};
       `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">Honey</p>
      <h3>Array Elements mein Objects ho sakte hain</h3>
      <p>
        JavaScript ke variables objects ho sakte hain. Arrays bhi special types
        of objects hote hain.
      </p>
      <p>
        Is wajah se, hum ek hi Array mein different types ke variables rakh
        sakte hain.
      </p>
      <p>
        Aap ek Array mein objects rakh sakte hain. Aap ek Array mein functions
        rakh sakte hain. Aap ek Array mein arrays rakh sakte hain:
      </p>
      <h3>Properties of Array and Array Methods</h3>
      <p>
        JavaScript arrays mein boht useful built-in array properties aur methods
        hain:
      </p>
      <h3>Properties</h3>
      <p>
        1. <b>length</b>: Ye property array ke length batati hai, matlab array
        mein kitne elements hain array.length se pta lga sakte hain.
      </p>
      <h3>Methods:</h3>
      <h3>push() Method </h3>
      <p>
        <b>push( )</b>: Is method ka use ek new element ko array mein add karne
        ke liye kiya jata hai. push() method se koi bhi new element hamesha
        array ke end mein hi add hota hai{" "}
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
    const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
    songs.push('Husn');  // Adds a new element (Husn) to songs
    console.log(songs);
    `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly', 'Tere Vaaste',
        'Husn']
      </p>
      <p>
        Ek new element ko <span className="clrRed">length</span> property ka use
        karke bhi array mein add kiya ja sakta hai:
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
        songs[songs.length] = 'Hua Main'; // Adds new element "Hua Main" to songs
        console.log(songs);

            `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly', 'Tere Vaaste',
        'Hua Main']
      </p>

      <h3>pop() Method</h3>
      <p>
        <b>pop( )</b>: Ye method array se last element ko remove karta hai aur
        removed element return karta hai.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
    const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
    console.log("Original array :", songs);
    let removedSong = songs.pop();
    console.log("Original array after removing song :", songs);
    console.log("Removed Song :", removedSong);
    `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        Original array : ["DJ Wale Babu", "Jhoome Jo Pathaan", "Arjan Vailly",
        "Tere Vaaste"] <br />
        Original array after removing a song : ["DJ Wale Babu", "Jhoome Jo
        Pathaan", "Arjan Vailly"] <br />
        Removed Song :"Tere Vaaste"
      </p>
      <p className="bgYellow">
        <b>Ek real-life example push() </b> jahan push() method ka istemal kiya
        ja sakta hai woh ek shopping list ko update karna hai. Imagine kijiye
        aap ek online grocery shopping website use kar rahe hain aur aapko apni
        shopping list mein kuch items add karne hain. Is situation mein aap
        push() method ka istemal kar sakte hain:
      </p>
      <h3>shift() Method</h3>
      <p>
        <b>shift()</b>: ye method array se pehla element remove karta hai aur
        removed element return karta hai. Ye method array ki length ko change
        karta hai.
      </p>
      <pre className="bgExample">
        {`
        const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
        console.log("Original array :", songs);
        let removedSong = songs.shift();
        console.log("Original array after removing song :", songs);
        console.log("Removed Song :", removedSong);
        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste']{" "}
        <br />
        Original array after removing song : ["Jhoome Jo Pathaan", "Arjan
        Vailly", "Tere Vaaste"] <br />
        Removed Song :"DJ Wale Babu"
      </p>
      <p className="bgYellow">
        <b>Real Life Example of shift()</b> Imagine aap ek task management
        application bna rahe hain jahan users ek to-do list mein tasks add kar
        sakte hain. jab user task complete kar leta hai, aap task list se remove
        karke task as completed display karna chahte hain. In this scenario, aap
        shift() method ka use kar sakte hain to-do list se first task remove
        karne ke liye .
      </p>
      <h3>unshift( ) Method</h3>
      <p>
        <b>unshift( )</b> : Is method se elements ko array ke start mein add
        kiya jata hai aur phir new array ka length return kiya jata hai.
      </p>
      <p className="bgYellow">
        <b>Real Life Example of unshift()</b> Chaliye, ek real-life scenario
        dekhte hain jahan unshift() method ka istemal kiya ja sakta hai. Imagine
        kijiye aap ek social media platform develop kar rahe hain jahan users
        apne thoughts, updates, ya posts share karte hain. Jab koi user ek naya
        post karta hai, toh yeh post sabse upar dikhani hoti hai, matlab wo
        latest post ban jati hai.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
       const instaPosts = ['1 day old Picture', '2 days old Picture', '3 days Picture'];
       console.log("Original array :", instaPosts);
       instaPosts.unshift("New Post : Today's Picture");
       console.log("Original array after adding new insta Post :", instaPosts);
        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        Original array : ['1 day old Picture', '2 days old Picture', '3 days
        Picture']
        <br />
        Original array after adding new insta Post : (4) ["New Post : Today's
        Picture", '1 day old Picture', '2 days old Picture', '3 days Picture']
      </p>
      <h3>concat() Method</h3>
      <p>
        <b>concat()</b>: Ye method do ya do se zyada arrays ko combine karke ek
        naya array banata hai aur woh naya array return karta hai.
      </p>
      <p className="bgYellow">
        <b>Real Life Example of concat( ) Method </b>
        Chaliye, ek real-life scenario dekhte hain jahan concat() method ka
        istemal kiya ja sakta hai. Imagine kijiye aap ek e-commerce website
        develop kar rahe hain jahan aapke paas alag-alag categories ke products
        hain. Har category ke products ko alag array mein store kiya gaya hai.
        Ab, jab aap apne website par products ko display karna chahte hain, toh
        aapko saare categories ke products ko ek hi list mein merge karna padega
        taaki wo ek seamless shopping experience provide karein. Is situation
        mein, aap concat() method ka istemal karke alag-alag arrays ko combine
        kar sakte hain aur ek consolidated list bana sakte hain.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
// Arrays with products in different categories
let electronicItems = ["Laptop", "Smartphone", "Tablet"];
let clothing = ["T-Shirt", "Jeans", "Dress"];
let books = ["Fiction", "Non-Fiction", "Biography"];

// Combining all arrays into one consolidated list using concat() method
let allProducts = electronicItems.concat(clothing, books);

// Display the consolidated list of products
console.log("All Products:", allProducts);

`}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        All Products: ["Laptop", "Smartphone", "Tablet", "T-Shirt", "Jeans",
        "Dress", "Fiction", "Non-Fiction", "Biography"]
      </p>
      <h3>slice() Method</h3>
      <p>
        <b>slice( )</b>: Ye method array ka ek portion ko copy karke naya array
        banata hai, original array ko modify nahi karta.
      </p>
      <p className="bgYellow">
        {" "}
        <b>Real Life Example of slice( ) Method </b>
        Ek real-life scenario jahan slice() method ka istemal kiya ja sakta hai
        woh ek restaurant ka menu ka example hai. Imagine kijiye aap ek
        restaurant ka online ordering system develop kar rahe hain. Har category
        ka apna menu hai jaise starters, main course, desserts, beverages, etc.
        Jab user apne order ko customize karta hai, tab unhe har category se
        kuch items select karne ka option milta hai. Is situation mein, jab user
        kisi specific category ka menu dekhta hai, toh aap slice() method ka
        istemal karke sirf us category ke items ko display kar sakte hain. Yeh
        menu ko slice karna hota hai, matlab unhe select karna aur sirf us
        portion ko display karna. yahan hum ek easy example se slice() method
        samjhenge
      </p>
      <h3>Ex.</h3>
      <p>
        Array ke element 1 ('Jhoome Jo Pathaan') se shuru hone wala ek hissa
        slice karein:
      </p>
      <pre className="bgExample">
        {`
        const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
        const songsList2 = songs.slice(1);
        console.log(songsList2);
        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        ['Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste']
      </p>
      <p>
        NOTE: Slice() method ek naya array banaata hai. Slice() method source
        array se koi bhi elements hataata nahi hai.
      </p>
      <p>
        Slice() method do arguments le sakta hai jaise slice(1, 3). Phir method
        start argument se elements ko chunta hai, aur end argument tak (lekin
        end argument ko usmein include nahi karta) chalta hai.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
        const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
        const songsList2 = songs.slice(1,3);
        console.log(songsList2);
        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">['Jhoome Jo Pathaan', 'Arjan Vailly']</p>
      <p>
        Agar end argument chhod diya gaya hai, jaise pehle example mein, to
        slice() method baaki array ko slice kar deta hai.
      </p>
      <pre className="bgExample">
        {`
        const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
        const songsList2 = songs.slice(2);
        console.log(songsList2);
        `}
      </pre>
      <p className="clrBlack">['Arjan Vailly','Tere Vaaste']</p>
      <h3> javascript Array splice() Method</h3>
      <p>
        <b>splice()</b>: Is method se array ke contents ko modify kiya jata hai,
        elements ko remove ya replace kiya jata hai ya naye elements ko add kiya
        jata hai.
      </p>
      <p className="bgYellow">
        <b>Real Life Example of splice( ) Method</b> Ek real-life example jahan
        splice() method ka istemal kiya ja sakta hai woh ek library ka
        management system hai. Imagine kijiye aap ek library ka online system
        develop kar rahe hain jahan users books ko issue aur return kar sakte
        hain. Jab koi user ek book issue karta hai, toh woh book library ke
        available books se remove ho jati hai aur user ke account mein add ho
        jati hai. Similar tarah se jab koi user ek book return karta hai, toh
        woh book library ke available books mein add ho jati hai aur user ke
        account se remove ho jati hai. Is scenario mein, splice() method ka
        istemal kiya ja sakta hai jab books ki inventory update ki jati hai. Yeh
        method ek array mein se elements ko remove ya add karne ke liye use hota
        hai.
      </p>
      <h3>Ex.</h3>
      <pre className="bgExample">
        {`
       const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
       songs.splice(1, 0, 'Husn', 'Ankhiyaan Gulaab');  
       console.log(songs);
            `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="clrBlack">
        ['DJ Wale Babu', 'Husn', 'Ankhiyaan Gulaab', 'Jhoome Jo Pathaan', 'Arjan
        Vailly', 'Tere Vaaste']
      </p>
      <p>
        Pehla parameter (1) naye elements ko kahaan add kiya jaana chahiye wo
        define karta hai (splice kiya jaana chahiye)
      </p>
      <p>
        Doosra parameter (0) yeh define karta hai ki kitne elements hataaye
        jaana chahiye.
      </p>
      <p>
        Baki ke parameters ('Husn', 'Ankhiyaan Gulaab') naye elements ko define
        karte hain jo add kiye jaane hain.
      </p>
      <p>splice() method ek array return karta hai deleted items ke sath:</p>
      <pre className="bgExample">
        {`
        const songs = ['DJ Wale Babu', 'Jhoome Jo Pathaan', 'Arjan Vailly','Tere Vaaste'];
        let deletedSongs = songs.splice(1, 3, 'Husn', 'Ankhiyaan Gulaab','Hua Main');  
        console.log("original array: ",songs);
        console.log("Deleted songs array: ",deletedSongs);
        `}
      </pre>
      <p>
        <b>Output</b>
      </p>
      <p className="bgExample">
        original array: ['DJ Wale Babu', 'Husn', 'Ankhiyaan Gulaab', 'Hua Main']{" "}
        <br />
        Deleted songs array: ['Jhoome Jo Pathaan', 'Arjan Vailly', 'Tere
        Vaaste']
      </p>
      
    </div>
  );
}
