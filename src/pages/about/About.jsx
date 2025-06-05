import React from "react";
import "./about.css";
import TitleHeader from "../../components/title-header/index.jsx";
import ButtonCustom from "../../components/button/ButtonCustom.jsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import {
  html,
  css,
  sass,
  javascript,
  java,
  react,
  redux,
  git,
  axios,
  tailwind,
  go,
  spring,
  mySQL,
} from "../../assets/skills/skills.js";

import { Link } from "react-router-dom";

export default function About() {
  const skills = [
    // {
    //   name: "html",
    //   path: html,
    // },
    {
      name: "react",
      path: react,
    },

    {
      name: "css",
      path: css,
    },
    {
      name: "tailwind",
      path: tailwind,
    },

    {
      name: "spring",
      path: spring,
    },
    {
      name: "mySQL",
      path: mySQL,
    },
    // {
    //   name: "sass",
    //   path: sass,
    // },
    {
      name: "javascript",
      path: javascript,
    },
    {
      name: "java",
      path: java,
    },

    // {
    //   name: "redux",
    //   path: redux,
    // },
    {
      name: "git",
      path: git,
    },
    {
      name: "axios",
      path: axios,
    },
  ];
  return (
    <>
      <div className="slide"></div>
      <div className="section">
        <TitleHeader first={"About"} second={"Me"} third={"Resume"} />
        <div className="container">
          {/* INFOR */}
          <div className="info">
            {/* LEFT */}
            <div className="info__basic">
              <h3>personal information</h3>
              <ul className="info-list">
                <li>
                  <span>First name: </span>
                  Duc
                </li>
                <li>
                  <span>Last name: </span>
                  Tran Trong
                </li>
                <li>
                  <span>birthday: </span>
                  15/03/2001
                </li>
                <li>
                  <span>sex: </span>
                  Male
                </li>
                <li>
                  <span>nation: </span>
                  Viet Nam
                </li>
                <li>
                  <span>address: </span>
                  My Dinh, Ha Noi
                </li>
                <li>
                  <span>phone: </span>
                  0356581703
                </li>
                <li>
                  <span>git: </span>
                  https://github.com/
                </li>
                <li>
                  <span>language: </span>VietNamese, English
                </li>
                <li>
                  <span>email: </span>
                  ductt1531@gmail.com
                </li>
              </ul>
              <ButtonCustom>
                {/* <a
                  href="https://drive.google.com/file/d/14BNcLxvB7DAkVSYYgVbuBf9fup7E4eNB"
                  rel="noopener"
                  download
                > */}
                <Link>
                  <span className="btn-text">download CV</span>
                  <span className="btn-icon">
                    <ArrowForwardIcon />
                  </span>
                </Link>
                {/* </a> */}
              </ButtonCustom>
            </div>
            {/* RIGHT */}
            <div className="info__more">
              <div className="info__more__card">
                <h3>
                  5
                  <AddIcon />
                </h3>
                <p>
                  personal <span>projects</span>
                </p>
              </div>

              <div className="info__more__card">
                <h3>
                  0
                  <AddIcon />
                </h3>
                <p>
                  years of <span>experience</span>
                </p>
              </div>

              <div className="info__more__card">
                <h3>
                  0
                  <AddIcon />
                </h3>
                <p>
                  years of <span>experience</span>
                </p>
              </div>
            </div>
          </div>

          <hr />
          {/*================= SKILLS ==================*/}
          <h3 className="skill-heading">My Skills</h3>
          <div className="skill">
            {skills.map((item, i) => (
              <div key={i} className="skill-item">
                <div className="skill-item__img mb-1">
                  <div
                    className="skill-item__img-wrap"
                    style={{ backgroundImage: `url(${item.path})` }}
                  ></div>
                </div>
                <div className="skill-item__name">
                  <h6>{item.name}</h6>
                </div>
              </div>
            ))}
          </div>

          <hr />

          {/*================== EXPERIENCE ==============*/}

          <h3 className="resume__heading">Education & Experience</h3>
          <div className="resume">
            <div className="resume__edu">
              <div className="resume__edu__item mb-3">
                <div className="icon">
                  <i className="bx bxs-briefcase"></i>
                </div>
                <span className="time">2018</span>
                <h3>
                  Thuong Mai <span className="place">University</span>{" "}
                </h3>
                <p>Graduated</p>
              </div>

              <div className="resume__edu__item mb-3">
                <div className="icon">
                  <i className="bx bxs-briefcase"></i>
                </div>
                <span className="time">2024</span>
                <h3>
                  Rikkei <span className="place">Academy</span>{" "}
                </h3>
                <p>Graduated</p>
              </div>
            </div>

            <div className="resume__exp">
              {/* {exp.map((item, i) => ( */}
              <div className="resume__exp__item">
                <div className="icon">
                  <i className="bx bxs-briefcase"></i>
                </div>
                <span className="time">03/2025 - 05/2025</span>
                <h3>
                  VMO HOLDINGS TECHNOLOGY JOINT STOCK{" "}
                  <span className="place">COMPANY</span>{" "}
                </h3>
                <p>Golang developer intern</p>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
