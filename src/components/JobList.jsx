import { Link } from "react-router-dom";
import { useJobContext } from "../contexts/JobContext";

const JobList = ({ numberOfJobs }) => {
  const { jobs, error, loading, handleDelete } = useJobContext();

  return (
    <div className="container">
      {loading && <p className="center">Loading Jobs...</p>}

      {error && <p className="center">Error fetching jobs</p>}

      {jobs && jobs.length > 0 ? (
        <div className="card-row">
          {jobs
            .slice(0, numberOfJobs)
            .reverse()
            .map((job) => (
              <div key={job._id} className="card">
                <div className="card-body">
                  <h3>
                    <Link to={`/jobs/${job._id}`}>{job.title}</Link>
                  </h3>

                  <h4>{job.company?.[0]?.companyName}</h4>

                  <p>📍 {job.company?.[0]?.location}</p>

                  <span className="job-type">{job.company?.[0]?.jobType}</span>

                  <div className="buttons">
                    <Link to={`/jobs/${job._id}`}>
                      <button className="details-btn">View Details</button>
                    </Link>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(job._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        !loading && <p className="center">No Jobs Found.</p>
      )}
    </div>
  );
};

export default JobList;
