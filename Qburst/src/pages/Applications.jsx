import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../services/ApiService";
import "./Applications.css";

function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const data = await ApiService.getAllApplications();

      console.log("Applications from backend:", data);

      setApplications(data);
    } catch (err) {
      console.error("Error loading applications:", err);
      setError("Unable to load applications.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="applications-page">
        <h1>Applications</h1>
        <p>Loading applications...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="applications-page">
        <h1>Applications</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="applications-page">

      <div className="applications-container">

        <div className="applications-header">
          <div>
            <p className="applications-label">
              CANDIDATE APPLICATIONS
            </p>

            <h1>
              Applications
            </h1>

            <p>
              Review applications submitted for available positions.
            </p>
          </div>

          <Link to="/jobs" className="back-jobs-button">
            View Jobs →
          </Link>
        </div>


        {applications.length === 0 ? (

          <div className="empty-applications">
            <h2>No applications found</h2>
            <p>
              No candidates have applied for any jobs yet.
            </p>
          </div>

        ) : (

          <div className="applications-list">

            {applications.map((application) => (

              <article
                className="application-card"
                key={application.id}
              >

                <div className="application-number">
                  #{application.id}
                </div>

                <div className="application-main">

                  <div className="application-top">

                    <div>
                      <h2>
                        {application.firstName}{" "}
                        {application.lastName}
                      </h2>

                      <p>
                        {application.email}
                      </p>
                    </div>

                   <select
  className="application-status"
  value={application.applicationStatus}
  onChange={async (event) => {

    try {

      const newStatus = event.target.value;

      const updatedApplication =
        await ApiService.updateApplicationStatus(
          application.id,
          newStatus
        );

      setApplications((previousApplications) =>
        previousApplications.map((item) =>
          item.id === updatedApplication.id
            ? updatedApplication
            : item
        )
      );

      console.log(
        "Application status updated:",
        updatedApplication
      );

    } catch (error) {

      console.error(
        "Status update failed:",
        error
      );

      alert(
        "Unable to update application status."
      );
    }

  }}
>
  <option value="SUBMITTED">
    SUBMITTED
  </option>

  <option value="SHORTLISTED">
    SHORTLISTED
  </option>

  <option value="INTERVIEW">
    INTERVIEW
  </option>

  <option value="SELECTED">
    SELECTED
  </option>

  <option value="REJECTED">
    REJECTED
  </option>
</select>

                  </div>


                  <div className="application-info">

                    <div>
                      <strong>Job ID</strong>
                      <span>
                        {application.jobId}
                      </span>
                    </div>

                    <div>
                      <strong>Mobile</strong>
                      <span>
                        {application.mobile}
                      </span>
                    </div>

                    <div>
                      <strong>City</strong>
                      <span>
                        {application.city}
                      </span>
                    </div>

                    <div>
                      <strong>Experience</strong>
                      <span>
                        {application.experience}
                      </span>
                    </div>

                    <div>
                      <strong>Qualification</strong>
                      <span>
                        {application.qualification}
                      </span>
                    </div>

                  </div>


                  <div className="application-skills">

                    <strong>Skills</strong>

                    <div>
                      {application.skills
                        ?.split(",")
                        .map((skill) => (
                          <span key={skill}>
                            {skill.trim()}
                          </span>
                        ))}
                    </div>

                  </div>

<div className="application-resume">
  <strong>Resume</strong>

  <span>
    {application.resumeFileName}
  </span>

  <a
    href={`http://localhost:8080/api/applications/resume/${application.id}`}
    className="resume-download"
    target="_blank"
    rel="noopener noreferrer"
  >
    Download Resume ↓
  </a>
</div>


                  {application.coverLetter && (

                    <div className="application-cover">

                      <strong>
                        Cover Letter
                      </strong>

                      <p>
                        {application.coverLetter}
                      </p>

                    </div>

                  )}

                </div>

              </article>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Applications;