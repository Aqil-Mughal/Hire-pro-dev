import LoginPopup from "../../common/form/login/LoginPopup";
import Partner from "../../common/partner/Partner";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import Funfact from "../../fun-fact-counter/Funfact";
import ImgBox from "./ImgBox";
import IntroDescriptions from "./IntroDescriptions";
import CallToAction2 from "../../call-to-action/CallToAction2";
import Testimonial2 from "../../testimonial/Testimonial2";
import Block1 from "../../block/Block1";
import Breadcrumb from "../../common/Breadcrumb";
import JpFooter from "../../footer/Jpfooter"
import JobCategorie5 from "../../job-categories/JobCategorie5";
import JobCategorie2 from "../../job-categories/JobCategorie2";
import JobCategorie1 from "../../job-categories/JobCategorie1";
import About3 from "../../about/About3";
import About2 from "../../about/About2";
import About4 from "../../about/About4";
import About5 from "../../about/About5";
import About6 from "../../about/About6";
import About7 from "../../about/About7";
import About8 from "../../about/About8";
import About9 from "../../about/About9";
import About10 from "../../about/About10";
import About12 from "../../about/About12";
import About11 from "../../about/About11";
import Header from "../../home-9/Header";
import Testimonial4 from "../../testimonial/Testimonial4";
import CallToAction from "../../call-to-action/CallToAction";

