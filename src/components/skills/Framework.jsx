import bootstrap from '../../assets/svg/bootstrap.svg'
import git from '../../assets/svg/git.svg';
import tailwindcss from '../../assets/svg/tailwindcss.svg';
import reactjs from '../../assets/svg/reactjs.svg';
import linux from '../../assets/svg/linux.svg';
import elementor from '../../assets/svg/elementor.svg';
import rankmath from '../../assets/svg/rankmath.svg';
import yoseo from '../../assets/svg/yoseo.svg';
import SkillsContainer from "./SkillsContainer";

const frameworkSkills = [
    {name: 'Elementor', icon: elementor},
    {name: 'Rank Math', icon: rankmath},
    {name: 'Yoast SEO', icon: yoseo},
    {name: 'Bootstrap', icon: bootstrap},
    {name: 'TailwindCss', icon: tailwindcss},
    {name: 'React', icon: reactjs},
    {name: 'Git', icon: git},
    {name: 'Linux', icon: linux},
];

const Framework = () => {
    return (
        <SkillsContainer skills={frameworkSkills}/>
    )
}

export default Framework