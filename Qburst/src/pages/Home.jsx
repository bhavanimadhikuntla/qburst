import { Link } from "react-router-dom";
import "./Home.css";

import heroTech from "../assets/images/hero-tec.png";
import digitalEngineering from "../assets/images/digital-engineering.png";
import cloudSolutions from "../assets/images/cloud-solutions.png";
import aiAutomation from "../assets/images/ai-automation.png";
import dataAnalytics from "../assets/images/data-analytics.png";

function Home() {
  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="home-hero">
        <div className="home-container">

          <div className="hero-content">

            {/* LEFT - TEXT */}
            <div className="hero-text-content">

              <p className="home-label">
                DIGITAL ENGINEERING • AI • CLOUD • DATA
              </p>

              <h1>
                Engineering digital
                <span>solutions for what's next.</span>
              </h1>

              <p className="home-hero-text">
                HamaraShops.ai helps businesses transform ideas into
                scalable digital products through modern engineering,
                cloud, AI and data.
              </p>

              <div className="home-hero-buttons">

                <Link
                  to="/services"
                  className="primary-button"
                >
                  Explore Our Services →
                </Link>

                <Link
                  to="/contact"
                  className="secondary-button"
                >
                  Talk to Us
                </Link>

              </div>

              {/* HERO HIGHLIGHTS */}
              <div className="hero-highlights">

                <div className="hero-highlight">
                  <strong>Digital</strong>
                  <span>Engineering</span>
                </div>

                <div className="hero-highlight">
                  <strong>AI</strong>
                  <span>Automation</span>
                </div>

                <div className="hero-highlight">
                  <strong>Cloud</strong>
                  <span>Modernization</span>
                </div>

              </div>

            </div>


            {/* RIGHT - IMAGE */}
            <div className="home-hero-image">

              <img
                src={heroTech}
                alt="HamaraShops.ai digital technology solutions"
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT / INTRODUCTION
      ===================================================== */}
      <section className="home-intro">

        <div className="home-container">

          <div className="intro-layout">

            {/* LEFT */}
            <div className="intro-heading">

              <p className="home-section-label">
                TECHNOLOGY THAT CREATES IMPACT
              </p>

              <h2>
                We combine technology,
                creativity and business thinking.
              </h2>

            </div>


            {/* RIGHT */}
            <div className="intro-content">

              <p>
                We work with organizations to build digital products,
                modernize technology platforms and automate business
                operations. Our approach combines engineering expertise
                with practical business understanding.
              </p>

              <Link to="/about">
                Discover HamaraShops.ai →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="home-services">

        <div className="home-container">

          <div className="section-heading">

            <div>

              <p className="home-section-label">
                WHAT WE DO
              </p>

              <h2>
                Capabilities built for
                <br />
                modern business.
              </h2>

            </div>

            <p className="home-section-text">
              From digital engineering to intelligent automation,
              we help organizations build, modernize and scale
              technology.
            </p>

          </div>


          <div className="home-service-grid">

            {/* SERVICE 01 */}
            <article className="service-card">

              <div className="service-image">
                <img
                  src={digitalEngineering}
                  alt="Digital Engineering"
                />
              </div>

              <div className="service-content">

                <span>01</span>

                <h3>
                  Digital Engineering
                </h3>

                <p>
                  Build scalable and secure digital applications
                  designed for modern customer experiences.
                </p>

                <Link to="/services">
                  Explore Service →
                </Link>

              </div>

            </article>


            {/* SERVICE 02 */}
            <article className="service-card">

              <div className="service-image">
                <img
                  src={cloudSolutions}
                  alt="Cloud Solutions"
                />
              </div>

              <div className="service-content">

                <span>02</span>

                <h3>
                  Cloud Solutions
                </h3>

                <p>
                  Modernize applications and infrastructure using
                  flexible cloud-native technologies.
                </p>

                <Link to="/services">
                  Explore Service →
                </Link>

              </div>

            </article>


            {/* SERVICE 03 */}
            <article className="service-card">

              <div className="service-image">
                <img
                  src={aiAutomation}
                  alt="AI and Automation"
                />
              </div>

              <div className="service-content">

                <span>03</span>

                <h3>
                  AI &amp; Automation
                </h3>

                <p>
                  Apply AI and intelligent automation to improve
                  productivity and business operations.
                </p>

                <Link to="/services">
                  Explore Service →
                </Link>

              </div>

            </article>


            {/* SERVICE 04 */}
            <article className="service-card">

              <div className="service-image">
                <img
                  src={dataAnalytics}
                  alt="Data and Analytics"
                />
              </div>

              <div className="service-content">

                <span>04</span>

                <h3>
                  Data &amp; Analytics
                </h3>

                <p>
                  Turn business data into actionable insights
                  that support smarter decisions.
                </p>

                <Link to="/services">
                  Explore Service →
                </Link>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}
      <section className="home-solutions">

        <div className="home-container">

          <div className="solutions-heading">

            <p className="home-section-label">
              OUR SOLUTIONS
            </p>

            <h2>
              Solving complex business
              <br />
              challenges with technology.
            </h2>

            <p>
              We help businesses modernize their technology,
              accelerate innovation and create better digital
              experiences.
            </p>

          </div>


          <div className="solutions-grid">

            {/* SOLUTION 01 */}
            <article className="solution-card">

              <span className="solution-number">
                01
              </span>

              <h3>
                Digital Transformation
              </h3>

              <p>
                Modernize business processes and create connected
                digital experiences.
              </p>

              <Link to="/solutions">
                Explore Solution →
              </Link>

            </article>


            {/* SOLUTION 02 */}
            <article className="solution-card">

              <span className="solution-number">
                02
              </span>

              <h3>
                Intelligent Automation
              </h3>

              <p>
                Use AI and automation to simplify operations and
                improve productivity.
              </p>

              <Link to="/solutions">
                Explore Solution →
              </Link>

            </article>


            {/* SOLUTION 03 */}
            <article className="solution-card">

              <span className="solution-number">
                03
              </span>

              <h3>
                Cloud Modernization
              </h3>

              <p>
                Move applications toward scalable and resilient
                cloud-native architectures.
              </p>

              <Link to="/solutions">
                Explore Solution →
              </Link>

            </article>


            {/* SOLUTION 04 */}
            <article className="solution-card">

              <span className="solution-number">
                04
              </span>

              <h3>
                Product Engineering
              </h3>

              <p>
                Design and develop reliable digital products that
                create measurable value.
              </p>

              <Link to="/solutions">
                Explore Solution →
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}
      <section className="home-industries">

        <div className="home-container">

          <div className="industries-layout">

            {/* LEFT - CONTENT */}
            <div className="industries-content">

              <p className="home-section-label">
                INDUSTRIES
              </p>

              <h2>
                Technology shaped
                <br />
                around your industry.
              </h2>

              <p className="industries-description">
                We combine technology expertise with industry
                understanding to create solutions that solve real
                business challenges.
              </p>


              <div className="industry-links">

                <div>
                  <span>01</span>
                  <strong>Retail &amp; E-Commerce</strong>
                  <b>↗</b>
                </div>

                <div>
                  <span>02</span>
                  <strong>Healthcare</strong>
                  <b>↗</b>
                </div>

                <div>
                  <span>03</span>
                  <strong>Financial Services</strong>
                  <b>↗</b>
                </div>

                <div>
                  <span>04</span>
                  <strong>Education</strong>
                  <b>↗</b>
                </div>

                <div>
                  <span>05</span>
                  <strong>Manufacturing</strong>
                  <b>↗</b>
                </div>

                <div>
                  <span>06</span>
                  <strong>Technology</strong>
                  <b>↗</b>
                </div>

              </div>

              <Link
                to="/industries"
                className="industry-button"
              >
                Explore Industries →
              </Link>

            </div>


            {/* RIGHT - IMAGE */}
            <div className="industries-image">

              <img
                src={heroTech}
                alt="Technology solutions across industries"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY HAMARASHOPS
      ===================================================== */}
      <section className="home-why">

        <div className="home-container">

          <div className="why-heading">

            <p className="home-section-label">
              WHY HAMARASHOPS.AI
            </p>

            <h2>
              Technology built around
              <br />
              real business outcomes.
            </h2>

          </div>


          <div className="why-grid">

            <article className="why-card">

              <span>01</span>

              <h3>
                Engineering Excellence
              </h3>

              <p>
                Strong engineering practices help us build reliable,
                maintainable and scalable solutions.
              </p>

            </article>


            <article className="why-card">

              <span>02</span>

              <h3>
                Business First
              </h3>

              <p>
                We focus on business objectives instead of technology
                for technology's sake.
              </p>

            </article>


            <article className="why-card">

              <span>03</span>

              <h3>
                Modern Technology
              </h3>

              <p>
                We use modern cloud, AI, data and software engineering
                practices.
              </p>

            </article>


            <article className="why-card">

              <span>04</span>

              <h3>
                Long-Term Partnership
              </h3>

              <p>
                We build technology relationships that evolve with
                your business.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED WORK
      ===================================================== */}
      <section className="featured-work">

        <div className="home-container">

          <div className="featured-work-header">

            <div>

              <p className="home-section-label">
                FEATURED WORK
              </p>

              <h2>
                Turning ideas into
                <br />
                digital experiences.
              </h2>

            </div>

            <Link to="/solutions">
              Explore Our Solutions →
            </Link>

          </div>


          {/* TEXT + IMAGE SIDE BY SIDE */}
          <div className="featured-work-content">

            {/* LEFT TEXT */}
            <div className="featured-work-text">

              <p className="featured-category">
                DIGITAL TRANSFORMATION
              </p>

              <h3>
                Building scalable digital platforms
                for growing businesses.
              </h3>

              <p>
                We help businesses transform their ideas into
                scalable digital platforms using modern
                engineering, cloud and AI technologies.
              </p>

              <div className="featured-technologies">

                <span>Digital Engineering</span>
                <span>Cloud</span>
                <span>AI</span>

              </div>

              <Link
                to="/contact"
                className="featured-link"
              >
                Start a Conversation →
              </Link>

            </div>


            {/* RIGHT IMAGE */}
            <div className="featured-work-image">

              <img
                src={heroTech}
                alt="Digital transformation project"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAREERS
      ===================================================== */}
      <section className="home-careers">

        <div className="careers-content">

          <p className="home-section-label">
            CAREERS AT HAMARASHOPS
          </p>

          <h2>
            Build what's next
            <br />
            with us.
          </h2>

          <p>
            Join a team creating practical technology solutions
            for businesses and people.
          </p>

          <Link to="/jobs">
            Explore Careers →
          </Link>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="home-cta">

        <p>
          LET&apos;S BUILD SOMETHING BETTER
        </p>

        <h2>
          Have a challenge?
          <br />
          Let&apos;s solve it together.
        </h2>

        <Link to="/contact">
          Let&apos;s Connect →
        </Link>

      </section>

    </div>
  );
}

export default Home;