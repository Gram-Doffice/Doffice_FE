import React from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import trashcan from "../assets/trash-solid (1) 1.svg";
import Header from "../components/Header";


export const posts = [
    {
      id: 1,
      title: "겨울 감성 카페 추천",
      content:
        "따뜻한 커피와 감성 인테리어로 힐링할 수 있는 서울의 겨울 카페를 소개합니다.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      date: "2025-11-07",
    }
  ];

const Modify_Lost = () => {
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
            <Page_WriteLost>분실물 수정</Page_WriteLost>
          </Page_move>

          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              {posts.map((post) => (
                <Name_container
                  key={post.id}
                  type="text"
                  placeholder="제목을 입력해주세요"
                  defaultValue={post.title}
                ></Name_container>
              ))}
            </Name>

            <Picture_container>
              {[1, 2, 3].map((n) => (
                <Picture key={n}>
                  <img src={posts[0].image} width={150} height={150} alt="uploaded" />
                  <Trash_Button>
                    <img src={trashcan} width={50} height={50} alt="delete" />
                  </Trash_Button>
                </Picture>
              ))}
            </Picture_container>

            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              {posts.map((post) => (
                <Detail_container
                key={post.id}
                type="text"
                placeholder="내용을 입력해주세요"
                defaultValue={
                  post.content
                }
              ></Detail_container>
              ))}
              
            </Detail>

            <Upload_Button>수정하기</Upload_Button>
          </WN_container>
        </Container>
      </Main>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 900px;

  @media (max-width: 600px) {
    height: auto;
    overflow-y: auto;
    padding-bottom: 80px;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 63%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const Page_move = styled.div`
  width: 30%;
  height: 3%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 49px;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 100%;
    gap: 10px;
    margin-bottom: 30px;
  }
`;

const Page_PostList = styled.span`
  font-size: 18px;
  color: #797979;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Page_WriteLost = styled.div`
  font-size: 18px;
  color: #000000;
    font-weight: 700;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Arrow = styled.div`
  width: 20px;
  height: 20px;

  @media (max-width: 600px) {
    width: 15px;
    height: 15px;
  }
`;

const WN_container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 600px) {
    height: auto;
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

  @media (max-width: 600px) {
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
  display: flex;
  align-items: center;
  padding: 10px;
  resize: none;
  border-radius: 5px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    height: 45px;
  }
`;

const Picture_container = styled.div`
  width: 100%;
  min-height: 150px; 
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  gap: 20px; 
  margin: 20px 0;
  padding: 10px 0;

  @media (max-width: 768px) {
    justify-content: flex-start; 
    gap: 15px;
  }

  @media (max-width: 600px) {
    justify-content: center; /* 아주 작은 모바일에서는 중앙 정렬 (선택 사항) */
  }
`;

const Trash_Button = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  img {
    width: 40px !important; 
    height: 40px !important;
  }
`;

const Picture = styled.div`
  position: relative;
  width: 150px; 
  height: 150px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  &:hover > img {
    opacity: 0.5;
    transition: opacity 0.2s ease;
  }

  @media (max-width: 768px) {
    width: 140px; 
    height: 140px;
  }
`;


const Notice_Detail = styled.div`
  font-size: 14pt;
  color: #555555;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 13pt;
  }
`;

const Detail_container = styled.textarea`
  width: 100%;
  height: 260px;
  background-color: #eeeeee;
  border: none;
  display: flex;
  text-align: flex-start;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 40px;
  resize: none;
  border-radius: 5px;

  @media (max-width: 600px) {
    font-size: 16px;
    height: 200px;
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
  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(82, 170, 6);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    height: 45px;
    font-size: 14px;
  }
`;

export default Modify_Lost;
