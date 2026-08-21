import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import ApiService from "../services/ApiService";

function Dashboard() {
  const navigate = useNavigate();

  // =========================================================
  // STATE
  // =========================================================

  const [user, setUser] = useState(null);

  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const [jobsLoading, setJobsLoading] = useState(true);
  const [applicationsLoading, setApplicationsLoading] = useState(true);

  const [jobsError, setJobsError] = useState("");
  const [applicationsError, setApplicationsError] = useState("");

  // =========================================================
  // LOAD USER
  // =========================================================

  useEffect(() => {
    loadUser();
  }, []);

  // =========================================================
  // LOAD DASHBOARD DATA
  // =========================================================

  useEffect(() => {
    if (user?.email) {
      loadDashboardData(user.email);
    }
  }, [user]);

  // =========================================================
  // LOAD LOGGED-IN USER
  // =========================================================

  const loadUser = () => {
    try {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        navigate("/login");
        return;
      }

      const parsedUser = JSON.parse(savedUser);

      console.log("=================================");
      console.log("DASHBOARD USER");
      console.log(parsedUser);
      console.log("=================================");

      setUser(parsedUser);
    } catch (error) {
      console.error(
        "Unable to load logged-in user:",
        error
      );

      localStorage.removeItem("user");
      localStorage.removeItem("userId");
      localStorage.removeItem("role");

      navigate("/login");
    }
  };

  // =========================================================
  // LOAD ALL DASHBOARD DATA
  // =========================================================

  const loadDashboardData = async (email) => {
    await Promise.all([
      loadJobs(),
      loadApplications(email),
    ]);
  };

  // =========================================================
  // LOAD JOBS
  // =========================================================

  const loadJobs = async () => {
    try {
      setJobsLoading(true);
      setJobsError("");

      console.log("=================================");
      console.log("LOADING DASHBOARD JOBS");
      console.log("=================================");

      const data = await ApiService.getJobs();

      console.log("Dashboard jobs:", data);

      if (Array.isArray(data)) {
        setJobs(data);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error(
        "Dashboard jobs error:",
        error
      );

      setJobsError(
        "Unable to load jobs. Please check the API Gateway and Job Service."
      );

      setJobs([]);
    } finally {
      setJobsLoading(false);
    }
  };

  // =========================================================
  // LOAD APPLICATIONS
  // =========================================================

  const loadApplications = async (email) => {
    try {
      setApplicationsLoading(true);
      setApplicationsError("");

      if (!email) {
        setApplications([]);
        return;
      }

      console.log("=================================");
      console.log(
        "LOADING APPLICATIONS FOR:",
        email
      );
      console.log("=================================");

      const data =
        await ApiService.getApplicationsByEmail(
          email
        );

      console.log(
        "Dashboard applications:",
        data
      );

      if (Array.isArray(data)) {
        setApplications(data);
      } else {
        setApplications([]);
      }
    } catch (error) {
      console.error(
        "Dashboard applications error:",
        error
      );

      if (error.response) {
        console.error(
          "Application API status:",
          error.response.status
        );

        console.error(
          "Application API response:",
          error.response.data
        );
      }

      setApplicationsError(
        "Unable to load applications."
      );

      setApplications([]);
    } finally {
      setApplicationsLoading(false);
    }
  };

  // =========================================================
  // REFRESH DASHBOARD
  // =========================================================

  const handleRefresh = async () => {
    if (!user?.email) {
      return;
    }

    await loadDashboardData(user.email);
  };

  // =========================================================
  // FIND JOB
  // =========================================================

  const getJobById = (jobId) => {
    if (!jobId) {
      return null;
    }

    return jobs.find((job) => {
      const currentJobId =
        job.id ?? job.jobId;

      return (
        Number(currentJobId) ===
        Number(jobId)
      );
    });
  };

  // =========================================================
  // GET APPLICATION JOB ID
  // =========================================================

  const getApplicationJobId = (application) => {
    return (
      application.jobId ??
      application.jobID ??
      application.job?.id ??
      application.job?.jobId ??
      null
    );
  };

  // =========================================================
  // COUNTS
  // =========================================================

  const applicationCount =
    applications.length;

  const shortlistedCount =
    applications.filter((application) => {
      const status = String(
        application.applicationStatus ??
        application.status ??
        ""
      ).toUpperCase();

      return status === "SHORTLISTED";
    }).length;

  const selectedCount =
    applications.filter((application) => {
      const status = String(
        application.applicationStatus ??
        application.status ??
        ""
      ).toUpperCase();

      return status === "SELECTED";
    }).length;

  // =========================================================
  // STATUS CLASS
  // =========================================================

  const getStatusClass = (status) => {
    if (!status) {
      return "status-default";
    }

    return `status-${String(
      status
    ).toLowerCase()}`;
  };

  // =========================================================
  // STATUS TEXT
  // =========================================================

  const getStatusText = (status) => {
    if (!status) {
      return "Submitted";
    }

    switch (
      String(status).toUpperCase()
    ) {
      case "SUBMITTED":
        return "Submitted";

      case "APPLIED":
        return "Applied";

      case "SHORTLISTED":
        return "Shortlisted";

      case "INTERVIEW":
        return "Interview";

      case "SELECTED":
        return "Selected";

      case "REJECTED":
        return "Rejected";

      default:
        return status;
    }
  };

  // =========================================================
  // INITIALS
  // =========================================================

  const getInitials = () => {
    if (!user) {
      return "U";
    }

    const first =
      user.firstName?.charAt(0) || "";

    const last =
      user.lastName?.charAt(0) || "";

    const initials =
      `${first}${last}`.toUpperCase();

    return initials || "U";
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
  // LOADING USER
  // =========================================================

  if (!user) {
    return (
      <div className="dashboard-loading">

        <div className="dashboard-loader"></div>

        <p>
          Loading your dashboard...
        </p>

      </div>
    );
  }

  // =========================================================
  // DASHBOARD
  // =========================================================

  return (
    <div className="dashboard-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="dashboard-hero">

        <div className="dashboard-container">

          <div className="dashboard-hero-content">

            <div>

              <p className="dashboard-label">
                CANDIDATE DASHBOARD
              </p>

              <h1>
                Welcome,{" "}
                <span>
                  {user.firstName ||
                    "Candidate"}
                </span>
              </h1>

              <p className="dashboard-subtitle">
                Manage your profile, explore
                opportunities and track your
                job applications.
              </p>

              <div className="dashboard-actions">

                <Link
                  to="/jobs"
                  className="dashboard-primary-button"
                >
                  Explore Jobs →
                </Link>

                <Link
                  to="/profile"
                  className="dashboard-secondary-button"
                >
                  My Profile
                </Link>

              </div>

            </div>


            {/* USER CARD */}

            <div className="dashboard-user-card">

              <div className="dashboard-avatar">
                {getInitials()}
              </div>

              <div>

                <strong>
                  {user.firstName}{" "}
                  {user.lastName}
                </strong>

                <span>
                  {user.email}
                </span>

                {user.role && (
                  <small>
                    {user.role}
                  </small>
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="dashboard-stats-section">

        <div className="dashboard-container">

          <div className="dashboard-stats">


            {/* AVAILABLE JOBS */}

            <div className="dashboard-stat-card">

              <div className="stat-icon">
                💼
              </div>

              <div>

                <span>
                  Available Jobs
                </span>

                <strong>
                  {jobsLoading
                    ? "..."
                    : jobs.length}
                </strong>

                <small>
                  Open positions
                </small>

              </div>

            </div>


            {/* APPLICATIONS */}

            <div className="dashboard-stat-card">

              <div className="stat-icon">
                📄
              </div>

              <div>

                <span>
                  Applications
                </span>

                <strong>
                  {applicationsLoading
                    ? "..."
                    : applicationCount}
                </strong>

                <small>
                  Jobs applied
                </small>

              </div>

            </div>


            {/* SHORTLISTED */}

            <div className="dashboard-stat-card">

              <div className="stat-icon">
                ⭐
              </div>

              <div>

                <span>
                  Shortlisted
                </span>

                <strong>
                  {applicationsLoading
                    ? "..."
                    : shortlistedCount}
                </strong>

                <small>
                  Applications
                </small>

              </div>

            </div>


            {/* SELECTED */}

            <div className="dashboard-stat-card">

              <div className="stat-icon">
                ✓
              </div>

              <div>

                <span>
                  Selected
                </span>

                <strong>
                  {applicationsLoading
                    ? "..."
                    : selectedCount}
                </strong>

                <small>
                  Successful applications
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OPPORTUNITIES
      ===================================================== */}

      <section className="dashboard-section">

        <div className="dashboard-container">

          <div className="dashboard-section-header">

            <div>

              <p className="dashboard-section-label">
                OPPORTUNITIES
              </p>

              <h2>
                Latest Jobs
              </h2>

            </div>

            <Link to="/jobs">
              View All →
            </Link>

          </div>


          {/* JOB ERROR */}

          {jobsError && (

            <div className="dashboard-error">

              <span className="error-icon">
                ⚠
              </span>

              <div>

                <h3>
                  Unable to load jobs
                </h3>

                <p>
                  {jobsError}
                </p>

                <button
                  onClick={loadJobs}
                >
                  Try Again
                </button>

              </div>

            </div>

          )}


          {/* JOB LOADING */}

          {jobsLoading &&
            !jobsError && (

              <div className="dashboard-loading-box">

                <div className="dashboard-loader"></div>

                <p>
                  Loading latest jobs...
                </p>

              </div>

            )}


          {/* NO JOBS */}

          {!jobsLoading &&
            !jobsError &&
            jobs.length === 0 && (

              <div className="dashboard-empty">

                <div className="empty-icon">
                  💼
                </div>

                <h3>
                  No jobs available
                </h3>

                <p>
                  There are currently no
                  open positions.
                </p>

                <Link to="/jobs">
                  Check Careers →
                </Link>

              </div>

            )}


          {/* JOB LIST */}

          {!jobsLoading &&
            !jobsError &&
            jobs.length > 0 && (

              <div className="dashboard-jobs-grid">

                {jobs
                  .slice(0, 3)
                  .map((job) => {

                    const jobId =
                      job.id ??
                      job.jobId;

                    return (

                      <article
                        className="dashboard-job-card"
                        key={jobId}
                      >

                        <div className="job-card-top">

                          <span className="job-card-icon">
                            💼
                          </span>

                          <span className="job-card-type">
                            {job.employmentType ||
                              "Full Time"}
                          </span>

                        </div>

                        <h3>
                          {job.title ||
                            job.jobTitle ||
                            "Job Position"}
                        </h3>

                        <p>
                          {job.location ||
                            "Location not specified"}
                        </p>

                        <div className="job-card-footer">

                          <span>
                            {job.experience ||
                              "Experience varies"}
                          </span>

                          <Link
                            to={`/jobs/${jobId}`}
                          >
                            View Job →
                          </Link>

                        </div>

                      </article>

                    );
                  })}

              </div>

            )}

        </div>

      </section>


      {/* =====================================================
          MY APPLICATIONS
      ===================================================== */}

      <section className="dashboard-section dashboard-applications-section">

        <div className="dashboard-container">

          <div className="dashboard-section-header">

            <div>

              <p className="dashboard-section-label">
                MY ACTIVITY
              </p>

              <h2>
                My Applications
              </h2>

            </div>

            <button
              className="dashboard-refresh-button"
              onClick={handleRefresh}
            >
              ↻ Refresh
            </button>

          </div>


          {/* APPLICATION ERROR */}

          {applicationsError && (

            <div className="dashboard-error">

              <span className="error-icon">
                ⚠
              </span>

              <div>

                <h3>
                  Unable to load applications
                </h3>

                <p>
                  {applicationsError}
                </p>

                <button
                  onClick={() =>
                    loadApplications(
                      user.email
                    )
                  }
                >
                  Try Again
                </button>

              </div>

            </div>

          )}


          {/* APPLICATION LOADING */}

          {applicationsLoading &&
            !applicationsError && (

              <div className="dashboard-loading-box">

                <div className="dashboard-loader"></div>

                <p>
                  Loading your applications...
                </p>

              </div>

            )}


          {/* NO APPLICATIONS */}

          {!applicationsLoading &&
            !applicationsError &&
            applications.length === 0 && (

              <div className="dashboard-empty">

                <div className="empty-icon">
                  📄
                </div>

                <h3>
                  No applications yet
                </h3>

                <p>
                  Explore available jobs and
                  apply for opportunities that
                  match your skills.
                </p>

                <Link to="/jobs">
                  Explore Jobs →
                </Link>

              </div>

            )}


          {/* APPLICATION LIST */}

          {!applicationsLoading &&
            !applicationsError &&
            applications.length > 0 && (

              <div className="application-list">

                {applications.map(
                  (application) => {

                    const jobId =
                      getApplicationJobId(
                        application
                      );

                    const job =
                      getJobById(jobId);

                    const jobTitle =
                      job?.title ||
                      job?.jobTitle ||
                      application.jobTitle ||
                      `Job #${jobId || "N/A"}`;

                    const status =
                      application.applicationStatus ??
                      application.status ??
                      "SUBMITTED";

                    const appliedDate =
                      application.createdAt ??
                      application.appliedAt ??
                      application.applicationDate;

                    return (

                      <div
                        className="application-card"
                        key={
                          application.id ??
                          application.applicationId
                        }
                      >

                        <div className="application-main">

                          <div className="application-icon">
                            💼
                          </div>

                          <div>

                            <h3>
                              {jobTitle}
                            </h3>

                            <p>
                              Application ID: #
                              {application.id ??
                                application.applicationId ??
                                "N/A"}
                            </p>

                            <span>

                              {appliedDate
                                ? `Applied on ${new Date(
                                    appliedDate
                                  ).toLocaleDateString()}`
                                : "Application submitted"}

                            </span>

                          </div>

                        </div>


                        <div className="application-status">

                          <span
                            className={getStatusClass(
                              status
                            )}
                          >
                            {getStatusText(
                              status
                            )}
                          </span>


                          {jobId && (

                            <Link
                              to={`/jobs/${jobId}`}
                            >
                              View Job →
                            </Link>

                          )}

                        </div>

                      </div>

                    );
                  }
                )}

              </div>

            )}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="dashboard-cta">

        <div className="dashboard-container">

          <div>

            <p>
              KEEP MOVING FORWARD
            </p>

            <h2>
              Find your next opportunity.
            </h2>

          </div>

          <Link to="/jobs">
            Explore Open Positions →
          </Link>

        </div>

      </section>


      {/* =====================================================
          LOGOUT
      ===================================================== */}

      <div className="dashboard-logout-wrapper">

        <button
          onClick={handleLogout}
          className="dashboard-logout"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;