import { useState } from "react"
import { useMutation } from "@apollo/client"
import { ADD_JOB } from "../../../data/graphQL/Mutations"
import { Modal, Button } from "react-bootstrap"
import Link from "next/link"
import CallToAction from "../../call-to-action/CallToAction"
import Header from "../../home-9/Header"
import MobileMenu from "../../header/MobileMenu"
import JpFooter from "../../footer/Jpfooter"

const index = () => {

    // const [logImg, setLogoImg] = useState("")
    // const logImgHander = (e) => {
    //     setLogoImg(e.target.files[0])
    // }

    const [formData, setFormData] = useState({
        companyName: "",
        companyLogo: null,
        companyDetailsPhoneNumber: "",
        websiteLink: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",

        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        companyAdminContact: "",
        jobTitle: "",
        jobType: "",
        noOfResourcesRequired: "",
        jobDescriptionFile: null,
        additionalDetails: "",
    })
    console.log(formData)
    const [AddJob, { data, loading, error }] = useMutation(ADD_JOB, {
        onCompleted: (data) => {
            setOpenSuccessModal(!openSuccessModal)
            return
        },
        onError: (error) => {
            console.log(error)
            setOpenErrorModal(!openErrorModal)
            return
        },
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addJobRes()
    }

    const handleFormClear = (e) => {
        e.preventDefault()
        setFormData({
            companyName: "",
            companyLogo: null,
            companyDetailsPhoneNumber: "",
            websiteLink: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zipCode: "",

            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            companyAdminContact: "",
            jobTitle: "",
            jobType: "",
            noOfResourcesRequired: "",
            jobDescriptionFile: null,
            additionalDetails: "",
        })
    }
    console.log({ data, error, loading })

    const addJobRes = () => {
        AddJob({
            variables: {
                companyName: formData.companyName,
                companyLogo: formData.companyLogo,
                companyDetailsPhoneNumber: formData.companyDetailsPhoneNumber,
                websiteLink: formData.websiteLink,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                country: formData.country,
                zipCode: formData.zipCode,

                firstName: formData.firstName,
                middleName: formData.middleName,
                lastName: formData.lastName,
                email: formData.email,
                companyAdminContactNumber: formData.companyAdminContact,
                jobTitle: formData.jobTitle,
                jobType: formData.jobType,
                noOfResourcesRequired: formData.noOfResourcesRequired,
                jobDescriptionFile: formData.jobDescriptionFile,
                additionalDetails: formData.additionalDetails,
            },
        })
    }


    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)

    return (
        <>
            <span className="header-span"></span>
            <Header />
            <MobileMenu />

            <div>
                <div className="hiring-form-banner-container">
                    <div className="hiring-form-banner-content" data-aos="fade-up">
                        <h1>FILL OUT THE HIRING FORM</h1>
                    </div>
                </div>

                <section className="contact-section" >
                    <div className="auto-container" style={{ backgroundColor: "#ECFFF2",borderRadius:"20px" }}>

                        <div className="hiring-form default-form" data-aos="fade-up">
                            <form>
                                <div className="row">
                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                        <div className="response"></div>
                                    </div>

                                    <h4 className="cus-pb-30">Company Details</h4>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Company Name *</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Company Name *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />

                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Company Logo *</label>
                                        <div className="cus-file-input-container">
                                            <input type="text" className="username cus-file-input" value={formData.companyLogo ? formData.companyLogo.name : ''} readOnly placeholder="No file selected" style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }} />
                                            <label htmlFor="file" className="theme-btn btn-style-one cus-file-input-button">Browse</label>
                                            <input type="file" id="file" name="companyLogo" className="cus-file-input-hidden"
                                                onChange={(e) => setFormData({ ...formData, companyLogo: e.target.files[0] })}
                                                
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Phone No. *</label>
                                        <input
                                            type="number"
                                            name="companyDetailsPhoneNumber"
                                            value={formData.companyDetailsPhoneNumber}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Phone No. *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Website Link</label>
                                        <input
                                            type="text"
                                            name="websiteLink"
                                            value={formData.websiteLink}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Website Link"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Address *</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Address *"
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
                                        <label>Province / State *</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Province / State *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Country *</label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Country *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Postal Code / Zip Code *</label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Postal Code / Zip Code *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="cus-pb-30"></div>

                                    <h4 className="cus-pb-30">Company Additional Details</h4>

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
                                        <label>Contact Number *</label>
                                        <input
                                            type="text"
                                            name="companyAdminContact"
                                            value={formData.companyAdminContact}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Contact Number *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Job Title *</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="Job Title *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Select a Job Sector *</label>
                                        <select
                                            className="username"
                                            name="jobType"
                                            defaultValue={formData.jobType}
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
                                        <label>How many Employees do you need? *</label>
                                        <input
                                            type="number"
                                            name="noOfResourcesRequired"
                                            value={formData.noOfResourcesRequired}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            className="username"
                                            placeholder="How many Employees do you need? *"
                                            required
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        />
                                    </div>

                                    <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                                        <label>Upload Criteria File *</label>
                                        <div className="cus-file-input-container">
                                            <input type="text" className="username cus-file-input" value={formData.jobDescriptionFile ? formData.jobDescriptionFile.name : ''} readOnly placeholder="No file selected" style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }} />
                                            <label htmlFor="file2" className="theme-btn btn-style-one cus-file-input-button">Browse</label>
                                            <input type="file" id="file2" name="jobDescriptionFile" className="cus-file-input-hidden"
                                                onChange={(e) => setFormData({ ...formData, jobDescriptionFile: e.target.files[0] })}
                                                style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <label>Additional Notes</label>
                                        <textarea
                                            name="additionalDetails"
                                            value={formData.additionalDetails}
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                            placeholder="Write your additional notes..."
                                            style={{ backgroundColor: "#ECFFF2", borderColor: "#959595" }}
                                        ></textarea>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group text-end">
                                        {loading ?
                                            <button
                                                className="theme-btn btn-style-nine"
                                                disabled={true}
                                            >
                                                Loading...
                                            </button>
                                            :
                                            <>
                                                <button
                                                    className="theme-btn btn-style-ten cus-mr-10"
                                                    id="submit"
                                                    onClick={handleFormClear}
                                                    style={{ backgroundColor: "#ECFFF2", borderColor: "#1F9747" ,color:"#1F9747"}}
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