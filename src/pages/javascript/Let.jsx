import React from "react";

export default function Let() {
  return (
    <div>
      <h2>JavaScript Let</h2>
      <p>
        <span className="clrRed">"let"</span> keyword ko ES6 (2015) mein introduce
        kiya gaya tha.
      </p>
      <p>
      <span className="clrRed">let</span> keyword ke sath declare kiye gaye variables ka Block Scope hota hai.
        Yani ki, (jahaan aapne let use kiya hai, uss block ke bahar vo
        variable access nahi hoga.)
      </p>
      <p><span className="clrRed">let</span> ke sath declare kiye gaye variables ko use karne se pahle unhe Declare karna zaroori hai. Agar aap unhe pahle declare nahi karte, toh error aayega.
</p>
<p>Ek block mein <span className="clrRed">let</span> ke sath declare kiye gaye variables ko usi block mein Redeclared nahi kiya ja sakta hai.
</p>
<h2>
Block Scope

</h2>

    </div>
  );
}
