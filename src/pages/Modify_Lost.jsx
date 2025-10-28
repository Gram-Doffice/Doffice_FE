import React from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import test from "../assets/Qkzb.jpg"
import { useNavigate } from "react-router-dom";
import trashcan from "../assets/trash-solid (1) 1.svg"

const Write_Notice = () => {


  const navigate = useNavigate();



  
  return (
    <Body>
      <Header>
        <HeaderTextBox>
          <HeaderText onClick={() => navigate("/")}>HOME</HeaderText>
          <HeaderText onClick={() => navigate("/login")}>LOGIN</HeaderText>
        </HeaderTextBox>
      </Header>
      <Main>
        <Container>
          <Page_move>
            <Page_PostList onClick={() => navigate("/")}>게시글 목록</Page_PostList>
            <Arrow>
              <img src={arrow} />
            </Arrow>
            <Page_WriteLost>분실물 등록</Page_WriteLost>
          </Page_move>
          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              <Name_container
                placeholder="제목을 적어주세용"
              >제목에 대한 깊은 고찰은 항상 사람의 마음을 거지같게 만들죠 </Name_container>
            </Name>
            <Picture_container>
                <Picture>
                    <img src={test} width={150} height={150} />
                    <Trash_Button><img src= {trashcan} width={50} height={50}/></Trash_Button>
                </Picture>
                <Picture>
                    <img src={test}width={150} height={150}/>
                    <Trash_Button><img src= {trashcan} width={50} height={50}/></Trash_Button>
                </Picture>
                <Picture>
                    <img src={test} width={150} height={150} opacity/>
                    <Trash_Button><img src= {trashcan} width={50} height={50}/></Trash_Button>
                </Picture>
                
                
            </Picture_container>
            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              <Detail_container
                type="text"
                placeholder="내용을 적어주세용"
              > 내ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ용</Detail_container>
            </Detail>
            <Upload_Button>수정하기</Upload_Button>
          </WN_container>
        </Container>
      </Main>
    </Body>
  );
};

const Body = styled.div`
  width: 100vw;
  height: 900px;
`;

const Header = styled.div`
  width: 100%;
  height: 8%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 49px;
`;

const HeaderTextBox = styled.div``;

const HeaderText = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-right: 102px;
  color: #555555;
  cursor: pointer;
`;

const Main = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 63%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px 0;
`;
const Page_move = styled.div`
  width: 24%;
  height: 3%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Page_PostList = styled.span`
  font-size: 18px;
  color: #797979;
      &:hover{
    cursor: pointer;

  }
`;

const Page_WriteLost = styled.div`
  font-size: 18px;
  color: #000000;
      &:hover{
    cursor: pointer;
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

`;
const Name = styled.div`
    width: 100%;
`
const Detail = styled.div`
    width: 100%;
`

const Notice_Name = styled.div`
  font-size: 14pt;
  margin-bottom: 10px;
  color: #555555;
`;
const Name_container = styled.textarea`
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  border: none;
  margin-bottom: 10px;
  font-size: 18px;
  display: flex;
  padding: 10px;
`;

const Picture_container = styled.div`
  width: 100%;
  height: 24%;
  border-radius: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 100px;
  margin: 20px 0;
  padding: 20px;
  position: relative;
`

const Picture = styled.div`
  width: 113px;
  height: 106px;
  display: flex;
  justify-content: center;
  &:hover{
    filter: opacity(50%);
  }

`;

const Trash_Button = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    opacity: 0%;
    &:hover{
    cursor: pointer;
    opacity: 100%;
  }
`


const Notice_Detail = styled.div`
  font-size: 14pt;
  color: #555555;
  margin-bottom: 10px;
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
`;

const Upload_Button = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(102,197,13,0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;

    &:hover{
    background-color: rgb(82, 170, 6);
    cursor: pointer;
  }
`

export default Write_Notice;
