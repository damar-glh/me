import React from 'react'
import bootstrap from '../../assets/bootstrap.svg'
import git from '../../assets/git.svg';
import tailwindcss from '../../assets/tailwindcss.svg';
import reactjs from '../../assets/reactjs.svg';

const Framework = () => {
  return (
    <div className="skills__content" data-aos="zoom-in" data-aos-delay="2000">
        <h3 className="skills__title">Framework & tools</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <a href="https://getbootstrap.com/" target='_blank'><img src={bootstrap} alt="" className='skills__component' /></a>                   <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">SKillful</span>
                    </div>
                </div>
                <div className="skills__data">
                    <a href="https://tailwindui.com/" target='_blank'><img src={tailwindcss} alt="" className='skills__component' /></a>
                    <div>
                        <h3 className="skills__name">TailwindCss</h3>
                        <span className="skills__level">skillful</span>
                    </div>
                </div>
                <div className="skills__data">
                    <a href="https://react.dev/" target='_blank'><img src={reactjs} alt="" className='skills__component' /></a>                 <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Novice</span>
                    </div>
                </div>
                <div className="skills__data">
                    <a href="https://git-scm.com/" target='_blank'><img src={git} alt="" className='skills__component' /></a>             <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Skillful</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Framework