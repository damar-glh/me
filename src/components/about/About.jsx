import React, {useState, useEffect} from 'react'
import "./about.css";
import AboutImg from "../../assets/img/logo home.png";
import Info from './Info';

const About = ({isDarkMode}) => {
  const [animatedText, setAnimatedText] = useState('');
  const text = "Web Developer with 1-2 years of professional experience in web development. Successfully completed 10+ projects, ranging from landing pages to dynamic web applications. Proficient in modern technologies such as HTML, CSS, JavaScript, and frameworks like React, Bootstrap, and Tailwind CSS. Currently actively developing programming skills and ready to collaborate on development teams to create digital solutions.";

  useEffect(() => {
    let interval;
    let currentIndex = 0;

    const animateText = () => {
      setAnimatedText(text.substring(0, currentIndex + 1 ));
      currentIndex++;
    }

    interval = setInterval(animateText, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <section className={`about section ${isDarkMode ? "dark-mode" : "light-mode"}`} id="about" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="linear" data-aos-duration="1000">
        <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Intereduction</span>
            <div className="about__container container grid" >
              <img src={AboutImg} alt="" className="about__img" data-aos="fade-right" data-aos-duration="3000"/>
              <div className="about__data">
                {/*<Info />*/}
                <p className="about__description">
                  {animatedText}
                </p>
              </div>
            </div>
    </section>
  )
}

export default About