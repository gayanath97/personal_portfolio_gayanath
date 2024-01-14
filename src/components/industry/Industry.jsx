import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Industry = () => {
  return (
    <section id="services">
      <h5>What are the industrial Experience</h5>
      <h2>Experience</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Software Engineer Intern</h3>
            <h4>Intervest Software Technologies,Sri Lanka</h4>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I have taken on the responsibility of transitioning the
                pre-existing codebase, initially developed within the Enonic
                framework, to a structure based on ReactJS. In the context of
                bug fixing, I acquired the skills to effectively work with AWS
                server logs, enabling me to diagnose and resolve issues
                efficiently. I have been responsible for the development of new
                feature tickets, incorporating requirement changes for existing
                features, and addressing bug tickets. While working on tickets,
                I have effectively communicated with the QA team, ensuring a
                collaborative and smooth workflow. This interaction has provided
                me with valuable insights into all stages of the Software
                Development Life Cycle (SDLC), allowing for a comprehensive
                understanding of the entire development process from inception
                to deployment and maintenance. I actively engaged with version
                control using GitLab, implemented continuous integration with
                Jenkins, and managed project workflows using Jira tools.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Software Engineer Intern</h3>
            <h4>Axiata Digital Labs,Sri Lanka</h4>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I have practical experience with design patterns such as the
                Singleton and Factory design patterns in the projects I have
                been involved with. I have acquired proficiency in writing code
                following the SOLID principles.It has guided my coding
                practices, fostering maintainability, flexibility, and
                scalability in software development projects. I have gained
                expertise in working with microservices architecture, including
                the utilization of Kafka for event-driven communication. This
                knowledge has enabled me to design and develop scalable,
                distributed systems that leverage the benefits of microservices
                and effectively handle communication between services through
                event-driven approaches and API management. Additionally, I have
                experience in the implementation of an API gateway using Spring
                Cloud. have experience deploying projects on AWS servers using
                Docker. This involves containerizing applications with Docker to
                ensure consistency across different environments. Then,
                deploying these containers on AWS for efficient and scalable
                infrastructure management. This deployment approach enhances the
                portability and scalability of the application while leveraging
                the benefits of AWS services.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Industry;
