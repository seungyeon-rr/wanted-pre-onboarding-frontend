import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignInAPI } from '../../../api/api';
import { Container, Form, Button } from 'react-bootstrap';

const SignIn = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValue;

  const handleLoginInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const goSignIn = () => {
    if (email.length == 0 || email.valueOf === '') {
      alert('이메일이 비어있습니다.');
    } else if (!email.includes('@')) {
      alert('이메일 형식이 아닙니다.');
    } else if (password.length < 8) {
      alert('비밀번호는 8자리 이상 입력해주세요.');
    } else {
      postSignInAPI(inputValue)
        .then(res => {
          res.statusText === 'OK' &&
            localStorage.setItem('access_token', res.data.access_token);
          navigate('/todo');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <h3>로그인</h3>
      <Form onChange={e => handleLoginInput(e)}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            defaultValue={email}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            defaultValue={password}
          />
        </Form.Group>
        <Button
          className="d-flex mx-auto"
          variant="primary"
          onClick={() => {
            goSignIn();
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
