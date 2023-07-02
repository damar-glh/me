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
                            <a href="index.html" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
