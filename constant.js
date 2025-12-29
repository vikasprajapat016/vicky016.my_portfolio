// Skills Section Logo's
import htmlLogo from './src/assets/tech_logo/html.png';
import cssLogo from './src/assets/tech_logo/css.png';
import javascriptLogo from './src/assets/tech_logo/javascript.png';
import reactjsLogo from './src/assets/tech_logo/reactjs.png';
import reduxLogo from './src/assets/tech_logo/redux.png';
import tailwindcssLogo from './src/assets/tech_logo/tailwindcss.png';
import nodejsLogo from './src/assets/tech_logo/nodejs.png';
import expressjsLogo from './src/assets/tech_logo/express.png';
import mysqlLogo from './src/assets/tech_logo/mysql.png';
import mongodbLogo from './src/assets/tech_logo/mongodb.png';
import firebaseLogo from './src/assets/tech_logo/firebase.png';
import cppLogo from './src/assets/tech_logo/cpp.png';
import javaLogo from './src/assets/tech_logo/java.png';
import githubLogo from './src/assets/tech_logo/github.png';
import vscodeLogo from './src/assets/tech_logo/vscode.png';
import postmanLogo from './src/assets/tech_logo/postman.png';
import vercelLogo from './src/assets/tech_logo/vercel.png';

// // Experience Section Logo's
import Kuchoriyalogo from './src/assets/kuchoriya.webp';
import agcLogo from './src/assets/personal.jpg';

// // Education Section Logo's
import ruLogo from './src/assets/ru.jpg';
import svmLogo from './src/assets/svm.jpg';
import sanskarLogo from './src/assets/sanskar.jpg';

// // Project Section Logo's
 import project1Logo from './src/assets/Newstoday.jpeg';
 import project3Logo from './src/assets/ttt.jpg';
 import project2Logo from './src/assets/todo.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
];


export const experiences = [
    {
      id: 0,
      img: Kuchoriyalogo,
      role: "Mern-stack Developer Intern",
      company: "Kuchoriya Techsoft",
      date: "Dec 2025 - Present",
      desc: " Joined Kuchoriya Techsoft as fresher. Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Node js",
        "Express js"
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Mern-stack Developer",
      company: "Personal",
      date: "August 2025 - Dec 2025",
      desc: "During this period learn new things by myself. Worked on some real-world projects and programming problems",
      skills: [
        "Html",
        "CSS",
        "JavaScript",
        "Java",
        "React js",
        "Node js"
        
      ],
    },
    
  ];


   export const projects = [
    {
      id: 0,
      title: "NewsToday App",
      description:
        "NewsToday is a modern, responsive news aggregation web application built using the MERN stack. The platform provides users with real-time access to the latest news across multiple categories, offering a clean and intuitive user experience.",
      image: project1Logo,
      tags: ["React JS", "Node Js", "Express Js","Taiwind Css", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/vikasprajapat016/news-today",
      webapp: "https://newstoday-rho.vercel.app/",
    },
    {
      id: 1,
      title: "Task Management APP",
      description:
        "A Todo App is a task management application designed to help users organize and track their daily activities efficiently. It allows users to add, update, mark, and delete tasks, ensuring better productivity and time management.",
      image: project2Logo,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/vikasprajapat016/",
      webapp: "",
    },
    {
      id: 2,
      title: "Tic Tac Toe Game",
      description:
        "Developed an interactive Tic Tac Toe game using HTML, CSS, and Javascript, allowing users to play against each other in a browser-based environment. Implemented game logic with Javascript to handle player turns, determine win condition, and reset the game, ensuring a smooth and functional experience.",
      image: project3Logo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vikasprajapat016/",
      webapp: "",
    },
];
  


export const education = [
    {
      id: 0,
      img: ruLogo,
      school: "Rajasthan University, Jaipur",
      date: "August 2022 - june 2025",
      grade: "7.5 CGPA",
      desc: "I completed my Bca degree in computer science and Communication Engineering from Commerce College, Rajasthan University, Jaipur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Commerce College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bca (CS)",
    },
    {
      id: 2,
      img: svmLogo,
      school: "Svm School, jaipur",
      date: "july 2021 - may 2022",
      grade: "82%",
      desc: "I completed my Senior Secondary Education (Class 12) with a PCM (Physics, Chemistry, Mathematics) stream under the Rajasthan Board of Secondary Education (RBSE). This academic phase strengthened my logical reasoning, analytical thinking, and problem-solving skills. Studying PCM helped me develop a strong foundation for engineering, programming, and technical subjects, supporting my interest in technology and software development.",
      degree: "RBSE(XII) - PCM"
    },
    {
      id: 3,
      img: sanskarLogo,
      school: "Sanskar Public School",
      date: "July 2019 - may 2020",
      grade: "85%",
      desc: "I completed my Secondary Education (Class 10) from the Rajasthan Board of Secondary Education (RBSE). During this period, I built a strong foundation in core academic subjects such as Mathematics, Science, Social Science, Hindi, and English, which helped develop my analytical thinking and problem-solving skills. This stage of education played an important role in shaping my discipline, learning habits, and academic interest.",
      degree: "RBSE(X)",
    },
  ];
  