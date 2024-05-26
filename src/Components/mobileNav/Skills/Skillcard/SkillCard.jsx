import React from 'react'
import './SkillCard.css'
const SkillCard = ({title,iconUrl,isActive,onClick}) => {
  return (
    <>
      <div onClick={()=>onClick()} className={`skills-card ${isActive ? "active": ""}`}>
         <div className="skill-icon">
            <img src={iconUrl} alt={title} />
         </div>
         <span>{title}</span>
      </div>
    </>
  )
}

export default SkillCard