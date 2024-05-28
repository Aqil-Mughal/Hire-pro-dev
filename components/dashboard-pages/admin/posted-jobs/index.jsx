import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { GET_AGENCY_JOB_POST_BY_AGENCY_JOB_POST_ID, GET_ALL_AGENCY_JOB_POSTS, UPDATE_AGENCY_JOB_POST_PRIORITY_BY_AGENCY_JOB_POST_ID } from "../../../../data/graphQL/Queries";
import { DELETE_AGENCY_JOB_POST } from "../../../../data/graphQL/Mutations";
import { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { formatDate, formatDate1, formatTimeFromDB, validateEmptyToDash } from "../../../utils/utils";
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
  const [openViewModal, setOpenViewModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [deleteID, setDeleteID] = useState("")
  const [viewData, setViewData] = useState("")
  const [priorityState, setPriorityState] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)


  //Kendo
  const Operations = (props) => (
    <td className="k-command-cell">
      <button
        className="k-button k-button-md k-rounded-sm k-button-solid-primary k-button-solid-base k-grid-save-command"
        onClick={() => viewHandler(props)}
        disabled={buttonDisabled}
      >
        <i className="fa fa-eye"></i>
      </button>
      <button
        className="k-button k-button-md k-rounded-sm k-button-solid-warning k-button-solid-base k-grid-cancel-command"
        onClick={() => deleteHandler(props)}
        disabled={buttonDisabled}
      >
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

  //Get all paginated jobs
  const agencyJobs = useQuery(GET_ALL_AGENCY_JOB_POSTS, {
    variables: {
      skip: 0,
      take: 100000
    },
    // fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setData(data.AllAgencyJobPosts.map(item => {
        return { ...item, created_at: formatDate1(item.created_at) }
      }))
    }
  })

  //Delete a job
  const [deltePostFunc, deletePost] = useMutation(DELETE_AGENCY_JOB_POST)

  const deleteHandler = (item) => {
    setDeleteID(item.dataItem.agency_job_post_job_id)
    setOpenDeleteModal(!openDeleteModal)
  }

  const onClickDeleteHandler = async () => {
    setButtonDisabled(true)
    await deltePostFunc({ variables: { agencyJobPostJobId: deleteID } })
    setDeleteID("")
    setOpenDeleteModal(!openDeleteModal)
    agencyJobs.refetch()
    setButtonDisabled(false)
  }


  //View a job
  const [viewPostFunc, viewPost] = useLazyQuery(GET_AGENCY_JOB_POST_BY_AGENCY_JOB_POST_ID)

  const viewHandler = async (item) => {
    setButtonDisabled(true)
    const viewPostRes = await viewPostFunc({ variables: { agencyJobPostJobId: item.dataItem.agency_job_post_job_id, pollInterval: 1000 } })
    setViewData(viewPostRes.data.AgencyJobPostByAgencyJobPostID)
    setOpenViewModal(!openViewModal)
    setButtonDisabled(false)
  }

  //Update Job priority
  const [updatePriorityFunc, updatePriority] = useMutation(UPDATE_AGENCY_JOB_POST_PRIORITY_BY_AGENCY_JOB_POST_ID, {
    onCompleted: (data) => {
      agencyJobs.refetch()
      viewPost.refetch()
      setOpenViewModal(!openViewModal)
    }
  })

  const handlePriorityState = async (e, row) => {
    setButtonDisabled(true)
    await updatePriorityFunc({ variables: { agencyJobPostJobId: parseInt(viewData.agency_job_post_job_id), priority: parseInt(e.target.value) } })
    setButtonDisabled(false)
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
          <BreadCrumb title="Manage Jobs" desc="Streamline, Organize, succeed: Managing Jobs with Ease" image="../images/custom/posted-jobs.png" />

          <div className="tabs-box">
            <div className="widget-content py-5">
              <div className="table-outer">
                {agencyJobs?.loading ?
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
                    // data={dataState}
                    onDataStateChange={(e) => {
                      setDataState(e.dataState);
                    }}
                    style={{
                      height: "500px",
                    }}
                    navigatable={true}
                  >
                    <Column field="agency_job_post_job_id" title="ID" filterable={false} width={100} />
                    <Column field="created_at" title="Added Date" width={150} />
                    <Column field="priority" title="Priority" width={125} />
                    <Column field="company_name" title="Company Name" />
                    <Column field="job_title" title="Job Title" />
                    <Column field="job_sector" title="Job Sector" />
                    <Column title="Actions" cell={Operations} filterable={false} sortable={false} width={100} />
                  </Grid>
                }
              </div>

              <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={openViewModal}
                className='jp-modal'
              >
                <Modal.Header id="contained-modal-title-vcenter" className="cus-bgg-cw">
                  <h3>View Job Details</h3>
                </Modal.Header>
                <Modal.Body>
                  {!viewData || viewData === undefined || viewData === null
                    ?
                    <div className="d-flex justify-content-center my-5" >
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                    :
                    <>
                      <table className='table table-bordered table-popups jp-table'>
                        <thead className="thead-light">
                          <tr>
                            <th><h5 className='jp-text-primary-bold'>Company Details</h5></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className='text-primary-st'>Priority</th>
                            <td>
                              <select
                                name="priorityState"
                                value={parseInt(viewData.priority)}
                                onChange={handlePriorityState}
                                disabled={buttonDisabled}
                              >
                                <option value={0}>--Select an option--</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                              </select>
                            </td>
                          </tr>

                          <tr>
                            <th className='text-primary-st'>Ref No</th>
                            <td>{viewData.agency_job_post_job_id}</td>
                          </tr>

                          <tr>
                            <th className='text-primary-st'>Company Name</th>
                            <td>{viewData.company_name}</td>
                          </tr>

                          <tr>
                            <th className='text-primary-st'>Job Title</th>
                            <td>{viewData.job_title}</td>
                          </tr>

                          <tr>
                            <th className='text-primary-st'>Location</th>
                            <td>{viewData.location}</td>
                          </tr>

                          <tr>
                            <th className='text-primary-st'>Working Location</th>
                            <td>{viewData.working_location}</td>
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
                            <th className='text-primary-st'>Language</th>
                            <td>{viewData.language}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Country</th>
                            <td>{viewData.country}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Job Sector</th>
                            <td>{viewData.job_sector}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Job Description</th>
                            <td>{viewData.job_description}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Required Qualification</th>
                            <td>{validateEmptyToDash(viewData.required_qualification)}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Skills</th>
                            <td>{validateEmptyToDash(viewData.agencyJobPostskills.map((item, key) => (key + 1) + ". " + (item.description) + "  "))}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Requirements</th>
                            <td>{validateEmptyToDash(viewData.agencyJobPostRequirements.map((item, key) => (key + 1) + ". " + item.description + "  "))}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Resources Required</th>
                            <td>{validateEmptyToDash(viewData.no_of_resources_required)}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Start Date</th>
                            <td>{formatDate(viewData.start_date)}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Start Time</th>
                            <td>{formatTimeFromDB(viewData.start_time) + " " + validateEmptyToDash(viewData.start_time_zone)}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>End Time</th>
                            <td>{formatTimeFromDB(viewData.end_time) + " " + validateEmptyToDash(viewData.end_time_zone)}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Pay Rate</th>
                            <td>{validateEmptyToDash(viewData.pay_rate) + ' ' + validateEmptyToDash(viewData.pay_rate_currency)}</td>
                          </tr>
                          <tr>
                            <th className='text-primary-st'>Employee Requirements</th>
                            <td>
                              <div>
                                Safety Shoes: <span className=' text-primary-st'>{viewData.safety_shoes ? 'Yes' : 'No'}</span>
                              </div>
                              <div>
                                Safety Gloves: <span className=' text-primary-st'>{viewData.safety_gloves ? 'Yes' : 'No'}</span>
                              </div>
                              <div>
                                Safety Jacket: <span className=' text-primary-st'>{viewData.safety_jacket ? 'Yes' : 'No'}</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  }
                </Modal.Body>
                <Modal.Footer>
                  {/* <PDFDownloadLink
                document={<PostedJobsPDF viewPost={viewPost} />}
                fileName={`Posted Job #${viewID}`}
              >
                {viewPost && <Button variant='success'>Download form</Button>}
              </PDFDownloadLink> */}
                  <Button variant='danger' onClick={() => { setOpenViewModal(!openViewModal) }}>Close</Button>
                </Modal.Footer>
              </Modal>

              <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter1"
                centered
                show={openDeleteModal}
                className='jp-modal'
              >
                <Modal.Header id="contained-modal-title-vcenter1" className="cus-bgg-cw"><h3>Delete Job</h3></Modal.Header>
                <Modal.Body>Are you sure you want to delete the job with Ref# {deleteID}?</Modal.Body>
                <Modal.Footer>
                  <Button variant='success' disabled={buttonDisabled} onClick={onClickDeleteHandler}>Delete</Button>
                  <Button variant='danger' onClick={() => { setOpenDeleteModal(!openDeleteModal) }}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* <nav className="ls-pagination mb-5">
            <ul>
              <li className="prev">
                <a href="#">
                  <i className="fa fa-arrow-left"></i>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#" className="current-page">
                  2
                </a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li className="next">
                <a href="#">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </li>
            </ul>
          </nav> */}

            </div>
            {/* End table widget content */}
          </div>

          <MenuToggler />

        </div>
      </section>

      <CopyrightFooter />
    </div>
  );
};

export default Index;
