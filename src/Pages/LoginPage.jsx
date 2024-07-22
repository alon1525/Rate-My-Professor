import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import styled from "styled-components";
import Navbar from '../Components/Navbar';

const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your Google client ID

export default function LoginPage() {
  function handleSuccess(response){
    console.log('Login successful:', response);
    // Send response.tokenId to your backend to handle authentication
  };

  function handleFailure(error){
    console.error('Login failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Container>
        <Navbar />
        <LoginWrapper>
          <LoginContainer>
            <h1>Login</h1>
            <GoogleLogin
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              buttonText="Login with Google"
              className="g-btn"
            />
          </LoginContainer>
        </LoginWrapper>
      </Container>
    </GoogleOAuthProvider>
  );
};

// Styled components to match the homepage style
const Container = styled.div`
  background-color: #405D72;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
`;

const LoginContainer = styled.div`
  background-color: #FFF8F3;
  color: #333;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  padding: 40px 30px;
  max-width: 400px;
  width: 100%;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    color: #405D72;
  }

  .g-btn {
    margin: 10px 0;
    padding: 10px;
    background-color: #555;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #777;
    }
  }
`;
