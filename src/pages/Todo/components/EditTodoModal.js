import { Modal, Form, Button } from 'react-bootstrap';

const EditTodoModal = ({ setListData }) => {
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          할 일 수정하기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control className="me-auto" placeholder="할일을 수정하세요" />
      </Modal.Body>
      <Button>수정하기</Button>
    </Modal>
  );
};

export default EditTodoModal;
