import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Stack, Container, Button } from 'react-bootstrap';

const Todo = () => {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  useEffect(() => {
    !localStorage.getItem('access_token') && navigate('/');
  }, []);

  return (
    <TodoWrap>
      <Stack direction="horizontal" gap={2} className="mb-5">
        <h3>To do list</h3>
        <Button
          className="ms-auto"
          variant="outline-dark"
          size="sm"
          onClick={() => logout()}
        >
          로그아웃
        </Button>
      </Stack>

      <Container>
        <AddTodo listData={listData} setListData={setListData} />
        <TodoList listData={listData} setListData={setListData} />
      </Container>
    </TodoWrap>
  );
};

export default Todo;

const TodoWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  margin: 0 auto;
  padding: 40px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
