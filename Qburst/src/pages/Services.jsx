import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Digital Engineering",
    short:
      "Design and develop scalable digital applications that solve real business challenges.",
    details:
      "We build modern applications using reliable engineering practices, intuitive user experiences and scalable architectures.",
    technologies: ["React", "Java", "Spring Boot", "REST APIs"],
  },
  {
    number: "02",
    title: "Cloud Solutions",
    short:
      "Modernize applications and infrastructure with flexible cloud technologies.",
    details:
      "We help businesses move toward cloud-native architectures that improve scalability, reliability and operational efficiency.",
    technologies: ["Cloud", "Microservices", "DevOps", "Deployment"],
  },
  {
    number: "03",
    title: "AI & Automation",
    short:
      "Use artificial intelligence and automation to improve productivity.",
    details:
      "We integrate intelligent technologies into business workflows to reduce repetitive tasks and create smarter digital experiences.",
    technologies: ["AI", "Automation", "Machine Learning", "Chatbots"],
  },
  {
    number: "04",
    title: "Data & Analytics",
    short:
      "Transform business data into meaningful insights and better decisions.",
    details:
      "We help organizations organize, analyze and visualize their data so teams can make informed business decisions.",
    technologies: ["Analytics", "Data", "Dashboards", "Reporting"],
  },
];

function Services() {
  return (
    <div className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">
        <div className="services-container">

          <div className="services-hero-content">

            <p className="services-label">
              OUR SERVICES
            </p>

            <h1>
              Technology
              <br />
              <span>built around your goals.</span>
            </h1>

            <p className="services-hero-text">
              We combine engineering, cloud, AI and data
              capabilities to create digital solutions that
              help organizations move forward.
            </p>

            <Link
              to="/contact"
              className="services-hero-button"
            >
              Start a Conversation
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="services-intro">

        <div className="services-container services-intro-grid">

          <div>

            <p className="services-section-label">
              WHAT WE OFFER
            </p>

            <h2>
              From idea
              <br />
              to impact.
            </h2>

          </div>

          <div className="services-intro-text">

            <p>
              Every business has different challenges. Our
              services are designed to provide the technology
              expertise required to turn those challenges into
              practical digital solutions.
            </p>

            <p>
              We focus on quality engineering, modern
              technologies and solutions that can grow with
              your organization.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-list">

        <div className="services-container">

          <div className="services-list-heading">

            <p className="services-section-label">
              OUR CAPABILITIES
            </p>

            <h2>
              Technology that
              <br />
              creates impact.
            </h2>

          </div>


          <div className="service-details-grid">

            {services.map((service) => (

              <article
                className="service-detail-card"
                key={service.number}
              >

                <div className="service-detail-content">

                  <div className="service-card-top">

                    <span className="service-detail-number">
                      {service.number}
                    </span>

                    <span className="service-card-arrow">
                      ↗
                    </span>

                  </div>

                  <h2>
                    {service.title}
                  </h2>

                  <p className="service-short">
                    {service.short}
                  </p>

                  <p className="service-details">
                    {service.details}
                  </p>

                  <div className="service-tech-list">

                    {service.technologies.map((technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    ))}

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

      <section className="services-approach">

        <div className="services-container">

          <div className="services-approach-heading">

            <div>

              <p className="services-section-label">
                OUR APPROACH
              </p>

              <h2>
                Simple process.
                <br />
                Meaningful results.
              </h2>

            </div>

            <p>
              We follow a structured approach that keeps
              technology aligned with business objectives
              from the beginning to the final delivery.
            </p>

          </div>


          <div className="approach-grid">

            <div className="approach-card">
              <span>01</span>

              <h3>
                Discover
              </h3>

              <p>
                Understand the business problem, users and
                objectives.
              </p>
            </div>


            <div className="approach-card">
              <span>02</span>

              <h3>
                Design
              </h3>

              <p>
                Create a practical solution and experience
                around those needs.
              </p>
            </div>


            <div className="approach-card">
              <span>03</span>

              <h3>
                Develop
              </h3>

              <p>
                Build secure, scalable and maintainable
                technology solutions.
              </p>
            </div>


            <div className="approach-card">
              <span>04</span>

              <h3>
                Deliver
              </h3>

              <p>
                Launch, improve and continuously evolve
                the solution.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="services-technology">

        <div className="services-container services-technology-grid">

          <div>

            <p className="services-section-label">
              TECHNOLOGY
            </p>

            <h2>
              Built with
              <br />
              modern technology.
            </h2>

          </div>

          <div className="technology-content">

            <p>
              Our engineering approach combines proven
              technologies with modern development practices
              to create reliable digital products.
            </p>

            <div className="technology-cloud">

              <span>React</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
              <span>MySQL</span>
              <span>Cloud</span>
              <span>AI</span>
              <span>Git</span>
              <span>DevOps</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-cta">

        <p className="services-section-label">
          START YOUR DIGITAL JOURNEY
        </p>

        <h2>
          Let's build
          <br />
          what's next.
        </h2>

        <Link
          to="/contact"
          className="services-cta-button"
        >
          Talk to Us
          <span>→</span>
        </Link>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="services-footer">

        <div className="services-container">

          <div className="services-footer-grid">

            <div className="services-footer-brand">

              <Link
                to="/"
                className="services-footer-logo"
              >
                HamaraShops.ai
              </Link>

              <p>
                Delivering modern technology solutions
                through engineering, cloud, AI and data.
              </p>

            </div>


            <div className="services-footer-column">

              <h4>
                Resources
              </h4>

              <Link to="/about">
                About AI
              </Link>

              <Link to="/services">
                Services
              </Link>

              <Link to="/integrations">
                Integrations
              </Link>

              <Link to="/case-studies">
                Case Studies
              </Link>

              <Link to="/api-docs">
                API Docs
              </Link>

            </div>


            <div className="services-footer-column">

              <h4>
                Solutions
              </h4>

              <Link to="/solutions">
                Solutions
              </Link>

              <Link to="/industries">
                Industries
              </Link>

              <Link to="/product/cognitive-automation">
                Cognitive Automation
              </Link>

              <Link to="/product/data-intelligence">
                Data Intelligence
              </Link>

              <Link to="/product/vision-ai">
                Vision AI
              </Link>

            </div>


            <div className="services-footer-column">

              <h4>
                Company
              </h4>

              <Link to="/about">
                About Us
              </Link>

              <Link to="/careers">
                Careers
              </Link>

              <Link to="/contact">
                Contact Us
              </Link>

              <Link to="/privacy">
                Privacy Policy
              </Link>

              <Link to="/sales-terms">
                Sales Terms
              </Link>

            </div>

          </div>


          <div className="services-footer-bottom">

            <span>
              © 2026 HamaraShops.ai. All Rights Reserved.
            </span>

            <span>
              Technology. Intelligence. Impact.
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Services;