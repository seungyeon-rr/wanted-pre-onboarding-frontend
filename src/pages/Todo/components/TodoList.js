import React, { useState, useEffect } from 'react';
import { getTodoAPI, updateTodoAPI, deleteTodoAPI } from '../../../api/api';
import EditTodoModal from './EditTodoModal';
import styled from 'styled-components';
import {
  Container,
  ListGroup,
  Row,
  Col,
  Button,
  ToggleButton,
} from 'react-bootstrap';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { MdBorderColor, MdDelete } from 'react-icons/md';
const Todolist = ({ listData, setListData }) => {
  const [modalValue, setModalValue] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fatchDate = () => {
    getTodoAPI().then(res => {
      setListData(res.data);
    });
  };

  const isChecked = (id, todo, isCompleted) => {
    updateTodoAPI(id, todo, isCompleted).then(res => {
      setListData(res.data);
    });
  };

  const DeleteTodo = id => {
    deleteTodoAPI(id).then(res => {
      setListData(res.data);
    });
  };

  useEffect(() => {
    fatchDate();
  }, []);

  return (
    <Container>
      <ListGroup as="ul">
        {listData.map(item => {
          const { id, isCompleted, todo } = item;
          return (
            <ListGroup.Item as="li" key={id}>
              <ToggleButton
                id="toggle-check"
                type="checkbox"
                checked={isCompleted}
                onClick={() => {
                  !isCompleted
                    ? isChecked(id, todo, true)
                    : isChecked(id, todo, false);
                }}
              >
                {isCompleted ? <ImCheckboxUnchecked /> : <ImCheckboxChecked />}
              </ToggleButton>
              <Row>
                {isCompleted ? (
                  <CompleteTodo xs={12} md={8}>
                    {todo}
                  </CompleteTodo>
                ) : (
                  <Col xs={12} md={8}>
                    {todo}
                  </Col>
                )}

                <Col>
                  <Button
                    variant="success"
                    onClick={() => {
                      handleShow();
                      setModalValue(id);
                    }}
                  >
                    <MdBorderColor />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      DeleteTodo(id);
                    }}
                  >
                    <MdDelete />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <EditTodoModal
        show={show}
        setShow={setShow}
        modalValue={modalValue}
        setListData={setListData}
      />
    </Container>
  );
};

export default Todolist;

const CompleteTodo = styled(Col)`
  color: #999;
  text-decoration: line-through;
`;
