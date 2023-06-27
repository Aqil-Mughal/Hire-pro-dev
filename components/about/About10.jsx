import AboutBlock from "../block/AboutBlock";

const About10 = () => {
  return (
    <>
      {/* <!-- About Section --> */}
      <section className="about-section-two style-two layout-pt-120 layout-pb-120  -light-blue">
        <div className="auto-container">
          <div className="row grid-base justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="row icon-side-row wow fadeInRight">
                <AboutBlock />
              </div>
            </div>
            {/* End .col */}

            <div className="content-column mb-0 col-xl-4 col-lg-6 col-md-12 col-sm-12" style={{ width: "50%" }}>
              <div className="wow fadeInLeft" data-aos="fade-left" >
                <div className="sec-title mb-0">
                  <h2 className="fw-700" style={{ display: "flex", justifyContent: "center" }}>
                    Our Services

                  </h2>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div data-aos="fade-left" className="text mt-36 md:mt-16" style={{ fontSize: "20px", fontWeight: "400", color: "#959595", display: "flex", textAlign: "center" }} >
                      We are dedicated to providing the highest level of service, ensuring that our clients
                      experience tangible and significant improvements in their business operations.
                      Our commitment stems from the understanding that by addressing their unique challenges and
                      harnessing opportunities, we can help them overcome obstacles and unlock their full potential. We strive to deliver results that exceed expectations and empower our clients to thrive in their respective industries.
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left" style={{ display: "flex", justifyContent: "center" }}>
                  <a href="/about" className="theme-btn -blue-outline mt-56 md:mt-16" style={{ backgroundColor: "#1F9747", color: "white", display: "flex", width: "50%", justifyContent: "center", border: "none" }}>
                    Check Our Services
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Content Column --> */}
          </div>
        </div>
      </section>
      {/* <!-- End About Section -->  */}
    </>
  );
};

export default About10;
