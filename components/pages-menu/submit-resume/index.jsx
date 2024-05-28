import { useState } from "react"
import { useMutation } from "@apollo/client"
import { APPLY_FOR_JOB_WITHOUT_JOB_ID } from "../../../data/graphQL/Mutations"
import { Modal, Button } from "react-bootstrap"
import Link from "next/link"
import CallToAction from "../../call-to-action/CallToAction"
import Header from "../../home-9/Header"
import MobileMenu from "../../header/MobileMenu"
import JpFooter from "../../footer/Jpfooter"

const index = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        jobSector: "",
        resume: null,
    })

    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)

    const [ApplyJob, { data, loading, error }] = useMutation(
        APPLY_FOR_JOB_WITHOUT_JOB_ID,
        {
            onCompleted: (data) => {
                setOpenSuccessModal(!openSuccessModal)
                return
            },
            onError: (error) => {
                setOpenErrorModal(!openErrorModal)
                return
            },
        }
    )

    const handleFormSubmit = (e) => {
        e.preventDefault()
        applyJobRes()
    }

    const handleFormClear = (e) => {
        e.preventDefault()
        setFormData({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            jobSector: "",
            resume: null,
        })
    }
    console.log(formData)
    console.log({ data, error, loading })

    const applyJobRes = () => {
        ApplyJob({
            variables: {
                firstName: formData.firstName,
                middleName: formData.middleName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phone,
                city: formData.city,
                jobSector: formData.jobSector,
                resume: formData.resume,
            },
        })
    }

    return (
        <>
            <span className="header-span"></span>
            <Header />
            <MobileMenu />

            <div>
                <div className="hiring-form-banner-container" data-aos="fade-up">
                    <div className="hiring-form-banner-content" data-aos="fade-down">
                        <h1>SUBMIT YOUR RESUME</h1>
                    </div>
                </div>

                <section className="contact-section" data-aos="fade-down">
                    <div className="auto-container" style={{ backgroundColor: "#ECFFF2",borderRadius:"30px" ,padding:"25px"}}  >

                        <div className="hiring-form default-form" >
                            <form>
                                <div className="row">
                                    <h4 className="">Company Details</h4>
                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                        <div className="response"></div>
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="First Name *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Middle Name</label>
                                        <input
                                            type="text"
                                            name="middleName"
                                            value={formData.middleName}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Middle Name"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Last Name *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Email *</label>
                                        <input
                                            type="text"
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Email *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Phone Number *</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Phone Number *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="City *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Select a Job Sector *</label>
                                        <select
                                            className="username"
                                            name="jobSector"
                                            defaultValue={formData.jobSector}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        >
                                            <option value="">Select a Job Sector</option>
                                            <option value="General Labour">General Labour</option>
                                            <option value="Forklift Operators">
                                                Forklift Operators
                                            </option>
                                            <option value="Assemblers">Assemblers</option>
                                            <option value="Quality Control">Quality Control</option>
                                            <option value="Shipping & Receiving">
                                                Shipping & Receiving
                                            </option>
                                            <option value="Light Industrial">Light Industrial</option>
                                            <option value="Production Line Support">
                                                Production Line Support
                                            </option>
                                            <option value="Warehouse Clerk">Warehouse Clerk</option>
                                            <option value="Office Admin">Office Admin</option>
                                            <option value="Meat Trimmers">Meat Trimmers</option>
                                            <option value="Machine Operator">Machine Operator</option>
                                            <option value="Line Lead">Line Lead</option>
                                            <option value="Janitorial">Janitorial</option>
                                            <option value="Lumpers">Lumpers</option>
                                            <option value="Heavy Lifting">Heavy Lifting</option>
                                            <option value="Receptionist">Receptionist</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Upload Resume *</label>
                                        <div className="cus-file-input-container">
                                            <input type="text" className="username cus-file-input" value={formData.resume ? formData.resume.name : ''} readOnly placeholder="No file selected"  style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}/>
                                            <label htmlFor="file" className="theme-btn btn-style-one cus-file-input-button">Browse</label>
                                            <input type="file" id="file" name="resume" className="cus-file-input-hidden"
                                                onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                                                style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group text-end">
                                        {loading ?
                                            <button
                                                className="theme-btn btn-style-nine"
                                                disabled
                                            >
                                                Loading...
                                            </button>
                                            :
                                            <>
                                                <button
                                                    className="theme-btn btn-style-ten cus-mr-10"
                                                    id="submit"
                                                    style={{ borderColor: "#1F9747", color: "#1F9747",backgroundColor:"#ECFFF2FE" }}
                                                    onClick={handleFormClear}
                                                    
                                                >
                                                    Clear
                                                </button>
                                                <button
                                                    className="theme-btn btn-style-one"
                                                    id="submit"
                                                    onClick={handleFormSubmit}
                                                >
                                                    Submit
                                                </button>
                                            </>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div style={{ margin: "5%" }}>
                    <CallToAction />
                </div>





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
                    <Modal.Body>Please fill out all the mandatory fields.</Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            onClick={() => setOpenErrorModal(!openErrorModal)}
                        >
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter1"
                    centered
                    show={openSuccessModal}
                    className="jp-modal"
                >
                    <Modal.Header id="contained-modal-title-vcenter1" className="cus-bgg-cw">
                        <h3>Success</h3>
                    </Modal.Header>
                    <Modal.Body>Congratulations! Your form has been submitted.</Modal.Body>
                    <Modal.Footer>
                        <Link href="/">
                            <Button variant="success">OK</Button>
                        </Link>
                    </Modal.Footer>
                </Modal>


            </div>

            <JpFooter />
        </>
    )
}

export default index