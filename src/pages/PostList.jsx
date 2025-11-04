import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const PostList = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("/");
  const [isOwn, setIsOwn] = useState(false)

  const handleClick = (path) => {
    setActive(path);
    navigate(path);
  };

  return (
    <Body>
      <Header/>
      <SecondContainer>
        <MainBox>
          <ListText>게시물 목록</ListText>
          <ListInputBox>
            <CatBox>
              <CatText active={active === "/"} onClick={() => handleClick("/")}>
                전체 게시물
              </CatText>
              <hr />
              <CatText
                active={active === "/notice-list"}
                onClick={() => handleClick("/notice-list")}
              >
                공지사항
              </CatText>
              <hr />
              <CatText
                active={active === "/lost-list"}
                onClick={() => handleClick("/lost-list")}
              >
                분실물
              </CatText>
            </CatBox>
            <PostButtonBox>
              {isOwn && (
                <>
                  <PostButton onClick={() => navigate("/write-notice")}>
                    공지사항 작성하기
                  </PostButton>
                  <PostButton onClick={() => navigate("/write-lost")}>분실물 작성하기</PostButton>
                </>
              )}
            </PostButtonBox>
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
  height: 900px;
  margin-bottom: 174px;
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
  color: ${(props) => (props.active ? "#000000" : "#777777")};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;
`;

const PostButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
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
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: relative;
`;

const TitleText = styled.span`
  font-size: 22px;
  font-weight: bold;
  align-self: center;
`;
const DateText = styled.span`
  font-size: 16px;
  font-weight: bold;
  align-self: flex-end;
  color: #555555;
  position: absolute;
  bottom: 10%;
  right: 10%;
`;
export default PostList;
