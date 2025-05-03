import React, {useState, useEffect} from 'react'
import "./about.css";
import AboutImg from "../../assets/img/damar-galih.jpg";
import Info from './Info';

const About = ({isDarkMode}) => {
  const [animatedText, setAnimatedText] = useState('');
  const text = "I am a human who is interested in the world of technology, especially in the field of development and creation, with professional experience in designing and developing websites using various front-end and back-end technologies such as HTML, CSS, JavaScript, as well as frameworks such as Bootstrap, Tailwind CSS , and React, while at the same time expanding knowledge in the field of back-end development and creating interesting work by combining technological expertise and a philosophical understanding of identity and the meaning of life.";

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
                <Info />
                <p className="about__description">
                  {animatedText}
                </p>
              </div>
            </div>
    </section>
  )
}

export default About