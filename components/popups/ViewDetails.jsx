import { Button, Modal } from 'react-bootstrap'
import { formatDate, formatTimeFromDB, validateEmptyToDash } from '../../data/utils/utils'

const ViewDetails = ({ show, heading, data, onClickCancel }) => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            className='jp-modal'
        >
            <Modal.Header id="contained-modal-title-vcenter" className="cus-bgg-cw">
                <h3>{heading}</h3>
            </Modal.Header>
            <Modal.Body>
                {!data || data === undefined || data === null
                    ?
                    <div className="d-flex justify-content-center my-5" >
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        <table className='table table-bordered table-popups jp-table'>
                            <thead className="thead-light">
                                <tr>
                                    <th colSpan={2}><h5 className='jp-text-primary-bold'>Company Detials</h5></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='text-primary-st'>Ref No</th>
                                    <td>{data.agency_job_post_job_id}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Company Name</th>
                                    <td>{data.company_name}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Job Title</th>
                                    <td>{data.job_title}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Location</th>
                                    <td>{data.location}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Working Location</th>
                                    <td>{data.working_location}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <div className='jp-hr'></div>

                        <table className='table table-bordered table-popups jp-table'>
                            <thead className="thead-light">
                                <tr>
                                    <th colSpan={2}><h5 className='jp-text-primary-bold'>Job Detials</h5></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='text-primary-st'>Language</th>
                                    <td>{data.language}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Country</th>
                                    <td>{data.country}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Job Sector</th>
                                    <td>{data.job_sector}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Job Description</th>
                                    <td>{data.job_description}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Required Qualification</th>
                                    <td>{data.required_qualification}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Skills</th>
                                    <td>{data.agencyJobPostskills.map((item, key) => (key + 1) + ". " + (item.description) + "  ")}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Requirements</th>
                                    <td>{data.agencyJobPostRequirements.map((item, key) => (key + 1) + ". " + item.description + "  ")}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Resources Required</th>
                                    <td>{validateEmptyToDash(data.no_of_resources_required)}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Start Date</th>
                                    <td>{formatDate(data.start_date)}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Start Time</th>
                                    <td>{formatTimeFromDB(data.start_time) + " " + validateEmptyToDash(data.start_time_zone)}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>End Time</th>
                                    <td>{formatTimeFromDB(data.end_time) + " " + validateEmptyToDash(data.end_time_zone)}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Pay Rate</th>
                                    <td>{validateEmptyToDash(data.pay_rate) + ' ' + validateEmptyToDash(data.pay_rate_currency)}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Priority</th>
                                    <td>{data.priority}</td>
                                </tr>
                                <tr>
                                    <th className='text-primary-st'>Employee Requirements</th>
                                    <td>
                                        <div>
                                            Safety Shoes: <span className=' text-primary-st'>{data.safety_shoes ? 'Yes' : 'No'}</span>
                                        </div>
                                        <div>
                                            Safety Gloves: <span className=' text-primary-st'>{data.safety_gloves ? 'Yes' : 'No'}</span>
                                        </div>
                                        <div>
                                            Safety Jacket: <span className=' text-primary-st'>{data.safety_jacket ? 'Yes' : 'No'}</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
            </Modal.Body>
            <Modal.Footer>
                {/* <PDFDownloadLink
                document={<PostedJobsPDF viewPost={viewPost} />}
                fileName={`Posted Job #${viewID}`}
              >
                {viewPost && <Button variant='success'>Download form</Button>}
              </PDFDownloadLink> */}
                <Button variant='danger' onClick={onClickCancel}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ViewDetails
