import React from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import test from "../assets/Qkzb.jpg";
import { useNavigate } from "react-router-dom";
import trashcan from "../assets/trash-solid (1) 1.svg";
import Header from "../components/Header";

const Modify_Lost = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Page_move>
            <Page_PostList onClick={() => navigate("/check-lost")}>분실물 상세 확인</Page_PostList>
            <Arrow>
              <img src={arrow} alt="arrow" />
            </Arrow>
            <Page_WriteLost>분실물 수정</Page_WriteLost>
          </Page_move>

          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              <Name_container
                placeholder="제목을 적어주세용"
                defaultValue={
                  "제목에 대한 깊은 고찰은 항상 사람의 마음을 거지같게 만들죠"
                }
              ></Name_container>
            </Name>

            <Picture_container>
              {[1, 2, 3].map((n) => (
                <Picture key={n}>
                  <img src={test} width={150} height={150} alt="uploaded" />
                  <Trash_Button>
                    <img src={trashcan} width={50} height={50} alt="delete" />
                  </Trash_Button>
                </Picture>
              ))}
            </Picture_container>

            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              <Detail_container
                placeholder="내용을 적어주세용"
                defaultValue={"내ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ용"}
              ></Detail_container>
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
  width: 24%;
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
  height: 24%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 100px;
  margin: 20px 0;
  padding: 20px;

  @media (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 10px 0;
  }
`;

const Trash_Button = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  display: flex;
  top: 0px;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (max-width: 600px) {
    width: 90px;
    height: 90px;

    img {
      width: 30px;
      height: 30px;
      position: absolute;
    }
  }
`;

const Picture = styled.div`
  position: relative;
  width: 113px;
  height: 106px;
  display: flex;
  justify-content: center;

&:hover > img {
    /* 첫 번째 자식인 <img>에만 opacity 적용 */
    opacity: 0.5; 
    transition: opacity 0.2s ease; /* 부드러운 전환 추가 (선택 사항) */
  }

&:hover > div {
    /* Trash_Button이 보이게 함 (position: absolute로 Picture 내에 있습니다) */
    opacity: 1;
  }


  @media (max-width: 600px) {
    width: 90px;
    height: 90px;
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
