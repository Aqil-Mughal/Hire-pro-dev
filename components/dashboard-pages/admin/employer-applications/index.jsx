import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { GET_ALL_JOBS, GET_JOBS_BY_JOB_ID } from "../../../../data/graphQL/Queries";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import EmployerApplicationsPDF from "./EmployerApplicationsPDF.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DeleteConfirmation from "../../popups/DeleteConfirmation"
import { DELETE_JOBS_BY_JOB_ID } from "../../../../data/graphQL/Mutations";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { formatDate1, ImgorPdf, validateEmptyToDash } from '../../../utils/utils'
import { useRouter } from "next/router";


const Index = () => {

  const { push } = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) push('/login')
  }, [push])

  if (!localStorage.getItem('token')) {
    return null
  }


  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [page, setPage] = useState(0)

  const [openViewModal, setOpenViewModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [deleteID, setDeleteID] = useState("")
  const [viewID, setViewID] = useState("524706b0-a207-47b5-b035-31d537898f20")

  //Kendo
  const Operations = (props) => (
    <td className="k-command-cell">
      <button className="k-button k-button-md k-rounded-sm k-button-solid-primary k-button-solid-base k-grid-save-command" onClick={() => viewHandler(props)}>
        <i className="fa fa-eye"></i>
      </button>
      <button className="k-button k-button-md k-rounded-sm k-button-solid-warning k-button-solid-base k-grid-cancel-command" onClick={() => deleteHandler(props)}>
        <i className="fa fa-trash"></i>
      </button>
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

  //Get paginated jobs
  const jobs = useQuery(GET_ALL_JOBS, {
    variables: {
      skip: 0,
      take: 100000
    },
    onCompleted: (data) => {
      setData(data.AllJobs.map(item => {
        return {
          ...item,
          created_at: formatDate1(item.created_at),
          admin_name: item.first_name + " " + item.last_name
        }
      }))
    }
  })
  console.log(jobs)

  //Delete a job
  const deleteHandler = (item) => {
    setDeleteID(item.dataItem.job_id)
    setOpenDeleteModal(!openDeleteModal)
  }
  const [delteJobFunc, deleteJob] = useMutation(DELETE_JOBS_BY_JOB_ID)

  const onClickDeleteHandler = async () => {
    await delteJobFunc({ variables: { jobId: parseInt(deleteID) } })
    setDeleteID("")
    setOpenDeleteModal(!openDeleteModal)
    jobs.refetch()
  }

  //View a job details
  const viewHandler = (item) => {
    setViewID(item.dataItem.job_id)
    setOpenViewModal(!openViewModal)
  }
  const [viewJobFunc, viewJob] = useLazyQuery(GET_JOBS_BY_JOB_ID, {
    variables: { jobId: parseInt(viewID), pollInterval: 10 }
  })
  useEffect(() => {
    viewJobFunc()
  }, [viewID])


  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>

      <LoginPopup />

      <DashboardHeader />

      <MobileMenu />

      <DashboardEmployerSidebar />

      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Employer Applications" desc="List of your employer applications" image="../images/custom/job-seeker-applications.png" />

          <div className="tabs-box">
            <div className="widget-content py-5">
              <div className="table-outer">
                {jobs?.loading ?
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
                    loading={true}
                  >
                    <GridColumn field="job_id" title="ID" filterable={false} width={100} />
                    <GridColumn field="created_at" title="Added Date" width={150} />
                    <GridColumn field="company_name" title="Company Name" />
                    <GridColumn field="company_details_phone_number" title="Company Phone" />
                    <GridColumn field="admin_name" title="Admin Name" />
                    <GridColumn field="email" title="Admin Email" />
                    <GridColumn field="company_admin_contact_number" title="Admin Phone" />
                    <GridColumn title="Actions" cell={Operations} filterable={false} sortable={false} width={100} />
                  </Grid>
                }
              </div>
            </div>

            <Modal
              size="xl"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={openViewModal}
              className='jp-modal'
            >
              <Modal.Header id="contained-modal-title-vcenter" className="cus-bgg-cw">
                <h3>Employer Application Details</h3>
              </Modal.Header>
              <Modal.Body>
                {viewJob?.loading || viewJob?.data === undefined || viewJob?.data?.JobByJobID === null
                  ?
                  <div className="d-flex justify-content-center my-5">
                    <div className="spinner-grow text-danger" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                  :
                  <>
                    <table className='table table-bordered table-popups jp-table'>
                      <thead className="thead-light">
                        <tr>
                          <th colSpan={2} ><h5 className='jp-text-primary-bold'>Company Detials</h5></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className='text-primary-st'>Ref No</th>
                          <td>{viewJob.data.JobByJobID.job_id}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Company Name</th>
                          <td>{viewJob.data.JobByJobID.company_name}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Company Phone</th>
                          <td>{viewJob.data.JobByJobID.company_details_phone_number}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Company Logo</th>
                          <td>{ImgorPdf(viewJob.data.JobByJobID.company_logo)}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Website Link</th>
                          <td>{viewJob.data.JobByJobID.website_link}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Address</th>
                          <td>{viewJob.data.JobByJobID.address}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>City</th>
                          <td>{viewJob.data.JobByJobID.city}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>State / Province</th>
                          <td>{viewJob.data.JobByJobID.state}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Country</th>
                          <td>{viewJob.data.JobByJobID.country}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Zip Code / Postal Code</th>
                          <td>{viewJob.data.JobByJobID.zip_code}</td>
                        </tr>
                      </tbody>
                    </table>
                    <br></br>
                    <div className='jp-hr'></div>

                    <table className='table table-bordered table-popups jp-table'>
                      <thead className="thead-light">
                        <tr>
                          <th colSpan={2}><h5 className='jp-text-primary-bold'>Company Admin Detials</h5></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className='text-primary-st'>First Name</th>
                          <td>{viewJob.data.JobByJobID.first_name}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Middle Name</th>
                          <td>{validateEmptyToDash(viewJob.data.JobByJobID.middle_name)}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Last Name</th>
                          <td>{viewJob.data.JobByJobID.last_name}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Email</th>
                          <td>{viewJob.data.JobByJobID.email}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Phone</th>
                          <td>{viewJob.data.JobByJobID.company_details_phone_number}</td>
                        </tr>
                      </tbody>
                    </table>
                    <br></br>
                    <div className='jp-hr'></div>

                    <table className='table table-bordered table-popups jp-table'>
                      <thead className="thead-light">
                        <tr>
                          <th colSpan={2}><h5 className='jp-text-primary-bold'>Job Detials</h5></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className='text-primary-st'>Job Title</th>
                          <td>{validateEmptyToDash(viewJob.data.JobByJobID.job_title)}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Job Type</th>
                          <td>{viewJob.data.JobByJobID.job_type}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Required No. of Employees</th>
                          <td>{validateEmptyToDash(viewJob.data.JobByJobID.no_of_resources_required)}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Job Criteria File</th>
                          <td>{ImgorPdf(viewJob.data.JobByJobID.job_description_file)}</td>
                        </tr>
                        <tr>
                          <th className='text-primary-st'>Additional Details / Notes</th>
                          <td>{validateEmptyToDash(viewJob.data.JobByJobID.additional_details)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                }
              </Modal.Body>
              <Modal.Footer>
                <PDFDownloadLink
                  document={<EmployerApplicationsPDF viewJob={viewJob} />}
                  fileName={`Employer Application #${viewID}`}
                >
                  {viewJob && <Button variant='success'>Download form</Button>}
                </PDFDownloadLink>
                <Button variant='danger' onClick={() => setOpenViewModal(!openViewModal)}>Close</Button>
              </Modal.Footer>
            </Modal>

            <DeleteConfirmation
              show={openDeleteModal}
              heading="Delete Job"
              text={`Are you sure you want to delete the job with Ref# ${deleteID}?`}
              onClickSuccess={onClickDeleteHandler}
              onClickCancel={() => { setOpenDeleteModal(!openDeleteModal) }}
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
