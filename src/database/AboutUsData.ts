// src/data/portfolioData.ts
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  price?: number;
  technologies: string[];
  role: string;
  link: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "Timtom Aviation Internal Dashboard",
    description: "Developed and managed the internal web dashboard for Timtom Aviation Ltd, integrating React for UI and Python backend services.",
    image: "/images/projects/1.png",
    rating: 4.9,
    price: 0,
    technologies: ["React", "CSS", "Python", "REST API"],
    role: "Fullstack Developer",
    link: "#"
  },
  {
    id: "2",
    title: "Innovative Isiine Training Platform",
    description: "Built a web-based learning management system for Innovative Isiine Ltd, facilitating online courses and user tracking.",
    image: "/images/projects/2.png",
    rating: 4.8,
    price: 0,
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    role: "IT Manager",
    link: "#"
  },
  {
    id: "3",
    title: "AI Dataset Annotation Tool",
    description: "Designed a UI for data annotation, used in machine learning projects to label and validate large datasets.",
   image: "/images/projects/3.png",
    rating: 5.0,
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    role: "Data Annotator",
    link: "#"
  },
  {
    id: "4",
    title: "Personal Portfolio Website",
    description: "A responsive, modern personal portfolio highlighting skills, projects, and services.",
    image: "/images/projects/4.png",
    rating: 5.0,
    technologies: ["Next.js", "Tailwind", "Typescript"],
    role: "UI/UX Designer",
    link: "#"
  },
  {
    id: "5",
    title: "Logistics Management Web App",
    description: "Built a web-based logistics and delivery system to track cargo and vehicle movement in real time.",
    image: "/images/projects/5.jpg",
    rating: 4.7,
    technologies: ["React", "Node.js", "MongoDB"],
    role: "Fullstack Developer",
    link: "#"
  },
  {
    id: "6",
    title: "Kigali Conference Reservation UI",
    description: "Created a user-centric interface for booking conference halls with calendar integration.",
      image: "/images/projects/6.jpg",
    rating: 4.6,
    technologies: ["Figma", "React", "Tailwind CSS"],
    role: "UI Designer",
    link: "#"
  },
  {
    id: "7",
    title: "E-commerce Frontend Template",
    description: "Designed and developed a reusable ecommerce product card component library using Flowbite React.",
    image: "/images/projects/7.jpg",
    rating: 5.0,
    technologies: ["React", "Flowbite", "Tailwind"],
    role: "Frontend Developer",
    link: "#"
  },
  {
    id: "8",
    title: "Cybersecurity Monitoring Panel",
    description: "Implemented a dashboard interface for monitoring threat logs and alerts for a client project.",
    image: "/images/projects/8.jpg",
    rating: 4.8,
    technologies: ["React", "Chart.js", "Sass"],
    role: "Frontend Developer",
    link: "#"
  },
  {
    id: "9",
    title: "Save Secondary School Portal",
    description: "Built the student information and course tracking portal while studying computer science.",
    image: "/images/projects/9.jpg",
    rating: 4.9,
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    role: "Student Developer",
    link: "#"
  },
  {
    id: "10",
    title: "Dark Mode UI Toggle Showcase",
    description: "Demonstrated dark mode toggle component using Tailwind and React Context API.",
    image: "/images/projects/10.jpg",
    rating: 5.0,
    technologies: ["React", "Tailwind", "Context API"],
    role: "UI/UX Enthusiast",
    link: "#"
  }
];
