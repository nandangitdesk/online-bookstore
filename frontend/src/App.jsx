import React from 'react'
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App