import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'><h1>Agency</h1>
        <ul>
          <li>Home</li>
          <li>Feature</li>
          <li>Service</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        </div>
        <div className='right'>JOIN TODAY</div>
    </div>
  )
}

export default Navbar