import JobForm from "../components/JobForm";
import PageHeading from "../components/PageHeading";

const CreateJob = () => {
  return (
    <div className="main">
      <PageHeading name="Create Job Opening" />
      <JobForm />
    </div>
  );
};
export default CreateJob;
