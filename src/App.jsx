import { useState } from 'react'

import './App.css'
import { Route,BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
