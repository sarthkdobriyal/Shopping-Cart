import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='bg-slate-600 flex flex-row-reverse gap-10 px-5 py-3 text-white font-bold  text-3xl' >
        <Link to="/cart">Cart</Link>
        <Link to='/'>Shop</Link>
    </div>
  )
}

export default Navbar