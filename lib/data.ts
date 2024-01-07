import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
//import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "London Stock Exchange Group ",
    description:
      "Successfully delivered an Index Builder tool with a core focus on attributes creation. These attributes are associated with constituents – entities, security and instrument. New indexes can be created by user using those attributes.",
    tags: ["React", "ASP.NET Core", "SQL Server", "AWS"],
    imageUrl: '',//corpcommentImg,
  },
  {
    title: "Domestic & General",
    description:
      "This project is to manage My Account section of D&G web app. Along this regular maintenance work, I work on making application accessible, responsive, intuitive, user-friendly. ",
    tags: ["React", "TypeScript", "Tailwind", "ASP.NET Core", "Azure"],
    imageUrl: ''//rmtdevImg,
  },
  {
    title: "Royal Bank of Scotland",
    description:
      "This project is re-platforming the internet banking application. As first deliverable, I was working on building Debit Card Freeze/Unfreeze and Direct Debit details functionality. ",
    tags: ["React", "TypeScript", "Tailwind", "ASP.NET Core", "Azure"],
    imageUrl: ''//wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Git",
  "ASP.NET",
  "C#",
  "SQL Server",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Azure",
  "AWS",
  "Framer Motion",
] as const;