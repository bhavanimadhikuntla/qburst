import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const linkedinUrl =
    "https://www.linkedin.com/in/madhikuntla-bhavani-7943ab1b0";

  const youtubeUrl =
    "https://www.youtube.com/embed/StfCYk5l2kI?autoplay=1&rel=0";

  return (
    <div className="about-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="about-ai-hero">

        <div className="about-ai-container">

          <div className="about-ai-hero-content">

            {/* ABOUT AI LABEL */}

            <div className="about-ai-label-wrap">

              <span className="about-ai-label-line"></span>

              <p className="about-ai-label">
                ABOUT AI
              </p>

            </div>


            {/* HERO TITLE */}

            <h1>
              About AI
              <br />
              <span>Excellence</span>
            </h1>


            {/* HERO DESCRIPTION */}

            <p className="about-ai-hero-text">
              At HamaraShops.ai, we believe that artificial
              intelligence is the ultimate tool for human
              advancement. Our mission is to democratize
              complex AI technologies, making them accessible
              and actionable for businesses of all sizes.
            </p>


            {/* =================================================
                HAMARASHOPS.AI TAGLINE
            ================================================= */}

            <div className="about-ai-main-tagline">

              <h2>
                HamaraShops.ai
              </h2>

              <p>
                An AI-Powered Application Driving Innovation
                in the Race of AI
              </p>

            </div>


            {/* HERO BUTTONS */}

            <div className="about-ai-hero-actions">

              <Link
                to="/contact"
                className="about-ai-primary-btn"
              >
                Let's Connect
                <span>→</span>
              </Link>


              <Link
                to="/services"
                className="about-ai-secondary-btn"
              >
                Explore Services
              </Link>

            </div>

          </div>


          {/* =================================================
              ABSTRACT AI VISUAL
          ================================================= */}

          <div className="about-ai-hero-visual">

            <div className="ai-orbit ai-orbit-one"></div>

            <div className="ai-orbit ai-orbit-two"></div>

            <div className="ai-orbit ai-orbit-three"></div>


            <div className="ai-core">
              <span>AI</span>
            </div>


            <div className="ai-node ai-node-one">
              01
            </div>


            <div className="ai-node ai-node-two">
              AI
            </div>


            <div className="ai-node ai-node-three">
              ML
            </div>


            <div className="ai-node ai-node-four">
              ∞
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPANY VIDEO SECTION
      ===================================================== */}

      <section className="about-ai-video-section">

        <div className="about-ai-container">

          <div className="about-ai-video-header">

            <p className="about-ai-small-label">
              DISCOVER HAMARASHOPS.AI
            </p>


            <h2>
              Watch our journey
              <br />
              <span>in action.</span>
            </h2>


            <p>
              Explore our vision, technology and approach
              through our company video.
            </p>


            {/* =================================================
                YOUTUBE VIDEO
            ================================================= */}

            <div
              className="about-ai-video-wrapper"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "900px",
                margin: "30px auto 0",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >

              <iframe
                src={youtubeUrl}
                title="HamaraShops.ai Company Video"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  display: "block",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="about-ai-cta">

        <div className="about-ai-container">

          <div className="about-ai-cta-content">

            <p className="about-ai-small-label">
              BUILD THE FUTURE WITH AI
            </p>


            <h2>
              Unlock the potential
              <br />
              of intelligent
              <br />
              <span>AI products.</span>
            </h2>


            <p className="about-ai-cta-text">
              Partner with HamaraShops.ai to build a smarter,
              more automated future today.
            </p>


            <Link
              to="/contact"
              className="about-ai-cta-button"
            >
              Let's Connect
              <span>→</span>
            </Link>

          </div>


          {/* CTA PATTERN */}

          <div className="about-ai-cta-pattern">

            <div className="cta-circle cta-circle-one"></div>

            <div className="cta-circle cta-circle-two"></div>

            <div className="cta-circle cta-circle-three"></div>

            <span>
              AI
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="about-ai-footer">

        <div className="about-ai-container">

          <div className="about-ai-footer-grid">


            {/* =================================================
                BRAND + PROFILE
            ================================================= */}

            <div className="about-ai-footer-brand">


              {/* BRAND LOGO */}

              <Link
                to="/"
                className="about-ai-footer-logo"
              >
                HamaraShops.ai
              </Link>


              {/* BRAND DESCRIPTION */}

              <p>
                HamaraShops.ai is at the forefront of AI
                innovation, delivering products that leverage
                machine learning and cognitive computing to
                solve complex business challenges.
              </p>


              {/* CONTACT */}

              <Link
                to="/contact"
                className="footer-contact-link"
              >
                Start a conversation →
              </Link>


              {/* =================================================
                  PROFILE
              ================================================= */}

              <div className="about-ai-profile">


                <img
                  src="/bhavani.jpeg"
                  alt="Bhavani"
                  className="about-ai-profile-image"
                />


                <div className="about-ai-profile-info">

                  <h4>
                    Bhavani
                  </h4>


                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >

                    <span className="linkedin-icon">
                      in
                    </span>

                    <span>
                      View LinkedIn Profile
                    </span>

                    <span>
                      ↗
                    </span>

                  </a>

                </div>

              </div>

            </div>


            {/* =================================================
                RESOURCES
            ================================================= */}

            <div className="about-ai-footer-column">

              <h4>
                Resources
              </h4>


              <Link to="/about">
                About AI
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


              <Link to="/ethics">
                AI Ethics Policy
              </Link>

            </div>


            {/* =================================================
                PRODUCT LINE
            ================================================= */}

            <div className="about-ai-footer-column">

              <h4>
                Product Line
              </h4>


              <Link to="/product/cognitive-automation">
                Cognitive Automation
              </Link>


              <Link to="/product/data-intelligence">
                Data Intelligence
              </Link>


              <Link to="/product/defensive-ai">
                Defensive AI
              </Link>


              <Link to="/product/mlops-hub">
                MLOps Platform
              </Link>


              <Link to="/product/nlp-engines">
                NLP Engine
              </Link>


              <Link to="/product/vision-ai">
                Vision AI
              </Link>

            </div>


            {/* =================================================
                COMPANY
            ================================================= */}

            <div className="about-ai-footer-column">

              <h4>
                Company
              </h4>


              <Link to="/about">
                About Us
              </Link>


              <Link to="/services">
                Services
              </Link>


              <Link to="/solutions">
                Solutions
              </Link>


              <Link to="/careers">
                Careers
              </Link>


              <Link to="/contact">
                Contact Us
              </Link>

            </div>

          </div>


          {/* =================================================
              FOOTER BOTTOM
          ================================================= */}

          <div className="about-ai-footer-bottom">

            <span>
              © 2026 HamaraShops.ai. All Rights Reserved.
            </span>


            <div>

              <Link to="/privacy">
                Privacy Policy
              </Link>


              <Link to="/sales-terms">
                Sales Terms
              </Link>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default About;