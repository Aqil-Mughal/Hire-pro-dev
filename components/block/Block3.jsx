import Link from "next/link";

const Block3 = () => {
  return (
    <section className="recruiter-section">
      <div className="outer-box">
        <div className="image-column">
          <figure className="image" >
            <img src="images/resource/image6.png" data-aos="fade-left" style={{ borderRadius: "none" }} alt="resource about" />
          </figure>
        </div>
        {/* End image-column */}

        <div className="content-column">
          <div className="inner-column" data-aos="fade-left">
            <div className="sec-title">
              <h2>Need a job?</h2>
              <div className="text">
                Staffing website is committed to delivering exceptional
                business solutions that enable our clients to achieve rapid and seamless growth.
              </div>
              <Link href="/login" className="theme-btn btn-style-one">
                Check New Job
              </Link>
            </div>
          </div>
        </div>
        {/* End .content-column */}
      </div>
    </section>
  );
};

export default Block3;
