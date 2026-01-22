import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import React from 'react'
import Privacidad from './pages/privacidad'
import Atletas from './pages/atletas'
import Entrenadores from './pages/entrenadores'
function App() {
  
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/privacidad" element={<Privacidad/>}/>
            <Route path ="/atletas" element={<Atletas/>}/>
            <Route path="/entrenadores" element={<Entrenadores/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )

  
}

export default App
