import JpFooter from "../../footer/Jpfooter";
import Header from "../../home-9/Header";
import MobileMenu from "../../header/MobileMenu";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATION_DROPDOWN, JOBS_BY_JOB_TITLE_LOCATION_DISTANCE_JOB_SECTOR } from "../../../data/graphQL/Queries";
import Select, { components, PlaceholderProps } from "react-select";
import { useRouter } from "next/router";
import CallToAction from "../../call-to-action/CallToAction";

const index = () => {

  let options = [];

  const router = useRouter();
  const { title, location, range } = router.query;

  const [titleState, setTitleState] = useState(title)
  const [locationState, setLocationState] = useState(location)
  const [rangeState, setRangeState] = useState(range || 5000)
  const [jobSectorState, setJobSectorState] = useState("")
  const [btnLoading, setBtnLoading] = useState(false)

  const getLocationDropdown = useQuery(GET_LOCATION_DROPDOWN, { variables: { address: locationState } })

  const jobByJobInfo = useQuery(JOBS_BY_JOB_TITLE_LOCATION_DISTANCE_JOB_SECTOR)

  const handleFindJobs = () => {
    setBtnLoading(true)
    jobByJobInfo.refetch({
      jobTitle: titleState,
      location: locationState,
      distance: parseInt(rangeState),
      jobSector: jobSectorState,
    }).finally(() => {
      setBtnLoading(false)
    });
  };



  console.log(jobByJobInfo)
  console.log({ titleState, locationState, jobSectorState })

  options = getLocationDropdown?.data?.addressList.map((location) => ({
    value: location,
    label: location,
  })) || [];


  return (
    <>
      <span className="header-span"></span>
      <Header />
      <MobileMenu />

      <section className="page-title style-two" data-aos="fade-up"
      style={{ backgroundImage: "url(images/background/search-jobs.png)",}}
      >
        <div className="auto-container" data-aos="fade-down">
          <>
          <h2 style={{color:"white",margin:"40px"}}>
          SEARCH JOB ACCORDING TO YOUR PREVRENCE
          </h2>
            <div className="job-search-form">
              <div className="row">
                <div className="form-group col-lg-4 col-md-12 col-sm-12" data-aos="fade-up-right">
                  <>
                    <input
                      type="text"
                      name="listing-search"
                      placeholder="Job title or keywords"
                      value={titleState}
                      onChange={(e) => setTitleState(e.target.value)}
                    />
                    <span className="icon flaticon-search-3">
                    </span>
                  </>
                </div>

                <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
                  <>
                    {/* <input
                      type="text"
                      name="listing-search"
                      placeholder="City or postcode"
                    /> */}
                    <Select
                      options={options}
                      inputValue={locationState}
                      onInputChange={(e) => setLocationState(e)}
                      onChange={(e) => setLocationState(e.value)}
                      placeholder="Location or postal code"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          margin: 0,
                          padding: 0,
                          border: "none",
                          paddingLeft: "30px",
                          height: 60,
                        }),
                      }}
                    />
                    <span className="icon flaticon-map-locator"></span>
                  </>
                </div>

                <div className="form-group col-lg-4 col-md-12 col-sm-12 location" data-aos="fade-down">
                  <>
                    <select
                      className="form-select"
                      name="jobSectorState"
                      onChange={(e) => setJobSectorState(e.target.value)}
                    >
                      <option value="">Job category</option>
                      <option value="Administrative Support">Administrative Support</option>
                      <option value="Contact Centre And Customer Care"> Contact Centre And Customer Care</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Finance And Accounting">Finance And Accounting</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Human Resources">Human Resources</option>
                      <option value="Industrial Support">Industrial Support</option>
                      <option value="Sales And Marketing">Sales And Marketing</option>
                      <option value="Skilled Trades And Industrial Management">Skilled Trades And Industrial Management</option>
                      <option value="Legal">Legal</option>
                      <option value="Manufacturing">Manufacturing</option>
                    </select>
                    <span className="icon flaticon-briefcase"></span>
                  </>
                </div>
              </div>

            </div>
            <br></br>
            <div className="form-group col-lg-12 col-md-12 col-sm-12 text-center">
              {btnLoading ?
                <button
                  className="theme-btn btn-style-nine"
                  disabled={true}
                >
                  Loading...
                </button>
                :
                <button onClick={handleFindJobs} data-aos="fade-up" className="theme-btn btn-style-two" style={{backgroundColor:"#FFFFFF",color:"#1F9747"}}>
                  Find Jobs
                </button>
              }

            </div>
          </>
        </div>
      </section>

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-12">
              <div className="ls-outer">
                <div className="row">
                  {
                    jobByJobInfo?.loading ?
                      <div className="text-center">
                        <div className="spinner-grow" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                      :
                      !jobByJobInfo?.data?.SearchAgencyPostedJobByJobTitleLocationDistanceJobsector ||
                        jobByJobInfo?.data?.SearchAgencyPostedJobByJobTitleLocationDistanceJobsector.length === 0 ?
                        <div className="text-center"><p>No items found for this search.</p></div>
                        :
                        jobByJobInfo?.data?.SearchAgencyPostedJobByJobTitleLocationDistanceJobsector.map(item =>
                          <div
                            className="job-block col-lg-6 col-md-12 col-sm-12"
                            key={item.agency_job_post_job_id}
                          >
                            <div className="inner-box">
                              <div className="content p-0">
                                <h4>
                                  <Link href={`/job-details/${item.agency_job_post_job_id}`}>
                                    {item.job_title}
                                  </Link>
                                </h4>

                                <p>{item.job_description}</p>
                                <br></br>

                                <ul className="job-other-info">
                                  <li className="time">
                                    <span><i className="fa fa-map-marker"></i> {item.location}</span>
                                  </li>
                                  <li className="privacy">
                                    <span><i className="fa fa-filter"></i> {item.job_sector}</span>
                                  </li>
                                </ul>

                              </div>
                            </div>
                          </div>
                        )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <nav className="ls-pagination">
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
      <div style={{ margin: "5%" }}>
                <CallToAction />
            </div>
      <JpFooter />
      </>
      );
    };
    
    export default index;
    // <FooterDefault footerStyle="alternate5" />
