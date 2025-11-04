import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import AuthCallback from './utils/AuthCallback'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/auth/callback' element={<AuthCallback/>}></Route>
    </Routes>
  </Router>
  )
}

export default App
