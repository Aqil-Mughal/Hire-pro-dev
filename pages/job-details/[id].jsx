import dynamic from "next/dynamic";
import jobs from "../../data/job-featured";
import LoginPopup from "../../components/common/form/login/LoginPopup";
import FooterDefault from "../../components/footer/common-footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import MobileMenu from "../../components/header/MobileMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/common/Seo";
import JobOverView from "../../components/job-single-pages/job-overview/JobOverView";
import JobSkills from "../../components/job-single-pages/shared-components/JobSkills";
import SocialTwo from "../../components/job-single-pages/social/SocialTwo";
import JobDetailsDescriptions from "../../components/job-single-pages/shared-components/JobDetailsDescriptions";
import Contact from "../../components/job-single-pages/shared-components/Contact";
import RelatedJobs3 from "../../components/job-single-pages/related-jobs/RelatedJobs3";
import ApplyJobModalContent from "../../components/job-single-pages/shared-components/ApplyJobModalContent";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AGENCY_JOB_POST_BY_AGENCY_JOB_POST_ID } from "../../data/graphQL/Queries";
import { APPLY_FOR_JOB_WITH_JOB_ID } from "../../data/graphQL/Mutations";
import { validateEmptyToDash } from "../../components/utils/utils"
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";


const JobSingleDynamicV2 = () => {
  const router = useRouter();
  const [candidates, setCandidates] = useState({});
  const id = router.query.id;

  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const agencyJobPostByAgencyJobId = useQuery(
    GET_AGENCY_JOB_POST_BY_AGENCY_JOB_POST_ID,
    {
      variables: {
        agencyJobPostJobId: parseInt(id),
      },
    }
  );

  const job = agencyJobPostByAgencyJobId?.data?.AgencyJobPostByAgencyJobPostID;

  const [ApplyJob, { data, loading, error }] = useMutation(
    APPLY_FOR_JOB_WITH_JOB_ID,
    {
      onCompleted: (data) => {
        setOpenSuccessModal(!openSuccessModal);
        return;
      },
      onError: (error) => {
        setOpenErrorModal(!openErrorModal);
        return;
      },
    }
  );


  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    jobSector: "",
    resume: null,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    applyJobRes();
  };
  const handleFormClear = (e) => {
    e.preventDefault()
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      jobSector: "",
      resume: null,
    })
  }
  console.log({ data, error, loading });
  console.log(formData);

  const applyJobRes = () => {
    ApplyJob({
      variables: {
        agencyJobPostJobId: parseInt(id),
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phone,
        city: formData.city,
        jobSector: formData.jobSector,
        resume: formData.resume,
      },
    });
  };

  // useEffect(() => {
  //   if (!id) <h1>Loading...</h1>;
  //   else setCandidates(candidates?.find((item) => item.id == id));
  //   return () => { };
  // }, [id]);

  return (
    <>
      <Seo pageTitle="Job Single Dyanmic V2" />

      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}

      {agencyJobPostByAgencyJobId.loading ? (
        <div class="d-flex justify-content-center my-5">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <section className="job-detail-section">
          <div className="job-detail-outer">
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-lg-8 col-md-12 col-sm-12">
                  <div className="job-block-outer">
                    <div className="job-block-seven">
                      <div className="inner-box">
                        <div className="content">
                          {/* <span className="company-logo">
                          <img src={company?.logo} alt="logo" />
                        </span> */}
                          <h4>{job.job_title}</h4>

                          <ul className="job-info">
                            {/* <li>
                              <span className="icon flaticon-expiry"></span>
                              #{job.agency_job_post_job_id}
                            </li> */}
                            {/* <li>
                              <span className="icon flaticon-briefcase"></span>
                              Semens
                            </li> */}
                            {/* compnay info */}
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              {job.country}
                            </li>
                            {/* location info */}
                            {/* <li>
                              <span className="icon flaticon-clock-3"></span>{" "}
                              Time
                            </li> */}
                            {/* time info */}
                            {/* <li>
                              <span className="icon flaticon-money"></span>{" "}
                              Salary
                            </li> */}
                            {/* salary info */}
                          </ul>
                          {/* End .job-info */}

                          {/* <ul className="job-other-info">
                            {company?.jobType?.map((val, i) => (
                              <li key={i} className={`${val.styleClass}`}>
                                {val.type}
                              </li>
                            ))}
                          </ul> */}
                          {/* End .job-other-info */}
                        </div>
                        {/* End .content */}
                      </div>
                    </div>
                    {/* <!-- Job Block --> */}
                  </div>
                  {/* End job-block-outer */}

                  <div className="job-detail">
                    <h4>Job Description</h4>
                    <p>
                      {job.job_description}
                    </p>
                    <h4>Skills</h4>
                    <ul className="list-style-three">
                      {validateEmptyToDash(
                        job.agencyJobPostskills.map((item, key) => (
                          <li>{item.description}</li>
                        ))
                      )}
                    </ul>
                    <h4>Requirements</h4>
                    <ul className="list-style-three">
                      {validateEmptyToDash(
                        job.agencyJobPostRequirements.map((item, key) => (
                          <li>{item.description}</li>
                        ))
                      )}
                    </ul>
                  </div>

                  {/* <div className="other-options">
                    <div className="social-share">
                      <h5>Share this job</h5>
                      <SocialTwo />
                    </div>
                  </div> */}
                  {/* <!-- Other Options --> */}

                  {/* <div className="related-jobs">
                    <div className="title-box">
                      <h3>Related Jobs</h3>
                      <div className="text">
                        2020 jobs live - 293 added today.
                      </div>
                    </div>

                    <div className="row">
                      <RelatedJobs3 />
                    </div>
                  </div> */}
                  <div className="">
                    <h4 className="widget-title">Apply for this job</h4>
                    <div className="widget-content">
                      <div className="default-form">
                        <form>
                          <div className="row clearfix">

                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                              <div className="response"></div>
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                              <label>First Name *</label>
                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                className="username"
                                placeholder="First Name *"
                                required
                              />
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                              <label>Middle Name</label>
                              <input
                                type="text"
                                name="middleName"
                                value={formData.middleName}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                className="username"
                                placeholder="Middle Name"
                                required
                              />
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                              <label>Last Name *</label>
                              <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                className="username"
                                placeholder="Last Name *"
                                required
                              />
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                              <label>Email *</label>
                              <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                className="username"
                                placeholder="Email *"
                                required
                              />
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                              <label>Phone Number *</label>
                              <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                className="username"
                                placeholder="Phone Number *"
                                required
                              />
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                              <label>City *</label>
                              <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                className="username"
                                placeholder="City *"
                                required
                              />
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                              <label>Select a Job Sector *</label>
                              <select
                                className="username"
                                name="jobSector"
                                defaultValue={formData.jobSector}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                required
                              >
                                <option value="">Select a Job Sector</option>
                                <option value="General Labour">General Labour</option>
                                <option value="Forklift Operators">
                                  Forklift Operators
                                </option>
                                <option value="Assemblers">Assemblers</option>
                                <option value="Quality Control">Quality Control</option>
                                <option value="Shipping & Receiving">
                                  Shipping & Receiving
                                </option>
                                <option value="Light Industrial">Light Industrial</option>
                                <option value="Production Line Support">
                                  Production Line Support
                                </option>
                                <option value="Warehouse Clerk">Warehouse Clerk</option>
                                <option value="Office Admin">Office Admin</option>
                                <option value="Meat Trimmers">Meat Trimmers</option>
                                <option value="Machine Operator">Machine Operator</option>
                                <option value="Line Lead">Line Lead</option>
                                <option value="Janitorial">Janitorial</option>
                                <option value="Lumpers">Lumpers</option>
                                <option value="Heavy Lifting">Heavy Lifting</option>
                                <option value="Receptionist">Receptionist</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>

                            <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                              <label>Upload Resume *</label>
                              <div className="cus-file-input-container">
                                <input type="text" className="username cus-file-input" value={formData.resume ? formData.resume.name : ''} readOnly placeholder="No file selected" />
                                <label htmlFor="file" className="theme-btn btn-style-one cus-file-input-button">Browse</label>
                                <input type="file" id="file" name="resume" className="cus-file-input-hidden"
                                  onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 form-group text-end">
                              {loading ?
                                <button
                                  className="theme-btn btn-style-nine"
                                  disabled
                                >
                                  Loading...
                                </button>
                                :
                                <>
                                  <button
                                    className="theme-btn btn-style-ten cus-mr-10"
                                    id="submit"
                                    onClick={handleFormClear}
                                  >
                                    Clear
                                  </button>
                                  <button
                                    className="theme-btn btn-style-one"
                                    id="submit"
                                    onClick={handleFormSubmit}
                                  >
                                    Submit
                                  </button>
                                </>
                              }
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar">
                    {/* <div className="btn-box">
                      <a
                        href="#"
                        className="theme-btn btn-style-one"
                        data-bs-toggle="modal"
                        data-bs-target="#applyJobModal"
                      >
                        Apply For Job
                      </a>
                    </div> */}
                    {/* End apply for job btn */}

                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="applyJobModal"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="apply-modal-content modal-content">
                          <div className="text-center">
                            <h3 className="title">Apply for this job</h3>
                            <button
                              type="button"
                              className="closed-modal"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          {/* End modal-header */}

                          <ApplyJobModalContent />
                          {/* End PrivateMessageBox */}
                        </div>
                        {/* End .send-private-message-wrapper */}
                      </div>
                    </div>
                    {/* End .modal */}

                    <div className="sidebar-widget">
                      {/* <!-- Job Overview --> */}
                      <h4 className="widget-title">Job Overview</h4>
                      <div className="widget-content">
                        <ul className="job-overview">
                          {/* <li>
                            <i className="icon icon-calendar"></i>
                            <h5>Date Posted:</h5>
                            <span>Posted 1 hours ago</span>
                          </li> */}
                          <li>
                            <i className="icon icon-expiry"></i>
                            <h5>Job Reference No:</h5>
                            <span>#{job.agency_job_post_job_id}</span>
                          </li>
                          <li>
                            <i className="icon icon-location"></i>
                            <h5>Location:</h5>
                            <span>{job.location}</span>
                          </li>
                          <li>
                            <i className="icon icon-degree"></i>
                            <h5>Qualification:</h5>
                            <span>{job.required_qualification}</span>
                          </li>
                          <li>
                            <i className="icon icon-language"></i>
                            <h5>Language</h5>
                            <span>{job.language}</span>
                          </li>
                          <li>
                            <i className="icon icon-user-2"></i>
                            <h5>Required No. of Resources:</h5>
                            <span>{job.no_of_resources_required}</span>
                          </li>
                        </ul>
                      </div>

                      {/* <h4 className="widget-title">Job Skills</h4>
                      <div className="widget-content">
                        <JobSkills />
                      </div> */}
                      {/* <!-- Job Skills --> */}
                    </div>
                    {/* End .sidebar-widget */}

                    {/* <div className="sidebar-widget company-widget">
                      <div className="widget-content">
                        <div className="company-title">
                          <div className="company-logo">
                            <img src={company?.logo} alt="resource" />
                          </div>
                          <h5 className="company-name">Semens</h5>
                          <a href="#" className="profile-link">
                            View company profile
                          </a>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="sidebar-widget contact-widget">
                      <h4 className="widget-title">Contact Us</h4>
                      <div className="widget-content">
                        <div className="default-form">
                          <Contact />
                        </div>
                      </div>
                    </div> */}
                  </aside>
                </div>

              </div>
            </div>
          </div>
          {/* <!-- job-detail-outer--> */}
        </section >
      )}
      {/* <!-- End Job Detail Section --> */}

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter1"
        centered
        show={openErrorModal}
        className="jp-modal"
      >
        <Modal.Header id="contained-modal-title-vcenter1" className="cus-bgg-cw">
          <h3>Message</h3>
        </Modal.Header>
        <Modal.Body>Please fill out all the mandatory fields.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => setOpenErrorModal(!openErrorModal)}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter1"
        centered
        show={openSuccessModal}
        className="jp-modal"
      >
        <Modal.Header id="contained-modal-title-vcenter1" className="cus-bgg-cw">
          <h3>Success</h3>
        </Modal.Header>
        <Modal.Body>Congratulations! Your form has been submitted.</Modal.Body>
        <Modal.Footer>
          <Link href="/">
            <Button variant="success">OK</Button>
          </Link>
        </Modal.Footer>
      </Modal>

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(JobSingleDynamicV2), {
  ssr: false,
});
