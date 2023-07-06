import React, { useState } from 'react'
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br /> Developer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Product Developer</h3>
                        <p className="services__modal-description">As a product developer in the field of web development, I have creative and innovative skills in developing captivating digital products. I work collaboratively with a team of developers, designers, and other stakeholders, with a primary focus on user satisfaction. I always strive to deliver products with optimal performance, keeping up with current trends and being responsive to user feedback. Throughout the development process, I pay attention to the smallest details and act as a reliable problem solver. With good time management abilities, I produce innovative and high-quality web products.</p>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, exercitationem. Maxime, nam? Facere, et incidunt.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, exercitationem. Maxime, nam? Facere, et incidunt.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services