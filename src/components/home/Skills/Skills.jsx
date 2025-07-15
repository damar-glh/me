import SkillsItems from './SkillsItem';
import './skillhome.css'

const Skills = ({isDarkMode}) => {
    return (
        <div className="skills__marquee-wrapper-home" id="skills">
            <div className="skills__marquee-home container">
                <div className="marquee-row row-3"><SkillsItems/></div>
            </div>
        </div>
    )
}

export default Skills;