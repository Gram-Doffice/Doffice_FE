import React from "react";
import styled from "@emotion/styled";
import eye from "../assets/eye.svg";




const Login = () => {



  return (
    <Body>
      <Header>
        <Menu>
          <HomeButton>HOME</HomeButton>
          <LogIn>LOGIN</LogIn>
        </Menu>
      </Header>
      <LogIn_Box>
        <Login_Text>로그인</Login_Text>
        <Id_Input_Box
          type="text"
          placeholder="아이디를 입력해주세요"
        ></Id_Input_Box>
        <Password>
          <Password_Input_Box
            type="password"
            placeholder="비밀번호를 입력해주세요"
          ></Password_Input_Box>
          <img src={eye} />
        </Password>
        <LogIn_Button>로그인</LogIn_Button>
      </LogIn_Box>
    </Body>
  );
};

const Body = styled.div`
  width: 100vw;
  height: 900px;
`;

const Header = styled.div`
  width: 100vw;
  height: 7%;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  width: 13%;
  height: auto;
  position: absolute;
  right: 7%;
  display: flex;
  gap: 100px;
`;

const HomeButton = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: #555555;
      &:hover{
    cursor: pointer;
  }
`;

const LogIn = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #555555;
      &:hover{
    cursor: pointer;
  }
`;

const LogIn_Box = styled.div`
  width: 26%;
  height: 44%;
  position: absolute;
  top: 28%;
  left: 37%;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const Login_Text = styled.span`
  font-size: 48px;
  font-weight: 600;
  border-left: 2px solid #000000;
  padding: 0 20px;
  margin-bottom: 99px;
`;
const Id_Input_Box = styled.input`
  width: 100%;
  height: 10%;
  border: 1px solid #66c50d;
  margin-bottom: 58px;
  border-radius: 5px;
  padding-left: 20px;
    &:focus{
    outline: none;
  }
`;

const Password = styled.div`
  width: 100%;
  height: 10%;
  border: 1px solid #66c50d;
  margin-bottom: 72px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const Password_Input_Box = styled.input`
  width: 95%;
  height: 100%;
  border: none;
  padding-left: 20px;
  &:focus{
    outline: none;
  }
`;

const LogIn_Button = styled.button`
  width: 100%;
  height: 10%;
  background-color: rgba(82, 170, 6, 0.5);
  border: none;
  color: #ffffff;
  border-radius: 5px;

  &:hover{
    background-color: rgb(82, 170, 6);
    cursor: pointer;
  }
`;

export default Login;
