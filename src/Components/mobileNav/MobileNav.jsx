import React from 'react'
import './MobileNav.css'
const MobileNav = ({ isOpen, togglemenu}) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active":""}`}>
        <div className="mobile-menu-container">
            <img className='logo' src="" alt="" />
            <ul>
                <li>
                   <a className="menu-item" href="#home">Home</a>
                </li>
                <li>
                   <a className="menu-item" href="#skills">Skills</a>
                </li>
                <li>
                   <a className="menu-item" href="#contact">Contact me</a>
                </li>
                <button className='hire-btn' href="#contact">HIRE ME</button>
            </ul>
        </div>
      </div>
    </>
  )
}

export default MobileNav
