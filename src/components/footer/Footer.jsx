import React from 'react'
import "./footer.css";

const Footer = ({isDarkMode}) => {
  return ( 
    <footer className={`footer section ${isDarkMode ? "dark-mode" : "light-mode"}`} id="footer">
        <div className="footer__container container">
            <h1 className="footer__title">dam.</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portofolio" className="footer__link">Project</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonial</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.youtube.com/channel/UCzvicrZgebz5faHpineRWlg" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-youtube"></i>
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=1qn7f0ctoxn2r&utm_content=4rioy6h" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://github.com/damar-glh" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
            </a>
            <a href="https://wa.me/qr/Q3ZAX5TFAH3HI1" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-whatsapp"></i>
            </a>
            </div>
            <span className="footer__copy">&#169; Created by damar.glh__</span>
        </div>
    </footer>
  )
}

export default Footer