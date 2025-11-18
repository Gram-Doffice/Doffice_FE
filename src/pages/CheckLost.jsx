import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import Picture from "../assets/arrow.svg";
import Picture2 from "../assets/lostimg.svg";
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
    content: "useState, Redux, Recoil 등 다양한 상태 관리 방법을 비교해봅니다.",
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

const CheckLost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isOwn, setIsOwn] = useState(false);

  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <Body>
      <Header />
      <SecondContainer>
        <MainBox>
          <TextList>
            <MoveListText onClick={() => navigate("/lost-list")}>
              분실물 목록
            </MoveListText>
            <img src={Picture} alt="arrow" />
            <MoveLostText onClick={() => navigate("/check-lost")}>
              분실물 상세 확인
            </MoveLostText>
          </TextList>

          <TitleText>제목이 들어갑니다.</TitleText>

          <DetailBox>
            <BtnBox>
              {isOwn ? (
                <>
                  <EditBtn>수정하기</EditBtn>
                  <DeleteBtn>삭제하기</DeleteBtn>
                </>
              ) : (
                <HashTag># 분실물</HashTag>
              )}
            </BtnBox>
            <DateText>2025 / 10 / 24</DateText>
          </DetailBox>

          <ContentBox>
            <hr />
            <ImgBox>
              <Img src={Picture2} alt="lost item" />
              <Img src={Picture2} alt="lost item" />
              <Img src={Picture2} alt="lost item" />
            </ImgBox>

            <ContentText>
              유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!
              유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!
            </ContentText>
          </ContentBox>
        </MainBox>
      </SecondContainer>
    </Body>
  );
};

/* ================= styled components ================= */

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    margin-bottom: 80px;
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
  width: 63%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;

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

const TextList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;

  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const MoveListText = styled.span`
  font-size: 18px;
  color: #999999;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const MoveLostText = styled.span`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TitleText = styled.h1`
  font-size: 30px;
  margin: 0;
  color: #222;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 25px;
    gap: 6px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
    gap: 10px;
  }
`;

const EditBtn = styled.button`
  background-color: white;
  border: 1px solid #52aa06;
  color: #52aa06;
  border-radius: 5px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #52aa06;
    color: white;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const DeleteBtn = styled(EditBtn)`
  border: 1px solid #ff4646;
  color: #ff4646;

  &:hover {
    background-color: #ff4646;
    color: white;
  }
`;

const HashTag = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #555555;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DateText = styled.span`
  align-self: flex-end;
  font-size: 18px;
  color: #555555;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
    align-self: flex-start;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;

  hr {
    border: none;
    border-top: 1px solid #ddd;
  }
`;

const ImgBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Img = styled.img`
  width: 19%;
  min-width: 160px;
  max-width: 220px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 28%;
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export default CheckLost;
