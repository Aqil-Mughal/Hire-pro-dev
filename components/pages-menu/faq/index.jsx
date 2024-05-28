import Breadcrumb from "../../common/Breadcrumb";
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import Header from "../../home-9/Header";
import FaqChild from "./FaqChild";
import JpFooter from "../../footer/Jpfooter"
import CallToAction from "../../call-to-action/CallToAction";
import CallToAction5 from "../../call-to-action/CallToAction5";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      

      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}
      <section
      className="banner-section-nine"
      style={{ backgroundImage: "url(images/background/7.png)",width:"100%",marginTop:"5%"}}
    >
      <div className="auto-container"style={{height:"30vh"}}>
        <div className="cotnent-box">
          <div className="title-box" data-aso-delay="300" data-aos="fade-up">
            <h3>Frequently asked questions</h3>
            <img src="/images/bar.svg"style={{width:"40%"}} />
            
          </div>

          {/* <!-- Job Search Form --> */}
          
        </div>
        {/* <!-- Job Search Form --> */}

        {/* <!-- Fun Fact Section --> */}
      </div>
    </section>
    
      {/* <!--End Page Title--> */}

      <section className="faqs-section" >
        <div className="auto-container" style={{ backgroundColor: "#ECFFF2",borderRadius:"30px" ,padding:"25px"}} >
        
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box">
            <FaqChild />
          </ul>

         
        </div>
      </section>
      {/* <!-- End Faqs Section --> */}
      <CallToAction5 />
      <div style={{marginTop:"5%",marginBottom:"5%"}}>
      <CallToAction />
      </div>
      <JpFooter />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;



// <h3>Suggestions</h3>
// {/* <!--Accordian Box--> */}
// <ul className="accordion-box mb-0">
//   <FaqChild />
// </ul>