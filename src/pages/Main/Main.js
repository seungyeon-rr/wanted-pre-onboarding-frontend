import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';

const Main = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const changeComp = () => {
    setIsLogin(prev => !prev);
  };

  useEffect(() => {
    localStorage.getItem('access_token') && navigate('/todo');
  }, []);

  return (
    <LoginWrap>
      <Container>
        {isLogin ? <SignIn /> : <SignUp />}
        <Button
          className="d-flex mx-auto mt-3"
          variant="outline-info"
          size="sm"
          onClick={changeComp}
        >
          {isLogin ? '회원가입' : '로그인 돌아가기'}
        </Button>
      </Container>
    </LoginWrap>
  );
};

export default Main;

const LoginWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  margin: 0 auto;
  padding: 40px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
