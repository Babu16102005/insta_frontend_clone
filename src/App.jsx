import React from 'react'
import "./App.css"
import Sidebar from './sidebar'
import Feed from './feed'
import Sugg from './suggestion'
import Story from './story'

function App() {
  return (
    <>
    <div className='d-flex  vh-100'>
        <div className="w-20"><Sidebar/></div>
        <div className='w-50'><Feed/></div>
        <div className='w-30'><Sugg/></div>
    </div>
    </>
  )
}

export default App