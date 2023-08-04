import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Learning from './components/learning/Learning';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
    localStorage.setItem("darkMode", !isDarkMode ? "enabled" : "disabled");
  };

  useState(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "enabled") {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <>
    <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    
    <main className={`main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Home isDarkMode={isDarkMode}/>
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Learning isDarkMode={isDarkMode} />
      <Qualification isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </main>
    <Footer isDarkMode={isDarkMode} />
    <ScrollUp />
    </>
  )
}

export default App;
