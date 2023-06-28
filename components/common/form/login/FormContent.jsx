import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";
import { Modal, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../../../../data/graphQL/Queries";

const FormContent = () => {

  const [openErrorModal, setOpenErrorModal] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [loginHandler, { data, loading, error }] = useLazyQuery(LOGIN, {
    onCompleted(data) {
      console.log(data)
      if (data.signin === null) {
        setOpenErrorModal(!openErrorModal)
        return
      } else {
        localStorage.setItem("token", data.signin)
        push("/admin/dashboard")
      }
    },
    onError(error) {
      console.log(error)
    }
  })

  const submitHandler = (e) => {
    e.preventDefault()
    loginHandler({
      variables: { email: formData.email, password: formData.password },
    })
  }

  return (
    <div className="form-inner">
      <h3>Login to Admin Dashboard</h3>
      <span style={{ paddingTop: 0 }}>Please fill your information below</span>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group pt-4">
          <label>Email *</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            placeholder="Type Email"
            required
          />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            placeholder="Type Password"
            required
          />
        </div>
        {/* password */}

        {/* <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div> */}
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            // type="submit"
            name="log-in"
            onClick={submitHandler}
          >
            LOGIN
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="copyright-text" style={{ color: "black" }}></div>
      {/* {new Date().getFullYear()}  */}

      {/* <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-dismiss="modal"
            data-bs-target="#registerModal"
            data-bs-toggle="modal"
          >
            Signup
          </Link>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial />
      </div> */}
      {/* End bottom-box LoginWithSocial */}


      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter1"
        centered
        show={openErrorModal}
        className="jp-modal"
      >
        <Modal.Header id="contained-modal-title-vcenter1" className="cus-bgg-cw">
          <h3>Message</h3>
        </Modal.Header>
        <Modal.Body style={{ overflow: 'hidden' }}>Invalid Credentials.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => setOpenErrorModal(!openErrorModal)}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  );
};

export default FormContent;
