import Link from 'next/link'
import { Button, Modal } from 'react-bootstrap'

const ErrorConfirmation = ({ show, heading, text, onClickSuccess }) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter1"
      centered
      show={show}
      className='jp-modal'
    >
      <Modal.Header id="contained-modal-title-vcenter1" className="cus-bgg-cw">
        <h3>{heading}</h3>
      </Modal.Header>
      <Modal.Body>
        {text}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={onClickSuccess}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ErrorConfirmation