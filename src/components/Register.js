import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { signup } from "../components/auth";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Show = styled.div`
  font-size:15px;
  font-weight:600;
  min-width: 40%;
 
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })
  //destructering the key of usestate
  const { name, email, password, error, success } = values

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value })
  }
  const handleClick = e => {
    e.preventDefault()
    setValues({ ...values, error: false })
    //call the signup function
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          // console.log(data.error)
          setValues({ ...values, error: data.error, success: false })
        }
        else {
          setValues({ ...values, name: '', email: '', password: '', success: true })
        }
      })
  }
  //to show error
  const showError = () => (
    <Show style={{color: 'red', display: error ? '' : 'none' }}>{error}</Show>
  )
  //to show success message
  const showSucc = () => (
    <Show style={{ color: 'green', display: success ? '' : 'none' }}>
      New Account has been Created,verify your account before login.
    </Show>
  )
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {showError()}
        {showSucc()}
        <Form>
          <Input placeholder="Full Name" onChange={handleChange('name')} value={name} />
          <Input placeholder="Email" onChange={handleChange('email')} value={email} />
          <Input placeholder="Password" type="password" onChange={handleChange('password')} value={password} />
          {/* <Input placeholder="confirm password" /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;