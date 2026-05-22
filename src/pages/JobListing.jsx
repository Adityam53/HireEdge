import JobList from "../components/JobList";
import PageHeading from "../components/PageHeading";

const JobListing = () => {
  return (
    <>
      <div className="main">
        <PageHeading name="Latest Openings" />
        <JobList numberOfJobs="15" />
      </div>
    </>
  );
};
export default JobListing;
