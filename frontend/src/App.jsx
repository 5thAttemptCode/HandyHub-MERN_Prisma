import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/register" element={ <Register />} />
        </Routes>
      </Router>
    </>
  )
}
