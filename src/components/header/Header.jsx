import React from "react";
import "./header.css";

const Header = () => {
    return(
        <head className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">dam.</a>

                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="index.html" className="nav__link">
                                <i className="uil uil- nav__icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </head>
    )
}

export default Header