import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar';

export default function ReactIntro() {

    const topics = [
        { title: 'React Home', path: "" },
        { title: 'React ES6', path: "es6-hindi" },
        { title: 'React JSX', path: "react-jsx-hindi" },
        { title: 'React Render Method', path: "react-render-method-hindi" },
        { title: 'React Events', path: "react-events-hindi" },
        { title: 'React Memo', path: "react-memo-hindi" },
        { title: 'React Components in hindi', path: "react-components-hindi" },
        { title: 'React Props in hindi', path: "react-props-hindi" },
        { title: 'React Conditionals in hindi', path: "react-conditionals-hindi" },
        { title: 'React Lists in hindi', path: "react-lists-hindi" },
        { title: 'React Forms in hindi', path: "react-forms-hindi" },
        { title: 'React Router in hindi', path: "react-router-hindi" },
        { title: 'React Hooks in hindi', path: "react-hooks-hindi" },
        { title: 'React useState Hook in hindi', path: "react-usestate-hook-hindi" },
        { title: 'React useEffect Hook in hindi', path: "react-useeffect-hook-hindi" },
        { title: 'React useReducer Hook in hindi', path: "react-usereducer-hook-hindi" },
        { title: 'React useRef Hook in hindi', path: "react-useref-hook-hindi" },
        { title: 'React useContext Hook in hindi', path: "react-usecontext-hook-hindi" },
        { title: 'React useCallback Hook in hindi', path: "react-usecallback-hook-hindi" },
      ];

  return (
    <div>
        <Sidebar topics={topics}/>
 
            <Outlet/>

    </div>
  )
}
