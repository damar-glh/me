import React from 'react'
import c from '../../assets/svg/c.svg';
import cpp from '../../assets/svg/cpp.svg';
import csharp from '../../assets/svg/csharp.svg';
import php from '../../assets/svg/php.svg';

const Backend = () => {
  return (
    <div className="skills__content" data-aos="zoom-in" data-aos-delay="2500">
        <h3 className="skills__title">Lectures skills</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <a href="https://www.learn-c.org/" target='_blank'><img src={c} alt="" className='skills__component' /></a>                <div>
                        <h3 className="skills__name">C</h3>
                        <span className="skills__level">Novice</span>
                    </div>
                </div>
                <div className="skills__data">
                    <a href="https://cplusplus.com/" target='_blank'><img src={cpp} alt="" className='skills__component' /></a>                  <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Beginner</span>
                    </div>
                </div>
                <div className="skills__data">
                    <a href="https://dotnet.microsoft.com/en-us/languages/csharp" target='_blank'><img src={csharp} alt="" className='skills__component' /></a>
                    <div>
                        <h3 className="skills__name">C#</h3>
                        <span className="skills__level">Beginner</span>
                    </div>
                </div>
                <div className="skills__data">
                    <a href="https://www.php.net/" target='_blank'><img src={php} alt="" className='skills__component' /></a>                  <div>
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