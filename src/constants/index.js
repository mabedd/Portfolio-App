import {
  mobile,
  backend,
  creator,
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
  nhic,
  smartmethods,
  riotu,
  net,
  tf,
  python,
  sqlserver,
  perfectionstrength,
  emerald,
  shoppyadmin,
} from "../assets";

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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "Database Management",
    icon: backend,
  },
  {
    title: "System Designing",
    icon: creator,
  },
];

const technologies = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: ".NET",
    icon: net,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "TensorFlow",
    icon: tf,
  },
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "National Health Information Center",
    icon: nhic,
    iconBg: "white",
    date: "August 2021 - Present",
    points: [
      "Designing and developing several Web Applications using React, .NET API, and SQL Server.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing best practices including ITIL and DevOps to automate and optimize the process.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Science Researcher",
    company_name: "Robotics and IoT Lab",
    icon: riotu,
    iconBg: "white",
    date: "August 2020 - September 2021",
    points: [
      "Developing and maintaining AI applications using Python and TensorFlow.",
      "Conducting advanced data analytics tasks to extract meaningful insights from data.",
      "Designed and developed a functional Face Recognition System for attendance.",
      "Implemented a functional Object Detection System for safety measurements in construction sites.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Smart Methods",
    icon: smartmethods,
    iconBg: "#E6DEDD",
    date: "May 2020 - July 2020",
    points: [
      "Built applications that are friendly Robotics Integration.",
      "Designed and developed a functional Robot Control System.",
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
    name: "Perfection and Strength",
    description:
      "Real Estate website for a company that provides a wide range of services in the field of real estate, including real estate development, real estate marketing, and real estate management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: perfectionstrength,
    source_code_link: "https://perfectionandstrength.sa/",
  },
  {
    name: "Emerald Hypermarket",
    description:
      "Visually stunning website for a leading hypermarket, showcasing its extensive range of products and offerings. Designed with user experience in mind, highlighting the hypermarket's diverse product categories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: emerald,
    source_code_link: "http://emeraldhypermarket.com/",
  },
  {
    name: "Shoppy Admin Panel",
    description:
      "A detailed admin dashboard for an ecommerce website with useful data insights, adminstrative functionalities, and management feature designed to be responsive and mobile-friendly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: shoppyadmin,
    source_code_link:
      "https://63331cf075c7635594953673--snazzy-kangaroo-b690b2.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
