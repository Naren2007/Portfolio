import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import Contactform from './Contactform/Contactform'

const Contact = () => {
  return (
    <section id='contact' className="contact-container">
       <h5>Contact ME</h5>
       <div className="contact-content">
        <div style={{flex: 1}}>
            <ContactInfoCard 
               iconURL="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
               text="narenjeeaspirant@gmail.com"   
            />
            <ContactInfoCard 
               iconURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png"
               text="https://github.com/Naren2007/"   
            />
        </div>
        <div style={{flex: 1}}>
            <Contactform />
        </div>
        
       </div>
    </section>
  )
}

export default Contact