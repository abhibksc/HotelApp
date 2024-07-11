import React from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const AuthTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const AuthInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AuthButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Auth = () => {
  return (
    <AuthContainer>
      <AuthTitle>Login</AuthTitle>
      <AuthForm>
        <AuthInput type="email" placeholder="Email" />
        <AuthInput type="password" placeholder="Password" />
        <AuthButton>Login</AuthButton>
      </AuthForm>
    </AuthContainer>
  );
};

export default Auth;
