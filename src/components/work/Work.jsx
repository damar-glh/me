import React from 'react'
import './work.css'
import Works from './Works'

const Work = ({isDarkMode}) => {
  return (
    <section  className={`work section ${isDarkMode ? "dark-mode" : "light-mode"}`} id="portofolio">
        <h2 className="section__title">Portofolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <Works />
    </section>
  )
}

export default Work