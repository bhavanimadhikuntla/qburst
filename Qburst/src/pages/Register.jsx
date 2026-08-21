import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    role: "CANDIDATE",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  // ==========================================
  // VALIDATE FORM
  // ==========================================

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError("Please enter your first name.");
      return false;
    }

    if (!formData.lastName.trim()) {
      setError("Please enter your last name.");
      return false;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!formData.mobileNumber.trim()) {
      setError("Please enter your mobile number.");
      return false;
    }

    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(formData.mobileNumber.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return false;
    }

    if (!formData.password) {
      setError("Please enter a password.");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return false;
    }

    return true;
  };

  // ==========================================
  // REGISTER USER
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Validate
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Data sent to Auth Service
      const registrationData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        password: formData.password,
        role: "CANDIDATE",
      };

      console.log("Registering user:", {
        firstName: registrationData.firstName,
        lastName: registrationData.lastName,
        email: registrationData.email,
        mobileNumber: registrationData.mobileNumber,
        role: registrationData.role,
      });

      const response =
        await ApiService.register(registrationData);

      console.log(
        "Registration successful:",
        response
      );

      // ======================================
      // SUCCESS
      // ======================================

      setError("");

      setSuccess(
        "Account created successfully! Redirecting to login..."
      );

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        role: "CANDIDATE",
      });

      // Redirect
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      console.error(
        "Registration error:",
        err
      );

      // ======================================
      // SERVER RESPONSE
      // ======================================

      if (err.response) {
        const status =
          err.response.status;

        const responseData =
          err.response.data;

        console.log(
          "Registration status:",
          status
        );

        console.log(
          "Registration response:",
          responseData
        );

        // -------------------------------
        // 400 BAD REQUEST
        // -------------------------------

        if (status === 400) {
          let message = "";

          if (
            typeof responseData ===
            "string"
          ) {
            message = responseData;
          } else if (
            responseData?.message
          ) {
            message =
              responseData.message;
          } else if (
            responseData?.error
          ) {
            message =
              responseData.error;
          }

          if (
            message
              .toLowerCase()
              .includes(
                "email already registered"
              )
          ) {
            setError(
              "This email is already registered. Please use another email or login."
            );
          } else if (message) {
            setError(message);
          } else {
            setError(
              "Registration failed. Please check your details."
            );
          }

          return;
        }

        // -------------------------------
        // 409 CONFLICT
        // -------------------------------

        if (status === 409) {
          setError(
            "This email is already registered. Please use another email."
          );

          return;
        }

        // -------------------------------
        // 401
        // -------------------------------

        if (status === 401) {
          setError(
            "You are not authorized to register."
          );

          return;
        }

        // -------------------------------
        // 403
        // -------------------------------

        if (status === 403) {
          setError(
            "Registration request was blocked. Please check the API Gateway CORS configuration."
          );

          return;
        }

        // -------------------------------
        // 404
        // -------------------------------

        if (status === 404) {
          setError(
            "Registration endpoint was not found. Please check the API Gateway route."
          );

          return;
        }

        // -------------------------------
        // 405
        // -------------------------------

        if (status === 405) {
          setError(
            "Registration method is not allowed. Please check the Auth Service endpoint."
          );

          return;
        }

        // -------------------------------
        // 500
        // -------------------------------

        if (status >= 500) {
          setError(
            "Server error occurred. Please check the Auth Service and database."
          );

          return;
        }

        // -------------------------------
        // OTHER STATUS
        // -------------------------------

        setError(
          `Registration failed. Server returned ${status}.`
        );

        return;
      }

      // ======================================
      // NO RESPONSE FROM SERVER
      // ======================================

      if (err.request) {
        console.error(
          "No response received from API Gateway."
        );

        setError(
          "The server did not return a response. Please check that the API Gateway is running and CORS is configured correctly."
        );

        return;
      }

      // ======================================
      // OTHER ERROR
      // ======================================

      setError(
        err.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="register-page">

      <section className="register-hero">

        <div className="register-container">

          {/* ==================================
              LEFT CONTENT
          ================================== */}

          <div className="register-hero-content">

            <p className="register-label">
              HAMARASHOPS.AI
            </p>

            <h1>
              Build your
              <span>
                future with us.
              </span>
            </h1>

            <p className="register-description">
              Create your account and explore
              opportunities, technology and careers
              with HamaraShops.ai.
            </p>

            <div className="register-steps">

              {/* STEP 1 */}

              <div className="register-step">

                <span>01</span>

                <div>
                  <strong>
                    Explore Opportunities
                  </strong>

                  <p>
                    Discover exciting career
                    opportunities.
                  </p>
                </div>

              </div>


              {/* STEP 2 */}

              <div className="register-step">

                <span>02</span>

                <div>
                  <strong>
                    Build Your Profile
                  </strong>

                  <p>
                    Create your professional
                    candidate profile.
                  </p>
                </div>

              </div>


              {/* STEP 3 */}

              <div className="register-step">

                <span>03</span>

                <div>
                  <strong>
                    Apply for Jobs
                  </strong>

                  <p>
                    Apply for positions that
                    match your skills.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ==================================
              REGISTER CARD
          ================================== */}

          <div className="register-card">

            <p className="register-card-label">
              CREATE ACCOUNT
            </p>

            <h2>
              Join HamaraShops.ai
            </h2>

            <p className="register-card-description">
              Create your candidate account
            </p>


            {/* ==================================
                ERROR MESSAGE
            ================================== */}

            {error && (
              <div className="register-error">
                <span className="message-icon">
                  ⚠
                </span>

                <p>{error}</p>
              </div>
            )}


            {/* ==================================
                SUCCESS MESSAGE
            ================================== */}

            {success && (
              <div className="register-success">
                <span className="message-icon">
                  ✓
                </span>

                <p>{success}</p>
              </div>
            )}


            {/* ==================================
                FORM
            ================================== */}

            <form
              onSubmit={handleSubmit}
              noValidate
            >

              {/* FIRST + LAST NAME */}

              <div className="register-row">

                <div className="form-group">

                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={
                      formData.firstName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter first name"
                    autoComplete="given-name"
                    disabled={loading}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={
                      formData.lastName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter last name"
                    autoComplete="family-name"
                    disabled={loading}
                    required
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter email address"
                  autoComplete="email"
                  disabled={loading}
                  required
                />

              </div>


              {/* MOBILE */}

              <div className="form-group">

                <label htmlFor="mobileNumber">
                  Mobile Number
                </label>

                <input
                  id="mobileNumber"
                  type="tel"
                  name="mobileNumber"
                  value={
                    formData.mobileNumber
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  autoComplete="tel"
                  disabled={loading}
                  required
                />

              </div>


              {/* PASSWORD */}

              <div className="form-group">

                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  name="password"
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Create password"
                  minLength={6}
                  autoComplete="new-password"
                  disabled={loading}
                  required
                />

              </div>


              {/* ACCOUNT TYPE */}

              <div className="form-group">

                <label htmlFor="role">
                  Account Type
                </label>

                <select
                  id="role"
                  name="role"
                  value={
                    formData.role
                  }
                  onChange={
                    handleChange
                  }
                  disabled={loading}
                >

                  <option value="CANDIDATE">
                    Candidate
                  </option>

                </select>

              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="register-button"
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className="register-spinner"></span>

                    Creating Account...
                  </>
                ) : (
                  "Create Account →"
                )}

              </button>

            </form>


            {/* ==================================
                LOGIN LINK
            ================================== */}

            <div className="register-login">

              <span>
                Already have an account?
              </span>

              {" "}

              <Link to="/login">
                Login
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Register;