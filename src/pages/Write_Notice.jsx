import React from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg"
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Write_Notice = () => {

    const navigate = useNavigate();
  return (
    <Body>
      <Header/>
      <Main>
        <Container>
        <Page_move>
            <Page_PostList onClick={() => navigate("/")}>게시글 목록</Page_PostList>
            <Arrow><img src={arrow} /></Arrow>
            <Page_WriteNotice>공지사항 등록</Page_WriteNotice>
        </Page_move>
          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              <Name_container
                type="text"
                placeholder="제목을 적어주세용"
              ></Name_container>
            </Name>
            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              <Detail_container
                type="text"
                placeholder="내용을 적어주세용"
              ></Detail_container>
            </Detail>
            <Upload_Button>올리기</Upload_Button>
          </WN_container></Container>
      </Main>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 900px;
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
`
const Page_move = styled.div`
    width: 24%;
    height: 3%;
    display: flex;
    align-items: center;
    gap: 20px;
  margin-bottom: 49px;
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
const Name_container = styled.input`
    width: 100%;
    height: 50px;
    background-color: #EEEEEE;
    border: none;
    margin-bottom: 10px;
    font-size: 18px;
    padding: 10px;
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
