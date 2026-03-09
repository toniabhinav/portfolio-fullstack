import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,

  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,

  football,
  sales,
  lms,
  threejs,
  python,
  java,
  powerbi,
  postgresql,
  excel,
  deloitte
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Machine Learning Developer",
    icon: backend,
  },
  {
    title: "Computer Vision Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Node JS", icon: nodejs },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "Power BI", icon: powerbi },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Git", icon: git },
  { name: "Three JS", icon: threejs },
  { name: "Excel", icon: excel },
];

const experiences: TExperience[] = [
  {
    title: "Data Visualization Intern",
    companyName: "Saiket Systems",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2026 - Mar 2026",
    points: [
      "Processed large business datasets using Python (Pandas, NumPy).",
      "Built Power BI dashboards to track revenue growth and sales performance.",
      "Performed exploratory data analysis (EDA) to identify trends and anomalies.",
      "Generated visual reports improving business decision making."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Completed Deloitte Data Analytics Virtual Experience Program where I worked on data analysis and forensic technology tasks using real-world business datasets.",
    name: "Deloitte Data Analytics Virtual Experience",
    designation: "Virtual Experience Program",
    company: "Deloitte (Forage)",
    image: deloitte,
  },
];

const projects: TProject[] = [
  {
  name: "Football Tactical Analysis System",
  description:
    "Computer vision based system that detects player positions using OpenCV and analyzes football tactics with pass maps and heatmaps.",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "opencv", color: "green-text-gradient" },
    { name: "react", color: "pink-text-gradient" },
  ],
  image: football,
  sourceCodeLink: "https://github.com/yourgithub/football-analysis",
},
  {
  name: "Sales Data Analysis",
  description:
    "Exploratory data analysis project using Python, Pandas and Matplotlib to identify seasonal sales trends and business insights.",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "pandas", color: "green-text-gradient" },
    { name: "matplotlib", color: "pink-text-gradient" },
  ],
  image: sales,
  sourceCodeLink: "https://github.com/yourgithub/sales-analysis",
},
  {
  name: "Learning Management System",
  description:
    "Full stack LMS platform built with MERN stack allowing course management, authentication and progress tracking.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "nodejs", color: "green-text-gradient" },
    { name: "mongodb", color: "pink-text-gradient" },
  ],
  image: lms,
  sourceCodeLink: "https://github.com/yourgithub/lms-project",
},
];

export { services, technologies, experiences, testimonials, projects };
