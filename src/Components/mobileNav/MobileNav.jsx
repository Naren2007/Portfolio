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
                   <a className="menu-item" href="#">Home</a>
                </li>
                <li>
                   <a className="menu-item" href="#">Skills</a>
                </li>
                <li>
                   <a className="menu-item" href="#">Work Experience</a>
                </li>
                <li>
                   <a className="menu-item" href="#">Contact me</a>
                </li>
                <button className='hire-btn' onClick={()=>{}}>HIRE ME</button>
            </ul>
        </div>
      </div>
    </>
  )
}

export default MobileNav
