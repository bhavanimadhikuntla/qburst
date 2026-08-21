import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="hs-footer">

      <div className="hs-footer-container">

        {/* TOP */}
        <div className="hs-footer-top">

          <div className="hs-footer-brand">

            <Link to="/" className="hs-footer-logo">
              <span className="hs-footer-logo-icon">H</span>
              <span>
                HamaraShops<span>.ai</span>
              </span>
            </Link>

            <p>
              Technology that helps businesses move forward.
              We create practical digital solutions powered by
              modern technology.
            </p>

          </div>


          {/* COMPANY */}
          <div className="hs-footer-column">

            <h4>Company</h4>

            <Link to="/about">About Us</Link>

            <Link to="/services">Services</Link>

            <Link to="/industries">Industries</Link>

            <Link to="/contact">Contact</Link>

          </div>


          {/* SERVICES */}
          <div className="hs-footer-column">

            <h4>Services</h4>

            <Link to="/services">
              Digital Engineering
            </Link>

            <Link to="/services">
              Cloud Solutions
            </Link>

            <Link to="/services">
              AI & Automation
            </Link>

            <Link to="/services">
              Data & Analytics
            </Link>

          </div>


          {/* CAREERS */}
          <div className="hs-footer-column">

            <h4>Careers</h4>

            <Link to="/jobs">
              Explore Jobs
            </Link>

            <Link to="/jobs">
              Open Positions
            </Link>

            <Link to="/contact">
              Get in Touch
            </Link>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="hs-footer-bottom">

          <p>
            © {new Date().getFullYear()} HamaraShops.ai.
            All rights reserved.
          </p>

          <div className="hs-footer-bottom-links">

            <span>Privacy Policy</span>

            <span>Terms & Conditions</span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;