import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import ApiService from "../services/ApiService";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        navigate("/login");
        return;
      }

      const loggedUser = JSON.parse(savedUser);

      setUser(loggedUser);

      /*
       * Try to load candidate profile.
       *
       * If your backend doesn't have the profile endpoint yet,
       * the basic user information will still be displayed.
       */

      const userId =
        loggedUser.userId ||
        loggedUser.id ||
        localStorage.getItem("userId");

      if (userId && ApiService.getCandidateProfile) {
        try {
          const data =
            await ApiService.getCandidateProfile(userId);

          setProfile(data);
        } catch (profileError) {
          console.warn(
            "Candidate profile could not be loaded:",
            profileError
          );
        }
      }

    } catch (err) {
      console.error("Profile error:", err);

      setError("Unable to load your profile.");
    } finally {
      setLoading(false);
    }
  };

  const getInitials = () => {
    if (!user) {
      return "U";
    }

    const first =
      user.firstName?.charAt(0) || "";

    const last =
      user.lastName?.charAt(0) || "";

    return (
      `${first}${last}`.toUpperCase() || "U"
    );
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="profile-loader"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="profile-page">

      {/* HERO */}

      <section className="profile-hero">

        <div className="profile-container">

          <Link
            to="/dashboard"
            className="profile-back"
          >
            ← Back to Dashboard
          </Link>

          <div className="profile-hero-content">

            <div className="profile-avatar">
              {getInitials()}
            </div>

            <div>

              <p className="profile-label">
                CANDIDATE PROFILE
              </p>

              <h1>
                {user.firstName || "Candidate"}{" "}
                {user.lastName || ""}
              </h1>

              <p>
                {user.email}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CONTENT */}

      <main className="profile-content">

        <div className="profile-container">

          {error && (
            <div className="profile-error">
              {error}
            </div>
          )}

          {/* BASIC INFORMATION */}

          <section className="profile-card">

            <div className="profile-card-header">

              <div>
                <p className="profile-section-label">
                  PERSONAL INFORMATION
                </p>

                <h2>
                  Basic Details
                </h2>
              </div>

              <Link
                to="/edit-profile"
                className="profile-edit-button"
              >
                Edit Profile
              </Link>

            </div>


            <div className="profile-grid">

              <div className="profile-field">
                <span>First Name</span>
                <strong>
                  {user.firstName || "Not provided"}
                </strong>
              </div>

              <div className="profile-field">
                <span>Last Name</span>
                <strong>
                  {user.lastName || "Not provided"}
                </strong>
              </div>

              <div className="profile-field">
                <span>Email</span>
                <strong>
                  {user.email || "Not provided"}
                </strong>
              </div>

              <div className="profile-field">
                <span>Mobile Number</span>
                <strong>
                  {user.mobileNumber ||
                    user.mobile ||
                    profile?.mobileNumber ||
                    "Not provided"}
                </strong>
              </div>

            </div>

          </section>


          {/* PROFESSIONAL INFORMATION */}

          <section className="profile-card">

            <div className="profile-card-header">

              <div>
                <p className="profile-section-label">
                  PROFESSIONAL INFORMATION
                </p>

                <h2>
                  Career Details
                </h2>
              </div>

            </div>


            <div className="profile-grid">

              <div className="profile-field">

                <span>
                  Qualification
                </span>

                <strong>
                  {profile?.qualification ||
                    "Not provided"}
                </strong>

              </div>


              <div className="profile-field">

                <span>
                  Specialization
                </span>

                <strong>
                  {profile?.specialization ||
                    "Not provided"}
                </strong>

              </div>


              <div className="profile-field">

                <span>
                  Experience
                </span>

                <strong>
                  {profile?.experience ||
                    "Not provided"}
                </strong>

              </div>


              <div className="profile-field">

                <span>
                  City
                </span>

                <strong>
                  {profile?.city ||
                    "Not provided"}
                </strong>

              </div>


              <div className="profile-field">

                <span>
                  State
                </span>

                <strong>
                  {profile?.state ||
                    "Not provided"}
                </strong>

              </div>

            </div>

          </section>


          {/* SKILLS */}

          <section className="profile-card">

            <div className="profile-card-header">

              <div>
                <p className="profile-section-label">
                  TECHNICAL SKILLS
                </p>

                <h2>
                  Skills
                </h2>
              </div>

            </div>


            <div className="profile-skills">

              {profile?.skills ? (

                profile.skills
                  .split(",")
                  .map((skill) => (
                    <span key={skill}>
                      {skill.trim()}
                    </span>
                  ))

              ) : (

                <p className="profile-empty">
                  No skills added yet.
                </p>

              )}

            </div>

          </section>


          {/* RESUME */}

          <section className="profile-card">

            <div className="profile-card-header">

              <div>
                <p className="profile-section-label">
                  RESUME
                </p>

                <h2>
                  Resume
                </h2>
              </div>

            </div>


            <div className="profile-resume">

              {profile?.resumePath ? (

                <div>

                  <div className="resume-icon">
                    📄
                  </div>

                  <div>
                    <strong>
                      Resume uploaded
                    </strong>

                    <p>
                      Your resume is available in your
                      candidate profile.
                    </p>
                  </div>

                </div>

              ) : (

                <div>

                  <div className="resume-icon">
                    📄
                  </div>

                  <div>
                    <strong>
                      No resume uploaded
                    </strong>

                    <p>
                      Add your resume to improve your
                      job applications.
                    </p>
                  </div>

                </div>

              )}

            </div>

          </section>


          {/* BACK TO DASHBOARD */}

          <div className="profile-bottom-actions">

            <Link
              to="/dashboard"
              className="profile-dashboard-button"
            >
              ← Back to Dashboard
            </Link>

            <Link
              to="/jobs"
              className="profile-jobs-button"
            >
              Explore Jobs →
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Profile;