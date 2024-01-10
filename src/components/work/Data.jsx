import Work1 from "../../assets/landing-page.jpg";
import Work2 from "../../assets/me.png";
import Work3 from "../../assets/shoes.png";
import Work4 from "../../assets/coca-cola.png";
import Work5 from "../../assets/UI_Trash_Collector.jpg";
import work6 from "../../assets/APP_Park_Ease.png";
import js from '../../assets/js.svg';
import csharp from '../../assets/csharp.svg';
import react from '../../assets/reactjs.svg';
import emailjs from '../../assets/emailjs.svg';
import bootstrap from '../../assets/bootstrap.svg'
import figma from '../../assets/figma.svg';
import guna from '../../assets/guna-ui.svg';
import swiperjs from '../../assets/swiper.svg';
import starsnull from '../../assets/stars-null.svg';
import starshalf from '../../assets/stars-half.svg';
import starsfull from '../../assets/stars-full.svg';

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Landing Page Website",
    category: "web",
    link : "https://damar-glh.github.io/landing-page-bootstrap/",
    goals: "This site is the product of my learning in the Codepolitan bootcamp class, where I produced a landing page according to the instructions given.",
    tech : [js, bootstrap],
    author : ["Damar Galih"],
    ratings : [starsfull, starsfull, starsfull, starsnull, starsnull],
  },
  {
    id: 2,
    image: Work5,
    title: "UI & UX Trash Collector",
    category: "design",
    link : "https://www.figma.com/file/YSgAkt5rd1KqqNJiKgxOwd/UI-Trash-Collector?type=design&node-id=159%3A12103&mode=design&t=B0xCuXecsk51Iz3N-1",
    goals: "This UI/UX Waste Management Project was developed as part of the final assignment in the Human and Computer Interaction course. As a final project, we are committed to presenting the best results to achieve the desired goals.",
    tech : [figma],
    author : ["Muhamad Rizal Arfiyan","Damar Galih", "Ahmad Mufied Nugroho","Gilang Nur Hidayat", "Wisnu Kusuma Dewa"],
    ratings : [starsfull, starsfull, starsfull, starsfull, starsfull],
  },
  {
    id: 3,
    image: Work2,
    title: "Portofolio Website",
    category: "web",
    link : "https://damar-glh.github.io/me/",
    goals: "The aim of making this portfolio is as a means to inspire and channel my creativity. Apart from that, this portfolio also functions as a place to collect my work which will have benefits for the future.",
    tech : [js, react, emailjs, swiperjs],
    author : ["Damar Galih"],
    ratings : [starsfull, starsfull, starsfull, starsfull, starshalf],
  },
  
  {
    id: 4,
    image: work6,
    title: "Park Ease Application",
    category: "app",
    link : "https://github.com/rizalarfiyan/park-ease/releases/tag/v1.0.0",
    goals: "The development of this application is the final project of the Advanced Programming course, carried out in groups with a focus on providing efficient solutions for parking lot management. By utilizing the latest technology and advanced programming practices, this application is designed to make it easier for users to park in the areas provided.",
    tech : [csharp, guna],
    author : ["Muhamad Rizal Arfiyan","Damar Galih", "Ahmad Mufied Nugroho","Gilang Nur Hidayat", "Wisnu Kusuma Dewa"],
    ratings : [starsfull, starsfull, starsfull, starsfull, starsfull],
  },
  {
    id: 5,
    image: Work3,
    title: "Shoes Website",
    category: "web",
    link : "https://damar-glh.github.io/me/",
    goals: "This website is designed to complete a course taught by Dea Afrizal, which focuses on creating websites for shoe products. However, the appearance and content of this site reflects my creativity and personal contributions.",
    tech : [js, bootstrap],
    author : ["Damar Galih"],
    ratings : [starsfull, starsfull, starsnull, starsnull, starsnull],
  },
  {
    id: 6,
    image: Work4,
    title: "Coca-Cola Website",
    category: "web",
    link : "https://damar-glh.github.io/me/",
    goals: "This website was designed as a means to utilize free time outside of the lecture schedule. As an alternative to avoiding boredom, self-development can be done through learning.",
    tech : [js, bootstrap],
    author : ["Damar Galih"],
    ratings : [starsfull, starsfull, starsnull, starsnull, starsnull],
  },
];

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Web',
  },
  {
    name: 'app',
  },
  {
    name: 'design',
  },
];