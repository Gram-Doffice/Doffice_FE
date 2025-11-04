import React from 'react'
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderTextBox>
        <HeaderText onClick={() => navigate("/")}>HOME</HeaderText>
        <HeaderText onClick={() => navigate("/login")}>LOGIN</HeaderText>
      </HeaderTextBox>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 75px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 49px;
`;

const HeaderTextBox = styled.div``;

const HeaderText = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-right: 102px;
  color: #555555;
  cursor: pointer;
`;
export default Header