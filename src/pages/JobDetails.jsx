import { useParams } from "react-router-dom";
import { useJobContext } from "../contexts/JobContext";

const JobDetails = () => {
  const { jobs } = useJobContext();
  const { jobId } = useParams();
  const jobDetails = jobs.find((job) => job._id === jobId);
  console.log(jobDetails);

  return (
    <div className="container main">
      {jobDetails ? (
        <div className="card-detail-align">
          <div className="card-detail">
            <h1 className="card-heading">{jobDetails.title}</h1>
            <div className="card-info">
              <p className="card-text">
                <strong>Company Name:</strong>{" "}
                {jobDetails.company[0].companyName}
              </p>
              <p className="card-text">
                <strong>Location:</strong> {jobDetails.company[0].location}
              </p>
              <p className="card-text">
                <strong>Salary:</strong> {jobDetails.company[0].salary}
              </p>
              <p className="card-text">
                <strong>Job Type:</strong> {jobDetails.company[0].jobType}
              </p>
              <p className="card-text">
                <strong>Description:</strong>{" "}
                {jobDetails.company[0].jobDescription}
              </p>
              <p className="card-text">
                <strong>Qualifications:</strong>
                <ol className="card-text-list">
                  {jobDetails.company[0].qualifications.map((qua) => (
                    <li>{qua}</li>
                  ))}
                </ol>
              </p>
            </div>
          </div>
        </div>
      ) : (
        "Job Not found"
      )}
    </div>
  );
};
export default JobDetails;
