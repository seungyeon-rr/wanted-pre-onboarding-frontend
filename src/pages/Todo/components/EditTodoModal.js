import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { updateTodoAPI } from '../../../api/api';

const EditTodoModal = ({ show, setShow, setListData, modalValue }) => {
  const [editValue, setEditValue] = useState('');
  const hendleFixValue = e => {
    setEditValue(e.target.value);
  };
  const editTodo = () => {
    updateTodoAPI(modalValue, editValue, false).then(res => {
      setListData(res.data);
      setShow(prev => !prev);
    });
  };

  return (
    <Modal show={show} centered>
      <Modal.Header
        closeButton
        onClick={() => {
          setShow(prev => !prev);
        }}
      >
        <Modal.Title>할 일 수정하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          className="me-auto"
          placeholder="할일을 수정하세요"
          onChange={e => {
            hendleFixValue(e);
          }}
        />
      </Modal.Body>
      <Button
        onClick={() => {
          editTodo();
        }}
      >
        수정하기
      </Button>
    </Modal>
  );
};

export default EditTodoModal;
