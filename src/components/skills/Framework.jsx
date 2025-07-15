import bootstrap from '../../assets/svg/bootstrap.svg'
import git from '../../assets/svg/git.svg';
import tailwindcss from '../../assets/svg/tailwindcss.svg';
import reactjs from '../../assets/svg/reactjs.svg';
import linux from '../../assets/svg/linux.svg';
import SkillsContainer from "./SkillsContainer";

const frameworkSkills = [
    {name: 'Bootstrap', icon: bootstrap},
    {name: 'TailwindCss', icon: tailwindcss},
    {name: 'React', icon: reactjs},
    {name: 'Git', icon: git},
    {name: 'Linux', icon: linux}
];

const Framework = () => {
    return (
        <SkillsContainer skills={frameworkSkills}/>
    )
}

export default Framework