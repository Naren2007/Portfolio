import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactform.css'
const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lg1i9bu', 'template_ji705k8', form.current, {
        publicKey: 'WuJXUNuUO_oVnPO6v',
      })
      .then(
        () => {
          alert("EMAIL SENT")
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
                <input type="text" name="user_name" placeholder='Name' required/>
            </div>
            <input type="email" name="user_email" placeholder='Email' required/>
            <textarea name="message" rows={3} placeholder='Type Message' required></textarea>
            <button type='submit'>SEND</button>
        </form>
    </div>
  )
}

export default Contactform