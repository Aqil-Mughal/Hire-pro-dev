import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import JobList from "../components/job-listing-pages/job-list";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V1" />
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
