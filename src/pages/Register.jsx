import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaperaccess.com/full/4329058.jpg")
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
const Linkk = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email }, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="password" />
          <Input type="password" placeholder="confirm password" onChange={(e) => setPassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/login"><Linkk>Have an account? login here</Linkk></Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
