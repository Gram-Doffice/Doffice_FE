import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Picture from "../assets/arrow.svg";
import Header from "../components/Header";

const CheckNotice = () => {
  const navigate = useNavigate();
  const [isOwn, setIsOwn] = useState(false);

  return (
    <Body>
      <Header/>
      <SecondContainer>
        <MainBox>
          <TextList>
            <MoveListText onClick={() => navigate("/notice-list")}>
              공지사항 목록
            </MoveListText>
            <img src={Picture} />
            <MoveLostText onClick={() => navigate("/check-notice")}>
              공지사항 상세 확인
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
                <HashTag># 공지사항</HashTag>
              )}
            </BtnBox>
            <DateText>2025 / 10 / 24</DateText>
          </DetailBox>
          <ContentBox>
            <hr />
            <ContentText>
              유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일 저녁 치킨!유후! 내일 저녁 치킨!유후! 내일 저녁
              치킨!유후! 내일
            </ContentText>
          </ContentBox>
        </MainBox>
      </SecondContainer>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 100vh;
`;


const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.div`
  width: 63%;
  height: 62%;
`;

const TextList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 67px;

  img {
    width: 20px;
    height: 20px;
  }
`;

const MoveListText = styled.span`
  font-size: 18px;
  color: #999999;
  cursor: pointer;
`;

const MoveLostText = styled.span`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const TitleText = styled.span`
  font-size: 30px;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const EditBtn = styled.button`
  background-color: white;
  border: 1px solid #52aa06;
  color: #52aa06;
  border-radius: 5px;
  padding: 14px 18px;

  &:hover {
    background-color: #52aa06;
    border: 1px solid #52aa06;
    color: white;
  }
`;

const DeleteBtn = styled.button`
  background-color: white;
  border: 1px solid #ff4646;
  color: #ff4646;
  border-radius: 5px;
  padding: 14px 18px;

  &:hover {
    background-color: #ff4646;
    border: 1px solid #ff4646;
    color: white;
  }
`;

const HashTag = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #555555;
`;

const DateText = styled.span`
  align-self: flex-end;
  font-size: 18px;
  color: #555555;
  font-weight: bold;
`;

const ContentText = styled.span`
  font-size: 16px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Img = styled.img`
  width: 19%;
  margin-right: 23px;
`;

const ImgBox = styled.div``;

export default CheckNotice;
