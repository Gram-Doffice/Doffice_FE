import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import Picture from "../assets/arrow.svg";
import Header from "../components/Header";
import { getNoticeDetail } from "../api/getNoticeDetail";

const CheckNotice = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [islogged, setIslogged] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    setIslogged(true);
  } else {
    setIslogged(false);
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getNoticeDetail(`post/${id}`);
        console.log(res.data);
        setPost(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <Body>
      <Header />
      <SecondContainer>
        <MainBox>
          <TextList>
            <MoveListText onClick={() => navigate("/notice-list")}>
              공지사항 목록
            </MoveListText>
            <img src={Picture} alt="arrow" />
            <MoveLostText onClick={() => navigate("/check-lost")}>
              공지사항 상세 확인
            </MoveLostText>
          </TextList>

          <TitleText>{post.title}</TitleText>

          <DetailBox>
            <BtnBox>
              {islogged ? (
                <>
                  <EditBtn>수정하기</EditBtn>
                  <DeleteBtn>삭제하기</DeleteBtn>
                </>
              ) : (
                <HashTag># 공지사항</HashTag>
              )}
            </BtnBox>
            <DateText>{post.createAt}</DateText>
          </DetailBox>

          <ContentBox>
            <hr />
            <ContentText>{post.content}</ContentText>
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
  margin-bottom: 50px;

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
  flex-direction: row;
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

export default CheckNotice;
