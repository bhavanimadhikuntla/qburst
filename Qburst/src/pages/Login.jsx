
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const user = await ApiService.login(
        formData.email,
        formData.password
      );

      console.log("LOGIN SUCCESS:", user);

      // =========================================
      // STORE COMPLETE USER DETAILS
      // =========================================

      localStorage.setItem("user", JSON.stringify(user));

      if (user.userId) {
        localStorage.setItem("userId", String(user.userId));
      }

      if (user.email) {
        localStorage.setItem("email", user.email);
      }

      if (user.role) {
        localStorage.setItem("role", user.role);
      }

      if (user.firstName) {
        localStorage.setItem("firstName", user.firstName);
      }

      if (user.lastName) {
        localStorage.setItem("lastName", user.lastName);
      }

      // =========================================
      // REDIRECT BASED ON ROLE
      // =========================================

      if (user.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      console.error("Login error:", err);

      if (err.response) {
        const data = err.response.data;

        if (typeof data === "string") {
          setError(data);
        } else if (data?.message) {
          setError(data.message);
        } else if (data?.error) {
          setError(data.error);
        } else {
          setError(
            `Login failed. Server returned ${err.response.status}.`
          );
        }
      } else if (err.request) {
        setError(
          "Unable to connect to the API Gateway. Please make sure the Gateway and Auth Service are running."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* LEFT SIDE */}

        <div className="login-content">

          <p className="login-label">
            HAMARASHOPS.AI
          </p>

          <h1>
            Welcome
            <span>back.</span>
          </h1>

          <p className="login-description">
            Sign in to your HamaraShops.ai account and
            continue exploring opportunities.
          </p>

          <div className="login-features">

            <div className="login-feature">
              <span>01</span>
              <strong>Explore Opportunities</strong>
            </div>

            <div className="login-feature">
              <span>02</span>
              <strong>Manage Your Profile</strong>
            </div>

            <div className="login-feature">
              <span>03</span>
              <strong>Track Applications</strong>
            </div>

          </div>

        </div>

        {/* LOGIN CARD */}

        <div className="login-card">

          <p className="login-card-label">
            SIGN IN
          </p>

          <h2>
            Welcome back
          </h2>

          <p className="login-card-description">
            Sign in to your candidate account
          </p>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                autoComplete="email"
                required
              />

            </div>

            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />

            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading
                ? "Signing In..."
                : "Sign In →"}
            </button>

          </form>

          <div className="login-register">

            Don't have an account?

            {" "}

            <Link to="/register">
              Create Account
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;

