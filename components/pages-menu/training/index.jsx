import LoginPopup from "../../common/form/login/LoginPopup";
import Partner from "../../common/partner/Partner";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import Header from "../../home-9/Header"
import Block1 from "../../block/Block1";
import Breadcrumb from "../../common/Breadcrumb";
import JpFooter from "../../footer/Jpfooter"
import JobCategorie5 from "../../job-categories/JobCategorie5";
import JobCategorie2 from "../../job-categories/JobCategorie2";
import JobCategorie1 from "../../job-categories/JobCategorie1";
import About18 from "../../about/About18";
import About19 from "../../about/About19";
import About20 from "../../about/About20";
import About21 from "../../about/About21";
import About22 from "../../about/About22";
import About7 from "../../about/About7";
import About8 from "../../about/About8";
import About9 from "../../about/About9";
import About10 from "../../about/About10";
import About12 from "../../about/About12";
import About11 from "../../about/About11";
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
                style={{ backgroundImage: "url(images/background/trainingbg.png)",marginTop:"5%"  }}
            >
                <div className="auto-container" style={{ height: "30vh" }}>
                    <div className="cotnent-box">
                        <div className="title-box" data-aso-delay="300" data-aos="fade-up">
                            <h3 style={{ fontSize: "60px" }}>TRAINING</h3>
                            <img src="/images/bar.svg" style={{ width: "15%" }} />

                        </div>

                        {/* <!-- Job Search Form --> */}

                    </div>
                    {/* <!-- Job Search Form --> */}

                    {/* <!-- Fun Fact Section --> */}
                </div>
            </section>
            {/* <!--End Page Title--> */}
            <section className="work-section style-two" style={{ backgroundColor: "white" }}>
                <div className="auto-container">
                    <div className="sec-title text-center" data-aos="fade-up">
                        <h2>EMPLOYMENT TRANING</h2>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div data-aos="fade-up" style={{ textAlign: "center", width: "90%", color: "#959595",marginTop:"2%" }}>
                            The training provided by [ company name ] to temporary workers can vary
                            in type and scope, depending on the industry and specific job role. However,
                            our agency is dedicated to offering comprehensive training programs to ensure 
                            workers are well-prepared for their temporary assignments. Here are some of 
                            the methods employed by staffing agencies to deliver training to temporary workers.


                        </div>
                    </div>
                    {/* End sec-title */}
                </div>
            </section>
            <section style={{ margin: "150px" }}>
                <div style={{}}>
                    <About18 />
                </div>
            </section>
            <section style={{ margin: "150px" }}>
                <div style={{}}>
                    <About19 />
                </div>

            </section>
            <section style={{ margin: "150px" }}>
                <div style={{}}>
                    <About20 />
                </div>

            </section>
            <section style={{ margin: "150px" }}>
                <div style={{}}>
                    <About21 />
                </div>

            </section>
            <section style={{ margin: "150px" }}>
                <div style={{}}>
                    <About22 />
                </div>

            </section>
            <section style={{ backgroundImage: "url(images/background/meeting2.png)", height: "60vh", padding: "50px", display: "flex", justifyContent: "center" }}>
                <div data-aos="fade-up" style={{ color: "white", margin: "auto", width: "60%", textAlign: "center",fontSize:"25px",lineHeight:"30px" }}>
                It's important for both the staffing agency and the temporary worker to communicate about
                 the level of training required for the specific job role. Temporary workers should also ask 
                 questions and seek clarification if they are unsure about any aspect of their job duties or training.
                </div>

            </section>

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

