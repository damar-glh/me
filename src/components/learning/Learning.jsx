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
                        <p className="learning__modal-description">As a software developer, I possess creative and innovative skills in crafting compelling software products. I actively collaborate with a team of developers, designers, and stakeholders, placing a strong emphasis on user satisfaction. My main objective is to deliver products that perform optimally, while staying abreast of current industry trends and being responsive to user feedback. Throughout the software development lifecycle, I meticulously attend to even the minutest details and serve as a dependable problem solver. With proficient time management abilities, I consistently produce innovative and top-notch software products. </p>
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
                        <p className="learning__modal-description">Learning about Update Technology fascinates me with its rapid advancements in the digital world. It opens up opportunities across various industries and keeps me relevant in this ever-changing landscape. Understanding it is crucial for success in the modern era, where technology updates constantly. Exploring this field is an exciting journey of empowerment and real-life solutions, urging me to continuously adapt and stay competitive in the fast-moving industry. It's like an endless adventure, always offering something new to discover.</p>
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
                        <p className="learning__modal-description">As a provider of project management services, I, as the client, can rely on my expertise and experience in successfully managing projects. In my role as a project manager, I offer a collaborative approach and prioritize client satisfaction. I understand the importance of time, budget, and quality in every project I handle. With strong communication skills and effective leadership abilities, I ensure that the team works efficiently and in an organized manner. I prioritize creative problem-solving, pay attention to detail, and remain committed to delivering innovative and high-quality end products. With my support as a provider of project management services, you can be confident that your project will be executed with success and high efficiency. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Learning