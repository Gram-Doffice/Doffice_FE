import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

  export const posts = [
    {
      id: 1,
      title: "겨울 감성 카페 추천",
      content:
        "따뜻한 커피와 감성 인테리어로 힐링할 수 있는 서울의 겨울 카페를 소개합니다.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      date: "2025-11-07",
    },
    {
      id: 2,
      title: "React 상태 관리 완벽 가이드",
      content:
        "useState, Redux, Recoil 등 다양한 상태 관리 방법을 비교해봅니다.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      date: "2025-11-06",
    },
    {
      id: 3,
      title: "가을 여행지 BEST 5",
      content:
        "단풍이 절정인 11월, 국내에서 즐길 수 있는 가을 여행지를 추천합니다.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      date: "2025-11-04",
    },
    {
      id: 4,
      title: "프론트엔드 포트폴리오 디자인 팁",
      content:
        "시선을 끄는 포트폴리오 UI/UX를 만드는 핵심 포인트를 알려드립니다.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      date: "2025-11-02",
    },
  ];

const PostList = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("/");
  const [isOwn, setIsOwn] = useState(false);

  const handleClick = (path) => {
    setActive(path);
    navigate(path);
  };



  return (
    <Body>
      <Header />
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
                  <PostButton onClick={() => navigate("/write-lost")}>
                    분실물 작성하기
                  </PostButton>
                </>
              )}
            </PostButtonBox>
          </ListInputBox>

          <AllListBox>
            {posts.map((post) => (
              <ListBox key={post.id} onClick={() => navigate("/check-notice")}>
                <TitleText>{post.title}</TitleText>
                <DateText>{post.date}</DateText>
              </ListBox>
            ))}
          </AllListBox>
        </MainBox>
      </SecondContainer>
    </Body>
  );
};

/* ========== styled components ========== */

const Body = styled.div`
  width: 100%;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 100px;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 20px;
  }
`;

const MainBox = styled.div`
  width: 1020px;
  height: 100%;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const ListText = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #555555;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ListInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CatBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 18px;
  flex-wrap: wrap;

  hr {
    color: #777777;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    gap: 10px;
  }
`;

const CatText = styled.div`
  color: ${(props) => (props.active ? "#000000" : "#777777")};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const PostButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const PostButton = styled.button`
  font-size: 15px;
  color: white;
  border: none;
  padding: 14px 18px;
  border-radius: 5px;
  background-color: #66c50d;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #52aa06;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const AllListBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-top: 35px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
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
  background-color: white;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 1024px) {
    width: 45%;
    height: 22vh;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 16px;
  }
`;

const TitleText = styled.span`
  font-size: 22px;
  font-weight: bold;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const DateText = styled.span`
  font-size: 16px;
  font-weight: bold;
  align-self: flex-end;
  color: #555555;
  position: absolute;
  bottom: 10%;
  right: 10%;

  @media (max-width: 768px) {
    font-size: 15px;
    position: static;
    margin-top: 8px;
    align-self: flex-end;
  }
`;

export default PostList;
