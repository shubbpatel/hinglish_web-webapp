import React from 'react'

export default function Lists() {
  return (
    <div className='bContainer container'>
        <h2 id="lists">React Lists</h2>
        <p>React mein aap ek tarah ke loop ke saath lists ko render karenge.</p>
        <p>JavaScript map() array method generally preffered method hai.</p>
        <h3>Example</h3>
        <p>
          chalo render kare all of the <span className="clrRed">songs</span>{" "}
          from our <span className="clrRed">Playlist</span>:
        </p>
        <pre className="bgExample">
          {`
 function Song(props) {
  return <li>{ props.name }</li>;
}

function Playlist() {
  const songs = ['Main Pal Do Pal Ka Shayar Hoon', 'Oh Oh Jane Jana', 'Jhalak Dikhla Ja', 'Tum Hi Ho', 'Tere Vaaste'];
  return (
    <>
      <h1>Songs in my Playlist?</h1>
      <ul>
        {songs.map((song) => <Song name={song} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Playlist />);`}
        </pre>
        <p>
          <b>Output on your screen will be:</b>
        </p>
        <div className="bgWhite">
          <h1>Songs in my Playlist?</h1>
          <ul>
            <li>Main Pal Do Pal Ka Shayar Hoon</li>
            <li>Oh Oh Jane Jana</li>
            <li>Jhalak Dikhla Ja</li>
            <li>Tum Hi Ho</li>
            <li>Tere Vaaste</li>
          </ul>
        </div>
        <p>
          Jab aap is code ko apne <span className="clrRed">React App</span> mein
          chalayenge, to yeh kaam karega lekin aapko ek warning milegi ki list
          items ke liye 'key' nahi di gayi hai.
        </p>
        <h2>Keys</h2>
        <p>
          <span className="clrRed">Keys</span> React ko elements ka track rakhne
          mein help karti hain. Is tarah, agar koi item update ya remove hota
          hai, to sirf woh item dubara render hoga poori ki poori list nahi.
        </p>
        <p>
          <span className="clrRed">Keys</span> ko har sibling ke liye unique
          hona chahiye. Lekin globally duplicate ho sakte hain.
        </p>
        <p className="bgYellow">
          Aam taur par, key ek unique ID honi chahiye jo har item ko assign ki
          gayi ho. End mein, aap array index ko bhi ek key ke roop mein istemal
          kar sakte hain.
        </p>
        <h3>Example</h3>
        <p>
          Chaliye hamara previous example ko keys shamil karne ke liye refactor
          karte hain:
        </p>
        <pre className="bgExample">
          {`
  function Song(props) {
    return <li>{ props.name }</li>;
  }
  
  function Playlist() {
    const songs = ['Main Pal Do Pal Ka Shayar Hoon', 'Oh Oh Jane Jana', 'Jhalak Dikhla Ja', 'Tum Hi Ho', 'Tere Vaaste'];
    return (
      <>
        <h1>Songs in my Playlist?</h1>
        <ul>
          {songs.map((song) => <Song key={song} name={song} />)}
        </ul>
      </>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}{" "}
        </pre>
    </div>
  )
}
