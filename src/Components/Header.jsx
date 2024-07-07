import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 20px;
  color: #333; /* Dark text color */
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #333; /* Dark text color */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #555; /* Dark button background */
  color: white;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #777; /* Darker button on hover */
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Rate My Professors</Title>
      <ButtonContainer>
        <Button>Login</Button>
        <Button>Signup</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
}
