import Work1 from "../../assets/img/landing-page.jpg";
import Work2 from "../../assets/img/me.png";
import Work3 from "../../assets/img/FE-Booking.png";
import Work4 from "../../assets/img/trashcan-iot.png";
import Work5 from "../../assets/img/UI_Trash_Collector.jpg";
import work6 from "../../assets/img/APP_Park_Ease.png";
import js from '../../assets/svg/js.svg';
import php from '../../assets/svg/php.svg';
import csharp from '../../assets/svg/csharp.svg';
import react from '../../assets/svg/reactjs.svg';
import emailjs from '../../assets/svg/emailjs.svg';
import bootstrap from '../../assets/svg/bootstrap.svg'
import tailwindcss from '../../assets/svg/tailwindcss.svg'
import arduino from '../../assets/svg/arduino-svgrepo-com.svg'
import blynk from '../../assets/svg/blynk.svg'
import figma from '../../assets/svg/figma.svg';
import guna from '../../assets/svg/guna-ui.svg';
import swiperjs from '../../assets/svg/swiper.svg';
import starsnull from '../../assets/svg/stars-null.svg';
import starshalf from '../../assets/svg/stars-half.svg';
import starsfull from '../../assets/svg/stars-full.svg';

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
    title: "Booking Website",
    category: "web",
    link : "https://booking.rizalarfiyan.com/",
    goals: "Booking is an online platform that allows users to rent books online easily and efficiently. This website is designed to be a one-stop solution for book lovers who want to access a wide variety of literature without having to buy it.",
    tech : [js, react, php, tailwindcss],
    author : ["Muhamad Rizal Arfiyan","Damar Galih", "Ahmad Mufied Nugroho","Gilang Nur Hidayat", "Wisnu Kusuma Dewa"],
    ratings : [starsfull, starsfull, starsfull, starsfull, starsfull],
  },
  {
    id: 6,
    image: Work4,
    title: "TrashCan IoT",
    category: "IoT",
    link : "https://www.launchinpad.com/project/trashcan-iot-288eaf0",
    goals: "Trashcan IoT is an innovative solution for safe and efficient waste management. Equipped with a gas sensor and proximity sensor, this smart trash can monitors the surrounding environment. Gas sensors detect methane from organic waste, providing a warning if it exceeds safe limits. Proximity sensors detect the presence of waste, increasing waste collection efficiency.",
    tech : [arduino, blynk],
    author : ["Damar Galih"],
    ratings : [starsfull, starsfull, starsfull, starsfull, starsnull],
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
  {
    name: 'IoT',
  },
];