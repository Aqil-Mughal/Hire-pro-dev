const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h2>Get Started Today</h2>
              <div className="text">
<<<<<<< HEAD
                Aamnato always try to provide the best Business Solutions for Clients to
                <br />
                grow up their Business sharply and smoothly.
              </div>
              <a href="#" className="theme-btn btn-style-one bg-blue">
=======
              Aamnato always try to provide the best Business Solutions for<br /> 
              Clients to grow up their Business sharply and smoothly.
              </div>
              <a href="#" className="theme-btn btn-style-one bg-blue" style={{backgroundColor:"#1F9747"}}>
>>>>>>> c13531e7e60e69321db5bc9445747f9f929965bd
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
