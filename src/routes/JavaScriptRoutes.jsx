import React from "react";
import { Route, Routes } from "react-router-dom";
import JavaScript from "../pages/javascript/JavaScript";
import JsHome from "../pages/javascript/JsHome";
import OutputJS from "../pages/javascript/OutputJS";
import Statements from "../pages/javascript/Statements";
import Syntax from "../pages/javascript/Syntax";
import Comments from "../pages/javascript/Comments";
import Variables from "../pages/javascript/Variables";
import Let from "../pages/javascript/Let";
import Operators from "../pages/javascript/Operators";
import Arithmetic from "../pages/javascript/Arithmetic";
import Assignment from "../pages/javascript/Assignment";
import DataTypes from "../pages/javascript/DataTypes";
import Functions from "../pages/javascript/Functions";
import Objects from "../pages/javascript/Objects";
import Events from "../pages/javascript/Events";
import Strings from "../pages/javascript/Strings";
import Arrays from "../pages/javascript/Arrays";

export default function JavaScriptRoutes() {
  return (
    <Routes>
      <Route path="/javascript-hindi" element={<JavaScript />}>
        <Route index element={<JsHome />} />
        <Route path="javascript-output-hindi" element={<OutputJS />} />
        <Route path="javascript-statement-hindi" element={<Statements />} />
        <Route path="javascript-syntax-hindi" element={<Syntax />} />
        <Route path="javascript-comments-hindi" element={<Comments />} />
        <Route path="javascript-variable-hindi" element={<Variables />} />
        <Route path="javascript-let-hindi" element={<Let />} />
        <Route path="javascript-operators-hindi" element={<Operators />} />
        <Route path="javascript-arithmetic-hindi" element={<Arithmetic />} />
        <Route path="javascript-assignment-hindi" element={<Assignment />} />
        <Route path="javascript-data-types-hindi" element={<DataTypes />} />
        <Route path="javascript-functions-hindi" element={<Functions />} />
        <Route path="javascript-objects-hindi" element={<Objects />} />
        <Route path="javascript-events-hindi" element={<Events />} />
        <Route path="javascript-strings-hindi" element={<Strings />} />
        <Route path="javascript-array-hindi" element={<Arrays />} />
      </Route>
    </Routes>
  );
}
