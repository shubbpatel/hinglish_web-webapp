import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({topics}) {
 
  return (
    <div className='index'>
        {topics.map(topic => (
          <Link key={topic} to={topic.path}>{topic.title}</Link>
        ))}
    </div>
  )
}
