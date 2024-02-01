import {Modal} from "react-bootstrap";

const ModalComponent = ({ children,title,show,handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="vertical" centered animation={false}>
      <Modal.Header closeButton>
        <Modal.Title id="vertical">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
