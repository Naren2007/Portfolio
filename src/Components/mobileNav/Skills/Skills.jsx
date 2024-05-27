import React, { useState } from 'react'
import { SKILLS } from '../../../utils/data'
import SkillCard from './Skillcard/SkillCard'
// import frontend from '../../../Images/frontend.png'
import './Skills.css'
import SkillinfoCard from './SKillinfoCard/SkillinfoCard'
const Skills = () => {
  const [SelectedSkill , SetSelectedSkill] = useState(SKILLS[0])
  const handleselectedskill = (data)=>{
    SetSelectedSkill(data)
  }
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
                       isActive={SelectedSkill.title ===  items.title}
                       onClick={()=>{
                        handleselectedskill(items)
                       }}
                    />
                ))}
            </div>
            <div className="skills-info">
              <SkillinfoCard 
               heading={SelectedSkill.title}
               skills={SelectedSkill.skills}
              />
            </div>
        </div>
     </section>
    </>
  )
}

export default Skills
