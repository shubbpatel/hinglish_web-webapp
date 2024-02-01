import React from 'react'
import './style/Home.css'

export default function Home() {
  return (
    <div className='homeContainer'>
        {/* <h1>jaldi learn karna hai to apni language me learn karo</h1> */}
        <div className='homeBtnBox'>
          <button onClick={()=> {
            window.location ='/javascript'
          }} className='jsBtn homeBtn'>JavaScript</button>
          <button onClick={()=> {
            window.location ='react'
          }} className='reactBtn homeBtn'>React</button>
          <button className='htmlBtn homeBtn'>HTML</button>
          <button className='cssBtn homeBtn'>CSS</button>
          <button className='pythonBtn homeBtn'>Python</button>
          <button className='cBtn homeBtn'>C</button>
          <button className='cppBtn homeBtn'>C++</button>
         
        </div>
    </div>
  )
}
