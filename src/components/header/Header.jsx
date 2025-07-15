import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./header.css";

const NavItem = [
    {
        id: "#home",
        icon: "uil uil-estate nav__icon",
        text: "Home",
        to: "/me",
    },
    {
        id: "#about",
        icon: "uil uil-user nav__icon",
        text: "About",
        to: "/me/about",
    },
    {
        id: "#skills",
        icon: "uil uil-swatchbook nav__icon",
        text: "Skills",
        to: "/me/skills",
    },
    // {
    //     id: "#qualification",
    //     icon: "uil uil-graduation-cap nav__icon",
    //     text: "Qualification",
    //     to: "/qualification",
    // },
    {
        id: "#portfolio",
        icon: "uil uil-folder-heart nav__icon",
        text: "Portfolio",
        to: "/me/portfolio",
    },
    {
        id: "#contact",
        icon: "uil uil-message nav__icon",
        text: "Contact",
        to: "/me/contact",
    }
]

const Header = ({isDarkMode, toggleDarkMode}) => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("show-header");
        else header.classList.remove("show-header");
    })

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className={`Header ${isDarkMode ? "dark-mode" : "light-mode"} header`}>
            <nav className="nav container">
                <Link to='/' onClick={() => setActiveNav("#home")} title="Home" className="nav__logo">dam.</Link>
                <div className={Toggle ? "nav__menu show-menu" :
                    "nav__menu"}>
                    <ul className="nav__list">
                        {NavItem.map((item) => (
                            <li key={item.id} className="nav__item">
                                <Link to={item.to} title={item.text} onClick={() => setActiveNav(item.id)}
                                      className={activeNav === item.id ? "nav__link active-link" : "nav__link"}>
                                    <i className={item.icon}></i> {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__link">
                    <button onClick={toggleDarkMode} className="nav-dark-toggle">
                        <i className={`uil ${isDarkMode ? "uil-brightness" : "uil-moonset"} nav-dark-toggle`}></i>
                    </button>
                </div>
                <nav className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </nav>
            </nav>
        </header>
    )
}

export default Header;
