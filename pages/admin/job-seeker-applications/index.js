import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import JobSeekerApplications from "../../../components/dashboard-pages/admin/job-seeker-applications";

const index = () => {
  return (
    <>
      <Seo pageTitle="Employeers Dashboard" />
      <JobSeekerApplications />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
