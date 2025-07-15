const SkillsContainer = ({skills}) => {
    return (
        <div className="skills__icons container" data-aos="zoom-in" data-aos-delay="1500">
            {skills.map((skill, index) => (
                <img key={index} src={skill.icon} alt={skill.name} className='skills__component'/>
            ))}
        </div>
    )
}

export default SkillsContainer