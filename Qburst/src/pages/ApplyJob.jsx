import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ApplyJob.css";
import ApiService from "../services/ApiService";
const jobTitles = {
  1: "Java Backend Developer",
  2: "React Frontend Developer",
  3: "Full Stack Developer",
  4: "AI / Machine Learning Engineer",
  5: "Cloud / DevOps Engineer",
};

function ApplyJob() {
  const { id } = useParams();

  const jobTitle = jobTitles[id] || "Job Position";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    qualification: "",
    experience: "",
    skills: "",
    city: "",
    coverLetter: "",
    resume: null,
  });

  useEffect(() => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    return;
  }

  const savedUser = localStorage.getItem("user");

  if (savedUser) {
    try {
      const user = JSON.parse(savedUser);

      setFormData((previous) => ({
        ...previous,

        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        mobile: user.mobileNumber || user.mobile || "",
      }));
    } catch (error) {
      console.error("Unable to load candidate information:", error);
    }
  }
}, []);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: files ? files[0] : value,
    }));
  };

 const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await ApiService.applyForJob(id, formData);

    console.log("Application submitted successfully:", response);

    setSubmitted(true);

  } catch (error) {
    console.error("Application submission failed:", error);

    if (error.response) {
      console.error("Backend response:", error.response.data);
    }

    alert("Failed to submit application. Please try again.");
  }
};
  if (submitted) {
    return (
      <div className="application-success">

        <div className="success-box">

          <div className="success-icon">
            ✓
          </div>

          <p className="apply-label">
            APPLICATION RECEIVED
          </p>

          <h1>
            Thank you for applying.
          </h1>

          <p>
            Your application for{" "}
            <strong>{jobTitle}</strong>{" "}
            has been submitted successfully.
          </p>

          <p>
            Our team will review your profile and get back to you
            if your experience matches the opportunity.
          </p>

          <Link
            to="/jobs"
            className="success-button"
          >
            Back to Careers →
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="apply-page">

      {/* HERO */}

      <section className="apply-hero">

        <div className="apply-container">

          <Link
            to={`/jobs/${id}`}
            className="apply-back"
          >
            ← Back to Job Details
          </Link>

          <p className="apply-label">
            JOB APPLICATION
          </p>

          <h1>
            Apply for
            <span> {jobTitle}.</span>
          </h1>

          <p>
            Tell us about yourself and take the next step
            in your career with HamaraShops.ai.
          </p>

        </div>

      </section>


      {/* FORM */}

      <section className="apply-content">

        <div className="apply-container">

          <form
            className="application-form"
            onSubmit={handleSubmit}
          >

            {/* PERSONAL INFORMATION */}

            <div className="form-section">

              <div className="form-heading">

                <span>01</span>

                <div>
                  <h2>
                    Personal Information
                  </h2>

                  <p>
                    Tell us how we can contact you.
                  </p>
                </div>

              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>
                    First Name *
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Last Name *
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />

                </div>


                <div className="form-group">

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


                <div className="form-group">

                  <label>
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Hyderabad"
                  />

                </div>

              </div>

            </div>


            {/* PROFESSIONAL INFORMATION */}

            <div className="form-section">

              <div className="form-heading">

                <span>02</span>

                <div>
                  <h2>
                    Professional Information
                  </h2>

                  <p>
                    Tell us about your background and experience.
                  </p>
                </div>

              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Highest Qualification *
                  </label>

                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select qualification
                    </option>

                    <option value="B.Tech">
                      B.Tech / B.E
                    </option>

                    <option value="M.Tech">
                      M.Tech / M.E
                    </option>

                    <option value="MCA">
                      MCA
                    </option>

                    <option value="BCA">
                      BCA
                    </option>

                    <option value="MBA">
                      MBA
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>
                    Experience *
                  </label>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select experience
                    </option>

                    <option value="Fresher">
                      Fresher
                    </option>

                    <option value="0-1">
                      0–1 Years
                    </option>

                    <option value="1-3">
                      1–3 Years
                    </option>

                    <option value="3-5">
                      3–5 Years
                    </option>

                    <option value="5+">
                      5+ Years
                    </option>

                  </select>

                </div>


                <div className="form-group full-width">

                  <label>
                    Technical Skills *
                  </label>

                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="Java, Spring Boot, React, MySQL"
                    required
                  />

                  <small>
                    Separate multiple skills with commas.
                  </small>

                </div>

              </div>

            </div>


            {/* RESUME */}

            <div className="form-section">

              <div className="form-heading">

                <span>03</span>

                <div>
                  <h2>
                    Resume
                  </h2>

                  <p>
                    Upload your latest resume.
                  </p>
                </div>

              </div>


              <div className="resume-upload">

                <label
                  htmlFor="resume"
                  className="resume-box"
                >

                  <div className="upload-icon">
                    ↑
                  </div>

                  <strong>
                    Click to upload your resume
                  </strong>

                  <span>
                    PDF, DOC or DOCX • Maximum 5 MB
                  </span>

                  {formData.resume && (
                    <em>
                      Selected: {formData.resume.name}
                    </em>
                  )}

                </label>

                <input
                  id="resume"
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* COVER LETTER */}

            <div className="form-section">

              <div className="form-heading">

                <span>04</span>

                <div>
                  <h2>
                    About You
                  </h2>

                  <p>
                    Tell us why you would be a great fit.
                  </p>
                </div>

              </div>


              <div className="form-group full-width">

                <label>
                  Cover Letter
                </label>

                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us about yourself, your experience and why you are interested in this position..."
                  rows="7"
                />

              </div>

            </div>


            {/* SUBMIT */}

            <div className="form-submit">

              <p>
                By submitting this application, you confirm that
                the information provided is accurate.
              </p>

              <button type="submit">
                Submit Application →
              </button>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
}

export default ApplyJob;