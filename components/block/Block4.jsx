import Link from "next/link";

const Block4 = () => {
  return (
    <section className="jobseeker-section">
      <div className="outer-box">
        <div className="image-column">
          <figure className="image">
            <img
              src="images/resource/image7.png"
              alt="resources about block"
              data-aos="fade-right"
            />
          </figure>
        </div>
        {/* End imag-column */}

        <div className="content-column">
          <div className="inner-column" data-aos="fade-right">
            <div className="sec-title">
              <h2>Need for talent acquisition?  </h2>
              <div className="text">
                Look no further. Our commitment is to swiftly find the perfect candidates for your needs,
                 providing you with peace of mind. With our daily recruitment efforts and rapid growth, 
                 we guarantee to deliver exceptional talent to fuel your organization's success. 
                 Find your ideal talent with us today.
              </div>
              <Link href="/job-list-v4" className="theme-btn btn-style-one">
                Check New Talent
              </Link>
            </div>
          </div>
        </div>
        {/* End .content-column */}
      </div>
    </section>
  );
};

export default Block4;
