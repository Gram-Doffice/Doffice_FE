import React from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Modify_Notice = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Page_move>
            <Page_PostList onClick={() => navigate("/check-notice")}>
              공지사항 상세 확인
            </Page_PostList>
            <Arrow>
              <img src={arrow} />
            </Arrow>
            <Page_WriteNotice>공지사항 수정</Page_WriteNotice>
          </Page_move>
          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              <Name_container
                type="text"
                placeholder="제목을 적어주세용"
                defaultValue={
                  "제목이란 무엇인가 제목의 사전적 의미는 책이나 글따위를 이야기할때 그것의 주된 이름으로 주로 책, 시, 글 등 문학적인 부분이나 논문, 기타 글들의 주 이름이 된다 이라면 과연 내 이름 또한 그럴까"
                }
              ></Name_container>
            </Name>
            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              <Detail_container
                type="text"
                placeholder="내용을 적어주세용"
                defaultValue={"대충 그긴거/"}
              ></Detail_container>
            </Detail>
            <Upload_Button>수정하기</Upload_Button>
          </WN_container>
        </Container>
      </Main>
    </Body>
  );
};

// ✅ 고정 높이 → 최소 높이 + 스크롤 가능하게 수정
const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  padding-bottom: 60px;

  @media (max-width: 1024px) {
    padding: 0 40px 60px 40px;
  }

  @media (max-width: 600px) {
    padding: 0 20px 80px 20px;
  }
`;

const Container = styled.div`
  width: 63%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`;

const Page_move = styled.div`
  width: 35%;

  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 49px;

  @media (max-width: 1024px) {
    width: 60%;
    margin-bottom: 35px;
    gap: 15px;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 25px;
    gap: 10px;
  }
`;

const Page_PostList = styled.span`
  font-size: 18px;
  color: #555555;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Page_WriteNotice = styled.div`
  font-size: 18px;
  color: #000000;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Arrow = styled.div`
  width: 20px;
  height: 20px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 600px) {
    width: 14px;
    height: 14px;
  }
`;

const WN_container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Notice_Name = styled.div`
  font-size: 14pt;
  margin-bottom: 10px;
  color: #555555;

  @media (max-width: 1024px) {
    font-size: 13pt;
  }

  @media (max-width: 600px) {
    font-size: 12pt;
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
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    height: 45px;
  }
`;

const Notice_Detail = styled.div`
  font-size: 14pt;
  color: #555555;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 13pt;
  }

  @media (max-width: 600px) {
    font-size: 12pt;
  }
`;

const Detail_container = styled.textarea`
  width: 100%;
  height: 460px;
  background-color: #eeeeee;
  border: none;
  display: flex;
  text-align: flex-start;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 20px;
  resize: none;

  @media (max-width: 1024px) {
    height: 400px;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    height: 300px;
    font-size: 14px;
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
  border-radius: 5px;
  transition: background-color 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: rgb(82, 170, 6);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    height: 45px;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    height: 50px;
    font-size: 13px;
  }
`;

export default Modify_Notice;
