const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h2>Get Started Today</h2>
              <div className="text">
              Aamnato always try to provide the best Business Solutions for<br /> 
              Clients to grow up their Business sharply and smoothly.
              </div>
              <a href="#" className="theme-btn btn-style-one">
                <span className="btn-title">Contact us Today</span>
              </a>
            </div>
          </div>
          {/* End .content-column */}

          <div
            className="image-column"
            style={{ backgroundImage: " url(images/resource/image-1.png)" }}
          >
            <figure className="image">
              <img src="images/resource/image-1.png" alt="resource" />
            </figure>
          </div>
          {/* End .image-column */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
