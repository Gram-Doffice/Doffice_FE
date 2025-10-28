import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const NoticeList = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <Header>
        <HeaderTextBox>
          <HeaderText onClick={() => navigate("/")}>HOME</HeaderText>
          <HeaderText>LOGIN</HeaderText>
        </HeaderTextBox>
      </Header>
      <SecondContainer>
        <MainBox>
          <ListText onClick={() => navigate("/")}>게시물 목록</ListText>
          <ListInputBox>
            <CatBox>
              <CatText onClick={() => navigate("/")}>전체 게시물</CatText>
              <hr />
              <CatText onClick={() => navigate("/notice-list")}>
                공지사항
              </CatText>
              <hr />
              <CatText onClick={() => navigate("/lost-list")}>분실물 </CatText>
            </CatBox>
            <PostButton>공지사항 작성하기</PostButton>
          </ListInputBox>
          <AllListBox>
            <ListBox onClick={() => navigate("/check-notice")}>
              <TitleText>제목이 들어갑니다.</TitleText>
              <DateText>2025 / 10 / 24</DateText>
            </ListBox>
          </AllListBox>
        </MainBox>
      </SecondContainer>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 100vh;
`;
const Header = styled.div`
  width: 100%;
  height: 8%;
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

const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.div`
  width: 63%;
  height: 100%;
`;

const ListText = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #555555;
`;

const ListInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const CatBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 18px;

  hr {
    color: #777777;
  }
`;

const CatText = styled.div`
  color: #555555;
  cursor: pointer;
`;

const PostButton = styled.button`
  font-size: 15px;
  color: white;
  border: none;
  padding: 14px 18px;
  border-radius: 5px;
  background-color: #66c50d;
`;
const AllListBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-top: 35px;
`;

const ListBox = styled.div`
  width: 30%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  padding: 20px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: relative;
`;

const TitleText = styled.span`
  font-size: 22px;
  font-weight: bold;
  align-self: center;
  position: absolute;
  top: 68px;
  left: 63px;
`;
const DateText = styled.span`
  font-size: 16px;
  font-weight: bold;
  align-self: flex-end;
  color: #555555;
`;
export default NoticeList;
