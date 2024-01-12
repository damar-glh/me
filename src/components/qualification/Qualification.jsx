import React, { useState } from 'react'
import './qualification.css';

const Qualification = ({isDarkMode}) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className={`qualification section ${isDarkMode ? "dark-mode" : "light-mode"}`} id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Organization
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">Informatics</h3>
                            <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">SHC</h3>
                            <span className="qualification__subtitle">SMA N 1 Karangsambung</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2022
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">JHC</h3>
                            <span className="qualification__subtitle">SMP N 1 Karangsambung</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2019
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">PS </h3>
                            <span className="qualification__subtitle">MI Ma'arif Kalisana</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2010 - 2016
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
                <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">Lab Assistant</h3>
                            <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">AMCC Member</h3>
                            <span className="qualification__subtitle">Universitas Amikom Yogyakarta</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">Scout Leader</h3>
                            <span className="qualification__subtitle">SMA N 1 Karangsambung</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2022
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className="">
                            <h3 className="qualification__title">ComExtra Member</h3>
                            <span className="qualification__subtitle">SMA N 1 Karangsambung</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2022
                            </div>
                        </div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className=""></div>
                        <div className="">
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className="">
                            <h3 className="qualification__title">Scout Leader</h3>
                            <span className="qualification__subtitle">SMP N 1 Karangsambung</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification