import Header from "./Header";
import Hero9 from "../hero/hero-9";
import CallToAction7 from "../call-to-action/CallToAction7";
import Candidates from "../candidates/Candidates";
import Blog from "../blog/Blog";
import CallToAction6 from "../call-to-action/CallToAction6";
import Footer from "./Footer";
import Funfact from "../fun-fact-counter/Funfact";
import Testimonia4 from "../testimonial/Testimonial4";
import JobCategorie1 from "../job-categories/JobCategorie1";
import Block5 from "../block/Block5";
import JobFeatured12 from "../job-featured/JobFeatured12";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import RegBanner2 from "../block/RegBanner2";
import JobFeatured7 from "../job-featured/JobFeatured7";
import RecentJobs from "../job-featured/RecentJobs";
import About10 from "../about/About10";
import About11 from "../about/about-11/index";
import Block3 from "../block/Block3";
import Block4 from "../block/Block4";
import CallToAction from "../call-to-action/CallToAction";
import JpFooter from "../footer/Jpfooter"
import CallToAction5 from "../call-to-action/CallToAction5";
const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero9 />
      {/* <!-- End Hero Section --> */}
      <section className="registeration-banners" style={{marginTop:"2%"}}>
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <RegBanner2 />
          </div>
        </div>
      </section>
      {/* <!-- End Registeration Banners --> */}
      <section className="job-section-five style-two">
        <div className="auto-container">
          <div className="row" data-aos="fade-up" >
            <div className="featured-column col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec-title">
                <h2>Featured Jobs</h2>
                <div className="text">
                  Know your worth and find the job that qualify your life
                </div>
              </div>
              {/* En .sect-title */}

              <div className="outer-box">
                <JobFeatured7  />
              </div>
              {/* En outer box */}
            </div>
            {/* End .featured-column */}

            {/* <div className="recent-column col-xl-3 col-lg-12 col-md-12 col-sm-12">
              <div className="sec-title">
                <h2>Recent Jobs</h2>
                <div className="text">Know your worth and find the job</div>
              </div>

              <RecentJobs />
            </div> */}
            {/* End .recent-column */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Job Section --> */}
      
      <CallToAction5 />
      <About10 />
      {/* <!-- End About Section --> */}
      <div style={{ marginTop: "3%", }}>
        <Block3 />
      </div>
      <div style={{ marginTop: "3%", marginBottom: "4%" }}>
        <Block4 />
      </div>
      {/* <!-- End Steps Section --> */}

     

      

     

      <section
        className="testimonial-section style-two alternate"
        style={{ backgroundImage: "url(images/background/meeting2.png)" ,backgroundSize:"cover"}}
      >
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title light text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up" style={{height:"40vh"}}>
            {/* <!-- Testimonial Carousel --> */}
            <div className="testimonial-carousel-three gap-x25">
              <Testimonia4 />
            </div>
          </div>
          {/* End .carousel-outer */}
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Testimonial Section --> */}

      {/* <!-- Fun Fact Section --> */}
      <div className="fun-fact-section style-two">
        <div className="auto-container">
          <div className="row" data-aos="fade-in">
            <Funfact />
          </div>
        </div>
      </div>
      {/* <!-- Fun Fact Section --> */}

    

     <div style={{marginBottom:"5%"}}>
     <CallToAction />
     </div>
      {/* <!-- End Call To Action --> */}

      
      <JpFooter />
      
      {/* <!-- End Main Footer --> */}
    </>
  );
  };

export default index;



// <CallToAction7 />
{/* <!-- End Call To Action --> */}
// <section className="job-categories">
      //   <div className="auto-container">
      //     <div className="sec-title text-center">
      //       <h2>Popular Job Categories</h2>
      //       <div className="text">2020 jobs live - 293 added today.</div>
      //     </div>



      //     <div
      //       className="row "
      //       data-aos="fade-up"
      //       data-aos-anchor-placement="top-bottom"
      //     >
      //       {/* <!-- Category Block --> */}
      //       <JobCategorie1 />
      //     </div>
      //   </div>
      // </section>
      {/* End Job Categorie Section */}


    //   <section className="candidates-section">
    //   <div className="auto-container">
    //     <div className="sec-title">
    //       <h2>Featured Candidates</h2>
    //       <div className="text">
    //         Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
    //       </div>
    //     </div>




    //     <div className="carousel-outer" data-aos="fade-up">
    //       <div className="candidates-carousel default-dots">
    //         <Candidates />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    {/* <!-- End Candidates Section --> */}

      // <section className="news-section">
      //   <div className="auto-container">
      //     <div className="sec-title text-center">
      //       <h2>Recent News Articles</h2>
      //       <div className="text">
      //         Fresh job related news content posted each day.
      //       </div>
      //     </div>
      //     {/* End ."sec-title */}
      //     <div className="row" data-aos="fade-up">
      //       <Blog />
      //     </div>
      //   </div>
      // </section>
      {/* <!-- End News Section --> */}



       // <CallToAction6 />

      //  <Footer />