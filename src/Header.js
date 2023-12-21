import React from 'react'
import logo from "./Images/logo.png"
function Header() {
  return (
    <div className="header">
       <img src={logo}   alt="logo" wtdth="60" height="60" />
       <h4>Keep Notes</h4>
    </div>
  )
}

export default Header