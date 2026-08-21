import { Link } from "react-router-dom";
import "./About.css";

import heroTech from "../assets/images/hero-tec.png";

function About() {
  return (
    <div className="about-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="about-hero">

        <div className="about-container about-hero-grid">

          <div className="about-hero-content">

            <p className="about-label">
              ABOUT HAMARASHOPS.AI
            </p>

            <h1>
              Technology with
              <span> purpose.</span>
            </h1>

            <p className="about-hero-text">
              We create digital solutions that connect technology,
              people and business goals to help organizations move
              forward.
            </p>

          </div>

          <div className="about-hero-image">

            <img
              src={heroTech}
              alt="HamaraShops.ai technology solutions"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
          ===================================================== */}

      <section className="about-introduction">

        <div className="about-container about-intro-grid">

          <div>

            <p className="about-small-label">
              WHO WE ARE
            </p>

            <h2>
              Building digital
              <br />
              experiences that matter.
            </h2>

          </div>

          <div className="about-intro-content">

            <p>
              HamaraShops.ai is a technology-focused digital
              solutions company helping businesses use modern
              technology to solve real-world challenges.
            </p>

            <p>
              From application development and cloud
              modernization to AI-powered automation and data
              solutions, we focus on creating practical,
              scalable and meaningful digital experiences.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
          ===================================================== */}

      <section className="about-stats">

        <div className="about-container about-stats-grid">

          <div className="about-stat">
            <strong>100+</strong>
            <span>Digital Initiatives</span>
          </div>

          <div className="about-stat">
            <strong>50+</strong>
            <span>Technology Skills</span>
          </div>

          <div className="about-stat">
            <strong>24/7</strong>
            <span>Digital Mindset</span>
          </div>

          <div className="about-stat">
            <strong>1</strong>
            <span>Purpose — Business Growth</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
          ===================================================== */}

      <section className="about-approach">

        <div className="about-container">

          <div className="about-section-heading">

            <p className="about-small-label">
              OUR APPROACH
            </p>

            <h2>
              Think. Build.
              <br />
              Transform.
            </h2>

          </div>


          <div className="about-approach-grid">

            <div className="about-approach-card">

              <span>01</span>

              <h3>
                Understand
              </h3>

              <p>
                We begin by understanding your business,
                customers, challenges and goals.
              </p>

            </div>


            <div className="about-approach-card">

              <span>02</span>

              <h3>
                Design
              </h3>

              <p>
                We design practical digital experiences
                around real user and business requirements.
              </p>

            </div>


            <div className="about-approach-card">

              <span>03</span>

              <h3>
                Build
              </h3>

              <p>
                We use modern technologies and engineering
                practices to build scalable solutions.
              </p>

            </div>


            <div className="about-approach-card">

              <span>04</span>

              <h3>
                Transform
              </h3>

              <p>
                We continuously improve solutions to create
                measurable and lasting business value.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
          ===================================================== */}

      <section className="about-capabilities">

        <div className="about-container">

          <div className="about-section-heading">

            <p className="about-small-label">
              OUR CAPABILITIES
            </p>

            <h2>
              Technology built
              <br />
              around your goals.
            </h2>

          </div>


          <div className="about-capabilities-list">

            <div className="about-capability">

              <span>01</span>

              <div>

                <h3>
                  Digital Engineering
                </h3>

                <p>
                  Modern applications, platforms and digital
                  products built for performance and scale.
                </p>

              </div>

              <strong>↗</strong>

            </div>


            <div className="about-capability">

              <span>02</span>

              <div>

                <h3>
                  Cloud Solutions
                </h3>

                <p>
                  Cloud-ready architectures and modernization
                  solutions for flexible digital operations.
                </p>

              </div>

              <strong>↗</strong>

            </div>


            <div className="about-capability">

              <span>03</span>

              <div>

                <h3>
                  AI & Automation
                </h3>

                <p>
                  Intelligent automation and AI solutions that
                  improve productivity and business processes.
                </p>

              </div>

              <strong>↗</strong>

            </div>


            <div className="about-capability">

              <span>04</span>

              <div>

                <h3>
                  Data & Analytics
                </h3>

                <p>
                  Data-driven solutions that help organizations
                  discover insights and make better decisions.
                </p>

              </div>

              <strong>↗</strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY US
          ===================================================== */}

      <section className="about-why">

        <div className="about-container about-why-grid">

          <div>

            <p className="about-small-label">
              WHY HAMARASHOPS.AI
            </p>

            <h2>
              Technology is
              <br />
              only valuable when
              <br />
              it creates impact.
            </h2>

          </div>


          <div className="about-why-list">

            <div>

              <span>01</span>

              <div>

                <h3>
                  Business First
                </h3>

                <p>
                  We connect technology decisions with real
                  business objectives.
                </p>

              </div>

            </div>


            <div>

              <span>02</span>

              <div>

                <h3>
                  Modern Technology
                </h3>

                <p>
                  We embrace modern technologies to create
                  reliable and future-ready solutions.
                </p>

              </div>

            </div>


            <div>

              <span>03</span>

              <div>

                <h3>
                  Practical Innovation
                </h3>

                <p>
                  We focus on innovation that solves problems
                  rather than technology for technology's sake.
                </p>

              </div>

            </div>


            <div>

              <span>04</span>

              <div>

                <h3>
                  Long-Term Thinking
                </h3>

                <p>
                  We build solutions with scalability,
                  maintainability and growth in mind.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="about-cta">

        <div className="about-container">

          <p>
            LET'S BUILD SOMETHING BETTER
          </p>

          <h2>
            Have a challenge?
            <br />
            Let's solve it together.
          </h2>

          <Link to="/contact">
            Let's Connect →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;