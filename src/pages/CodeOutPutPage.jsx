import React from "react";

function Song(props) {
  return <li>{props.name}</li>;
}

export default function Playlist() {
  const songs = [
    "Main Pal Do Pal Ka Shayar Hoon",
    "Oh Oh Jane Jana",
    "Jhalak Dikhla Ja",
    "Tum Hi Ho",
    "Tere Vaaste",
  ];
  return (
    <>
      <h1>Songs in my Playlist?</h1>
      <ul>
        {songs.map((song) => (
          <Song key={song} name={song} />
        ))}
      </ul>
    </>
  );
}
