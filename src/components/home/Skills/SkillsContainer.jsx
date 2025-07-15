const SkillsContainer = ({skills}) => {
    return (
        <div className="skills__icons-home container">
            {skills.map((skill, index) => (
                <img key={index} src={skill.icon} alt={skill.name} className='skills__component-home'/>
            ))}
        </div>
    )
}

export default SkillsContainer