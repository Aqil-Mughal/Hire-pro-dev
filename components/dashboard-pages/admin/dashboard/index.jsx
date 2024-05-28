import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import Chart from "react-google-charts";
import { useQuery } from "@apollo/client";
import { CANDIDATES_WITHOUT_JOB_LINK_COUNT, CANDIDATES_WITH_JOB_LINK_COUNT, GET_ALL_AGENCY_JOB_POST_COUNT, GET_ALL_JOBS_COUNT } from "../../../../data/graphQL/Queries";
import { useRouter } from "next/router";
import { useEffect } from "react";


const Index = () => {

  const { push } = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) push('/login')
  }, [push])

  if (!localStorage.getItem('token')) {
    return null
  }

  //API
  const jobSeekerCount = useQuery(CANDIDATES_WITHOUT_JOB_LINK_COUNT)
  const candidateCount = useQuery(CANDIDATES_WITH_JOB_LINK_COUNT)
  const empoyerApplicationsCount = useQuery(GET_ALL_JOBS_COUNT)
  const postedJobCount = useQuery(GET_ALL_AGENCY_JOB_POST_COUNT)


  const data = [
    ["Type", "Number"],
    ["New Posted Jobs", postedJobCount?.data?.TotalNumberOfAgencyPostedJobs],
    ["Employer Applications", empoyerApplicationsCount?.data?.TotalNumberOfJobs],
    ["Candidate Applications", candidateCount?.data?.TotalNumberOfCandidatesWithJobLink],
    ["Job Seeker Applications", jobSeekerCount?.data?.TotalNumberOfCandidatesWithoutJobLink],
  ]

  const options = {
    // title: "My Daily Activities",
    colors: ['#d397e7', '#e89371', '#209747', '#f0c274'],
    backgroundColor: '#ffffff',
    pieHole: 0.5,
  }

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>

      <LoginPopup />

      <DashboardHeader />

      <MobileMenu />

      <DashboardEmployerSidebar />

      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Hello Admin," desc="Empowering Excellence, Administering Success" image="../images/custom/dashboard.png" />

          <div className="upper-title-box-2">
            <h4 className="mb-4">Overview</h4>
            <div className="row">
              <div className="col-3">
                <div className="title-box-inner-box-2">
                  <img src="../images/custom/jobs-posted-icon.png" alt="Banner" className="pb-2" />
                  <p className="pb-1">New Jobs Posted</p>
                  <h2>{postedJobCount?.data?.TotalNumberOfAgencyPostedJobs}</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="title-box-inner-box-2">
                  <img src="../images/custom/employer-applications-icon.png" alt="Banner" className="pb-2" />
                  <p className="pb-1">Employer Applications</p>
                  <h2>{empoyerApplicationsCount?.data?.TotalNumberOfJobs}</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="title-box-inner-box-2">
                  <img src="../images/custom/candidate-applications-icon.png" alt="Banner" className="pb-2" />
                  <p className="pb-1">Candidate Applications</p>
                  <h2>{candidateCount?.data?.TotalNumberOfCandidatesWithJobLink}</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="title-box-inner-box-2">
                  <img src="../images/custom/job-seeker-applications-icon.png" alt="Banner" className="pb-2" />
                  <p className="pb-1">Job Seeker Applications</p>
                  <h2>{jobSeekerCount?.data?.TotalNumberOfCandidatesWithoutJobLink}</h2>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"100vh"}
            />
          </div>

          <MenuToggler />

        </div>
      </section>

      <CopyrightFooter />
    </div>
  );
};

export default Index;
