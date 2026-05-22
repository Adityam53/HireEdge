import { Link } from "react-router-dom";
import JobList from "../components/JobList";

const Landing = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>
          <p>
            Discover thousands of opportunities from top companies worldwide.
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

      <section className="stats">
        <div className="stat-card">
          <h2>5000+</h2>
          <p>Active Jobs</p>
        </div>

        <div className="stat-card">
          <h2>1200+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-card">
          <h2>25k+</h2>
          <p>Candidates</p>
        </div>
      </section>

      <section className="latest-jobs">
        <h2 className="section-title container">Featured Opportunities</h2>
        <JobList numberOfJobs={6} />
      </section>
    </>
  );
};

export default Landing;
