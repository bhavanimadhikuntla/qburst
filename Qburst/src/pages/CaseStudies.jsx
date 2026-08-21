import { Link } from "react-router-dom";
import "./CaseStudies.css";

import digitalEngineering from "../assets/images/digital-engineering.png";
import cloudSolutions from "../assets/images/cloud-solutions.png";
import aiAutomation from "../assets/images/ai-automation.png";
import dataAnalytics from "../assets/images/data-analytics.png";

const caseStudies = [
  {
    number: "01",
    industry: "RETAIL & E-COMMERCE",
    title: "Smart E-Commerce Platform",
    image: digitalEngineering,
    description:
      "A modern commerce platform designed to simplify online shopping while improving product and order management.",
    challenge:
      "The business needed a scalable digital platform that could support customers, products and day-to-day retail operations.",
    approach:
      "We combined a responsive React interface with Spring Boot services, REST APIs and structured MySQL data management.",
    outcome:
      "A cleaner digital shopping experience with a scalable technical foundation.",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
  },

  {
    number: "02",
    industry: "HEALTHCARE",
    title: "Digital Healthcare Management",
    image: dataAnalytics,
    description:
      "A centralized digital platform designed to simplify healthcare information and operational workflows.",
    challenge:
      "Healthcare teams needed a more organized way to manage information and access important operational data.",
    approach:
      "We designed a structured application with intuitive workflows, centralized data and scalable backend services.",
    outcome:
      "Simplified information management and improved workflow visibility.",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
  },

  {
    number: "03",
    industry: "FINANCIAL SERVICES",
    title: "Intelligent Finance Platform",
    image: cloudSolutions,
    description:
      "A technology platform created to modernize financial processes and improve access to business information.",
    challenge:
      "Existing processes made it difficult for teams to access consistent and useful operational information.",
    approach:
      "We implemented API-driven architecture with structured data management and reporting capabilities.",
    outcome:
      "Better visibility into business operations and a stronger digital foundation.",
    technologies: ["React", "Java", "REST APIs", "MySQL"],
  },

  {
    number: "04",
    industry: "EDUCATION",
    title: "Digital Learning Platform",
    image: aiAutomation,
    description:
      "A modern learning experience connecting students, educators and digital learning resources.",
    challenge:
      "The organization needed a more accessible and engaging digital learning environment.",
    approach:
      "We developed a responsive application with centralized content and user-friendly digital workflows.",
    outcome:
      "A more accessible and consistent digital learning experience.",
    technologies: ["React", "Java", "Spring Boot", "Cloud"],
  },

  {
    number: "05",
    industry: "MANUFACTURING",
    title: "Smart Operations Platform",
    image: dataAnalytics,
    description:
      "A centralized digital solution designed to improve operational visibility and support smarter decision-making.",
    challenge:
      "Business teams needed better visibility into operational information and repetitive processes.",
    approach:
      "We introduced dashboards, structured data management and workflow automation capabilities.",
    outcome:
      "Improved operational visibility and more efficient business processes.",
    technologies: ["React", "Spring Boot", "Data", "Automation"],
  },

  {
    number: "06",
    industry: "TECHNOLOGY",
    title: "Cloud Product Platform",
    image: cloudSolutions,
    description:
      "A scalable cloud-ready platform designed to support modern digital products and future growth.",
    challenge:
      "The product required an architecture that could evolve as new features and business requirements emerged.",
    approach:
      "We implemented modular services, REST APIs and cloud-ready application components.",
    outcome:
      "A flexible digital foundation ready for future product expansion.",
    technologies: ["React", "Java", "Spring Boot", "Cloud"],
  },
];

