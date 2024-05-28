import { Button, Modal } from 'react-bootstrap'

const DeleteConfirmation = ({ show, heading, text, onClickSuccess, onClickCancel }) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter1"
      centered
      show={show}
      className='jp-modal'
    >
      <Modal.Header id="contained-modal-title-vcenter1" className="cus-bgg-cw"><h3>{heading}</h3></Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={onClickSuccess}>Delete</Button>
        <Button variant='danger' onClick={onClickCancel}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteConfirmation