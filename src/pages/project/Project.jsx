import React, { useState } from "react";
import "./project.css";
import TitleHeader from "../../components/title-header";
import ProjectCard from "../../components/projectCard/ProjectCard";
import {
  fastFood1,
  fastFood2,
  fastFood3,
  fastFood4,
  portfolio1,
  portfolio4,
  ec1,
  ec2,
  ec3,
  ec4,
  ec5,
  mv1,
  mv2,
  mv3,
  mv4,
  ms1,
  ms2,
} from "../../assets/projects/project";
export default function Project() {
  const categories = [
    "ALL",
    "HTML/CSS/JAVASCRIPT",
    "THYMELEAF",
    "NEXTJS/REACTJS/TAILWIND",
    "API",
  ];
  const projects = [
    {
      id: 1,
      thumbUrl: [fastFood1, fastFood2, fastFood3, fastFood4],
      date: "01/01/2024",
      title: "MyFoodie",
      description:
        "This is my first project using html, css, javascripts clone of Lotteria fast food restaurant website. Data stored on localStorage will be rendered to UI and created by admin account",
      role: "Main developer",
      frontend: ["CSS", "Bootstrap", "Javascript"],
      backend: "None",
      source: "https://github.com/Ductran201/FastFood",
      preview: "https://fast-food-git-main-ductran201s-projects.vercel.app/",
      tags: ["git", "html", "css", "javascript", "food"],
    },

    {
      id: 2,
      thumbUrl: [portfolio1, portfolio4],
      date: "01/01/2024",
      title: "My Portfolio",
      description:
        "This is a single-page application built with ReactJS and also is my personal website to introduce myself, my skills, and the projects I have worked on.",
      role: "Main developer",
      frontend: ["SCSS", "React"],
      backend: "None",
      source: "https://github.com/Ductran201/My_Portfolio",
      preview: "https://my-portfolio-eight-teal-37.vercel.app/",
      tags: ["reactjs", "animation", "portfolio"],
    },
    {
      id: 3,
      thumbUrl: [ec1, ec2, ec3, ec4, ec5],
      date: "01/01/2024",
      title: "E-Commerce Store",
      description:
        "This is a full-stack e-commerce platform with a Spring Boot backend and a ReactJS frontend. The project supports secure authentication using JWT and integrates modern UI libraries for a user experience",
      role: "Main developer",
      frontend: ["ReactJs", "Tailwind Css", "Ant Design", "MUI Material"],
      backend: "SpringBoot,Spring Security, API, mySQL",
      source: "https://github.com/Ductran201/SuitWeb",
      // preview: "",
      video: "",
      tags: [
        "reactjs",
        "tailwind",
        "redux",
        "axios",
        "ecommerce",
        "spring boot",
        "api",
      ],
    },

    {
      id: 4,
      thumbUrl: [mv1, mv2, mv3, mv4],

      date: "01/01/2024",
      title: "Movie Web",
      description:
        "This project separation between front-end and back-end, with the back-end using Spring Boot to handle the logic and return views via Thymeleaf",
      role: "Main Developer",
      frontend: ["Thymeleaf", "Bootstrap", "Javascript"],
      backend: "Spring Boot, MySQL",
      source: "https://github.com/Ductran201/WebMovieApplication",
      tags: ["thymeleaf", "bootstrap", "movie", "spring boot"],
    },
    {
      id: 5,
      thumbUrl: [ms1, ms2],

      date: "01/01/2024",
      title: "Music App",
      description: "This project build by nextJs and tailwindCss ",
      role: "Main Developer",
      frontend: ["NextJs", "TypeScript", "Tailwind"],
      backend: "None",
      source: "https://github.com/Ductran201/MusicApp",
      preview: "https://music-app-rose-psi.vercel.app/",
      tags: ["nextjs", "typescript", "tailwind", "audio"],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filterProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((project) => {
          const selectedTags = selectedCategory
            .replace(/\//g, ",")
            .split(",")
            .map((tag) => tag.trim().toLowerCase());
          // Check if any tag in selectedTags is included in the project's tags
          console.log({ selectedTags });
          return selectedTags.some((tag) => project.tags.includes(tag));
        });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="slide"></div>
      <div className="section project">
        <TitleHeader first={"my"} second={"projects"} third={"work"} />
        <div className="container">
          <div className="tab">
            <ul className="tab__nav">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`tab__nav-item ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <div className="tab__panel">
              {filterProjects.map((item) => (
                <ProjectCard item={item} id={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