function CaseStudies() {
  return (
    <div className="case-studies-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="case-studies-hero">

        <div className="case-studies-container">

          <div className="case-studies-hero-content">

            <p className="case-studies-label">
              CASE STUDIES
            </p>

            <h1>
              Technology that
              <span>creates real impact.</span>
            </h1>

            <p className="case-studies-hero-text">
              Explore how HamaraShops.ai approaches real business
              challenges through technology, engineering and
              thoughtful digital solutions.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="case-studies-intro">

        <div className="case-studies-container case-studies-intro-grid">

          <div>

            <p className="case-studies-section-label">
              OUR WORK
            </p>

            <h2>
              From business
              <br />
              challenge to outcome.
            </h2>

          </div>

          <div className="case-studies-intro-copy">

            <p>
              Great technology starts with understanding the problem.
              We work with businesses to understand their objectives,
              users and operational challenges before designing the
              right solution.
            </p>

            <p>
              Our projects combine modern engineering, scalable
              architecture and practical design to create digital
              products that can grow with the business.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED PROJECT
      ===================================================== */}

      <section className="featured-case">

        <div className="case-studies-container">

          <div className="featured-case-grid">

            <div className="featured-case-image">

              <img
                src={digitalEngineering}
                alt="Smart E-Commerce Platform"
              />

              <span className="featured-case-number">
                01
              </span>

            </div>

            <div className="featured-case-content">

              <p className="featured-case-label">
                FEATURED PROJECT
              </p>

              <p className="featured-case-industry">
                RETAIL & E-COMMERCE
              </p>

              <h2>
                Smart
                <br />
                E-Commerce
                <br />
                Platform
              </h2>

              <p className="featured-case-description">
                A modern commerce platform designed to connect
                customers, products and business operations through
                a simple and scalable digital experience.
              </p>

              <div className="featured-case-tags">

                <span>React</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>

              </div>

              <Link
                to="/contact"
                className="featured-case-button"
              >
                Discuss a Similar Project →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CASE STUDIES
      ===================================================== */}

      <section className="case-studies-list">

        <div className="case-studies-container">

          <div className="case-studies-list-heading">

            <div>

              <p className="case-studies-section-label">
                SELECTED WORK
              </p>

              <h2>
                Real challenges.
                <br />
                Practical technology.
              </h2>

            </div>

            <p>
              A selection of digital initiatives across industries,
              from modern applications and platforms to cloud and
              data-driven solutions.
            </p>

          </div>


          <div className="case-study-grid">

            {caseStudies.slice(1).map((study) => (

              <article
                className="case-study-card"
                key={study.number}
              >

                {/* IMAGE */}

                <div className="case-study-image">

                  <img
                    src={study.image}
                    alt={study.title}
                  />

                  <span>
                    {study.number}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="case-study-content">

                  <p className="case-study-industry">
                    {study.industry}
                  </p>

                  <h3>
                    {study.title}
                  </h3>

                  <p className="case-study-description">
                    {study.description}
                  </p>


                  <div className="case-study-detail">

                    <div>

                      <span>
                        CHALLENGE
                      </span>

                      <p>
                        {study.challenge}
                      </p>

                    </div>


                    <div>

                      <span>
                        APPROACH
                      </span>

                      <p>
                        {study.approach}
                      </p>

                    </div>


                    <div>

                      <span>
                        OUTCOME
                      </span>

                      <p>
                        {study.outcome}
                      </p>

                    </div>

                  </div>


                  <div className="case-study-bottom">

                    <div className="case-study-technologies">

                      {study.technologies.map((technology) => (

                        <span key={technology}>
                          {technology}
                        </span>

                      ))}

                    </div>

                    <span className="case-study-arrow">
                      ↗
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="case-studies-approach">

        <div className="case-studies-container">

          <div className="case-studies-approach-heading">

            <div>

              <p className="case-studies-section-label">
                HOW WE WORK
              </p>

              <h2>
                Every project
                <br />
                starts with a problem.
              </h2>

            </div>

            <p>
              Our process keeps business objectives at the center
              while technology provides the foundation for growth.
            </p>

          </div>


          <div className="case-process-grid">

            <div>
              <span>01</span>
              <h3>Understand</h3>
              <p>
                Understand the business, users and real-world challenge.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Design</h3>
              <p>
                Define the right experience, architecture and technology.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Build</h3>
              <p>
                Develop scalable and maintainable digital solutions.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Improve</h3>
              <p>
                Continuously evolve the product as the business grows.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="case-studies-stats">

        <div className="case-studies-container">

          <div className="case-stats-grid">

            <div>
              <strong>6+</strong>
              <span>Industry Areas</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Solution Projects</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Technology Capabilities</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Purpose — Business Growth</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="case-studies-cta">

        <p className="case-studies-section-label">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let's turn your
          <br />
          challenge into impact.
        </h2>

        <Link
          to="/contact"
          className="case-studies-cta-button"
        >
          Start a Conversation →
        </Link>

      </section>

    </div>
  );
}

export default CaseStudies;