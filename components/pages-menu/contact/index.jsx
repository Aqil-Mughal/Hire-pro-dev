import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import Address from "./Address";
import ContactForm from "./ContactForm";
import MapBox from "./MapBox";
import JpFooter from "../../footer/Jpfooter"
import CallToAction from "../../call-to-action/CallToAction";
import CallToAction5 from "../../call-to-action/CallToAction5";
const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}


      {/* <!-- End Map Section --> */}

      <section className="contact-section" style={{ border: "1px", backgroundColor: "#CFDBE4", }}>
        <div className="auto-container" >
          {/* <!-- Contact Form --> */}
          <div className="contact-form default-form" style={{ backgroundColor: "white", borderRight:"300px solid #1F9747"}}>
            <div style={{ display: "flex",}}>
              <div style={{ width: "100%", }}>
                <h3 style={{ fontSize: "40px" }}>Get In <span style={{ color: "#1F9747" }}>Touch</span></h3>
                <p style={{ fontSize: "10px", color: "#202124", lineHeight: "20px" }}>
                  Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                  Eu leo molestie vel, ornare non id blandit netus.</p>
                <ContactForm />
                <div style={{ display: "flex" }}>
                  <div style={{ marginTop: "5%" }}>
                    <Address />
                  </div>
                  <div>

                  </div>
                </div>
                {/* End .row */}
              </div>

              <div style={{ width: "100%",}}>
                <div className="map-outer" style={{position:"absolute",height:"130vh" ,width:"60%",marginTop:"1%"}} >
                  <MapBox />
                </div>
              </div>
            </div>
            {/* <!--Contact Form--> */}
          </div>
          {/* <!--End Contact Form --> */}
        </div>
      </section>
      {/* <!-- Contact Section --> */}
      <div style={{ marginBottom: "5%", marginTop: "5%" }}>
        <CallToAction5 />
      </div>
      <JpFooter />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;


// <section className="map-section">
// <div className="map-outer">
//   <MapBox />
// </div>
// </section>


// <div className="upper-box">
// <div className="row">
//   <Address />
// </div>
// {/* End .row */}
// </div>