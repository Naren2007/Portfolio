import React from 'react'
import { SKILLS } from '../../../utils/data'
import SkillCard from './Skillcard/SkillCard'
import frontend from '../../../Images/frontend.png'
import './Skills.css'
const Skills = () => {
  return (
    <>
     <section className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className='skills-content'>
            <div className="skills">
                {SKILLS.map((items)=>(
                    <SkillCard
                       key={items.title}
                       iconUrl={items.icon}
                       title={items.title}
                    />
                ))}
            </div>
            <div className="skills-info"></div>
        </div>
     </section>
    </>
  )
}

export default Skills