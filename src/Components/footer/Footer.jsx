import React from 'react'
import './Footer.css'
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='footer'>
        © {year} NAREN | All Rights Reserved
    </div>
  )
}

export default Footer