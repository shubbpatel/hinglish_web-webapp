import React from 'react'

export default function Events() {
  return (
    <div>
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
    </div>
  )
}
