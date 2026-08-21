import { Link } from "react-router-dom";
import "./CaseStudies.css";

const caseStudies = [
  {
    number: "01",
    industry: "RETAIL & E-COMMERCE",
    title: "Smart E-Commerce Platform",
    description:
      "A modern digital commerce platform designed to improve online shopping experiences and simplify retail operations.",
    challenge:
      "The business needed a scalable platform that could provide customers with a simple shopping experience while supporting efficient product and order management.",
    solution:
      "We created a responsive web platform with modern frontend architecture, REST APIs and a scalable backend.",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    result: "Improved digital shopping experience",
  },

  {
    number: "02",
    industry: "HEALTHCARE",
    title: "Digital Healthcare Management",
    description:
      "A digital platform designed to simplify healthcare management and improve access to information.",
    challenge:
      "Healthcare teams needed a centralized system to manage information and improve operational workflows.",
    solution:
      "We developed a secure digital application with structured data management and intuitive user workflows.",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    result: "Simplified healthcare workflows",
  },

  {
    number: "03",
    industry: "FINANCIAL SERVICES",
    title: "Intelligent Finance Platform",
    description:
      "A technology platform designed to support financial operations and provide better visibility into business data.",
    challenge:
      "The organization needed to modernize existing processes and make business information easier to access.",
    solution:
      "We built a centralized platform with API-driven architecture, reporting capabilities and structured data management.",
    technologies: ["React", "Java", "REST APIs", "MySQL"],
    result: "Better operational visibility",
  },

  {
    number: "04",
    industry: "EDUCATION",
    title: "Digital Learning Platform",
    description:
      "A modern learning platform that connects students, educators and digital learning resources.",
    challenge:
      "The organization wanted to provide users with a more accessible and engaging digital learning experience.",
    solution:
      "We designed a responsive application with user-friendly interfaces and centralized learning content.",
    technologies: ["React", "Java", "Spring Boot", "Cloud"],
    result: "More accessible digital learning",
  },

  {
    number: "05",
    industry: "MANUFACTURING",
    title: "Smart Operations Platform",
    description:
      "A digital solution designed to improve operational visibility and support data-driven manufacturing processes.",
    challenge:
      "Business teams needed better visibility into operational information and repetitive processes.",
    solution:
      "We created a centralized application with dashboards, data management and workflow automation capabilities.",
    technologies: ["React", "Spring Boot", "Data", "Automation"],
    result: "Improved operational visibility",
  },

  {
    number: "06",
    industry: "TECHNOLOGY",
    title: "Cloud-Based Product Platform",
    description:
      "A scalable technology platform designed to support modern digital products and growing business requirements.",
    challenge:
      "The product required a flexible architecture capable of supporting future growth and new capabilities.",
    solution:
      "We implemented a modular architecture with REST APIs, cloud-ready services and scalable application components.",
    technologies: ["React", "Java", "Spring Boot", "Cloud"],
    result: "Scalable digital foundation",
  },
];

function CaseStudies() {
  return (
    <div className="case-studies-page">

      {/* HERO */}
      <section className="case-studies-hero">
        <div className="case-studies-container">

          <p className="case-studies-label">
            CASE STUDIES
          </p>

          <h1>
            Turning technology
            <span> into real-world impact.</span>
          </h1>

          <p className="case-studies-hero-text">
            Explore examples of how HamaraShops.ai uses technology,
            engineering and innovation to solve business challenges
            and create meaningful digital experiences.
          </p>

        </div>
      </section>


      {/* INTRO */}
      <section className="case-studies-intro">

        <div className="case-studies-container case-studies-intro-grid">

          <div>
            <p className="case-studies-section-label">
              OUR WORK
            </p>

            <h2>
              Technology that
              <br />
              creates impact.
            </h2>
          </div>

          <div>

            <p>
              Every project begins with a business challenge. We work
              closely with teams to understand their needs and design
              practical technology solutions around them.
            </p>

            <p>
              Our approach combines modern engineering, thoughtful
              design and scalable technology to create solutions that
              can evolve with the business.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURED CASE STUDY */}
      <section className="featured-case">

        <div className="case-studies-container">

          <div className="featured-case-grid">

            <div className="featured-case-number">
              01
            </div>

            <div className="featured-case-content">

              <p className="featured-case-label">
                FEATURED CASE STUDY
              </p>

              <h2>
                Smart E-Commerce
                <br />
                Platform
              </h2>

              <p>
                A modern digital commerce solution designed to connect
                customers, products and business operations through a
                simple and scalable platform.
              </p>

              <div className="featured-case-tags">
                <span>Retail</span>
                <span>React</span>
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


      {/* CASE STUDIES LIST */}
      <section className="case-studies-list">

        <div className="case-studies-container">

          <div className="case-studies-list-heading">

            <p className="case-studies-section-label">
              SELECTED PROJECTS
            </p>

            <h2>
              Solutions built
              <br />
              around real challenges.
            </h2>

          </div>


          <div className="case-study-grid">

            {caseStudies.map((study) => (
              <article
                className="case-study-card"
                key={study.number}
              >

                <div className="case-study-top">

                  <span className="case-study-number">
                    {study.number}
                  </span>

                  <span className="case-study-industry">
                    {study.industry}
                  </span>

                </div>

                <h3>
                  {study.title}
                </h3>

                <p className="case-study-description">
                  {study.description}
                </p>


                <div className="case-study-details">

                  <div>
                    <strong>Challenge</strong>

                    <p>
                      {study.challenge}
                    </p>
                  </div>


                  <div>
                    <strong>Solution</strong>

                    <p>
                      {study.solution}
                    </p>
                  </div>


                  <div>
                    <strong>Result</strong>

                    <p>
                      {study.result}
                    </p>
                  </div>

                </div>


                <div className="case-study-technologies">

                  {study.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="case-studies-stats">

        <div className="case-studies-container">

          <div className="case-stats-grid">

            <div>
              <strong>6+</strong>
              <span>Solution Areas</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Technology Skills</span>
            </div>

            <div>
              <strong>360°</strong>
              <span>Digital Solutions</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Purpose — Business Growth</span>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="case-studies-cta">

        <p className="case-studies-section-label">
          HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let's build
          <br />
          something impactful.
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