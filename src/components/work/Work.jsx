import React from 'react'
import './work.css'
import Works from './Works'

const Work = ({isDarkMode}) => {
  return (
    <section  className={`work section ${isDarkMode ? "dark-mode" : "light-mode"}`} id="portofolio" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="linear" data-aos-duration="1000">
        <h2 className="section__title">Portofolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <Works />
    </section>
  )
}

export default Work