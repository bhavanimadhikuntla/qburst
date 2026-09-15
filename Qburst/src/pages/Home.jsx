import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* =====================================================
          HAMARASHOPS.COM INFORMATION
      ===================================================== */}

      <section className="company-information">
        <div className="home-container">

          {/* =====================================================
              COMPANY HEADER
          ===================================================== */}

          <div className="company-header">

            {/* TEXT LOGO */}
            <div className="company-logo">

              <div className="company-logo-circle">
                H
              </div>

              <div className="company-logo-content">

                <div className="company-logo-name">
                  HAMARA<span>SHOPS</span>
                </div>

                <div className="company-logo-tagline">
                  THINKING THE WAY FORWARD.
                </div>

              </div>

            </div>

            {/* DOMAIN */}
            <div className="company-domain">
              Hamarashops.com
            </div>

          </div>


          {/* =====================================================
              TECHNOLOGY CENTRE
          ===================================================== */}

          <div className="technology-centre">
            Hamarashops Technology Centre
          </div>


          {/* =====================================================
              HAMARASHOPS.AI MAIN TAGLINE
          ===================================================== */}

          <div className="ai-main-tagline">

            <h1>
              HamaraShops.ai
            </h1>

            <p>
              An AI-Powered Application Driving Innovation
              in the Race of AI
            </p>

          </div>


          {/* =====================================================
              BHAVANI PROFILE + LINKEDIN
          ===================================================== */}

          <div className="home-profile">

            <img
              src="/bhavani.jpeg"
              alt="Bhavani"
              className="home-profile-image"
            />

            <div className="home-profile-info">

              <h4>
                Bhavani
              </h4>

              <a
                href="https://www.linkedin.com/in/madhikuntla-bhavani-7943ab1b0"
                target="_blank"
                rel="noopener noreferrer"
                className="home-linkedin"
              >

                <span className="home-linkedin-icon">
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


          {/* =====================================================
              SUPPORTED INFORMATION
          ===================================================== */}

          <div className="company-supported">

            {/* SUPPORTED COUNTRIES */}
            <div className="supported-item">

              <span className="supported-icon">
                🌐
              </span>

              <div>

                <strong>
                  Supported countries:
                </strong>

                <span>
                  {" "}United Kingdom, India,
                </span>

                <br />

                <span>
                  United States
                </span>

              </div>

            </div>


            {/* SUPPORTED LANGUAGES */}
            <div className="supported-item">

              <span className="supported-icon">
                ▣
              </span>

              <div>

                <strong>
                  Supported languages:
                </strong>

                <span>
                  {" "}English
                </span>

              </div>

            </div>

          </div>


          {/* =====================================================
              ABOUT HAMARASHOPS
          ===================================================== */}

          <div className="company-about">

            <h2>
              About Hamarashops.com
            </h2>

            <p>
              Hamarashops.ai is a leading global IT solutions
              organisation, enabling its clients to transform at the
              intersection of unparalleled domain expertise and
              emerging technologies to achieve real-world business
              impact. A focus on very select industries, a detailed
              understanding of the underlying processes of those
              industries and partnerships with leading platforms
              provide us a distinct vantage.
            </p>

            <p>
              We leverage AI, Cloud and insight-driven technologies,
              allied with our industry expertise, to transform client
              businesses into intelligent, high-growth enterprises.
              Today our proprietary platforms power critical business
              processes across the Insurance, Financial Services and
              Travel industries. Our skill-certified technology and
              process consultants engineer, design, consult, operate,
              and modernise systems across the world.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          AI PRODUCTS
      ===================================================== */}

      <section id="ai-products" className="ai-products">

        <div className="home-container">

          <div className="ai-products-content">

            <h2>
              AI Products
            </h2>

            <p>
              Empowering global businesses with HamaraShops.ai.
              We design and deliver production-ready AI products
              that automate complexity and unlock hidden growth.
            </p>

            <a
              href="#ai-products"
              className="ai-products-button"
            >
              View All Products
            </a>


            {/* TRUSTED AI */}
            <div className="trusted-ai">

              <h3>
                Trusted by AI Research Teams
              </h3>

              <div className="ai-companies">

                <span>
                  OpenAI
                </span>

                <span>
                  Google AI
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATIONS
      ===================================================== */}

      <section className="company-locations">

        <div className="home-container">

          <h2 className="locations-title">
            Locations
          </h2>


          <div className="locations-grid">

            {/* =================================================
                UNITED STATES
            ================================================= */}

            <article className="location-card">

              <div className="location-heading">

                <div className="location-name">

                  <span className="location-pin">
                    ♧
                  </span>

                  <h3>
                    United States
                  </h3>

                </div>

                <span className="headquarters">
                  HEADQUARTERS
                </span>

              </div>


              <p className="location-address">
                Hamarashops.ai, 2611 Ross Ave, Dallas,
                TX, 75201, United States
              </p>


              <div className="location-contact">

                <a href="tel:+16269224456">
                  +1 626 922 4456
                </a>

                <a href="mailto:info@hamarashops.ai">
                  info@hamarashops.ai
                </a>

                <a href="/ai-products">
                  https://hamarashops.ai
                </a>

              </div>

            </article>


            {/* =================================================
                INDIA
            ================================================= */}

            <article className="location-card">

              <div className="location-heading">

                <div className="location-name">

                  <span className="location-pin">
                    ♧
                  </span>

                  <h3>
                    India
                  </h3>

                </div>

              </div>


              <p className="location-address">
                Hyderabad, Telangana,
                500091, India
              </p>


              <div className="location-contact">

                <a href="tel:+918639551911">
                  +91 86395 51911
                </a>

                <a href="mailto:info@hamarashops.ai">
                  info@hamarashops.ai
                </a>

                <a href="/ai-products">
                  https://hamarashops.ai
                </a>

              </div>

            </article>


            {/* =================================================
                UNITED KINGDOM
            ================================================= */}

            <article className="location-card">

              <div className="location-heading">

                <div className="location-name">

                  <span className="location-pin">
                    ♧
                  </span>

                  <h3>
                    United Kingdom
                  </h3>

                </div>

              </div>


              <p className="location-address">
                85 Harberton Road,
                London, N19 3JT,
                United Kingdom
              </p>


              <div className="location-contact">

                <a href="tel:+918639551911">
                  +91 86395 51911
                </a>

                <a href="mailto:info@hamarashops.ai">
                  info@hamarashops.ai
                </a>

                <a href="/ai-products">
                  https://hamarashops.ai
                </a>

              </div>

            </article>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;