const index = () => {

  return (
    <>
      {/* <!-- Header Span --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section
        className="banner-section-nine"
        style={{ backgroundImage: "url(images/background/about.png)", marginTop: "5%" }}
      >
        <div className="auto-container" style={{ height: "30vh", }}>
          <div className="cotnent-box">
            <div className="title-box" data-aso-delay="300" data-aos="fade-up">
              <h3>ABOUT AAMANTO TECHNOLOGIES</h3>
              <img src="/images/bar.svg" style={{ width: "50%" }} />

            </div>

            {/* <!-- Job Search Form --> */}

          </div>
          {/* <!-- Job Search Form --> */}

          {/* <!-- Fun Fact Section --> */}
        </div>
      </section>
      {/* <!--End Page Title--> */}
      <section className="work-section style-two">
        <div className="auto-container" style={{ backgroundColor: "#ECFFF2" }}>
          <div className="sec-title text-center" data-aos="fade-up" >
            <h2>Our Commitment to Excellence</h2>
            <div className="text" style={{ fontSize: "15px", color: "#959595" }}>
              We Foster Excellence and Empower Growth & Development.</div>
          </div>
          <div data-aos="fade-up" style={{ textAlign: "center", width: "100%", justifyContent: "center", color: "#959595" }}>
            At our company, we are committed to providing exceptional services that contribute
            to the growth <br />and development of individuals and organizations. While the core of our values remains unchanged,<br />
            we have refined our statement to better reflect our mission and aspirations.
          </div>
          {/* End sec-title */}

          <div className="row" data-aos="fade-up">
            <Block1 />
          </div>
        </div>
      </section>
      <section style={{ margin: "150px" }}>
        <div style={{}}>
          <About3 />
        </div>
      </section>
      <section style={{ margin: "150px" }}>
        <div style={{}}>
          <About11 />
        </div>

      </section>
     
      <section
        className="testimonial-section style-two alternate"
        style={{ backgroundImage: "url(images/background/meeting2.png)" }}
      >
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title light text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            {/* <!-- Testimonial Carousel --> */}
            <div className="testimonial-carousel-three gap-x25">
              <Testimonial4 />
            </div>
          </div>
          {/* End .carousel-outer */}
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Testimonial Section --> */}

      {/* <!-- End About Section Three --> */}
      <div style={{ margin: "5%" }}>
        <CallToAction />
      </div>



      <JpFooter />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;

// <section className="contact-section" style={{ border: "1px", backgroundColor: "#F5F5F5", }}>
//   <div className="auto-container"  >
//     <div className="contact-form default-form" style={{ backgroundColor: "#F5F8FFFE", borderRadius: "30px", }}>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div style={{ textAlign: "center" }}>
//           <h3 style={{ fontWeight: "bold" }}>Our Commitment to Excellence  </h3>
//           <span style={{ fontSize: "15px", color: "#959595" }}>We Foster Excellence and Empower Growth & Development.</span>
//           <br />
//           <span style={{ color: "#959595", marginTop: "50px" }}>
//             At our company, we are committed to providing exceptional services that contribute to the growth and development of individuals and organizations. While the core of our values remains unchanged,
//             we have refined our statement to better reflect our mission and aspirations.
//           </span>
//         </div>
//       </div>
//       <div style={{ display: "flex", textAlign: "left" }}>
//         <div className="contact-form default-form" style={{ backgroundColor: "white", borderRadius: "10px", height: "40vh", width: "40%" }}>
//           <div style={{ width: "100px", height: "30px", backgroundColor: "#B000DC1C", }}>
//             <span style={{ fontSize: "10px", display: "flex", color: "#B000DC", justifyContent: "center" }}>
//               Talent Connection
//             </span>
//           </div>
//           <span style={{ width: "200px" }}>Unlocking Potential</span>
//           <span style={{ fontSize: "20px" }}>
//             Connecting Top Talent with Thriving Opportunities.
//             Building Lasting Relationships: Fostering Strong Connections between Job Seekers and Employers.
//           </span>

//         </div>
//         <div className="contact-form default-form" style={{ backgroundColor: "white", borderRadius: "10px", height: "40vh", width: "40%" }}>
//           <div style={{ width: "100px", height: "30px", backgroundColor: "#B000DC1C", }}>
//             <span style={{ fontSize: "10px", display: "flex", color: "#B000DC", justifyContent: "center" }}>
//               Talent Connection
//             </span>
//           </div>
//           <span style={{ width: "200px" }}>Unlocking Potential</span>
//           <div style={{ textAlign: "left" }}>
//             <span style={{ fontSize: "12px" }}>
//               Transparent and Trustworthy Partners in Recruitment.
//               Elevating Professionalism: Delivering Expertise and Competence at Every Step.
//             </span>
//           </div>

//         </div>
//         <div className="contact-form default-form" style={{ backgroundColor: "white", borderRadius: "10px", height: "40vh", width: "40%" }}>
//           <div style={{ width: "100px", height: "30px", backgroundColor: "#B000DC1C", }}>
//             <span style={{ fontSize: "10px", display: "flex", color: "#B000DC", justifyContent: "center" }}>
//               Talent Connection
//             </span>
//           </div>
//           <span style={{ width: "200px" }}>Unlocking Potential</span>
//           <span style={{ fontSize: "20px" }}>
//             Leveraging Cutting-Edge Strategies and Technologies.
//             Collaboration for Success: Working Together to Achieve Extraordinary Results..</span>

//         </div>
//       </div>

//     </div>
//   </div>
// </section>




// <section className="work-section style-two">
// <div className="auto-container">
//   <div className="sec-title text-center">
//     <h2>How It Works?</h2>
//     <div className="text">Job for anyone, anywhere</div>
//   </div>
//   {/* End sec-title */}

//   <div className="row" data-aos="fade-up">
//     <Block1 />
//   </div>
// </div>
// </section>
// {/* <!-- End Work Section --> */}

// <section className="clients-section">
// <div className="sponsors-outer" data-aos="fade">
//   {/* <!--Sponsors Carousel--> */}
//   <ul className="sponsors-carousel">
//     <Partner />
//   </ul>
// </div>
// </section>
{/* <!-- End Clients Section--> */ }



// <CallToAction2 />
//       {/* <!-- End CallToAction2 --> */}

//       <section className="testimonial-section-two">
//         <div className="container-fluid">
//           <div className="testimonial-left">
//             <img src="images/resource/testimonial-left.png" alt="testimonial" />
//           </div>
//           {/* End left img group */}

//           <div className="testimonial-right">
//             <img
//               src="images/resource/testimonial-right.png"
//               alt="testimonial"
//             />
//           </div>
//           {/* End right img group */}

//           <div className="sec-title text-center">
//             <h2>Testimonials From Our Customers</h2>
//             <div className="text">
//               Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
//             </div>
//           </div>
//           {/* <!-- Sec Title --> */}

//           <div className="carousel-outer" data-aos="fade-up">
//             <div className="testimonial-carousel">
//               <Testimonial2 />
//             </div>
//             {/* <!-- Testimonial Carousel --> */}
//           </div>
//         </div>
//       </section>
{/* <!-- End Testimonial Section --> */ }


 // <div style={{ display: "flex", justifyContent: "center", margin: "auto", fontSize: "30px", fontWeight: "600", textAlign: "center", lineHeight: "40px", }}>
      //   Our unwavering commitment lies in discovering exceptional candidates<br />
      //   and matching them with companies that align with their talents,<br />
      //   ensuring optimal placements for both parties involved
      // </div>
      // <section className="job-categories">
      //   <div className="auto-container">
      //     <div className="sec-title text-center">
      //       <h2 style={{ color: "#1F9747" }}>Popular Job Categories</h2>
      //       <div className="text" style={{ color: "#1F9747" }}>2020 jobs live - 293 added today.</div>
      //     </div>

      //     <div className="row" data-aos="fade-up">
      //       <JobCategorie2 />
      //     </div>
      //   </div>
      // </section>
