import { Link } from "react-router-dom";
import JobList from "../components/JobList";

const Landing = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1>Connecting Talent With Opportunity</h1>

          <p>
            HireEdge helps companies find exceptional candidates and empowers
            professionals to discover meaningful career opportunities.
          </p>

          <div className="hero-buttons">
            <Link to="/jobs" className="primary-btn">
              Browse Jobs
            </Link>

            <Link to="/createJob" className="secondary-btn">
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="">
          <div className="featured-header container">
            <h2>Explore Open Roles</h2>

            <Link to="/jobs" className="view-all-link">
              View All →
            </Link>
          </div>

          <JobList numberOfJobs={6} />
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="section-heading">
            <h2>Why Choose HireEdge</h2>

            <p>
              A modern hiring platform designed to help employers connect with
              skilled professionals and enable candidates to discover rewarding
              career opportunities.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">✓</div>

              <h3>Verified Opportunities</h3>

              <p>
                Explore curated openings from trusted companies with transparent
                requirements and clearly defined responsibilities.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">⚡</div>

              <h3>Faster Hiring</h3>

              <p>
                Employers can publish vacancies quickly, manage applicants
                efficiently, and connect with qualified candidates faster.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">📈</div>

              <h3>Career Growth</h3>

              <p>
                Discover opportunities across technology, design, marketing,
                finance, operations, and many other growing industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
