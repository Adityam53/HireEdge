import { useParams } from "react-router-dom";
import { useJobContext } from "../contexts/JobContext";

const JobDetails = () => {
  const { jobs } = useJobContext();
  const { jobId } = useParams();

  const jobDetails = jobs.find((job) => job._id === jobId);

  return (
    <div className="container main">
      {jobDetails ? (
        <div className="job-detail-wrapper">
          <div className="job-detail-card">
            <div className="job-detail-header">
              <h1>{jobDetails.title}</h1>
              <span className="job-type-badge">
                {jobDetails.company[0].jobType}
              </span>
            </div>

            <div className="job-detail-grid">
              <div className="detail-item">
                <h4>Company</h4>
                <p>{jobDetails.company[0].companyName}</p>
              </div>

              <div className="detail-item">
                <h4>Location</h4>
                <p>{jobDetails.company[0].location}</p>
              </div>

              <div className="detail-item">
                <h4>Salary</h4>
                <p>₹ {jobDetails.company[0].salary}</p>
              </div>

              <div className="detail-item">
                <h4>Employment Type</h4>
                <p>{jobDetails.company[0].jobType}</p>
              </div>
            </div>

            <div className="detail-section">
              <h3>Job Description</h3>
              <p>{jobDetails.company[0].jobDescription}</p>
            </div>

            <div className="detail-section">
              <h3>Qualifications</h3>

              <ul className="qualification-list">
                {jobDetails.company[0].qualifications.map((qua, index) => (
                  <li key={index}>{qua}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p className="center">Job Not Found</p>
      )}
    </div>
  );
};

export default JobDetails;
