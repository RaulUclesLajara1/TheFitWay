import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import React from 'react'
import Privacidad from './pages/privacidad'
function App() {
  
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/privacidad" element={<Privacidad/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )

  
}

export default App
