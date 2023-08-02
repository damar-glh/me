import React from 'react'
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/js.svg';

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'><img src={html} alt="" className='skills__component'/></a>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Skillful</span>
                    </div>
                </div>
                <div className="skills__data">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'><img src={css} alt="" className='skills__component' /></a>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Skillful</span>
                    </div>
                </div>
                <div className="skills__data">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target='_blank'><img src={js} alt="" className='skills__component' /></a>                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Beginner</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend