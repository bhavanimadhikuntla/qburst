import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="hs-navbar">
      <div className="hs-navbar-container">

        {/* Logo */}
        <Link to="/" className="hs-logo" onClick={closeMenu}>
          <span className="hs-logo-icon">H</span>

          <span className="hs-logo-text">
            HamaraShops<span>.ai</span>
          </span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hs-nav">

          <Link
            to="/"
            className={`hs-nav-link ${isActive("/")}`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`hs-nav-link ${isActive("/about")}`}
          >
            About
          </Link>

          <Link
            to="/services"
            className={`hs-nav-link ${isActive("/services")}`}
          >
            Services
          </Link>

          <Link
            to="/solutions"
            className={`hs-nav-link ${isActive("/solutions")}`}
          >
            Solutions
          </Link>

          <Link
            to="/case-studies"
            className={`hs-nav-link ${isActive("/case-studies")}`}
          >
            Case Studies
          </Link>

          <Link
            to="/industries"
            className={`hs-nav-link ${isActive("/industries")}`}
          >
            Industries
          </Link>

          <Link
            to="/jobs"
            className={`hs-nav-link ${isActive("/jobs")}`}
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className="hs-contact-button"
          >
            Contact Us
            <span>→</span>
          </Link>

        </nav>


        {/* Mobile Menu Button */}
        <button
          className={`hs-mobile-button ${
            menuOpen ? "open" : ""
          }`}
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* Mobile Navigation */}
      <nav
        className={`hs-mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >

        <Link
          to="/"
          className={isActive("/")}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={isActive("/about")}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          to="/services"
          className={isActive("/services")}
          onClick={closeMenu}
        >
          Services
        </Link>

        <Link
          to="/solutions"
          className={isActive("/solutions")}
          onClick={closeMenu}
        >
          Solutions
        </Link>

        <Link
          to="/case-studies"
          className={isActive("/case-studies")}
          onClick={closeMenu}
        >
          Case Studies
        </Link>

        <Link
          to="/industries"
          className={isActive("/industries")}
          onClick={closeMenu}
        >
          Industries
        </Link>

        <Link
          to="/jobs"
          className={isActive("/jobs")}
          onClick={closeMenu}
        >
          Careers
        </Link>

        <Link
          to="/contact"
          className="hs-mobile-contact"
          onClick={closeMenu}
        >
          Contact Us
          <span>→</span>
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;