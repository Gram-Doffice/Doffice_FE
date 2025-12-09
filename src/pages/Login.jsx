import React, { useState } from "react";
import styled from "@emotion/styled";
import eye from "../assets/eye.svg";
import Header from "../components/Header";

const Login = () => {
  const [showPw, setShowPw] = useState(false);

  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = async () => {
    if (!password && !id) {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    } else if (!password) {
      alert("비밀번호를 입력해주세요");
      return;
    } else if (!id) {
      alert("아이디를 입력해주세요");
      return;
    }
  };

  return (
    <Body>
      <Header />
      <Login_Box>
        <Login_Text>로그인</Login_Text>
        <Id_Input_Box
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></Id_Input_Box>
        <Password>
          <Password_Input_Box
            type={showPw ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Password_Input_Box>
          <Eye_Icon
            type="button"
            onClick={() => setShowPw((v) => !v)}
            title={showPw ? "숨기기" : "보기"}
          >
            <img src={eye} alt="비밀번호 보기" />
          </Eye_Icon>
        </Password>
        <LogIn_Button onClick={handleSubmit}>로그인</LogIn_Button>
      </Login_Box>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 900px;
  position: relative;
`;

const Login_Box = styled.div`
  width: 26%;
  height: 500px;
  position: absolute;
  top: 28%;
  left: 37%;
  display: flex;
  flex-direction: column;

  /* 반응형 */
  @media (max-width: 1440px) {
    left: 35%;
  }

  @media (max-width: 1024px) {
    width: 40%;
    left: 30%;
  }

  @media (max-width: 768px) {
    width: 60%;
    left: 20%;
    top: 25%;
  }

  @media (max-width: 480px) {
    width: 80%;
    left: 10%;
    top: 20%;
  }
`;

const Login_Text = styled.span`
  font-size: 48px;
  font-weight: 600;
  border-left: 2px solid #000000;
  padding: 0 20px;
  margin-bottom: 99px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 70px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 50px;
  }
`;

const Id_Input_Box = styled.input`
  width: 100%;
  height: 46px;
  border: 1px solid #66c50d;
  margin-bottom: 58px;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 16px;
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    height: 42px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

const Password = styled.div`
  width: 100%;
  height: 46px;
  border: 1px solid #66c50d;
  margin-bottom: 72px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-right: 20px;

  @media (max-width: 768px) {
    height: 42px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }

  img {
    width: 20px;
    cursor: pointer;

    @media (max-width: 480px) {
      width: 18px;
    }
  }
`;

const Eye_Icon = styled.div`
  display: flex;
  align-items: center;
`;

const Password_Input_Box = styled.input`
  width: 95%;
  height: 100%;
  border-radius: 5px;
  border: none;
  padding-left: 20px;
  font-size: 16px;

  &:focus {
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
  font-size: 18px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(82, 170, 6);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    height: 45px;
    font-size: 15px;
  }
`;

export default Login;
