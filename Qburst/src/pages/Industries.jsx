import { Link } from "react-router-dom";
import "./Industries.css";

import heroTech from "../assets/images/hero-tec.png";
import digitalEngineering from "../assets/images/digital-engineering.png";
import cloudSolutions from "../assets/images/cloud-solutions.png";
import aiAutomation from "../assets/images/ai-automation.png";
import dataAnalytics from "../assets/images/data-analytics.png";

const industries = [
  {
    number: "01",
    title: "Retail & E-Commerce",
    image: digitalEngineering,
    description:
      "Create connected digital shopping experiences, modern commerce platforms and smarter retail operations.",
    capabilities: [
      "Digital Commerce",
      "Customer Experience",
      "Inventory Solutions",
      "Business Automation",
    ],
  },
  {
    number: "02",
    title: "Healthcare",
    image: dataAnalytics,
    description:
      "Build secure and accessible digital solutions that improve healthcare experiences and operational efficiency.",
    capabilities: [
      "Healthcare Platforms",
      "Digital Applications",
      "Data Management",
      "Workflow Automation",
    ],
  },
  {
    number: "03",
    title: "Financial Services",
    image: cloudSolutions,
    description:
      "Develop secure technology solutions that support financial operations, customer experiences and digital transformation.",
    capabilities: [
      "Digital Banking",
      "Financial Platforms",
      "Data Analytics",
      "Process Automation",
    ],
  },
  {
    number: "04",
    title: "Education",
    image: aiAutomation,
    description:
      "Enable better learning and administration experiences through modern digital platforms and technology.",
    capabilities: [
      "Learning Platforms",
      "Student Applications",
      "Digital Content",
      "Management Systems",
    ],
  },
  {
    number: "05",
    title: "Manufacturing",
    image: heroTech,
    description:
      "Connect people, processes and data to improve manufacturing operations and business visibility.",
    capabilities: [
      "Process Digitization",
      "Operational Analytics",
      "Automation",
      "Supply Chain",
    ],
  },
  {
    number: "06",
    title: "Technology",
    image: digitalEngineering,
    description:
      "Help technology organizations build scalable products, modern platforms and better digital experiences.",
    capabilities: [
      "Product Engineering",
      "Cloud Applications",
      "Platform Development",
      "AI Solutions",
    ],
  },
];

function Industries() {
  return (
    <div className="industries-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="industries-hero">

        <div className="industries-container industries-hero-grid">

          <div className="industries-hero-content">

            <p className="industries-label">
              INDUSTRIES
            </p>

            <h1>
              Technology shaped
              <span>around your industry.</span>
            </h1>

            <p className="industries-hero-text">
              We understand that every industry has unique challenges.
              Our technology solutions are designed around the needs,
              processes and goals of each business.
            </p>

          </div>

          <div className="industries-hero-image">

            <img
              src={heroTech}
              alt="Technology solutions for different industries"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
          ===================================================== */}

      <section className="industries-intro">

        <div className="industries-container industries-intro-grid">

          <div>

            <p className="industries-section-label">
              INDUSTRY EXPERTISE
            </p>

            <h2>
              Different industries.
              <br />
              One technology mindset.
            </h2>

          </div>

          <div>

            <p>
              Technology creates the greatest impact when it understands
              the business behind it. We combine technical expertise with
              industry understanding to create solutions that are practical,
              scalable and useful.
            </p>

            <p>
              Whether you are modernizing an existing platform or building
              something completely new, our approach starts with understanding
              your business.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES LIST
          ===================================================== */}

      <section className="industries-list">

        <div className="industries-container">

          {industries.map((industry) => (

            <article
              className="industry-card"
              key={industry.number}
            >

              {/* NUMBER */}

              <div className="industry-number">
                {industry.number}
              </div>


              {/* IMAGE */}

              <div className="industry-image">

                <img
                  src={industry.image}
                  alt={industry.title}
                />

              </div>


              {/* CONTENT */}

              <div className="industry-content">

                <h2>
                  {industry.title}
                </h2>

                <p className="industry-description">
                  {industry.description}
                </p>


                {/* CAPABILITIES */}

                <div className="industry-capabilities">

                  {industry.capabilities.map((capability) => (

                    <span key={capability}>
                      {capability}
                    </span>

                  ))}

                </div>

              </div>


              {/* ARROW */}

              <div className="industry-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY HAMARASHOPS
          ===================================================== */}

      <section className="industries-why">

        <div className="industries-container">

          <div className="industries-why-heading">

            <div>

              <p className="industries-section-label">
                WHY HAMARASHOPS.AI
              </p>

              <h2>
                Business first.
                <br />
                Technology second.
              </h2>

            </div>

            <p>
              We don't start with technology. We start by understanding
              the business problem and then select the right technology
              to solve it.
            </p>

          </div>


          {/* WHY POINTS */}

          <div className="industries-points">

            <div>

              <span>01</span>

              <h3>
                Understand
              </h3>

              <p>
                We understand your business objectives, users and challenges.
              </p>

            </div>


            <div>

              <span>02</span>

              <h3>
                Design
              </h3>

              <p>
                We design solutions around real-world business requirements.
              </p>

            </div>


            <div>

              <span>03</span>

              <h3>
                Build
              </h3>

              <p>
                We develop scalable and maintainable digital solutions.
              </p>

            </div>


            <div>

              <span>04</span>

              <h3>
                Improve
              </h3>

              <p>
                We continuously improve the solution as your business grows.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
          ===================================================== */}

      <section className="industries-stats">

        <div className="industries-container">

          <div className="stats-grid">

            <div>

              <strong>
                6+
              </strong>

              <span>
                Industry Areas
              </span>

            </div>


            <div>

              <strong>
                24/7
              </strong>

              <span>
                Digital Mindset
              </span>

            </div>


            <div>

              <strong>
                360°
              </strong>

              <span>
                Technology Solutions
              </span>

            </div>


            <div>

              <strong>
                1
              </strong>

              <span>
                Purpose — Business Growth
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="industries-cta">

        <p className="industries-section-label">
          HAVE A BUSINESS CHALLENGE?
        </p>

        <h2>
          Let's find the
          <br />
          right solution.
        </h2>

        <Link
          to="/contact"
          className="industries-cta-button"
        >
          Let's Connect →
        </Link>

      </section>

    </div>
  );
}

export default Industries;