import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Html() {
    const topics  = [
        { title: 'HTML Introduction', path: "" },
        { title: 'HTML Elements', path: "html-element-hindi" },
        { title: 'HTML Attributes', path: "html-attributes-hindi" },
    ]
  return (
    <div>
        <Sidebar topics={topics}/>
        <Outlet/>
        
    </div>
  )
}
