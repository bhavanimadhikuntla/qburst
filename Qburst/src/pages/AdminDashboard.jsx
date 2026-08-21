import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import ApiService from "../services/ApiService";

function AdminDashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [updatingId, setUpdatingId] = useState(null);

  // =========================================================
  // LOAD USER
  // =========================================================

  useEffect(() => {
    loadUser();
  }, []);

  // =========================================================
  // LOAD DATA
  // =========================================================

  useEffect(() => {
    if (user) {
      loadAdminData();
    }
  }, [user]);

  // =========================================================
  // USER
  // =========================================================

  const loadUser = () => {
    try {
      const savedUser =
        localStorage.getItem("user");

      if (!savedUser) {
        navigate("/login");
        return;
      }

      const parsedUser =
        JSON.parse(savedUser);

      console.log(
        "Admin user:",
        parsedUser
      );

      /*
       * We don't block the dashboard here based
       * on role because your current login system
       * may store the role differently.
       *
       * We will verify the role after testing.
       */

      setUser(parsedUser);

    } catch (error) {
      console.error(
        "Unable to load admin user:",
        error
      );

      localStorage.removeItem("user");
      localStorage.removeItem("userId");
      localStorage.removeItem("role");

      navigate("/login");
    }
  };

  // =========================================================
  // LOAD ADMIN DATA
  // =========================================================

  const loadAdminData = async () => {
    try {
      setLoading(true);
      setError("");

      console.log(
        "Loading admin dashboard..."
      );

      const [applicationsData, jobsData] =
        await Promise.all([
          ApiService.getApplications(),
          ApiService.getJobs(),
        ]);

      console.log(
        "Admin applications:",
        applicationsData
      );

      console.log(
        "Admin jobs:",
        jobsData
      );

      setApplications(
        Array.isArray(applicationsData)
          ? applicationsData
          : []
      );

      setJobs(
        Array.isArray(jobsData)
          ? jobsData
          : []
      );

    } catch (error) {
      console.error(
        "Admin dashboard error:",
        error
      );

      if (error.response) {
        console.error(
          "Status:",
          error.response.status
        );

        console.error(
          "Response:",
          error.response.data
        );
      }

      setError(
        "Unable to load admin dashboard data."
      );

    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // FIND JOB
  // =========================================================

  const getJobById = (jobId) => {
    if (!jobId) {
      return null;
    }

    return jobs.find((job) => {
      const currentId =
        job.id ?? job.jobId;

      return (
        Number(currentId) ===
        Number(jobId)
      );
    });
  };

  // =========================================================
  // GET APPLICATION JOB ID
  // =========================================================

  const getApplicationJobId = (
    application
  ) => {
    return (
      application.jobId ??
      application.jobID ??
      application.job?.id ??
      application.job?.jobId ??
      null
    );
  };

  // =========================================================
  // STATUS
  // =========================================================

  const getStatus = (application) => {
    return (
      application.applicationStatus ??
      application.status ??
      "SUBMITTED"
    );
  };

  // =========================================================
  // UPDATE STATUS
  // =========================================================

  const updateStatus = async (
    applicationId,
    status
  ) => {
    try {
      setUpdatingId(applicationId);

      console.log(
        "Updating application:",
        applicationId,
        "to",
        status
      );

      await ApiService.updateApplicationStatus(
        applicationId,
        status
      );

      /*
       * Update the UI immediately instead of
       * making the admin wait for another request.
       */

      setApplications((current) =>
        current.map((application) => {

          const id =
            application.id ??
            application.applicationId;

          if (
            Number(id) ===
            Number(applicationId)
          ) {
            return {
              ...application,
              applicationStatus:
                status,
              status: status,
            };
          }

          return application;
        })
      );

      console.log(
        "Application status updated successfully."
      );

    } catch (error) {
      console.error(
        "Unable to update application status:",
        error
      );

      alert(
        "Unable to update application status. Please check the backend."
      );

    } finally {
      setUpdatingId(null);
    }
  };

  // =========================================================
  // COUNTS
  // =========================================================

  const totalApplications =
    applications.length;

  const shortlisted =
    applications.filter(
      (application) =>
        getStatus(application)
          .toUpperCase() ===
        "SHORTLISTED"
    ).length;

  const selected =
    applications.filter(
      (application) =>
        getStatus(application)
          .toUpperCase() ===
        "SELECTED"
    ).length;

  const rejected =
    applications.filter(
      (application) =>
        getStatus(application)
          .toUpperCase() ===
        "REJECTED"
    ).length;

  // =========================================================
  // STATUS CLASS
  // =========================================================

  const getStatusClass = (status) => {
    return `admin-status-${String(
      status || "submitted"
    ).toLowerCase()}`;
  };

  // =========================================================
  // LOGOUT
  // =========================================================

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    navigate("/login");
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (!user) {
    return (
      <div className="admin-loading">
        <div className="admin-loader"></div>

        <p>
          Loading admin dashboard...
        </p>
      </div>
    );
  }

  // =========================================================
  // DASHBOARD
  // =========================================================

  return (
    <div className="admin-dashboard-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="admin-header">

        <div className="admin-container">

          <div className="admin-header-left">

            <Link
              to="/"
              className="admin-logo"
            >
              HamaraShops
              <span>.ai</span>
            </Link>

            <span className="admin-badge">
              ADMIN
            </span>

          </div>

          <div className="admin-header-right">

            <span className="admin-user">
              {user.firstName || "Admin"}
            </span>

            <button
              className="admin-logout"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="admin-main">

        <div className="admin-container">

          {/* TITLE */}

          <div className="admin-page-heading">

            <p>
              ADMINISTRATION
            </p>

            <h1>
              Admin Dashboard
            </h1>

            <span>
              Manage jobs and review candidate
              applications.
            </span>

          </div>


          {/* ERROR */}

          {error && (

            <div className="admin-error">

              <strong>
                Error
              </strong>

              <span>
                {error}
              </span>

              <button
                onClick={loadAdminData}
              >
                Try Again
              </button>

            </div>

          )}


          {/* =================================================
              STATISTICS
          ================================================= */}

          <section className="admin-stats">

            <div className="admin-stat-card">

              <div className="admin-stat-icon">
                💼
              </div>

              <div>

                <span>
                  Total Jobs
                </span>

                <strong>
                  {loading
                    ? "..."
                    : jobs.length}
                </strong>

                <small>
                  Open positions
                </small>

              </div>

            </div>


            <div className="admin-stat-card">

              <div className="admin-stat-icon">
                📄
              </div>

              <div>

                <span>
                  Applications
                </span>

                <strong>
                  {loading
                    ? "..."
                    : totalApplications}
                </strong>

                <small>
                  Total applications
                </small>

              </div>

            </div>


            <div className="admin-stat-card">

              <div className="admin-stat-icon">
                ⭐
              </div>

              <div>

                <span>
                  Shortlisted
                </span>

                <strong>
                  {loading
                    ? "..."
                    : shortlisted}
                </strong>

                <small>
                  Candidates
                </small>

              </div>

            </div>


            <div className="admin-stat-card">

              <div className="admin-stat-icon">
                ✓
              </div>

              <div>

                <span>
                  Selected
                </span>

                <strong>
                  {loading
                    ? "..."
                    : selected}
                </strong>

                <small>
                  Successful candidates
                </small>

              </div>

            </div>

          </section>


          {/* =================================================
              APPLICATIONS
          ================================================= */}

          <section className="admin-section">

            <div className="admin-section-heading">

              <div>

                <p>
                  CANDIDATE ACTIVITY
                </p>

                <h2>
                  Applications
                </h2>

              </div>

              <button
                className="admin-refresh"
                onClick={loadAdminData}
              >
                ↻ Refresh
              </button>

            </div>


            {/* LOADING */}

            {loading && (

              <div className="admin-empty">

                <div className="admin-loader"></div>

                <p>
                  Loading applications...
                </p>

              </div>

            )}


            {/* NO APPLICATIONS */}

            {!loading &&
              !error &&
              applications.length === 0 && (

                <div className="admin-empty">

                  <div className="admin-empty-icon">
                    📄
                  </div>

                  <h3>
                    No applications yet
                  </h3>

                  <p>
                    Candidate applications will
                    appear here after they apply
                    for a job.
                  </p>

                </div>

              )}


            {/* APPLICATION TABLE */}

            {!loading &&
              !error &&
              applications.length > 0 && (

                <div className="admin-table-wrapper">

                  <table className="admin-table">

                    <thead>

                      <tr>

                        <th>
                          Candidate
                        </th>

                        <th>
                          Job
                        </th>

                        <th>
                          Email
                        </th>

                        <th>
                          Status
                        </th>

                        <th>
                          Action
                        </th>

                      </tr>

                    </thead>


                    <tbody>

                      {applications.map(
                        (application) => {

                          const applicationId =
                            application.id ??
                            application.applicationId;

                          const jobId =
                            getApplicationJobId(
                              application
                            );

                          const job =
                            getJobById(jobId);

                          const candidateName =
                            application.firstName ||
                            application.lastName
                              ? `${application.firstName || ""} ${
                                  application.lastName || ""
                                }`.trim()
                              : application.name ||
                                "Candidate";

                          const email =
                            application.email ||
                            "Not available";

                          const jobTitle =
                            job?.title ||
                            job?.jobTitle ||
                            application.jobTitle ||
                            `Job #${jobId || "N/A"}`;

                          const status =
                            getStatus(
                              application
                            );

                          return (

                            <tr
                              key={
                                applicationId
                              }
                            >

                              {/* CANDIDATE */}

                              <td>

                                <div className="admin-candidate">

                                  <div className="admin-avatar">
                                    {(
                                      candidateName
                                        .charAt(0) ||
                                      "C"
                                    ).toUpperCase()}
                                  </div>

                                  <strong>
                                    {candidateName}
                                  </strong>

                                </div>

                              </td>


                              {/* JOB */}

                              <td>

                                <strong>
                                  {jobTitle}
                                </strong>

                                {job?.location && (
                                  <small>
                                    {job.location}
                                  </small>
                                )}

                              </td>


                              {/* EMAIL */}

                              <td>
                                {email}
                              </td>


                              {/* STATUS */}

                              <td>

                                <span
                                  className={getStatusClass(
                                    status
                                  )}
                                >
                                  {status}
                                </span>

                              </td>


                              {/* ACTIONS */}

                              <td>

                                <div className="admin-actions">

                                  <button
                                    disabled={
                                      updatingId ===
                                      applicationId
                                    }
                                    onClick={() =>
                                      updateStatus(
                                        applicationId,
                                        "SHORTLISTED"
                                      )
                                    }
                                  >
                                    Shortlist
                                  </button>

                                  <button
                                    disabled={
                                      updatingId ===
                                      applicationId
                                    }
                                    onClick={() =>
                                      updateStatus(
                                        applicationId,
                                        "INTERVIEW"
                                      )
                                    }
                                  >
                                    Interview
                                  </button>

                                  <button
                                    disabled={
                                      updatingId ===
                                      applicationId
                                    }
                                    onClick={() =>
                                      updateStatus(
                                        applicationId,
                                        "SELECTED"
                                      )
                                    }
                                  >
                                    Select
                                  </button>

                                  <button
                                    disabled={
                                      updatingId ===
                                      applicationId
                                    }
                                    onClick={() =>
                                      updateStatus(
                                        applicationId,
                                        "REJECTED"
                                      )
                                    }
                                  >
                                    Reject
                                  </button>

                                </div>

                              </td>

                            </tr>

                          );
                        }
                      )}

                    </tbody>

                  </table>

                </div>

              )}

          </section>


          {/* =================================================
              JOBS
          ================================================= */}

          <section className="admin-section">

            <div className="admin-section-heading">

              <div>

                <p>
                  JOB MANAGEMENT
                </p>

                <h2>
                  Open Positions
                </h2>

              </div>

            </div>


            <div className="admin-jobs-grid">

              {jobs.map((job) => {

                const jobId =
                  job.id ?? job.jobId;

                return (

                  <div
                    className="admin-job-card"
                    key={jobId}
                  >

                    <div>

                      <span className="admin-job-icon">
                        💼
                      </span>

                      <span className="admin-job-type">
                        {job.employmentType ||
                          "Full Time"}
                      </span>

                    </div>

                    <h3>
                      {job.title ||
                        job.jobTitle}
                    </h3>

                    <p>
                      {job.location ||
                        "Location not specified"}
                    </p>

                    <small>
                      {job.experience ||
                        "Experience varies"}
                    </small>

                  </div>

                );
              })}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;