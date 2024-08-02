// ErrorPage.jsx
import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f2f2f2;
  text-align: center;
  padding: 20px;
`;

const ErrorTitle = styled.h1`
  font-size: 4rem;
  color: #e74c3c;
  margin: 0;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const ErrorCode = styled.p`
  font-size: 1rem;
  color: #777;
`;

const ErrorLink = styled.a`
  margin-top: 20px;
  font-size: 1rem;
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ErrorPage() {
  return (
    <ErrorContainer>
      <ErrorTitle>Oops!</ErrorTitle>
      <ErrorMessage>Something went wrong. The page you are looking for does not exist.</ErrorMessage>
      <ErrorCode>Error Code: 404</ErrorCode>
      <ErrorLink href="/">Go back to Home</ErrorLink>
    </ErrorContainer>
  );
}
