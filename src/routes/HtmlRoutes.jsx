import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Html from '../pages/html/Html'
import HtmlHome from '../pages/html/HtmlHome'
import Elements from '../pages/html/Elements'
import Attributes from '../pages/html/Attributes'

export default function HtmlRoutes() {
  return (
 <Routes>
    <Route path='/html-hindi' element={<Html/>}>
 <Route index element={<HtmlHome/>}/>
 <Route path='html-element-hindi' element={<Elements/>}/>
 <Route path='html-attributes-hindi' element={<Attributes/>}/>
    </Route>
 </Routes>
    )
}
