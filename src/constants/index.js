import project1 from "../assets/projects/golek.webp";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate Mobile Developer with a knack for crafting robust and scalable mobile applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like Flutter, Vue, and Svelte. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Mobile Developer with a passion for creating efficient and user-friendly mobile applications. With 2 years of professional experience, I have worked with a variety of technologies, including Vue, Svelte, and Flutter. My journey in mobile development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Mobile Developer",
    company: "GolektrukDotCom",
    description: `Developing and maintaining mobile applications using Flutter and Svelte. Implemented RESTful APIs and integrated with PostgreSQL databases. Implemented push notifications with Firebase Cloud Messaging. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Flutter", "Svelte", "Capacitor", "Kotlin"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Data Andalan Utama",
    description: `Designed and developed user interfaces for web applications using Vue.js. Worked closely with backend developers to integrate frontend components with Laravel APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "GolekTruk App (Webview Version)",
    image: project1,
    description:
      "A fully functional marketplace application with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Svelte", "Capacitor"],
  },
  {
    title: "GolekTruk App (Flutter Version)",
    image: project1,
    description:
      "A fully functional marketplace application with features like product listing, shopping cart, and user authentication.",
    technologies: ["Flutter", "FCM", "RestApi"],
  },
  {
    title: "Project Improvement App",
    image: project2,
    description: "An application for user training on maining section.",
    technologies: ["Flutter", "Supabase"],
  },
  {
    title: "Attendance App",
    image: project2,
    description: "An application for attendance of practical teachers.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Wonokromo, Comal, Pemalang, Jawa Tengah",
  phoneNo: "+62858 7500 1645",
  email: "fahmiia.work@gmail.com",
};
