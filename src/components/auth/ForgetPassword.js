import React,{useState} from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import styled from "styled-components";
import { mobile } from "../../responsive";
import { forgetPassword } from './index';

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

const Button = styled.button`
  width: auto;
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

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Show = styled.div`
  font-size:15px;
  font-weight:600;
  min-width: 40%;
 
`;
const ForgetPassword = () => {
    const [values,setValues]=useState({
        email:'',
        error:'',
        success:false
    })
    const {email,error,success}=values
    const handleChange=name=>event=>{
     setValues({...values,error:false,[name]: event.target.value})
    }
    const handleClick=(e)=>{
        e.preventDefault()
        setValues({ ...values, error: false })
        forgetPassword({email})
        .then((data)=>{
            if(data.error){
                setValues({ ...values, error: data.error ,success:false})
            }else{
                setValues({...values,email:'',success:true})
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
      Password reset link has been sent to your email.
    </Show>
  )
  return (
    <>
     <Navbar/>
     <Container>
        <Wrapper>
          <Title>Forget Password</Title>
          {showError()}
          {showSucc()}
          <Form>
            {/* {redirectUser()} */}
            <Input
              placeholder="email"
              onChange={handleChange('email')} value={email}
            />
            <Button onClick={handleClick} >Send Password Reset Link</Button>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
     <Footer/>
    </>
  )
}

export default ForgetPassword