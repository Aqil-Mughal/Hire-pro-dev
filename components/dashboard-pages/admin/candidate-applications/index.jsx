import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CANDIDATES_WITH_JOB_LINK } from "../../../../data/graphQL/Queries";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { formatDate1 } from "../../../utils/utils";
import { useRouter } from "next/router";


const Index = () => {

  const { push } = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) push('/login')
  }, [push])

  if (!localStorage.getItem('token')) {
    return null
  }

  //API starts here 

  //Kendo
  const Operations = (props) => (
    <td className="k-command-cell">
      <a className="k-button k-button-md k-rounded-sm k-button-solid-secondary k-button-solid-base k-grid-save-command" href={props.dataItem.resume}>
        <i className="fa fa-download text-white"></i>
      </a>
    </td>
  )

  const [data, setData] = useState([])
  const [dataState, setDataState] = useState({
    sort: [
      {
        field: "code",
        dir: "asc",
      },
    ],
    take: 10,
    skip: 0,
  })

  //Get paginated candidates
  const candidates = useQuery(CANDIDATES_WITH_JOB_LINK, {
    variables: {
      skip: 0,
      take: 100000
    },
    onCompleted: (data) => {
      setData(data.AllCandidatesWithJobLink.map(item => {
        return {
          ...item,
          created_at: formatDate1(item.created_at),
          name: item.first_name + " " + item.last_name
        }
      }))
    }
  })

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>

      <LoginPopup />

      <DashboardHeader />

      <MobileMenu />

      <DashboardEmployerSidebar />

      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Candidates List" desc="Discover Exceptional Candidates" image="../images/custom/candidate-applications.png" />

          <div className="tabs-box">
            <div className="widget-content py-5">
              <div className="table-outer">
                {candidates?.loading ?
                  <div className="d-flex justify-content-center my-5">
                    <div className="spinner-grow text-danger" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                  :
                  <Grid
                    pageable={true}
                    sortable={true}
                    filterable={true}
                    data={process(data, dataState)}
                    {...dataState}
                    onDataStateChange={(e) => {
                      setDataState(e.dataState);
                    }}
                    style={{
                      height: "500px",
                    }}
                    navigatable={true}
                  >
                    <Column field="candidate_id" title="ID" filterable={false} width={100} />
                    <Column field="created_at" title="Added Date" width={150} />
                    <Column field="name" title="Name" />
                    <Column field="email" title="Email" />
                    <Column field="phone_number" title="Phone" />
                    <Column field="city" title="City" />
                    <Column field="job_sector" title="Job Sector" />
                    <Column title="Resume" cell={Operations} filterable={false} sortable={false} width={100} />
                  </Grid>
                }
              </div>
            </div>
          </div>

          <MenuToggler />

        </div>
      </section>

      <CopyrightFooter />
    </div>
  );
};

export default Index;
