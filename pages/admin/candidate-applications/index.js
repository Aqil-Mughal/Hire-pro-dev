import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import CandidateApplications from "../../../components/dashboard-pages/admin/candidate-applications";

const index = () => {
  return (
    <>
      <Seo pageTitle="Employeers Dashboard" />
      <CandidateApplications />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
