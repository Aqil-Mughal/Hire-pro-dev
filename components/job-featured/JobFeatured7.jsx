import Link from "next/link";
import jobFeatured from "../../data/job-featured";
import { useQuery } from "@apollo/client";
import { GET_ALL_AGENCY_JOB_POSTS } from "../../data/graphQL/Queries";

const JobFeatured7 = () => {

  //API
  const getJobs = useQuery(GET_ALL_AGENCY_JOB_POSTS, {
    variables: {
      skip: 0,
      take: 4,
    },
  });

  return (
    <>
      {getJobs?.loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : getJobs.data?.AllAgencyJobPosts.length === 0 ? (
        <div className="d-flex justify-content-center my-5">
          <span>No active jobs.</span>
        </div>
      ) : (
        getJobs?.data?.AllAgencyJobPosts.map((row, key) => (
          <div className="job-block-five" key={key}>
            <div className="inner-box" >
              <div className="content">
                {/* <span className="company-logo">
                <img src={item.logo} alt="item brand" />
              </span> */}
                <h4>
                  <Link href={`/job-details/${row.agency_job_post_job_id}`}>{row.job_title}</Link>
                </h4>
                <ul className="job-info">
                  {/* <li>
                  <span className="icon flaticon-briefcase"></span>
                  {item.company}
                </li> */}
                  <li>
                    <span className="icon flaticon-map-locator"></span>
                    {row.country}
                  </li>
                  {/* <li>
                  <span className="icon flaticon-clock-3"></span> {item.time}
                </li> */}
                  {/* <li>
                    <span className="icon flaticon-money"></span> {item.salary}
                  </li> */}
                </ul>
                <ul className="" style={{paddingRight: "50px"}}>
                  <li>
                    {row.job_description.length > 40
                      ? row.job_description.substr(
                        0,
                        row.job_description.length - 150
                      ) + "..."
                      : row.job_description}
                  </li>
                </ul>
              </div>
              <Link
                href={`/job-details/${row.agency_job_post_job_id}`}
                className="theme-btn btn-style-one"
              >
                Apply Now
              </Link>

            </div>
          </div >
        ))
      )}
    </>
  );
};

export default JobFeatured7;
