import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import { TagsInput } from "react-tag-input-component";
import { useMutation } from "@apollo/client";
import { ADD_AGENCY_JOB_POST } from "../../../../data/graphQL/Mutations";
import { useEffect, useState } from "react";
import SuccessConfirmation from "../../popups/SuccessConfirmation"
import ErrorConfirmation from "../../popups/ErrorConfirmation"
import { useRouter } from "next/router";


const Index = () => {

  const { push } = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) push('/login')
  }, [push])

  if (!localStorage.getItem('token')) {
    return null
  }

  const initialDate = new Date().toISOString().split("T");

  const [AddJobFunc, addJob] = useMutation(ADD_AGENCY_JOB_POST, {
    onCompleted: (data) => {
      setOpenSuccessModal(!openSuccessModal);
      return;
    },
    onError: (error) => {
      setOpenErrorModal(!openErrorModal);
      return;
    },
  });

  const [workersRepotState, setWorkersRepotState] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [openEmailErrorModal, setOpenEmailErrorModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const [skills, setSkills] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [formData, setFormData] = useState({
    saveAsATemplate: false,
    language: "",
    country: "",
    companyName: "",
    location: "",
    jobTitle: "",
    jobSector: "",
    jobDescription: "",
    requiredQualification: "",
    noOfResourcesRequired: 0,

    workingLocation: "",
    startDate: "",
    startTime: "",
    startTimeZone: "",
    endTime: "",
    endTimeZone: "",
    payRate: 0,
    payRateCurrency: "",
    priority: 1,
    safetyShoes: false,
    safetyGloves: false,
    safetyJacket: false,
  });

  console.log(formData);
  console.log(skills, requirements);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addJobRes();
  };

  const addJobRes = () => {
    AddJobFunc({
      variables: {
        jobId: null,
        saveAsATemplate: false,
        language: formData.language,
        country: formData.country,
        companyName: formData.companyName,
        location: formData.location,
        workingLocation: workersRepotState ? "" : formData.workingLocation,
        jobTitle: formData.jobTitle,
        jobSector: formData.jobSector,
        jobDescription: formData.jobDescription,
        requiredQualification: formData.requiredQualification,
        noOfResourcesRequired: formData.noOfResourcesRequired,
        skills: skills,
        requirements: requirements,

        startDate: new Date(formData.startDate),
        startTime: formData.startTime
          ? `${initialDate[0]}T${formData.startTime}:00.000Z`
          : null,
        startTimeZone: formData.startTimeZone,
        endTime: formData.endTime
          ? `${initialDate[0]}T${formData.endTime}:00.000Z`
          : null,
        endTimeZone: formData.endTimeZone,
        payRate: formData.payRate,
        payRateCurrency: formData.payRateCurrency,
        priority: formData.priority,
        safetyShoes: formData.safetyShoes,
        safetyGloves: formData.safetyGloves,
        safetyJacket: formData.safetyJacket,
      },
    });
  };


  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>

      <LoginPopup />

      <DashboardHeader />

      <MobileMenu />

      <DashboardEmployerSidebar />

      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Post a New Job!" desc="Find Your Perfect Fit: Post a Job and Attain Your Desired Results" image="../images/custom/post-job.png" />

          <>
            <form className="default-form py-5 px-5" onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="form-group col-lg-4 col-md-12">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group col-lg-4 col-md-12">
                  <label>Language *</label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                </div>

                <div className="form-group col-lg-4 col-md-12">
                  <label>Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                  </select>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                  <label>Location *</label>
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                  <label style={{ color: "transparent" }}>
                    Workers will report here
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="id1"
                      value={workersRepotState}
                      onChange={(e) => setWorkersRepotState(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="id1">
                      Workers will report here
                    </label>
                  </div>
                </div>

                {!workersRepotState && (
                  <>
                    <div className="form-group col-lg-6 col-md-12">
                      <label>Working Location</label>
                      <input
                        type="text"
                        placeholder="Working location"
                        name="workingLocation"
                        value={formData.workingLocation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12"></div>
                  </>
                )}

                <div className="form-group col-lg-6 col-md-12">
                  <label>Job Title *</label>
                  <input
                    type="text"
                    placeholder="Job title"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                  <label>Job Sector *</label>
                  <select
                    className="chosen-single form-select"
                    name="jobSector"
                    value={formData.jobSector}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="Administrative support">
                      Administrative support
                    </option>
                    <option value="Contact centre and customer care">
                      Contact centre and customer care
                    </option>
                    <option value="Engineering">Engineering</option>
                    <option value="Finance and accounting">
                      Finance and accounting
                    </option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Human resources">Human resources</option>
                    <option value="Industrial support">Industrial support</option>
                    <option value="Sales and marketing">Sales and marketing</option>
                    <option value="Skilled trades and industrial management">
                      Skilled trades and industrial management
                    </option>
                    <option value="Technologies">Technologies</option>
                    <option value="Legal">Legal</option>
                    <option value="Manufacturing">Manufacturing</option>
                  </select>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                  <label>Job Description *</label>
                  <textarea
                    placeholder="Job description"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                  <label>Qualifications</label>
                  <select
                    className="chosen-single form-select"
                    name="requiredQualification"
                    value={formData.requiredQualification}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="None">None</option>
                  </select>
                </div>

                <div className="form-group col-lg-6 col-md-12 tagsInput">
                  <label>Skills Required</label>
                  <TagsInput
                    placeHolder="Type & press enter"
                    name="skills"
                    value={skills}
                    onChange={setSkills}
                  />
                </div>

                <div className="form-group col-lg-6 col-md-12 tagsInput">
                  <label>Requirements</label>
                  <TagsInput
                    placeHolder="Type & press enter"
                    name="requirements"
                    value={requirements}
                    onChange={setRequirements}
                  />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                  <label>
                    How many people do you want to hire for this opening? *
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="No. of vacancies"
                    name="noOfResourcesRequired"
                    value={formData.noOfResourcesRequired}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div
                    className="form-group col-lg-6 col-md-12"
                    class="input-group date"
                    id="datepicker"
                    style={{ width: "48.5%" }}
                  >
                    <label style={{ fontWeight: "500", fontSize: "15px" }}>
                      Start Date
                    </label>
                    <div style={{ width: "100%" }}>
                      <input
                        style={{
                          color: "rgb(105, 90, 90)",
                          fontSize: "15px",
                          height: "60px",
                          backgroundColor: "#27A7DF1A",
                          border: "none",
                        }}
                        class="form-control"
                        id="date"
                        type="date"
                        placeholder="Required knowledge"
                        name="startDate"
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div
                    className="form-group col-lg-6 col-md-12"
                    class="input-group time"
                    id="timepicker"
                    style={{ width: "48.5%" }}
                  >
                    <label style={{ fontWeight: "500", fontSize: "15px" }}>
                      Start Time
                    </label>
                    <div style={{ width: "100%" }}>
                      <input
                        style={{
                          color: "rgb(105, 90, 90)",
                          fontSize: "15px",
                          height: "60px",
                          backgroundColor: "#27A7DF1A",
                          border: "none",
                        }}
                        class="form-control"
                        id="time"
                        type="time"
                        placeholder="Required knowledge"
                        name="startTime"
                        value={formData.startTime}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "30px" }}>
                  <div
                    className="form-group col-lg-6 col-md-12"
                    style={{ width: "48.5%" }}
                  >
                    <label>Start Timezone</label>
                    <select
                      name="startTimeZone"
                      value={formData.startTimeZone}
                      onChange={(e) =>
                        setFormData({ ...formData, [e.target.name]: e.target.value })
                      }
                    >
                      <option value="">Select</option>
                      <option value="EST">EST</option>
                      <option value="PST">PST</option>
                      <option value="CST">CST</option>
                    </select>
                  </div>
                  <div
                    className="form-group col-lg-6 col-md-12"
                    class="input-group time"
                    id="timepicker"
                    style={{ width: "48.5%", marginLeft: "40px", marginTop: "-20px" }}
                  >
                    <label
                      style={{
                        fontWeight: "500",
                        marginTop: "15px",
                        fontSize: "15px",
                      }}
                    >
                      End Time
                    </label>
                    <div style={{ width: "100%" }}>
                      <input
                        style={{
                          color: "rgb(105, 90, 90)",
                          fontSize: "15px",
                          height: "60px",
                          backgroundColor: "#27A7DF1A",
                          border: "none",
                          marginTop: "-15px",
                        }}
                        class="form-control"
                        id="time"
                        type="time"
                        placeholder="Required knowledge"
                        name="endTime"
                        value={formData.startTime}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  {/* <div
              className="form-group col-lg-6 col-md-12"
              class="input-group time"
              id="timepicker"
              style={{ marginLeft: "40px",}}
            >
              <label style={{fontWeight:"500"}}> End Time</label>
              
                <input
                  style={{
                    color: "rgb(105, 90, 90)",
                    fontSize: "15px",
                    height: "60px",
                    backgroundColor: "#27A7DF1A",
                    border:"none",
                    

                  }}
                  class="form-control"
                  id="time"
                  type="time"
                  placeholder="Required knowledge"
                  name="endTime"
                  value={formData.endTime}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
             
            </div> */}
                </div>
                <div className="form-group col-lg-6 col-md-12">
                  <label>End Timezone</label>
                  <select
                    name="endTimeZone"
                    value={formData.endTimeZone}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="EST">EST</option>
                    <option value="PST">PST</option>
                    <option value="CST">CST</option>
                  </select>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                  <label>Pay Rate</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Pay rate"
                    name="payRate"
                    value={formData.payRate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: parseFloat(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                  <label>Pay Rate Currency</label>
                  <select
                    name="payRateCurrency"
                    value={formData.payRateCurrency}
                    onChange={(e) =>
                      setFormData({ ...formData, [e.target.name]: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                  </select>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                  <label>Priority</label>
                  <select
                    name="priority"
                    defaultValue={formData.priority}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: parseFloat(e.target.value),
                      })
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                  <label>Employee Requirements</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault1"
                      name="safetyShoes"
                      checked={formData.safetyShoes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.checked,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                      Safety Shoes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault2"
                      name="safetyGloves"
                      checked={formData.safetyGloves}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.checked,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                      Safety Gloves
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault3"
                      name="safetyJacket"
                      checked={formData.safetyJacket}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.checked,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                      Safety Jacket
                    </label>
                  </div>
                </div>

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Email Address</label>
          <input type="text" name="name" placeholder="" />
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Username</label>
          <input type="text" name="name" placeholder="" />
        </div> */}

                {/* <!-- Search Select --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Specialisms </label>
          <Select
            defaultValue={[specialisms[2]]}
            isMulti
            name="colors"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div> */}

                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Job Type</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Offered Salary</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>$1500</option>
            <option>$2000</option>
            <option>$2500</option>
            <option>$3500</option>
            <option>$4500</option>
            <option>$5000</option>
          </select>
        </div> */}

                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Career Level</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div> */}

                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div> */}

                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Gender</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div> */}

                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Industry</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div> */}

                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Qualification</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-12 col-md-12">
          <label>Application Deadline Date</label>
          <input type="text" name="name" placeholder="06.04.2020" />
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select className="chosen-single form-select">
            <option>Australia</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select className="chosen-single form-select">
            <option>Melbourne</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-12 col-md-12">
          <label>Complete Address</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
          />
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
          <label>Find On Map</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
          />
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
        </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Search Location</button>
        </div> */}

                {/* <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div> */}

                {/* <!-- Input --> */}

                <div className="form-group col-lg-12 col-md-12 text-right">
                  {addJob?.loading ? (
                    <button
                      className="theme-btn btn-style-one"
                      type="button"
                      disabled
                    >
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Loading...</span>
                    </button>
                  ) : (
                    <button type="submit" className="theme-btn btn-style-one">
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>

            <SuccessConfirmation
              show={openSuccessModal}
              heading="Success!"
              text={`Congratulations! Your form has been submitted.`}
              onClickSuccess={"/employers-dashboard/manage-jobs"}
            />

            <ErrorConfirmation
              show={openErrorModal}
              heading="Error Message!"
              text={`Please fill out all the mandatory fields.`}
              onClickSuccess={() => setOpenErrorModal(!openErrorModal)}
            />
          </>

          <MenuToggler />

        </div>
      </section>

      <CopyrightFooter />
    </div>
  );
};

export default Index;
