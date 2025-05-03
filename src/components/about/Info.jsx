import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box" data-aos="zoom-in" data-aos-delay="500">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">++Years</span>
        </div>
        <div className="about__box" data-aos="zoom-in" data-aos-delay="1000">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">Project++</span>
        </div>
        <div className="about__box" data-aos="zoom-in" data-aos-delay="1500">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">24/7 Online</span>
        </div>
    </div>
  )
}

export default Info