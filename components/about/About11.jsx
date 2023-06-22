import Link from "next/link";
import ApplicantsList from "./ApplicantsList";

const About11 = () => {
  return (
    <>
      {/* <!-- Content Column --> */}
      <div style={{display:"flex",justifyContent:"flex-end",flexDirection:"column-reverse",}}>
     
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2" style={{textAlign:"right",width:"100%"}}>
        <div className="inner-column" data-aos="fade-right">
          <div className="sec-title">
            <h2>
            Resources Available
            </h2>
            <div className="text"style={{width:"100%",justifyContent:"flex-end",color:"#959595"}}>
            Signifies the presence and accessibility of a particular asset, tool, 
            or support system that can be utilized or <br /> leveraged.It implies that the resource 
            is ready and accessible for use, providing assistance or value <br /> 
            in achieving specific objectives or addressing needs. The availability of a resource suggests that it <br/>            is present, 
            allocated, and ready to be utilized effectively to meet desired goals or requirements.
            </div>
          </div>
         
        </div>
      </div>
      {/* End .content-column */}

      {/* <!-- Image Column --> */}
      <div className="image-column col-lg-6 col-md-12 col-sm-12" style={{width:"100%",textAlign:"right"}}>
        <figure className="image-box" data-aos="fade-right">
          <img src="images/resource/meeting2.png" alt="resource" style={{width:"60%"}}/>
          <div className="corner-image" style={{ position: "absolute", top: "-55px",right: "650px",width: "100px", height: "150px" }}>
          <img src="images/resource/Group40.png" alt="corner-image" style={{width:"100px",height:"100px"}} />
        </div>
        </figure>

        {/* <!-- Count Employers --> */}
        
      </div>
      </div>
      {/* End image-column */}
    </>
  );
};

export default About11;
