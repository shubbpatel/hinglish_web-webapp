import React from 'react'

export default function Router() {
  return (
    <div className='bContainer container'>
        <h2 id="router">React Router</h2>
        <p>Create React App mein page routing included nahi rehta hai.</p>
        <p>iske liye React Router most popular solution hai.</p>
        <h2>Add React Router </h2>
        <p>
          React Router ko apne application mein include karne ke liye, terminal
          mein yeh command run karen, application ke root directory se:
        </p>
        <p className="bgBlue">npm i -D react-router-dom</p>
        <p className="bgYellow">
          Note: Is tutorial mein React Router v6 ka istemal hota hai. Agar aap
          v5 se upgrade kar rahe hain, toh aapko @latest flag ka istemal karna
          hoga:
        </p>
        <p className="bgBlue">npm i -D react-router-dom@latest</p>
        <h2>folder Structure</h2>
        <p>
          Multiple page routes wala ek application banane ke liye, sabse pehle
          file structure banaye.
        </p>
        <p>
          <span className="clrRed">src</span> folder ke andar, hum{" "}
          <span className="clrRed">pages</span> naam ka ek folder banayenge
          jisme kai saare files honge.
        </p>
        <p className="clrRed">
          src\pages\:
          <ul className="clrRed">
            <li>Layout.js</li>
            <li>Home.js</li>
            <li>Blogs.js</li>
            <li>Contact.js</li>
            <li>NoPage.js</li>
          </ul>
        </p>
        <p>
          Har file ek bahut basic React component contain karegi. <br />
          <br />
        </p>
        <p className="bgYellow">
          Aap yaha par file extention <b className="clrRed">.js</b> ki jagah par{" "}
          <b className="clrRed">.jsx</b> bhi use kar sakte hain now a days ye{" "}
          <span className="clrRed">.jsx</span> preffered tarika hai{" "}
        </p>
        <h2>Usage</h2>
        <p>hum index.js mein React Router ka use karenge.</p>
        <pre className="bgExample">
          {`
          import ReactDOM from "react-dom/client";
          import { BrowserRouter, Routes, Route } from "react-router-dom";
          import Layout from "./pages/Layout";
          import Home from "./pages/Home";
          import Blogs from "./pages/Blogs";
          import Contact from "./pages/Contact";
          import NoPage from "./pages/NoPage";
          
          export default function App() {
            return (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            );
          }
          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<App />);`}
        </pre>
        <h2>Example Explained</h2>
        <p>
          We wrap our content first with{" "}
          <span className="clrRed">{`<BrowserRouter>`}</span>.
        </p>
        <p>
          Phir hum apne <span className="clrRed">{`<Routes>`}</span> ko define
          karte hain. Ek application mein multiple{" "}
          <span className="clrRed">{`<Routes>`}</span> ho sakte hain. Hamara
          basic example sirf ek ka istemal karta hai.
        </p>
        <p>
          <span className="clrRed">{`<Route>`}</span> ko nested rakha ja sakta
          hai. Pehle <span className="clrRed">{`<Route>`}</span> ka path{" "}
          <span className="clrRed">/</span> hai aur yeh Layout component ko
          render karta hai.
        </p>
        <p>
          Nested <span className="clrRed">{`<Route>`}</span> s apne parent route
          se inherit karte hain aur usme add ho jate hain. Isliye, blogs ka path
          parent ke saath combine ho jata hai aur /blogs ban jata hai.
        </p>
        <p>
          Home component route ka koi path nahi hai, lekin usme ek{" "}
          <span className="clrRed">index</span> attribute hai. Ye index
          attribute parent route ke liye default route ko specify karta hai, jo
          ki <span className="clrRed">/</span> hai.
        </p>
        <p>
          Path ko <span className="clrRed">*</span> par set karna kisi bhi
          undefined URL ke liye catch-all ki tarah kaam karega. Ye ek 404 error
          page ke liye achha hai.
        </p>

        <h2>Pages Components</h2>
        <p>
          Layout component mein <span className="clrRed">{`<Outlet>`}</span> aur{" "}
          <span className="clrRed">{`<Link>`}</span> elements hain.
        </p>
        <p>
          The <span className="clrRed">{`<Outlet>`}</span> current selected
          route render karta hai.
        </p>
        <p>
          <span className="clrRed">{`<Link>`}</span> URL set karne aur browsing
          history ko track karne ke liye istemal hota hai.
        </p>
        <p>
          Ham kisi bhi samay kisi internal path ko link karne ke liye{" "}
          <span className="clrRed">{`<a href="">`}</span> ki bajaye{" "}
          <span className="clrRed">{`<Link> `}</span> ka istemal karenge
        </p>
        <p>
          Layout route" ek aisa shared component hai jo sabhi pages par ek jaisa
          content daalta hai, jaise ki ek navigation menu.
        </p>
        <p>
          <span className="clrRed">Layout.js:</span>
          <pre className="bgExample">
            {`
  import { Outlet, Link } from "react-router-dom";

  const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;`}
          </pre>
        </p>
        <p>
          <span className="clrRed">Home.js :</span>
          <pre className="bgExample">
            {`
  const Home = () => {
    return <h1>Home</h1>;
  };
  
  export default Home;
  `}
          </pre>
        </p>
        <p>
          <span className="clrRed">Blogs.js:</span>
          <pre className="bgExample">
            {`
  const Blogs = () => {
    return <h1>Blog Articles</h1>;
  };
  
  export default Blogs;
  `}
          </pre>
        </p>
        <p>
          <span className="clrRed">Contact.js:</span>
          <pre className="bgExample">
            {`
  const Contact = () => {
    return <h1>Contact Me</h1>;
  };
  
  export default Contact;
  `}
          </pre>
        </p>
        <p>
          <span className="clrRed">NoPage.js:</span>
          <pre className="bgExample">
            {`
const NoPage = () => {
  return <h1>404</h1>;
};

export default NoPage;
`}
          </pre>
        </p>
    </div>
  )
}
