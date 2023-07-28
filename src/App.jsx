import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'

function App() {

  return (
    <>
      <BrowserRouter>
        <header className='header'>
          <nav className='nav-item-1'>
            <Link to="/">#vansLife</Link>
          </nav>
          <nav className='nav-item-2'>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
