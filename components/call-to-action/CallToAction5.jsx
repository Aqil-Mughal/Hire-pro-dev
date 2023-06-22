import Link from "next/link";

const CallToAction5 = () => {
  return (
    <section
      className="call-to-action-two style-two"
      style={{ backgroundImage: "url(images/background/main2.png)",backgroundColor:"transparent" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Make a Difference with Your Online Resume!</h2>
          <div className="text">
            Your resume in minutes with JobHunt resume assistant is ready!
          </div>
        </div>

        <div className="btn-box">
          <Link href="/submit-your-resume" className="theme-btn btn-style-three">
            Submit Your Resume
          </Link>
        </div>
      </div>
    </section>
    //   <!-- End Call To Action -->
  );
};

export default CallToAction5;
