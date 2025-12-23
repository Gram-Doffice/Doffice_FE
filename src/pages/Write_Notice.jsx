import React, { useState } from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { createNotice } from "../api/post.api"

const Write_Notice = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate(); 

  const handleUpload = async () => {
    if (!title && !content){
      alert("제목과 내용을 입력해주세요");
      return;
    }
    else if (!title) {
      alert("제목을 입력해주세요");
      return;
    }
    else if(!content) {
      alert("내용을 입력해주세요.");
      return;
    }
    const payload = {
      title: title,
      content: content
    }
    try {
      const res = await createNotice(payload);
      console.log(res)
      // alert("공지사항 등록 완료!");
      navigate("/notice-list");
    } catch (error) {
      console.error("공지사항 등록 실패", error);
      alert("공지사항 등록 실패");
    }
  }
  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Page_move>
            <Page_PostList onClick={() => navigate("/")}>
              게시글 목록
            </Page_PostList>
            <Arrow>
              <img src={arrow} />
            </Arrow>
            <Page_WriteNotice>공지사항 등록</Page_WriteNotice>
          </Page_move>
          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              <Name_container
                type="text"
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Name_container>
            </Name>
            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              <Detail_container
                type="text"
                placeholder="내용을 입력해주세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></Detail_container>
            </Detail>
            <Upload_Button onClick={handleUpload}>올리기</Upload_Button>
          </WN_container>
        </Container>
      </Main>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 800px;
  
  @media (max-width: 768px) {
    height: auto;
    overflow-y: auto;
    padding: 0 10px;
  }

`;

const Main = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  justify-content: center;

    @media (max-width: 768px) {
    height: auto;
  }
`;
const Container = styled.div`
  width: 63%;
  height: 100%;
  display: flex;
  flex-direction: column;

    @media (max-width: 768px) {
    width: 100%;
  }
`;
const Page_move = styled.div`
  width: 30%;
  height: 3%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 49px;

  @media (max-width: 1300px) {
    width: 100%;
  }

    @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    gap: 10px;
    margin-bottom: 30px;
  }
`;

const Page_PostList = styled.span`
  font-size: 18px;
  color: #555555;
  &:hover {
    cursor: pointer;
  }

    @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Page_WriteNotice = styled.div`
  font-size: 18px;
  color: #000000;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }

    @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Arrow = styled.div`
  width: 20px;
  height: 20px;
`;
const WN_container = styled.div`
  width: 100%;

    @media (max-width: 768px) {
    height: auto;
    align-items: center;
  }
`;


const Notice_Name = styled.div`
  font-size: 14pt;
  margin-bottom: 10px;
  color: #555555;

    @media (max-width: 768px) {
    font-size: 13pt;
  }
`;
const Name_container = styled.input`
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  border: none;
  margin-bottom: 10px;
  font-size: 18px;
  padding: 10px;

    @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Notice_Detail = styled.div`
  font-size: 14pt;
  color: #555555;
  margin-bottom: 10px;

    @media (max-width: 768px) {
    font-size: 13pt;
  }
`;
const Detail_container = styled.textarea`
  width: 100%;
  height: 400px;
  background-color: #eeeeee;
  border: none;
  display: flex;
  text-align: flex-start;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 20px;
  resize: none;

    @media (max-width: 768px) {
    font-size: 16px;
    height: 500px;
  }

    ::-webkit-scrollbar {
    display: none;
  }


`;
const Name = styled.div`
  width: 100%;
`;
const Detail = styled.div`
  width: 100%;
`;

const Upload_Button = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(102, 197, 13, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  &:hover {
    background-color: rgb(82, 170, 6);
    cursor: pointer;
  }
`;

export default Write_Notice;