import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>How am I</h5>
      <h2>Education</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Degree Level</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                B.Sc. (Hons) in Information Technology University of Moratuwa
                Undergraduate
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Advanced Level</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                G.C.E. A/L (Math’s Stream) Bandaranayake College - Gampaha |
                2018 August Passed with 1A,2B’s
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVEOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Ordinary Level</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                G.C.E. O/L (Sinhala Medium) Bandaranayake College - Gampaha |
                2013 Passed with 8A’s, 1B
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <h5>What are the industrial Experience</h5>
      <h2>Experience</h2>
    </section>
  );
};

export default Services;
