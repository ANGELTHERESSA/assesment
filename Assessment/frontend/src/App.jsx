import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'

import Add from './component/Add'
import Blogdashboard from './component/Blogdashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/a" element={<Blogdashboard />} />
        <Route path="/b" element={<Add />} />
      </Routes>
    </>
  )
}

export default App
