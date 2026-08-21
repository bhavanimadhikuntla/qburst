import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./JobDetails.css";
import ApiService from "../services/ApiService";

function JobDetails() {

  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadJob();
  }, [id]);

  const loadJob = async () => {

    try {

      setLoading(true);
      setError("");

      const data = await ApiService.getJobById(id);

      console.log("Job from backend:", data);

      setJob(data);

    } catch (err) {

      console.error("Error loading job:", err);

      setError("Unable to load this job.");

    } finally {

      setLoading(false);

    }
  };


  // Loading
  if (loading) {
    return (
      <div className="job-not-found">
        <h1>Loading...</h1>

        <p>
          Loading job details.
        </p>
      </div>
    );
  }


  // Error
  if (error || !job) {
    return (
      <div className="job-not-found">

        <h1>
          Job Not Found
        </h1>

        <p>
          {error || "The position you are looking for is no longer available."}
        </p>

        <Link to="/jobs">
          ← Back to Careers
        </Link>

      </div>
    );
  }


  // Convert skills string into array
  const skills = job.skills
    ? job.skills.split(",").map(skill => skill.trim())
    : [];


  // Convert responsibilities string into array
  const responsibilities = job.responsibilities
    ? job.responsibilities
        .split(",")
        .map(item => item.trim())
    : [];


  return (
    <div className="job-details-page">

      {/* HERO */}

      <section className="job-details-hero">

        <div className="job-details-container">

          <Link
            to="/jobs"
            className="job-back-link"
          >
            ← Back to Careers
          </Link>

          <p className="job-details-label">
            CAREER OPPORTUNITY
          </p>

          <h1>
            {job.title}
          </h1>

          <div className="job-meta">

            <span>
              {job.department || "Engineering"}
            </span>

            <span>
              {job.location}
            </span>

            <span>
              {job.employmentType}
            </span>

            <span>
              {job.experience}
            </span>

          </div>

        </div>

      </section>


      {/* CONTENT */}

      <section className="job-details-content">

        <div className="job-details-container job-details-grid">

          {/* LEFT */}

          <main>

            <section className="job-content-section">

              <h2>
                About the Role
              </h2>

              <p>
                {job.description}
              </p>

            </section>


            <section className="job-content-section">

              <h2>
                Responsibilities
              </h2>

              <ul className="job-responsibilities">

                {responsibilities.length > 0 ? (

                  responsibilities.map(
                    (responsibility, index) => (

                      <li key={index}>

                        <span>
                          →
                        </span>

                        {responsibility}

                      </li>

                    )
                  )

                ) : (

                  <li>
                    <span>→</span>
                    Responsibilities will be discussed during the interview.
                  </li>

                )}

              </ul>

            </section>


            <section className="job-content-section">

              <h2>
                Required Skills
              </h2>

              <div className="job-detail-skills">

                {skills.map((skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                ))}

              </div>

            </section>

          </main>


          {/* RIGHT */}

          <aside className="job-apply-card">

            <p>
              INTERESTED IN THIS ROLE?
            </p>

            <h3>
              Ready to join us?
            </h3>

            <p className="apply-card-text">
              Take the next step in your career and apply for this
              position.
            </p>

            <Link
              to={`/jobs/${id}/apply`}
              className="apply-button"
            >
              Apply for this Position →
            </Link>


            <div className="apply-card-info">

              <div>

                <strong>
                  Location
                </strong>

                <span>
                  {job.location}
                </span>

              </div>


              <div>

                <strong>
                  Experience
                </strong>

                <span>
                  {job.experience}
                </span>

              </div>


              <div>

                <strong>
                  Employment
                </strong>

                <span>
                  {job.employmentType}
                </span>

              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* CTA */}

      <section className="job-details-cta">

        <h2>
          Don't see the right role?
        </h2>

        <p>
          Explore other opportunities with HamaraShops.ai.
        </p>

        <Link to="/jobs">
          View All Jobs →
        </Link>

      </section>

    </div>
  );
}

export default JobDetails;