//import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import './App.css'

function App() {
  return (
    <>
    <div id='navbar'>
      <Link to="/"> Home </Link>
    


    </div>
    
    <div id='main-section'>

        <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/:playerId' element={<SinglePlayer/>}/>
        </Routes>
    </div>
        
    </>
  )
}

export default App
