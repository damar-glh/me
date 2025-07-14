// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/header/Header';
// import Home from './components/home/Home';
// import About from './components/about/About';
// import Certificate from './components/certificate/certificate';
// import Skills from './components/skills/Skills';
// import Learning from './components/learning/Learning';
// import Qualification from './components/qualification/Qualification';
// import Work from './components/work/Work';
// import Testimonials from './components/testimonials/Testimonials';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import ScrollUp from './components/scrollup/ScrollUp';
// // import Aos from 'aos';
// // import 'aos/dist/aos.css';
//
// const App = () => {
//   // Aos.init();
//   const [isLoading, setIsLoading] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//
//   const toggleDarkMode = () => {
//     setIsDarkMode(prevDarkMode => !prevDarkMode);
//     localStorage.setItem("darkMode", !isDarkMode ? "enabled" : "disabled");
//   };
//
//   useEffect(() => {
//     const darkModePreference = localStorage.getItem("darkMode");
//     if (darkModePreference === "enabled") {
//       setIsDarkMode(true);
//     }
//
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);
//
//   return (
//     <>
//       {isLoading ? (
//         <div className={`loader ${isDarkMode ? "dark-mode" : "light-mode"}`}>
//           <video src={process.env.PUBLIC_URL + `/${isDarkMode ? "giphy" : "giphy"}.mp4`} autoPlay loop muted />
//         </div>
//       ) : (
//         <>
//           <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//           <main className={`main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
//             <Home isDarkMode={isDarkMode} />
//             <About isDarkMode={isDarkMode} />
//             {/*<Certificate isDarkMode={isDarkMode} />*/}
//             <Skills isDarkMode={isDarkMode} />
//             {/*<Learning isDarkMode={isDarkMode} />*/}
//             <Qualification isDarkMode={isDarkMode} />
//             <Work isDarkMode={isDarkMode} />
//             {/*<Testimonials isDarkMode={isDarkMode} />*/}
//             <Contact isDarkMode={isDarkMode} />
//           </main>
//           <Footer isDarkMode={isDarkMode} />
//           <ScrollUp />
//         </>
//       )}
//     </>
//   );
// }
//
// export default App;

import React, {useState, useEffect} from 'react';
import routes from './routes';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevDarkMode => !prevDarkMode);
        localStorage.setItem("darkMode", !isDarkMode ? "enabled" : "disabled");
    };

    useEffect(() => {
        const darkModePreference = localStorage.getItem("darkMode");
        if (darkModePreference === "enabled") {
            setIsDarkMode(true);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            {isLoading ? (
                <div className={`loader ${isDarkMode ? "dark-mode" : "light-mode"}`}>
                    <video src={process.env.PUBLIC_URL + `/${isDarkMode ? "giphy" : "giphy"}.mp4`} autoPlay loop muted/>
                </div>
            ) : (
                <>
                    {routes()}
                </>
            )}
        </>
    );
}

export default App;