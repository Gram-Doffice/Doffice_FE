import React from "react";
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
};

const Container = styled.div`
  width: 100%;
  height: 75px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-end; /* ✅ 모든 디바이스에서 오른쪽 정렬 */
  padding-right: 80px; /* ✅ 살짝 안쪽으로 들어오게 */
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 49px;

  /* 반응형: 여백이나 크기만 조금 조정 */
  @media (max-width: 1024px) {
    height: 70px;
    padding-right: 60px;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    height: 60px;
    padding-right: 40px;
    margin-bottom: 20px;
  }
`;

const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-right: 102px;
  color: #555555;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #52aa06;
  }

  @media (max-width: 1024px) {
    font-size: 22px;
    margin-right: 60px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    margin-right: 30px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default Header;
