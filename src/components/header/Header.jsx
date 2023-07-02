import React from "react";
import "./header.css";
import "../../App.css"; 

const Header = () => {
    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">dam.</a>

                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portofolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portofolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#cantact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close"></i>
                </div>
                <nav className="nav__toggle">
                    <i class="uil uil-apps"></i>
                </nav>
            </nav>
        </header>
    )
}

export default Header;
