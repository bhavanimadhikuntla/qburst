import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Jobs.css";
import ApiService from "../services/ApiService";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {

    try {

      setLoading(true);
      setError("");

      const data = await ApiService.getJobs();

      console.log("Jobs from backend:", data);

      setJobs(Array.isArray(data) ? data : []);

    } catch (err) {

      console.error("Error loading jobs:", err);

      setError("Unable to load job opportunities.");

    } finally {

      setLoading(false);

    }
  };

  if (loading) {

    return (
      <div className="jobs-page">

        <section className="jobs-hero">

          <div className="jobs-container">

            <p className="jobs-label">
              CAREERS
            </p>

            <h1>
              Find your next opportunity.
            </h1>

            <p>
              Explore our current opportunities and find a role
              that matches your skills, interests and career goals.
            </p>

          </div>

        </section>

        <div className="jobs-loading">
          Loading job opportunities...
        </div>

      </div>
    );
  }

  return (
    <div className="jobs-page">

      {/* HERO */}

      <section className="jobs-hero">

        <div className="jobs-container">

          <p className="jobs-label">
            OPEN POSITIONS
          </p>

          <h1>
            Find your next opportunity.
          </h1>

          <p>
            Explore our current opportunities and find a role
            that matches your skills, interests and career goals.
          </p>

        </div>

      </section>


      {/* JOBS */}

      <section className="jobs-section">

        <div className="jobs-container">

          {error ? (

            <div className="jobs-error">

              <h2>
                Unable to load job opportunities.
              </h2>

              <p>
                Please try again.
              </p>

              <button
                onClick={loadJobs}
                className="jobs-retry-button"
              >
                Try Again
              </button>

            </div>

          ) : jobs.length === 0 ? (

            <div className="jobs-empty">

              <h2>
                No open positions
              </h2>

              <p>
                There are currently no open positions.
                Please check again later.
              </p>

            </div>

          ) : (

            <div className="jobs-grid">

              {jobs.map((job) => (

                <article
                  className="job-card"
                  key={job.id}
                >

                  <div className="job-card-top">

                    <span className="job-icon">
                      💼
                    </span>

                    <span className="job-type">
                      {job.employmentType}
                    </span>

                  </div>


                  <h2>
                    {job.title}
                  </h2>


                  <div className="job-card-meta">

                    <span>
                      📍 {job.location}
                    </span>

                    <span>
                      💼 {job.experience}
                    </span>

                  </div>


                  <p className="job-description">
                    {job.description}
                  </p>


                  {job.skills && (

                    <div className="job-skills">

                      {job.skills
                        .split(",")
                        .map((skill) => (

                          <span key={skill.trim()}>
                            {skill.trim()}
                          </span>

                        ))}

                    </div>

                  )}


                  <div className="job-card-footer">

                    <span className="job-status">
                      {job.status}
                    </span>

                    <Link
                      to={`/jobs/${job.id}`}
                      className="job-view-button"
                    >
                      View Job →
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* CTA */}

      <section className="jobs-cta">

        <h2>
          Ready to take the next step?
        </h2>

        <p>
          Explore an opportunity and start your journey
          with HamaraShops.ai.
        </p>

      </section>

    </div>
  );
}

export default Jobs;