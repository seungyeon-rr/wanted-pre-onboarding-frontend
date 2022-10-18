import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SignIn = () => {
  return (
    <Container>
      <h3>로그인</h3>
      <Form>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="d-flex mx-auto" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
