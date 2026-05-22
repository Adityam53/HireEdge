import JobForm from "../components/JobForm";
import PageHeading from "../components/PageHeading";

const CreateJob = () => {
  return (
    <div className="main">
      <PageHeading name="Start Hiring" />
      <JobForm />
    </div>
  );
};
export default CreateJob;
