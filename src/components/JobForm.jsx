import { useJobContext } from "../contexts/JobContext";

const JobForm = () => {
  const { formData, handleChange, handleSubmit } = useJobContext();

  return (
    <div className="form-container">
      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title:</label>
          <input
            type="text"
            placeholder="Enter job title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            placeholder="Enter company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            placeholder="Enter job location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Salary:</label>
          <input
            type="number"
            placeholder="Enter salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Job Type:</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">Select job type</option>
            <option value="Full-time (On-site)">Full-time (On-site)</option>
            <option value="Part-time (On-site)">Part-time (On-site)</option>
            <option value="Full-time (Remote)">Full-time (Remote)</option>
            <option value="Part-time (Remote)">Part-time (Remote)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Job Description:</label>
          <textarea
            name="jobDescription"
            rows="3"
            value={formData.jobDescription}
            onChange={handleChange}
            placeholder="Enter job description"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Job Qualifications:</label>
          <textarea
            name="qualifications"
            rows="3"
            placeholder="Separate qualifications with commas"
            value={formData.qualifications}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Post Job
        </button>
      </form>
    </div>
  );
};
export default JobForm;
