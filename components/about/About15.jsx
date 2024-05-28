import Link from "next/link";
import ApplicantsList from "./ApplicantsList";

const About15 = () => {
  return (
    <>
      {/* <!-- Content Column --> */}
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2"style={{textAlign:"left",width:"100%"}}>
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2 style={{fontSize:"30px"}}>
            Worker Acknowledges Contract Agreement
            </h2>
            <div className="text" style={{color:"#959595",width:"60%"}}>
            The worker carefully reviews and acknowledges the terms outlined in the contract before commencing their assigned duties. 
            </div>
          </div>


        </div>
      </div>
      {/* End .content-column */}

      {/* <!-- Image Column --> */}
      <div className="image-column col-lg-6 col-md-12 col-sm-12" style={{width:"100%"}}>
        <figure className="image-box" data-aos="fade-right">
          <img src="images/resource/employment3.png" alt="resource"style={{width:"60%"}} />
          <div className="corner-image" style={{ position: "absolute", top: "-50px",left: "57%",width: "100px", height: "150px" }}>
            <img src="images/resource/Group40.png" alt="corner-image" style={{width:"100px",height:"100px"}} />
          </div>
        </figure>

        {/* <!-- Count Employers --> */}

      </div>
      {/* End image-column */}
    </>
  );
};

export default About15;

// <ul className="list-style-one">
//             <li>Bring to the table win-win survival</li>
//             <li>Capitalize on low hanging fruit to identify</li>
//             <li>But I must explain to you how all this</li>
//           </ul>


// <div className="applicants-list" data-aos="fade-up">
//           <div className="title-box">
//             <h4>Applicants List</h4>
//           </div>
//           <ul className="applicants">
//             <ApplicantsList />
//           </ul>
//         </div>

// <Link
// href="/employers-dashboard/post-jobs"
// className="theme-btn btn-style-seven"
// >
// Post a Job
// </Link>