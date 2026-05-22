import JobList from "../components/JobList";
import PageHeading from "../components/PageHeading";
import Search from "../components/Search";

const Jobs = () => {
  return (
    <>
      <div className="main">
        <PageHeading name="Find Your Next Role" />
        <Search />
        <JobList />
      </div>
    </>
  );
};
export default Jobs;
