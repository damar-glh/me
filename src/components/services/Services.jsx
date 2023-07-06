import React from 'react'
import "./services.css";

const Services = () => {
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
                <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>
                        </ul>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development.</p>
                            </li>
                        </ul>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I position your company brand.</p>
                            </li>
                        </ul>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions.</p>
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
                <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title"></h3>
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