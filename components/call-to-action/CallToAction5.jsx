import Link from "next/link";

const CallToAction5 = () => {
  return (
    <section
      className="background"
      style={{ backgroundImage: "url(images/background/meeting2.png)",textAlign:"center",height:"50vh",backgroundSize:"cover" }}
    >
      <div className="auto-container" data-aos="fade-up" style={{paddingTop:"8%"}} >
        <div className="sec-title light text-center" >
          <h2>Make a Difference with Your Online Resume!</h2>
          <div className="text">
            Your resume in minutes with JobHunt resume assistant is ready!
          </div>
        </div>

        <div className="btn-box">
          <Link href="/submit-your-resume" className="theme-btn btn-style-three" >
            Submit Your Resume
          </Link>
        </div>
      </div>
    </section>
    //   <!-- End Call To Action -->
  );
};

export default CallToAction5;
