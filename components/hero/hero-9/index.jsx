import SearchForm4 from "../../common/job-search/SearchForm4";
import Funfact2 from "../../fun-fact-counter/Funfact2";

const index = () => {
  return (
    <section
      className="banner-section-nine"
      style={{
        padding: 0,
        border:"1px solid white",
        marginTop:"4.8%",
        // marginBottom: 300,
        // alignContent:"center",
      }}
    >
    <div  style={{
      position: "absolute",
      width:"100%",
      backgroundSize: "cover",
      // backgroundPosition: "100%",
      marginTop:"0",
      backgroundColor: "linear-gradient(to bottom, rgba(211, 211, 211, 0) 0%, rgba(211, 211, 211, 1) 100%)",
      // display: "block",
      // alignItems: "center",
      // height: 800,
      // backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,0) -50%,rgba(0,0,0,.8))"
    }}>
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
  <video className="video1" autoPlay loop muted id='video' style={{ width: '100%', height: '100%', padding: 0 }}>
    {/* <source src="https://websites-static-assets.s3.us-east-2.amazonaws.com/job-port+1.mp4" type="video/mp4" /> */}
    <source src="images/resource/home1.mp4" type="video/mp4" />
    {/* <source src={Video} type="video/mp4"/> */}
  </video>

  <img src="images/resource/overlay-image.png" alt="Overlay Image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
</div>

      
      {/* <video src={Video} /> */}
    </div>
      <div className="auto-container">
        <div className="cotnent-box" >
          <div className="title-box" data-aso-delay="300" data-aos="fade-up" style={{marginTop:"20%"}}>
            <h3>Unlock Your Full Potential with Our Cutting-Edge 
            Recruitment Solutions</h3>
            <div className="text">
              Find Jobs, Employment & Career Opportunities
            </div>
          </div>

          {/* <!-- Job Search Form --> */}
          <div
            className="job-search-form"
            data-aos-delay="500"
            data-aos="fade-up"
          >
            <SearchForm4 />
          </div>
        </div>
        {/* <!-- Job Search Form --> */}

        
        {/* <!-- Fun Fact Section --> */}
      </div>
    </section>
  );
};

export default index;


// <div className="fun-fact-section">
//           <div className="row">
//             <Funfact2 />
//           </div>
//         </div>



// <video className="video1" autoPlay loop muted id='video' style={{
//   width: '100%',
//   height: "100%",
//   padding:0,
  

// }}>
//   {/* <source src="https://websites-static-assets.s3.us-east-2.amazonaws.com/job-port+1.mp4" type="video/mp4" /> */}
//   <source src="images/resource/home1.mp4"  alt="Background video" type="video/mp4" />
//   {/* <source src={Video} type="video/mp4"/> */}
// </video>
//   <img src="images/resource/overlay-image.png" alt="Overlay Image" style={{ position: 'absolute', top: 0, left: 0 }} />
