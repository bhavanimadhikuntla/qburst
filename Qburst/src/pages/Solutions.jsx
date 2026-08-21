import { Link } from "react-router-dom";
import "./Solutions.css";

import heroTech from "../assets/images/hero-tec.png";
import digitalEngineering from "../assets/images/digital-engineering.png";
import cloudSolutions from "../assets/images/cloud-solutions.png";
import aiAutomation from "../assets/images/ai-automation.png";
import dataAnalytics from "../assets/images/data-analytics.png";

const solutions = [
  {
    number: "01",
    title: "Digital Experience",
    image: digitalEngineering,
    description:
      "Create engaging digital experiences that connect businesses with their customers across modern channels.",
    capabilities: [
      "Web Applications",
      "Customer Portals",
      "Digital Interfaces",
      "Experience Design",
    ],
  },
  {
    number: "02",
    title: "Product Engineering",
    image: digitalEngineering,
    description:
      "Build scalable and reliable digital products from concept to development and continuous improvement.",
    capabilities: [
      "Product Development",
      "Application Engineering",
      "API Development",
      "Product Modernization",
    ],
  },
  {
    number: "03",
    title: "Intelligent Enterprise",
    image: aiAutomation,
    description:
      "Use automation, AI and connected systems to create smarter and more efficient business operations.",
    capabilities: [
      "AI Solutions",
      "Business Automation",
      "Intelligent Workflows",
      "Digital Platforms",
    ],
  },
  {
    number: "04",
    title: "Cloud Modernization",
    image: cloudSolutions,
    description:
      "Modernize applications and infrastructure with flexible, scalable and cloud-ready architectures.",
    capabilities: [
      "Cloud Migration",
      "Cloud Applications",
      "Microservices",
      "DevOps",
    ],
  },
  {
    number: "05",
    title: "Data & Analytics",
    image: dataAnalytics,
    description:
      "Turn business data into useful insights that help organizations make faster and better decisions.",
    capabilities: [
      "Data Analytics",
      "Business Intelligence",
      "Dashboards",
      "Reporting",
    ],
  },
  {
    number: "06",
    title: "AI & Automation",
    image: aiAutomation,
    description:
      "Apply artificial intelligence and automation to improve productivity and transform business processes.",
    capabilities: [
      "Generative AI",
      "Machine Learning",
      "Process Automation",
      "AI Assistants",
    ],
  },
];

function Solutions() {
  return (
    <div className="solutions-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="solutions-hero">

        <div className="solutions-container">

          <div className="solutions-hero-grid">

            <div className="solutions-hero-content">

              <p className="solutions-label">
                OUR SOLUTIONS
              </p>

              <h1>
                Technology solutions
                <span> built for real business.</span>
              </h1>

              <p className="solutions-hero-text">
                We combine technology, engineering and business
                understanding to create solutions that help
                organizations transform, innovate and grow.
              </p>

              <Link
                to="/contact"
                className="solutions-hero-button"
              >
                Start a Conversation →
              </Link>

            </div>


            {/* HERO IMAGE */}

            <div className="solutions-hero-image">

              <img
                src={heroTech}
                alt="HamaraShops.ai digital technology solutions"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="solutions-intro">

        <div className="solutions-container solutions-intro-grid">

          <div>

            <p className="solutions-section-label">
              SOLUTION AREAS
            </p>

            <h2>
              From technology
              <br />
              to business impact.
            </h2>

          </div>

          <div>

            <p>
              Modern businesses need technology that does more than
              simply work. It needs to solve real problems, support
              customers and create measurable value.
            </p>

            <p>
              Our solutions bring together engineering, cloud,
              artificial intelligence and data capabilities to address
              complex business challenges.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="solutions-list">

        <div className="solutions-container">

          {solutions.map((solution) => (

            <article
              className="solution-card"
              key={solution.number}
            >

              {/* IMAGE */}

              <div className="solution-image">

                <img
                  src={solution.image}
                  alt={solution.title}
                />

              </div>


              {/* NUMBER */}

              <div className="solution-number">
                {solution.number}
              </div>


              {/* CONTENT */}

              <div className="solution-content">

                <h2>
                  {solution.title}
                </h2>

                <p className="solution-description">
                  {solution.description}
                </p>

                <div className="solution-capabilities">

                  {solution.capabilities.map((capability) => (

                    <span key={capability}>
                      {capability}
                    </span>

                  ))}

                </div>

              </div>


              {/* ARROW */}

              <div className="solution-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="solutions-technology">

        <div className="solutions-container solutions-technology-grid">

          <div>

            <p className="solutions-section-label">
              TECHNOLOGY FOUNDATION
            </p>

            <h2>
              Built on modern
              <br />
              technology.
            </h2>

          </div>


          <div>

            <p className="solutions-technology-text">
              We use proven technologies and modern engineering
              practices to create secure, scalable and maintainable
              solutions.
            </p>


            <div className="solutions-tech-list">

              <span>React</span>

              <span>Java</span>

              <span>Spring Boot</span>

              <span>REST APIs</span>

              <span>MySQL</span>

              <span>Cloud</span>

              <span>AI</span>

              <span>DevOps</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="solutions-cta">

        <p className="solutions-section-label">
          HAVE A BUSINESS CHALLENGE?
        </p>

        <h2>
          Let's create
          <br />
          what's next.
        </h2>

        <Link
          to="/contact"
          className="solutions-cta-button"
        >
          Talk to Us →
        </Link>

      </section>

    </div>
  );
}

export default Solutions;