import { useState } from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import Cart from './pages/Cart';
;

function App() {

  return (


    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Shop />} /> 
        <Route path="/cart"  element={<Cart />} /> 
      </Routes>
    </BrowserRouter>

  )
}

export default App
