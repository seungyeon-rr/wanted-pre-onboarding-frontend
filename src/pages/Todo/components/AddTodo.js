import React, { useState, useRef, useCallback } from 'react';
import { Stack, Form, Button } from 'react-bootstrap';
import { createTodoAPI } from '../../../api/api';

const AddTodo = ({ setListData }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const onChangeInput = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const AddItem = () => {
    createTodoAPI(value).then(res => {
      setListData(res.data);
      setValue('');
      // inputRef.current.focus();
    });
  };

  return (
    <Stack direction="horizontal" gap={3} className="mb-4">
      <Form.Control
        className="me-auto"
        placeholder="Add your item here..."
        value={value}
        onChange={e => {
          onChangeInput(e);
        }}
      />
      <Button variant="secondary" onClick={() => AddItem()}>
        추가
      </Button>
    </Stack>
  );
};

export default AddTodo;
