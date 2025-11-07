import React from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import camera from "../assets/camera.svg";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Write_Notice = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Page_move>
            <Page_PostList onClick={() => navigate("/")}>게시글 목록</Page_PostList>
            <Arrow>
              <img src={arrow} alt="arrow" />
            </Arrow>
            <Page_WriteLost>분실물 등록</Page_WriteLost>
          </Page_move>

          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              <Name_container type="text" placeholder="제목을 입력해주세요" />
            </Name>

            <Picture_container>
              사진 추가하기
              <Picture>
                <img src={camera} width={80} height={80} alt="camera" />
              </Picture>
            </Picture_container>

            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              <Detail_container
                type="text"
                placeholder="내용을 입력해주세요"
              ></Detail_container>
            </Detail>

            <Upload_Button>올리기</Upload_Button>
          </WN_container>
        </Container>
      </Main>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 900px;
  overflow: hidden;

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

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    gap: 10px;
    margin-bottom: 30px;
  }
`;

const Page_PostList = styled.span`
  font-size: 18px;
  color: #797979;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Page_WriteLost = styled.div`
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
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 768px) {
    height: auto;
    align-items: center;
  }
`;

const Name = styled.div`
  width: 100%;
`;

const Detail = styled.div`
  width: 100%;
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

const Picture_container = styled.div`
  width: 170px;
  height: 170px;
  border: 4px dashed #7b7b7b;
  border-radius: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 16px;
    border-width: 3px;
    padding: 30px 0;
  }
`;

const Picture = styled.div`
  width: 113px;
  height: 106px;
  display: flex;
  justify-content: center;
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
  height: 200px;
  background-color: #eeeeee;
  border: none;
  display: flex;
  text-align: flex-start;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 40px;
  resize: none;

  @media (max-width: 768px) {
    font-size: 16px;
    height: 220px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
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

  @media (max-width: 768px) {
    font-size: 14px;
    height: 38px;
  }
`;

export default Write_Notice;
