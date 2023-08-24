import React, { useState } from 'react'
import "./learning.css";

const Learning = ({isDarkMode}) => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    
  return (
    <section className={`learning section ${isDarkMode ? "dark-mode" : "light-mode"}`} id="learning">
        <h2 className="section__title">Learning</h2>
        <span className="section__subtitle">I learned about</span>
        <div className="learning__container container grid">
            <div className="learning__content">
                <div>
                    <i className="uil uil-arrow learning__icon"></i>
                    <h3 className="learning__title">Software <br /> Developer</h3>
                </div>
                <span className="learning__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right learning__button-icon"></i></span>
                <div className={toggleState === 1 ? "learning__modal active-modal" : "learning__modal"}>
                    <div className="learning__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times learning__modal-close"></i>
                        <h3 className="learning__modal-title">Software Developer</h3>
                        <p className="learning__modal-description">I'm a creative software developer who collaborates effectively with cross-functional teams to deliver optimal software products that prioritize user satisfaction. My keen attention to detail and problem-solving skills shine throughout the development lifecycle. By staying updated on industry trends and valuing user feedback, I consistently produce innovative, high-quality software within set timelines.</p>
                    </div>
                </div>
            </div>
            <div className="learning__content">
                <div>
                    <i className="uil uil-brain learning__icon"></i>
                    <h3 className="learning__title">Update <br /> Technology</h3>
                </div>
                <span className="learning__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right learning__button-icon"></i></span>
                <div className={toggleState === 2 ? "learning__modal active-modal" : "learning__modal"}>
                    <div className="learning__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times learning__modal-close"></i>
                        <h3 className="learning__modal-title">Update Technology</h3>
                        <p className="learning__modal-description">Exploring the ever-evolving realm of Update Technology is not only fascinating but also vital for contemporary success. It empowers me to remain competitive in an ever-changing landscape by offering real-world solutions across industries. This journey of constant adaptation and empowerment is akin to an endless adventure filled with new discoveries.</p>
                    </div>
                </div>
            </div>
            <div className="learning__content">
                <div>
                    <i className="uil uil-web-grid learning__icon"></i>
                    <h3 className="learning__title">Project <br /> Managing</h3>
                </div>
                <span className="learning__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right learning__button-icon"></i></span>
                <div className={toggleState === 3 ? "learning__modal active-modal" : "learning__modal"}>
                    <div className="learning__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times learning__modal-close"></i>
                        <h3 className="learning__modal-title">Project Management</h3>
                        <p className="learning__modal-description">With my extensive project management expertise and successful track record, I assure you of reliable service. My collaborative approach and focus on client satisfaction underscore my role as a project manager. Time, budget, and quality are paramount in my projects. I excel in communication and leadership, ensuring efficient teamwork. Creative solutions, attention to detail, and dedication to innovation define my work. Trust in my project management services for a successful and efficient project execution.. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Learning