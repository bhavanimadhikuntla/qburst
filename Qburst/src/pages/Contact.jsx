import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form:", formData);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-success">

        <div className="contact-success-box">

          <div className="contact-success-icon">
            ✓
          </div>

          <p className="contact-label">
            MESSAGE RECEIVED
          </p>

          <h1>
            Thanks for reaching out.
          </h1>

          <p>
            Your message has been received successfully.
            Our team will get back to you soon.
          </p>

          <Link to="/" className="contact-success-button">
            Back to Home →
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-container">

          <p className="contact-label">
            LET'S CONNECT
          </p>

          <h1>
            Let's build
            <span> something better.</span>
          </h1>

          <p className="contact-hero-text">
            Have an idea, a business challenge or a technology
            requirement? Tell us about it. Let's explore how
            HamaraShops.ai can help.
          </p>

        </div>

      </section>


      {/* CONTACT CONTENT */}

      <section className="contact-content">

        <div className="contact-container contact-grid">

          {/* LEFT SIDE */}

          <div className="contact-information">

            <p className="contact-small-label">
              GET IN TOUCH
            </p>

            <h2>
              Tell us what
              <br />
              you're thinking.
            </h2>

            <p className="contact-description">
              Whether you are looking to build a new digital
              product, modernize an existing application or
              explore AI and automation, we'd love to hear from
              you.
            </p>


            <div className="contact-details">

              <div className="contact-detail">

                <span className="contact-detail-number">
                  01
                </span>

                <div>
                  <strong>Email</strong>
                  <a href="mailto:hello@hamarashops.ai">
                    hello@hamarashops.ai
                  </a>
                </div>

              </div>


              <div className="contact-detail">

                <span className="contact-detail-number">
                  02
                </span>

                <div>
                  <strong>Phone</strong>
                  <a href="tel:+919876543210">
                    +91 98765 43210
                  </a>
                </div>

              </div>


              <div className="contact-detail">

                <span className="contact-detail-number">
                  03
                </span>

                <div>
                  <strong>Location</strong>
                  <span>
                    Hyderabad, India
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* FORM */}

          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label>
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="contact-form-group">

                  <label>
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />

                </div>


                <div className="contact-form-group">

                  <label>
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                  />

                </div>

              </div>


              <div className="contact-form-group">

                <label>
                  What can we help you with? *
                </label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select an option
                  </option>

                  <option value="Digital Engineering">
                    Digital Engineering
                  </option>

                  <option value="Cloud Solutions">
                    Cloud Solutions
                  </option>

                  <option value="AI & Automation">
                    AI & Automation
                  </option>

                  <option value="Data & Analytics">
                    Data & Analytics
                  </option>

                  <option value="Career">
                    Career Opportunity
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <div className="contact-form-group">

                <label>
                  Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, requirement or idea..."
                  rows="7"
                  required
                />

              </div>


              <div className="contact-submit">

                <p>
                  We respect your privacy and will only use
                  your information to respond to your enquiry.
                </p>

                <button type="submit">
                  Send Message →
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section className="contact-cta">

        <div>

          <p>
            HAMARASHOPS.AI
          </p>

          <h2>
            Technology that helps
            <br />
            businesses move forward.
          </h2>

        </div>

        <Link to="/services">
          Explore Our Services →
        </Link>

      </section>

    </div>
  );
}

export default Contact;