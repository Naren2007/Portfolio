import React from 'react'
import './ContactinfoCard.css'
const ContactInfoCard = ({iconURL,text}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconURL} alt={text} />
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard