import React from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg"
import { Navigate, useNavigate } from "react-router-dom";

const Write_Notice = () => {

  const navigate = useNavigate();

  return (
    <Body>
      <Header>
        <Menu>
          <HomeButton>HOME</HomeButton>
          <LogIn onClick={() => navigate("/Modify_Notice")}>LOGIN</LogIn>
        </Menu>
      </Header>
      <Main>
        <Container>
        <Page_move>
            <Page_PostList>게시글 목록</Page_PostList>
            <Arrow><img src={arrow} /></Arrow>
            <Page_WriteNotice>공지사항 수정</Page_WriteNotice>
        </Page_move>
          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              <Name_container
                type="text"
                placeholder="제목을 적어주세용"
              >제목이란 무엇인가 제목의 사전적 의미는 책이나 글따위를 이야기할때 그것의 주된 이름으로 주로 책, 시, 글 등 문학적인 부분이나 논문, 기타 글들의 주 이름이 된다 이라면 과연 내 이름 또한 그럴까</Name_container>
            </Name>
            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              <Detail_container
                type="text"
                placeholder="내용을 적어주세용"
              >대충 그긴거/</Detail_container>
            </Detail>
            <Upload_Button>수정하기</Upload_Button>
          </WN_container></Container>
      </Main>
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

const Main = styled.div`
    width: 100%;
    height: 92%;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 63%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px 0;
`
const Page_move = styled.div`
    width: 24%;
    height: 3%;
    display: flex;
    align-items: center;
    gap: 20px;

`

const Page_PostList = styled.span`
    font-size: 18px;
    color: #555555;
        &:hover{
    cursor: pointer;
  }
`

const Page_WriteNotice = styled.div`
        font-size: 18px;
    color: #000000;
        &:hover{
    cursor: pointer;
  }
`
const Arrow = styled.div`
    width: 20px;
    height: 20px;
`
const WN_container = styled.div`
    width: 100%;
`
const Notice_Name = styled.div`
    font-size: 14pt;
    margin-bottom: 10px;
    color: #555555;
`
const Name_container = styled.textarea`
    width: 100%;
    height: 50px;
    background-color: #EEEEEE;
    border: none;
    margin-bottom: 10px;
    font-size: 18px;
    padding: 10px;
    resize: none;
`
const Notice_Detail = styled.div`
    font-size: 14pt;
    color: #555555;
    margin-bottom: 10px;
`
const Detail_container = styled.textarea`
    width: 100%;
    height: 550px;
    background-color: #EEEEEE;
    border: none;
    display: flex;
    text-align: flex-start;
    font-size: 18px;
    padding: 10px;
    margin-bottom: 20px;
    resize: none;
`
const Name = styled.div`
    width: 100%;
`
const Detail = styled.div`
    width: 100%;
`


const Upload_Button = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(102,197,13,0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  &:hover{
    background-color: rgb(82, 170, 6);
    cursor: pointer;
  }
`

export default Write_Notice;
