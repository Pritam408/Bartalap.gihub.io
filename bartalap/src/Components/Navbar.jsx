import React from 'react'

const Navbar = () => {
  return (
  <div className="navbar">
    <span className="logo">Bartalap</span>
    <div className="user">
      <img src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <span>Pritam</span>
      <button>Logout</button>
    </div>
  </div>

  )
}

export default Navbar;
