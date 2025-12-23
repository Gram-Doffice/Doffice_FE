import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PostList from "./PostList";
import { getNotice } from "../api/getNotice";

const NoticeList = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("/notice");
  const [islogged, setIslogged] = useState(false);
  const [postList, setPostList] = useState([]);

  const handleClick = (path) => {
    setActive(path);
    navigate(path);
  };

  useEffect(() => {
    setIslogged(!!localStorage.getItem("accessToken"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getNotice();
        console.log("res:", res);
        console.log("isArray:", Array.isArray(res));
        setPostList(res);
      } catch (e) {
        console.error("API 에러:", e);
        setPostList([]);
      }
    };

    fetchData();
  }, []);

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
                active={active === "/notice"}
                onClick={() => handleClick("/notice")}
              >
                공지사항
              </CatText>
              <hr />
              <CatText
                active={active === "/lost"}
                onClick={() => handleClick("/lost")}
              >
                분실물
              </CatText>
            </CatBox>

            {islogged && (
              <PostButtonBox>
                <PostButton onClick={() => navigate("/write-notice")}>
                  공지사항 작성하기
                </PostButton>
              </PostButtonBox>
            )}
          </ListInputBox>

          <AllListBox>
            {postList.map((post) => (
              <ListBox
                key={post.id}
                onClick={() => navigate(`/post/notice/${post.id}`)}
              >
                <TitleText>{post.title}</TitleText>
                <DateText>{post.createAt}</DateText>
              </ListBox>
            ))}
          </AllListBox>
        </MainBox>
      </SecondContainer>
    </Body>
  );
};

/* ========== styled components (반응형 적용) ========== */

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
  width: 300px;
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
  text-align: center;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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

export default NoticeList;
