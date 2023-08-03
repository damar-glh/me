import React, { useState } from "react";
import "./header.css";

const Header = ({ isDarkMode, toggleDarkMode }) => {
    /*=========== Change background header ============= */
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        // when scroll 
        if(this.scrollY >= 80) header.classList.add("show-header");
        else header.classList.remove("show-header");
    })

    /*=========== Toggle menu ============= */
    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")

    return(
        <header className={`Header ${isDarkMode ? "dark-mode" : "light-mode"} header`}>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">dam.</a>

                <div className={Toggle ? "nav__menu show-menu" :
                "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" onClick={() => setActiveNav("#qualification")} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-graduation-cap nav__icon"></i> Qualifi
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portofolio" onClick={() => setActiveNav("#portofolio")} className={activeNav === "#portofolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-folder-heart nav__icon"></i> Portofolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__link">
                    <button onClick={toggleDarkMode} className="nav-dark-toggle"> 
                        <i className={`uil ${isDarkMode ? "uil-brightness" : "uil-moon"} nav-dark-toggle`}></i>
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
