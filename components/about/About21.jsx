import Link from "next/link";
import ApplicantsList from "./ApplicantsList";

const About21 = () => {
  return (
    <>
      {/* <!-- Content Column --> */}
      <div style={{display:"flex",justifyContent:"flex-end",flexDirection:"column-reverse",}}>
     
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2" style={{textAlign:"right",width:"100%"}}>
        <div className="inner-column" data-aos="fade-right">
          <div className="sec-title">
            <h2>
            Enhancing Soft Skills
            </h2>
            <div className="text"style={{width:"100%",justifyContent:"flex-end",color:"#959595"}}>
            At [ company name ], we recognize the significance of soft skills in achieving success in<br/> 
            various job roles. Therefore, we offer comprehensive training programs that focus on honing <br/>
            essential skills such as communication, teamwork, and problem-solving. By providing temporary <br/>
            workers with the opportunity to develop these skills, we enable them to adapt<br/> effectively to 
            different work environments. 
            </div>
          </div>
         
        </div>
      </div>
      {/* End .content-column */}

      {/* <!-- Image Column --> */}
      <div className="image-column col-lg-6 col-md-12 col-sm-12" style={{width:"100%",textAlign:"right"}}>
        <figure className="image-box" data-aos="fade-right">
          <img src="images/resource/Training4.png" alt="resource" style={{width:"60%"}}/>
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

export default About21;
