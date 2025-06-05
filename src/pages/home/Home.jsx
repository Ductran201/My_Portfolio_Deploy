import React from "react";
import "./home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ButtonCustom from "../../components/button/ButtonCustom";
export default function Home() {
  return (
    <>
      <div className="slide"></div>
      <div className="section home">
        <div className="color-block"></div>

        <div className="home-img">
          <img src="/assests/portfolio.jpg" alt="" />
        </div>

        <div className="home-text">
          <div className="home-text-wrap">
            <h1>
              I'm Tran Trong Duc
              <span>Web Developer</span>
            </h1>
            <p>
              Nice to meet you! My name is Duc and I am a person who is very
              passionate about technology, especially the web. I aspire to
              create websites that not only operate efficiently but also deliver
              significant practical value, featuring optimal design and
              exceptional user experiences. I continuously strive to learn and
              apply new technologies to improve my knowledge and build
              high-quality products that meet client needs. I look forward to
              meeting you!
            </p>
            <ButtonCustom>
              <Link to="/about">
                <span className="btn-text">About</span>
                <span className="btn-icon">
                  <ArrowForwardIcon />
                </span>
              </Link>
            </ButtonCustom>
            <ButtonCustom className="ml-[48px]">
              <Link to="/project">
                <span className="btn-text">Project</span>
                <span className="btn-icon">
                  <ArrowForwardIcon />
                </span>
              </Link>
            </ButtonCustom>
          </div>
        </div>
      </div>
    </>
  );
}
