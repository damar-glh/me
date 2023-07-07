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
        <span className="section__subtitle">I learned about</span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Software <br /> Developer</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Software Developer</h3>
                        <p className="services__modal-description">As a software developer, I possess creative and innovative skills in crafting compelling software products. I actively collaborate with a team of developers, designers, and stakeholders, placing a strong emphasis on user satisfaction. My main objective is to deliver products that perform optimally, while staying abreast of current industry trends and being responsive to user feedback. Throughout the software development lifecycle, I meticulously attend to even the minutest details and serve as a dependable problem solver. With proficient time management abilities, I consistently produce innovative and top-notch software products.</p>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-cloud-computing services__icon"></i>
                    <h3 className="services__title">Cloud <br /> Computing</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Cloud Computing</h3>
                        <p className="services__modal-description">
                        As a provider of cloud computing services, I offer reliable and innovative solutions that allow you to optimize the management of your IT infrastructure. With an emphasis on flexibility, security, and scalability, I provide a platform that enables you to efficiently allocate computing resources, securely store and manage your data, and run business applications with optimal performance. With responsive service and dependable technical support, I am committed to meeting your needs and assisting you in your digital transformation journey.
                        </p>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Project <br /> Management</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Project Management</h3>
                        <p className="services__modal-description">
                        As a provider of project management services, I, as the client, can rely on my expertise and experience in successfully managing projects. In my role as a project manager, I offer a collaborative approach and prioritize client satisfaction. I understand the importance of time, budget, and quality in every project I handle. With strong communication skills and effective leadership abilities, I ensure that the team works efficiently and in an organized manner. I prioritize creative problem-solving, pay attention to detail, and remain committed to delivering innovative and high-quality end products. With my support as a provider of project management services, you can be confident that your project will be executed with success and high efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services