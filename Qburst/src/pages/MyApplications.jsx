import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import "./MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadMyApplications();
  }, []);

  const loadMyApplications = async () => {
    try {
      setLoading(true);
      setError("");

      const email = localStorage.getItem("userEmail");

      console.log("Candidate email:", email);

      if (!email) {
        setError("Please login to view your applications.");
        return;
      }

      const data = await ApiService.getApplicationsByEmail(email);

      console.log("My applications from backend:", data);

      setApplications(data);
    } catch (err) {
      console.error("Error loading my applications:", err);

      if (err.response) {
        console.error("Backend response:", err.response.data);
      }

      setError("Unable to load your applications.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusClass = (status) => {
    if (!status) {
      return "status-submitted";
    }

    return `status-${status.toLowerCase()}`;
  };

  if (loading) {
    return (
      <div className="my-applications-page">
        <div className="my-applications-container">
          <p className="my-applications-label">
            CAREER APPLICATIONS
          </p>

          <h1>My Applications</h1>

          <p className="my-applications-intro">
            Loading your applications...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-applications-page">
        <div className="my-applications-container">

          <p className="my-applications-label">
            CAREER APPLICATIONS
          </p>

          <h1>My Applications</h1>

          <div className="empty-applications">

            <h2>
              {error}
            </h2>

            <p>
              Please make sure your candidate email is available.
            </p>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="my-applications-page">

      <div className="my-applications-container">

        {/* HEADER */}

        <div className="my-applications-header">

          <div>

            <p className="my-applications-label">
              CAREER APPLICATIONS
            </p>

            <h1>
              My Applications
            </h1>

            <p className="my-applications-intro">
              Track the applications you have submitted to
              HamaraShops.ai.
            </p>

          </div>

        </div>


        {/* NO APPLICATIONS */}

        {applications.length === 0 ? (

          <div className="empty-applications">

            <h2>
              No applications yet
            </h2>

            <p>
              You have not applied for any positions yet.
            </p>

          </div>

        ) : (

          /* APPLICATION LIST */

          <div className="my-applications-list">

            {applications.map((application) => (

              <article
                className="my-application-card"
                key={application.id}
              >

                {/* APPLICATION HEADER */}

                <div className="my-application-header">

                  <div>

                    <span className="application-number">
                      APPLICATION #{application.id}
                    </span>

                    <h2>
                      Job ID: {application.jobId}
                    </h2>

                  </div>


                  <strong
                    className={getStatusClass(
                      application.applicationStatus
                    )}
                  >
                    {application.applicationStatus || "SUBMITTED"}
                  </strong>

                </div>


                {/* APPLICATION DETAILS */}

                <div className="my-application-details">

                  <div>

                    <strong>
                      Candidate
                    </strong>

                    <span>
                      {application.firstName}{" "}
                      {application.lastName}
                    </span>

                  </div>


                  <div>

                    <strong>
                      Email
                    </strong>

                    <span>
                      {application.email}
                    </span>

                  </div>


                  <div>

                    <strong>
                      Mobile
                    </strong>

                    <span>
                      {application.mobile}
                    </span>

                  </div>


                  <div>

                    <strong>
                      City
                    </strong>

                    <span>
                      {application.city || "Not provided"}
                    </span>

                  </div>


                  <div>

                    <strong>
                      Experience
                    </strong>

                    <span>
                      {application.experience}
                    </span>

                  </div>


                  <div>

                    <strong>
                      Qualification
                    </strong>

                    <span>
                      {application.qualification}
                    </span>

                  </div>

                </div>


                {/* SKILLS */}

                <div className="my-application-skills">

                  <strong>
                    Technical Skills
                  </strong>

                  <div>

                    {application.skills
                      ? application.skills
                          .split(",")
                          .map((skill) => (

                            <span key={skill}>
                              {skill.trim()}
                            </span>

                          ))
                      : (
                        <span>
                          No skills provided
                        </span>
                      )}

                  </div>

                </div>


                {/* RESUME */}

                <div className="my-application-resume">

                  <div>

                    <strong>
                      Resume
                    </strong>

                    <span>
                      {application.resumeFileName}
                    </span>

                  </div>


                  <a
                    href={`http://localhost:8080/api/applications/resume/${application.id}`}
                    className="resume-download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume ↓
                  </a>

                </div>


                {/* COVER LETTER */}

                {application.coverLetter && (

                  <div className="my-application-cover">

                    <strong>
                      Cover Letter
                    </strong>

                    <p>
                      {application.coverLetter}
                    </p>

                  </div>

                )}

              </article>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default MyApplications;