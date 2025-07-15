import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Certificate from './components/certificate/certificate';
// import Skills from './components/skills/Skills';
import Learning from './components/learning/Learning';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Layout from "./components/Layout/Layout";

export default function routes() {
    const isDarkMode = true;
    return (
        <Routes>
            <Route path="/me/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="certificate" element={<Certificate/>}/>
                {/*<Route path="skills" element={<Skills/>}/>*/}
                <Route path="learning" element={<Learning/>}/>
                <Route path="qualification" element={<Qualification/>}/>
                <Route path="portfolio" element={<Work/>}/>
                <Route path="testimonials" element={<Testimonials/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<div>Page Not Found</div>}/>
        </Routes>
    );
}