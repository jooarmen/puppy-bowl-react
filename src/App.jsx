//import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div id='navbar'>
      <Link to="/"> Home </Link>
      <Link to="/players/:id"> Player </Link>


    </div>
    <div id='main-section'>
        <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/:id' element={<SinglePlayer/>}/>
        </Routes>
    </div>
        
    </>
  )
}

export default App
