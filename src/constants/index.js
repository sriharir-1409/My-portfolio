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
  mysql,
  solidity,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  chatbot,
  chatnova,
  crop,
  dash,
  hamsters,
  ajurs,
  codecasa,
  codsoft,
  bharat,
  hal,
  ml,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "ML Model Builder",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
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
    name: "MySql",
    icon: mysql,
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
    name: "Node JS",
    icon: nodejs,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
];

const experiences = [
  {
    title: "Web Development and AI intern",
    company_name: "Ajurs Insights",
    icon: ajurs,
    iconBg: "#E6DEDD",
    date: " 2024 - Present",
    points: [
      "Built a website for their startup using React.js and other related technologies.",
      "Working on the Training Llama AI model on custom datasets.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Code Casa",
    icon: codecasa,
    iconBg: "#383E56",
    date: "October 2023 - November 2023",
    points: [
      "Developed and implemented a face recognition system, reducing unauthorized access by 75%.",
      "Created a Python-based Tic-Tac-Toe game using machine learning techniques, increasing user engagement by 40%",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "September 2023 - October 2023",
    points: [
      "Built and implemented projects in Spam Email Detection and Credit Card Fraud Detection using machine learning algorithms, significantly enhancing cybersecurity measures.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Bharat Intern",
    icon: bharat,
    iconBg: "#383E56",
    date: "August 2023 - September 2023",
    points: [
      "Developed machine learning predictive models for House Price Prediction and Wine Quality Prediction, enhancing forecasting accuracy and data-driven decision-making"
    ],
  },
  {
    title: "Information Technology Intern",
    company_name: "Hindustan Aeronautics Limited",
    icon: hal,
    iconBg: "#E6DEDD",
    date: "July 2023 - July 2023",
    points: [
      "Optimized server efficiency using performance tuning techniques and developed a Network Monitoring Tool, decreasing workload by 40%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I initially thought it was impossible to create a website as stunning as our project, but Srihari's exceptional skills and creativity proved me wrong. His attention to detail and dedication transformed our vision into a reality beyond my expectations.",
    name: "Joyson CH",
    designation: "Student",
    company: "Presidency University",
  },
  {
    testimonial:
      "I've never met a web developer who genuinely cares about the success and well-being of their friends as much as Srihari does. His dedication to helping others achieve their goals and his unwavering support make him truly exceptional.",
    name: "Adarsha BV",
    designation: "Student",
    company: "Presidency University",
  },
  {
    testimonial:
      "After becoming friends with Srihari, I gained invaluable lessons on how to navigate and face the real world. His insights, support, and experiences have profoundly shaped my understanding of real-life challenges and opportunities.",
    name: "Tejaswini S",
    designation: "Student",
    company: "Presidency University",
  },
];

const projects = [
  {
    name: "AI-based Chatbot",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/sriharir-1409/Ai-Based-Chatbot",
  },
  {
    name: "Quantum-Encryption-tool",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "kyber",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "aes-256",
        color: "red-text-gradient",
      },
    ],
    image: hamsters,
    source_code_link: "https://github.com/sriharir-1409/Hamsters",
  },
  {
    name: "Farmers' Website for Crop Recommendations",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "json",
        color: "red-text-gradient",
      },
    ],
    image: crop,
    source_code_link: "https://github.com/sriharir-1409/Farmers-Crop-Prediction-Website",
  },
  {
    name: "ChatNova",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: chatnova,
    source_code_link: "https://github.com/sriharir-1409/ChatNova",
  },
  {
    name: "Traffic Management Dashboard",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: dash,
    source_code_link: "https://github.com/sriharir-1409/Traffic-Management-Dashboard",
  },
  {
    name: "ML models",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "sklearn",
        color: "pink-text-gradient",
      },
      {
        name: "matplotlib",
        color: "red-text-gradient",
      },
    ],
    image: ml,
    source_code_link: "https://github.com/sriharir-1409/ML",
  },
];

export { services, technologies, experiences, testimonials, projects };
