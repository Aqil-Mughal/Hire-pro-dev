import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import PostedJobs from "../../../components/dashboard-pages/admin/posted-jobs";

const index = () => {
  return (
    <>
      <Seo pageTitle="Employeers Dashboard" />
      <PostedJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
