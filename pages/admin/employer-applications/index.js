import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import EmployerApplications from "../../../components/dashboard-pages/admin/employer-applications";

const index = () => {
  return (
    <>
      <Seo pageTitle="Employeers Dashboard" />
      <EmployerApplications />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
