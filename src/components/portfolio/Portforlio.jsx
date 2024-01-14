import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Springboot-hooks-fullstack</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/gayanath97/Springboot-hooks-fullstack"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/gayanath97/Springboot-hooks-fullstack"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>React-hooks-redux-api-axios</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/gayanath97/react-hooks-redux-api-axios"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/gayanath97/react-hooks-redux-api-axios"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>React-redux-site-1</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/gayanath97/React-redux-site-1"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/gayanath97/React-redux-site-1"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>React-redux-site-2</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/gayanath97/React-redux-site-2"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/gayanath97/React-redux-site-2"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Springboot Backend</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/gayanath97/group_project_backend"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/gayanath97/group_project_backend"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>React Frontend</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/gayanath97/group_project_frontend"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/gayanath97/group_project_frontend"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
