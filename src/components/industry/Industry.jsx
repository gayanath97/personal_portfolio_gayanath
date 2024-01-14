import React from "react";
import "./../services/services.css";
import { BiCheck } from "react-icons/bi";

const Industry = () => {
  return (
    <section
      id="services"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h4>Software Engineer Intern</h4>
            <h4>Intervest Software Technologies</h4>
            <h4>Colombo, Sri Lanka</h4>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I have taken on the responsibility of transitioning the
                pre-existing codebase, initially developed within the Enonic
                framework, to a structure based on ReactJS.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                In the context of bug fixing, I acquired the skills to
                effectively work with AWS server logs, enabling me to diagnose
                and resolve issues efficiently.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I have been responsible for the development of new feature
                tickets, incorporating requirement changes for existing
                features, and addressing bug tickets.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                While working on tickets, I have effectively communicated with
                the QA team, ensuring a collaborative and smooth workflow.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                This interaction has provided me with valuable insights into all
                stages of the Software Development Life Cycle (SDLC), allowing
                for a comprehensive understanding of the entire development
                process from inception to deployment and maintenance.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I actively engaged with version control using GitLab,
                implemented continuous integration with Jenkins, and managed
                project workflows using Jira tools.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h4>Software Engineer Intern</h4>
            <h4>Axiata Digital Labs,Sri Lanka</h4>
            <h4>Colombo, Sri Lanka</h4>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I have practical experience with design patterns such as the
                Singleton and Factory design patterns in the projects I have
                been involved with.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I have acquired proficiency in writing code following the SOLID
                principles.It has guided my coding practices, fostering
                maintainability, flexibility, and scalability in software
                development projects.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I have gained expertise in working with microservices
                architecture, including the utilization of Kafka for
                event-driven communication.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                This knowledge has enabled me to design and develop scalable,
                distributed systems that leverage the benefits of microservices
                and effectively handle communication between services through
                event-driven approaches and API management.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Additionally, I have experience in the implementation of an API
                gateway using Spring Cloud.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                have experience deploying projects on AWS servers using Docker.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                This involves containerizing applications with Docker to ensure
                consistency across different environments.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Then, deploying these containers on AWS for efficient and
                scalable infrastructure management.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                This deployment approach enhances the portability and
                scalability of the application while leveraging the benefits of
                AWS services.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Industry;
