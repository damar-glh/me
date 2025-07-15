import html from "../../../assets/svg/html.svg";
import css from "../../../assets/svg/css.svg";
import scss from "../../../assets/svg/scss.svg";
import js from "../../../assets/svg/js.svg";
import mysql from "../../../assets/svg/mysql.svg";
import postman from "../../../assets/svg/postman.svg";
import bootstrap from "../../../assets/svg/bootstrap.svg";
import tailwindcss from "../../../assets/svg/tailwindcss.svg";
import reactjs from "../../../assets/svg/reactjs.svg";
import git from "../../../assets/svg/git.svg";
import linux from "../../../assets/svg/linux.svg";
import c from "../../../assets/svg/c.svg";
import cpp from "../../../assets/svg/cpp.svg";
import csharp from "../../../assets/svg/csharp.svg";
import php from "../../../assets/svg/php.svg";
import xampp from "../../../assets/svg/xampp.svg";
import SkillsContainer from "./SkillsContainer";

const skillsData = [
    {name: 'Linux', icon: linux},
    {name: 'Git', icon: git},
    {name: 'HTML', icon: html},
    {name: 'CSS', icon: css},
    {name: 'SCSS', icon: scss},
    {name: 'TailwindCss', icon: tailwindcss},
    {name: 'Bootstrap', icon: bootstrap},
    {name: 'JavaScript', icon: js},
    {name: 'React', icon: reactjs},
    {name: 'PHP', icon: php},
    {name: 'XAMPP', icon: xampp},
    {name: 'MySQL', icon: mysql},
    {name: 'Postman', icon: postman},
    {name: 'C', icon: c},
    {name: 'C++', icon: cpp},
    {name: 'C#', icon: csharp}
]

const SkillsItem = () => {
    return (
        <SkillsContainer skills={skillsData}/>
    )
}

export default SkillsItem