import React from "react";
import { Route, Routes } from "react-router-dom";
import ReactES6 from "../pages/react/ReactES6";
import ReactIntro from "../pages/react/ReactIntro";
import ReactJSX from "../pages/react/ReactJSX";
import ReactHome from "../pages/react/ReactHome";
import Components from "../pages/react/Components";
import Props from "../pages/react/Props";
import ConditionalRendering from "../pages/react/ConditionalRendering";
import Lists from "../pages/react/Lists";
import Forms from "../pages/react/Forms";
import Router from "../pages/react/Router";
import UseStateHook from "../pages/react/UseStateHook"
import UseEffectHook from "../pages/react/UseEffectHook";
import UseReducerHook from "../pages/react/UseReducerHook";
import UseRefHook from "../pages/react/UseRefHook";
import UseContextHook from "../pages/react/UseContextHook";
import UseCallbackHok from "../pages/react/UseCallbackHok";
import Hooks from "../pages/react/Hooks";
import ReactEvents from "../pages/react/ReactEvents";
import RenderMethod from "../pages/react/RenderMethod";
import Memo from "../pages/react/Memo";

export default function ReactRoutes() {
    
  return (
    <Routes>
      <Route path="/react-hindi" element={<ReactIntro />}>
        <Route path="es6-hindi" element={<ReactES6 />} />
        <Route path="react-jsx-hindi" element={<ReactJSX/>}/>
        <Route path="react-render-method-hindi" element={<RenderMethod/>}/>
        <Route path="react-events-hindi" element={<ReactEvents/>}/>
        <Route path="react-memo-hindi" element={<Memo/>}/>
        <Route path="react-components-hindi" element={<Components/>}/>
        <Route path="react-props-hindi" element={<Props/>}/>
        <Route path="react-conditionals-hindi" element={<ConditionalRendering/>}/>
        <Route path="react-lists-hindi" element={<Lists/>}/>
        <Route path="react-forms-hindi" element={<Forms/>}/>
        <Route path="react-router-hindi" element={<Router/>}/>
        <Route path="react-router-hindi" element={<Router/>}/>
        <Route path="react-hooks-hindi" element={<Hooks/>}/>
        <Route path="react-usestate-hook-hindi" element={<UseStateHook/>}/>
        <Route path="react-useeffect-hook-hindi" element={<UseEffectHook/>}/>
        <Route path="react-usereducer-hook-hindi" element={<UseReducerHook/>}/>
        <Route path="react-useref-hook-hindi" element={<UseRefHook/>}/>
        <Route path="react-usecontext-hook-hindi" element={<UseContextHook/>}/>
        <Route path="react-usecallback-hook-hindi" element={<UseCallbackHok/>}/>
        <Route index element={<ReactHome/>} />
      </Route>
    </Routes>
  );
}
