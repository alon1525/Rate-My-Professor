// src/Pages/LoginPage.jsx
import React from 'react';
import styled from 'styled-components';

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginHeader>
        <h2>Login</h2>
      </LoginHeader>
      <LoginOptions>
        <Button onClick={() => alert('Google Login')}>Login with Google</Button>
        <Separator>or</Separator>
        <Form>
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit">Login</Button>
        </Form>
      </LoginOptions>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
`;

const LoginHeader = styled.div`
  margin-bottom: 1rem;
`;

const LoginOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: #fdcb6e;
  color: #2d3436;
  border: none;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #e5a931;
  }
`;

const Separator = styled.div`
  margin: 1rem 0;
  font-size: 1rem;
  color: #2d3436;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;
