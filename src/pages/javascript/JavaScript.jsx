import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function JavaScript() {
    const topics  = [
        { title: 'JavaScript Introduction', path: "" },
        { title: 'JavaScript Output', path: "javascript-output-hindi" },
        { title: 'JavaScript Statement', path: "javascript-statement-hindi" },
        { title: 'JavaScript Syntax', path: "javascript-syntax-hindi" },
        { title: 'JavaScript Comments', path: "javascript-comments-hindi" },
        { title: 'JavaScript Variable', path: "javascript-variable-hindi" },
        { title: 'JavaScript Let', path: "javascript-let-hindi" },
        { title: 'JavaScript Operators', path: "javascript-operators-hindi" },
        { title: 'JavaScript Arithmetic', path: "javascript-arithmetic-hindi" },
        { title: 'JavaScript Assignment', path: "javascript-assignment-hindi" },
        { title: 'JavaScript Data Types', path: "javascript-data-types-hindi" },
        { title: 'JavaScript Functions', path: "javascript-functions-hindi" },
        { title: 'JavaScript Objects', path: "javascript-objects-hindi" },
        { title: 'JavaScript Events', path: "javascript-events-hindi" },
        { title: 'JavaScript Strings', path: "javascript-strings-hindi" },
        { title: 'JavaScript Array', path: "javascript-array-hindi" },
    ]
  return (
    <div>
        <Sidebar topics={topics} />
        <Outlet/>
    </div>
  )
}
