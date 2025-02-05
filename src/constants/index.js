import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  expressjs,
  ec,
  github,
  taskManagment,
  url,
  olx,
 
} from "../assets";
import hos from '../assets/hos.png'
import python from '../assets/tech/python.png';
import djangoicon from '../assets/tech/djangoicon.svg'
import postgresql from '../assets/tech/postgresql.svg'
import watch from '../assets/watch.jpg'
import blog from '../assets/blog.png'
import olx1 from '../assets/olx1.png'
import net from '../assets/net.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python, 
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: djangoicon,
  },
  {
    name: "postgres",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
 

];

const socialMedias = [
  {
    icon: github,
    link: "https://github.com/ajaydevz",
  },
  {
    icon: "data:image/png;base64,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",
    link: "https://www.linkedin.com/in/meetajaydev",
  },
  // {
  //   icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxx9NbK-Og_S-81A5yAXdtseaMCFh8skWCYQ&s",
  //   link: "https://www.instagram.com/",
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
 
const projects = [
  {
    name: "Hospital Managment (under construction!)",
    description:
      "Hospital Management System streamlines patient registration, appointments, doctor management, and billing.it features payment options (Stripe), Built with Django and React, it ensures secure, efficient hospital operations with role-based access and real-time updates.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "postgress",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      // {
      //   name: "redux",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "typeScript",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "nodejs",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "express",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Clean Archetecture",
      //   color: "pink-text-gradient",
      // },
    ],
    image: hos,
    source_code_link: "",
    source_live_link: "",
  },
  {
    name: "E-Commerce",
    description:
      "Watch E-Commerce Website is a sleek online platform for browsing and purchasing watches with color variants. Built with Django, HTML, and PostgreSQL, it features multiple payment options (including Razorpay) and SMTP-based email verification. Designed for security and ease of use, it offers a seamless shopping experience with robust admin controls.",
    tags: [
      {
        name:"django",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "postgress",
        color: "green-text-gradient",
      },
      {
        name: "mvt",
        color: "orange-text-gradient",
      },
      
    ],
    image: watch,
    source_code_link: "https://github.com/ajaydevz/Watch-hub.git",
    source_live_link: "",
  },
  {
    name: "Blogapp",
    description:
      "Blog Application is a dynamic and interactive platform where users can create, update, and delete blogs while engaging with others through comments. It features a robust content management system, ensuring a seamless user experience. Administrators have full control over blog posts, user interactions, Built with Django, the application prioritizes security, and performance.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      // {
      //   name: "restapi",
      //   color: "orange-text-gradient",
      // },
      // {
      //   name: "typeScript",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "nest.js",
      //   color: "green-text-gradient",
      // },
    ],
    image:blog,
    source_code_link:"https://github.com/ajaydevz/Aura-blogs.git",
    source_live_link:"",
  },
  {
    name: "Olx clone",
    description:
     "A beginner-friendly OLX clone built with React and Firebase, offering a hands-on introduction to dynamic web application development. This project covers essential React concepts like state management and component-based architecture while leveraging Firebase for real-time database management, user authentication, and data storage",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:olx1,
    source_code_link:"https://github.com/ajaydevz/olx-clone.git",
    source_live_link:"",
  },
  {
    name: "Netflix clone",
    description:
      "A Netflix clone built with React, designed to provide a hands-on introduction to React fundamentals. This project showcases key concepts such as component architecture, state management, and API integration while delivering a responsive and interactive streaming platform interface. Ideal for learning and mastering front-end development",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: net,
    source_code_link:"https://github.com/ajaydevz/Netflix.git",
    source_live_link:"",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedias,
};
