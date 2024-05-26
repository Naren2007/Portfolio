import React from 'react'
import './Hero.css'
import reacths from 'D:/REACT/portfolio/src/Images/reacths.png'
import techie from 'D:/REACT/portfolio/src/Images/techie.png'
import html from 'D:/REACT/portfolio/src/Images/html.png'
import css from 'D:/REACT/portfolio/src/Images/css.png'
import javascript from 'D:/REACT/portfolio/src/Images/javascript.png'
const Hero = () => {
  return (
    <>
      <section className='hero-container'>

        <div className='hero-content'>
           <h2>BUilding Digital EXperience That Inspire</h2>
           <p> Passionate Front End Developer | Transforming Ideas Into Seamless And Visually Stunning Web Solutions </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img className='reacti' src={reacths} alt="" />
                </div>
                <img className='techie' src={techie} alt="" />
            </div>
            <div>
              <div className="tech-icon">
                  <img className='html' src={html} alt="" />                
              </div>
              <div className="tech-icon">
                  <img className='css' src={css} alt="" />                
              </div>
              <div className="tech-icon">
                  <img className='javascript' src={javascript} alt="" />                
              </div>
            </div>
        </div>
      </section>   
    </>
  )
}

export default Hero