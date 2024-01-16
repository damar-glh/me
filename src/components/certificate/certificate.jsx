import React, {useState, useEffect} from 'react'
import "./certificate.css";
import ACD from "../../assets/Alibaba Cloud Certified Developers - 1.jpg";

const Certificate = ({isDarkMode}) => {
  
  return (
    <section className={`about section ${isDarkMode ? "dark-mode" : "light-mode"}`} id="about">
        <h2 className="section__title">Certificate</h2>
        <span className="section__subtitle">My Certificate</span>
        <div className="certificate__container container grid">
            <a href="https://id.alibabacloud.com/" target='_blank' rel='noreferrer'>
                <img src={ACD} alt="" className="ACD__img" />
            </a>
            <p className=''>
                <a href="https://linkedin.com/in/damar-galih-7b5a1124b" className="certificate__button" target='_blank' rel='noreferrer'>
                Other Certificates <i className="bx bx-right-arrow-alt work__button-icon work__button-icon-right"></i>
                </a>
            </p>
        </div>
    </section>
  )
}

export default Certificate