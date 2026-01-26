import c from '../../assets/svg/c.svg';
import cpp from '../../assets/svg/cpp.svg';
import csharp from '../../assets/svg/csharp.svg';
import php from '../../assets/svg/php.svg';
import xampp from '../../assets/svg/xampp.svg';
import figma from '../../assets/svg/figma.svg';
import litespeed from '../../assets/svg/litespeed-seeklogo.svg';
import SkillsContainer from "./SkillsContainer";

const lecSkills = [
    {name: 'C', icon: c},
    {name: 'C++', icon: cpp},
    {name: 'C#', icon: csharp},
    {name: 'PHP', icon: php},
    {name: 'XAMPP', icon: xampp},
    {name: 'Figma', icon: figma},
    {name: 'LiteSpeed', icon: litespeed},
];

const LecSkills = () => {
    return (
        <SkillsContainer skills={lecSkills}/>
    )
}

export default LecSkills