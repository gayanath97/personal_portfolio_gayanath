import React from "react";
import "./about.css";
// import ME from '../../assets/me-about.jpg'
import ME from "../../assets/mer2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
            GAYANATH SILVA IS A PASSIONATE SOFTWARE ENGINEER WITH 1+ YEARS OF
            EXPERIENCE IN JAVA SPRING BOOT AND MICROSERVICES. SPECIALIZING IN
            BACKEND DEVELOPMENT AND REST APIS, AND ALSO 1+ YEARS OF EXPERIENCE
            IN REACTJS AND ANGULAR. GAYANATH EXCELS AT PROBLEM-SOLVING, SYSTEM
            DESIGN, AND ENHANCEMENT. I AM SELF-MOTIVATED, HARDWORKING, AND
            DEDICATED TO UTILIZING HIS SKILLS TO CONTRIBUTE TO AN ORGANIZATION'S
            GROWTH.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
