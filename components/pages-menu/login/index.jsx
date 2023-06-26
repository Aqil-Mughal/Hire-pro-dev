import FormContent from "../../common/form/login/FormContent";
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import Header from "./Header";

const index = () => {
  return (
    <>
      
      {/* <!--End Main Header -->  */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <MobileMenu />
      {/* End MobileMenu */}

      <div className="login-section">
        <div
          className="image-layer"
<<<<<<< HEAD
          style={{ backgroundImage: "url(images/custom/login-banner.png)" }}
        >
          <h1 className="login-logo-centered">Logo goes here</h1>
        </div>
=======
          style={{ backgroundImage: "url(images/background/loginimage.png)" }}
        ></div>
>>>>>>> c13531e7e60e69321db5bc9445747f9f929965bd
        <div className="outer-box">
          {/* <!-- Login Form --> */}
          <div className="login-form default-form">
            <FormContent />
          </div>
          {/* <!--End Login Form --> */}
        </div>
      </div>
      {/* <!-- End Info Section --> */}
    </>
  );
};

export default index;


// <Header />