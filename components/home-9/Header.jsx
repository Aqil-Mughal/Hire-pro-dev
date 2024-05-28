import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-two alternate2 ${navbar ? "fixed-header animated slideInDown" : ""
        }`}
    >
      <div className="auto-container">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo" >
                <Link href="/home">
                  <img href="/home" src="/images/icons/OBJECTS.png" style={{ width:"48px", height: "30px", }} />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <div className="d-flex align-items-center btn-box2">
              {/* <a
                href="#"
                className="theme-btn btn-style-six call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                Login / Register
              </a> */}
              <Link
                href="/admin/dashboard"
                className="theme-btn btn-style-one"
                // style={{
                  // color: "white", backgroundColor: " #1F9747",
                  // 'hovered':{
                    // backgroundColor:"black"
                    // backgroundColor:" red",
                    // boxShadow:" 0 2px 4px rgba(0, 0, 0, 0.2)",
                    // fontSize:"30px"
                  // }
                // }}
              >
               Admin               
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
