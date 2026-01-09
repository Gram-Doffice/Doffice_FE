import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { updateNotice } from "../api/post.api";
import { getNoticeDetail } from "../api/getNoticeDetail";

const Modify_Notice = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadPost = async () => {
      try {
          const res = await getNoticeDetail(id);
          setTitle(res.title || "");
          setContent(res.content || "");
      } catch (error) {
        console.error("기존 글을 불러오지 못했습니다.", error);
      }
    };

    if (id) {
      loadPost();
    } else {
      console.log("5. postId가 없습니다! URL을 확인하세요.");
    }
  }, [id]);
  const handleModify = async () => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const payload = {
      title: title,
      content: content,
    };

    try {
      await updateNotice(id, payload);
      alert("공지사항이 성공적으로 수정되었습니다.");
      navigate(`/post/notice/${id}`);
    } catch (err) {
      console.error("수정 실패:", err.response?.data || err.message);
      alert("수정에 실패했습니다.");
    }
  };

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Page_move>
            <Page_PostList onClick={() => navigate(`/post/notice/${id}`)}>
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
            <Upload_Button onClick={handleModify}>수정하기</Upload_Button>
          </WN_container>
        </Container>
      </Main>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    overflow-y: auto;
    padding: 0 10px;
  }
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
  font-weight: 700;
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
