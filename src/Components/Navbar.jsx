import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './mobileNav/MobileNav'
const Navbar = () => {
  const [Openmenu,SetOpenmenu] = useState(false)
  const togglemenu = ()=>{
    SetOpenmenu(!Openmenu)
  }
  return (
    <>
    <MobileNav isOpen={Openmenu} togglemenu={togglemenu}/>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className="logo" src="" alt="" />
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
              <button className='hire-btn'><a href='#contact'>HIRE ME</a></button>
            </ul>
            <button onClick={togglemenu} className='menu-btn'>
              <span class={'material-symbols-outlined'} style={{fontSize:"1.5rem"}}> {Openmenu ? "close" : "menu"}</span>
            </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
