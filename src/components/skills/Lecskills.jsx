import React from 'react'
import c from '../../assets/c.svg';
import cpp from '../../assets/cpp.svg';
import csharp from '../../assets/csharp.svg';
import php from '../../assets/php.svg';

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Lectures skills</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={c} alt="" className='skills__component' />
                    <div>
                        <h3 className="skills__name">C</h3>
                        <span className="skills__level">Beginner</span>
                    </div>
                </div>
                <div className="skills__data">
                    <img src={cpp} alt="" className='skills__component' />
                    <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Beginner</span>
                    </div>
                </div>
                <div className="skills__data">
                    <img src={csharp} alt="" className='skills__component' />
                    <div>
                        <h3 className="skills__name">C#</h3>
                        <span className="skills__level">Beginner</span>
                    </div>
                </div>
                <div className="skills__data">
                    <img src={php} alt="" className='skills__component' />
                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Novice</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend