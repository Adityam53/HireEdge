import { Link } from "react-router-dom";
import { useJobContext } from "../contexts/JobContext";

const JobList = ({ numberOfJobs }) => {
  const { jobs, error, loading, handleDelete } = useJobContext();
  return (
    <div className="container">
      {loading && <p className="center">Loading Jobs...</p>}
      {error && <p className="center">Error fetching jobs</p>}
      <div className="card-row">
        {jobs && jobs.length > 0
          ? jobs
              .slice(0, numberOfJobs)
              .reverse()
              .map((job) => (
                <div className="card">
                  <div>
                    <h3 className="card-heading">
                      <Link to={`/jobs/${job._id}`}>{job.title}</Link>
                    </h3>{" "}
                    <div className="card-info">
                      <p className="card-text">
                        <strong>Company Name: </strong>
                        {job.company?.[0]?.companyName || "N/A"}
                      </p>
                      <p className="card-text">
                        <strong>Location: </strong>{" "}
                        {job.company?.[0]?.location || "N/A"}
                      </p>
                      <p className="card-text">
                        <strong>Job Type: </strong>
                        {job.company?.[0]?.jobType || "N/A"}
                      </p>
                      <div className="buttons">
                        <Link to={`/jobs/${job._id}`}>
                          <button className="details-btn">See Details</button>
                        </Link>{" "}
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(job._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          : "No Jobs Found."}
      </div>
    </div>
  );
};
export default JobList;
