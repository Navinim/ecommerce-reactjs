import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Redirect } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '../components/auth'



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration:none;
  cursor: pointer;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectTo: false
  });
  const { email, password, error, redirectTo } = values
  const { user } = isAuthenticated()

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false })
    signin({ email, password })
      .then(data => {
        if (data.error) {
          // console.log(data.error)
          setValues({ ...values, error: data.error, redirectTo: false })
        }
        else {
          authenticate(data, () => {
            setValues({ ...values, redirectTo: true })
          })
        }
      })

  };

  const redirectUser = () => {
    if (redirectTo) {
      if (user && user.role ===true) {
        return <Redirect to="/admin/dashboard" />
      }
    }
    if (isAuthenticated() && user.role ===false) {
      return <Redirect to="/user/profile" />
    }
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            {redirectUser()}
            <Input
              placeholder="email"
              onChange={handleChange('email')} value={email}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={handleChange('password')} value={password}
            />
            <Button onClick={handleSubmit} >LOGIN</Button>
            <Error>{error}</Error>
            <Link to="/forget/password">Forget Password?</Link>
            <Link to="/dddddd">DO NOT REMEMBER THE PASSWORD?</Link>
            <Link to="/register">NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;