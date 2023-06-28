import Link from "next/link";


const index = ({ footerStyle = "" }) => {
  return (
    <footer className={`main-footer ${footerStyle}`} style={{borderTop: "1px solid #D5D5D5",backgroundColor:"#1F9747"}}>
      <div className="auto-container">
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="footer-column col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <a href="#">
                   
                  </a>
                </div>
                <p className="phone-num">
                  <span style={{color:"white"}}>Call us </span>
                  {/* <a href="thebeehost@support.com">(905) 450 - 4338</a> */}
                </p>
                <p style={{ color: "white" }}>Tel no: (905) 450 - 4338</p>
                <p className="address" style={{ color: "white" }}>
                  965 Bovaird Drive, Unit 201 <br />
                  Brampton Ontario <br />
                  L6X 5K7 Canada. <br />
                  <a
                    href="mailto:support@job-port.com"
                    className="email"
                    style={{ color: "white" }}
                  >
                    info@job-port.ca
                  </a>
                </p>
              </div>
            </div>

            <div className="footer-column col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget links-widget">
                <h4 className="widget-title" style={{color:"white"}}>Menu</h4>
                <div className="widget-content" style={{ marginTop: "15px" }}>
                  <ul className="list">
                    <li>
                      <Link href="/submit-resume" style={{ color: "white" }}>
                        Job Seeker
                      </Link>
                    </li>
                    <li>
                      <Link href="/hiring-form" style={{ color: "white" }}>
                        Employers
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" style={{ color: "white" }}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" style={{ color: "white" }}>
                        About us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-column col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <p className="phone-num">
                  <span style={{color:"white"}}>Office # 1 </span>
                </p>
                <p
                  className="address"
                  style={{ marginTop: "25px", color: "white" }}
                >
                  965 Bovaird Drive, Unit 201 <br />
                  Brampton, Ontario L6X 5K7 <br />
                  Canada
                </p>
              </div>
            </div>

            <div className="footer-column col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <p className="phone-num">
                  <span style={{color:"white"}}>Office # 2 </span>
                </p>
                <p
                  className="address"
                  style={{ marginTop: "25px", color: "white" }}
                >
                3064 D Pitt Street, Cornwall <br />
                Ontario, K6K 1B1 <br />
                  Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="outer-box" style={{display:"flex",justifyContent:"center"}}>
            <div className="copyright-text" style={{color:"white"}}>
              {/* {new Date().getFullYear()}  */}

              Made by{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Aamanto Tecnologies
              </a>
              . All Rights Reserved © 2023.
            </div>
            {/* <div className="social-links">
            <Social />
          </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;

// <img
// // src="/images/logo.png"
// alt="brand"
// style={{ maxWidth: 150 }}
// />