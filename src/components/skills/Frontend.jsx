import html from '../../assets/svg/html.svg';
import css from '../../assets/svg/css.svg';
import js from '../../assets/svg/js.svg';
import scss from '../../assets/svg/scss.svg';
import mysql from '../../assets/svg/mysql.svg';
import postman from '../../assets/svg/postman.svg';
import wordpress from '../../assets/svg/wordpress.svg';
import woocommerce from '../../assets/svg/woocommerce.svg';
import SkillsContainer from "./SkillsContainer";

const frontendSkills = [
    {name: 'HTML', icon: html},
    {name: 'CSS', icon: css},
    {name: 'SCSS', icon: scss},
    {name: 'JavaScript', icon: js},
    {name: 'MySQL', icon: mysql},
    {name: 'Postman', icon: postman},
    {name: 'WordPress', icon: wordpress},
    {name: 'WooCommerce', icon: woocommerce}
];

const Frontend = () => {
    return (
        <SkillsContainer skills={frontendSkills}/>
    )
}

export default Frontend