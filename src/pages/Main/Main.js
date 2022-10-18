import React, { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';

const Main = () => {
  const [switchComp, setSwitch] = useState(true);

  const change = () => {
    setSwitch(prev => !prev);
  };

  return (
    <LoginWrap>
      <Container>
        {switchComp ? <SignIn /> : <SignUp />}
        <Button
          className="d-flex mx-auto mt-3"
          variant="outline-info"
          size="sm"
          onClick={change}
        >
          {switchComp ? '회원가입' : '로그인 돌아가기'}
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
