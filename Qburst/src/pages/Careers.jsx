import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Careers.css";
import ApiService from "../services/ApiService";

function Careers() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await ApiService.getJobs();

      console.log("Jobs from backend:", data);

      setJobs(data);
    } catch (err) {
      console.error("Error loading jobs:", err);
      setError("Unable to load job opportunities.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="careers-page">

      {/* HERO */}
      <section className="careers-hero">
        <div className="careers-container">

          <p className="careers-label">
            CAREERS AT HAMARASHOPS.AI
          </p>

          <h1>
            Build your
            <span> next chapter.</span>
          </h1>

          <p className="careers-hero-text">
            Join a team that believes technology can create meaningful
            change. Work with modern technologies, solve real problems
            and grow with us.
          </p>

          <a
            href="#open-positions"
            className="careers-hero-button"
          >
            Explore Opportunities →
          </a>

        </div>
      </section>


      {/* WHY JOIN US */}
      <section className="careers-intro">

        <div className="careers-container careers-intro-grid">

          <div>
            <p className="careers-section-label">
              WHY HAMARASHOPS.AI
            </p>

            <h2>
              Work on ideas
              <br />
              that matter.
            </h2>
          </div>

          <div className="careers-intro-content">

            <p>
              At HamaraShops.ai, we believe great technology starts with
              great people. We create an environment where developers,
              designers and technology professionals can learn, collaborate
              and build meaningful solutions.
            </p>

            <p>
              Whether you are starting your career or looking for your
              next challenge, there is always an opportunity to learn
              something new.
            </p>

          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section className="careers-benefits">

        <div className="careers-container">

          <div className="benefits-heading">

            <div>
              <p className="careers-section-label">
                LIFE AT HAMARASHOPS.AI
              </p>

              <h2>
                Grow with
                <br />
                the team.
              </h2>
            </div>

            <p>
              We focus on continuous learning, collaboration and creating
              opportunities for people to grow their technical and
              professional skills.
            </p>

          </div>


          <div className="benefits-grid">

            <div className="benefit-card">
              <span>01</span>
              <h3>Continuous Learning</h3>
              <p>
                Learn modern technologies and strengthen your technical
                skills through real projects.
              </p>
            </div>

            <div className="benefit-card">
              <span>02</span>
              <h3>Modern Technology</h3>
              <p>
                Work with current frameworks, cloud platforms, AI and
                modern development practices.
              </p>
            </div>

            <div className="benefit-card">
              <span>03</span>
              <h3>Collaborative Culture</h3>
              <p>
                Work with people who share knowledge, ideas and different
                perspectives.
              </p>
            </div>

            <div className="benefit-card">
              <span>04</span>
              <h3>Career Growth</h3>
              <p>
                Take ownership, explore new areas and build a career around
                your strengths.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* JOBS */}
      <section
        className="jobs-section"
        id="open-positions"
      >

        <div className="careers-container">

          <div className="jobs-heading">

            <div>
              <p className="careers-section-label">
                OPEN POSITIONS
              </p>

              <h2>
                Find your
                <br />
                next opportunity.
              </h2>
            </div>

            <p>
              Explore our current opportunities and find a role that matches
              your skills, interests and career goals.
            </p>

          </div>


          {/* LOADING */}
          {loading && (
            <div className="jobs-message">
              Loading job opportunities...
            </div>
          )}


          {/* ERROR */}
          {!loading && error && (
            <div className="jobs-message">
              {error}
            </div>
          )}


          {/* JOB LIST */}
          {!loading && !error && (
            <div className="jobs-list">

              {jobs.map((job) => (

                <article
                  className="job-card"
                  key={job.id}
                >

                  <div className="job-number">
                    {String(job.id).padStart(2, "0")}
                  </div>


                  <div className="job-main">

                    <div className="job-top">

                      <div>

                        <h3>
                          {job.title}
                        </h3>

                        <p className="job-department">
                          {job.department || "Engineering"}
                        </p>

                      </div>

                      <span className="job-type">
                        {job.employmentType}
                      </span>

                    </div>


                    <div className="job-info">

                      <span>
                        📍 {job.location}
                      </span>

                      <span>
                        ◷ {job.experience}
                      </span>

                    </div>


                    <div className="job-skills">

                      {job.skills &&
                        job.skills.split(",").map((skill) => (

                          <span key={skill}>
                            {skill.trim()}
                          </span>

                        ))
                      }

                    </div>

                  </div>


                  <Link
                    to={`/jobs/${job.id}`}
                    className="job-apply"
                  >
                    View Job →
                  </Link>

                </article>

              ))}

            </div>
          )}

        </div>

      </section>


      {/* CAREER CTA */}
      <section className="careers-cta">

        <p className="careers-section-label">
          DON'T SEE THE RIGHT ROLE?
        </p>

        <h2>
          Your skills could
          <br />
          still be a great fit.
        </h2>

        <p>
          Send us your profile and let us know how you can contribute
          to HamaraShops.ai.
        </p>

        <Link
          to="/contact"
          className="careers-cta-button"
        >
          Send Your Profile →
        </Link>

      </section>

    </div>
  );
}

export default Careers;