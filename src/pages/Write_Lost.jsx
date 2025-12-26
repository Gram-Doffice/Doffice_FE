import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import camera from "../assets/camera.svg";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { createLost } from "../api/post.api";

const Write_Lost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  // 1. 이미지들을 배열로 관리 (최대 3개)
  const [images, setImages] = useState([]); 
  const fileInputRef = useRef(null);

  // 2. 사진 추가 핸들러
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 3) {
      alert("사진은 최대 3개까지만 등록 가능합니다.");
      return;
    }

    // 새 이미지 객체 생성 (파일 원본 + 미리보기용 URL)
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages([...images, ...newImages]);
  };

  // 3. 사진 삭제 핸들러 (이미지 클릭 시 삭제 기능 추가)
  const handleRemoveImage = (index) => {
    const filteredImages = images.filter((_, i) => i !== index);
    setImages(filteredImages);
  };

  const handleUpload = async () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    const requestData = JSON.stringify({ title, content });
    formData.append("request", new Blob([requestData], { type: "application/json" }));
    
    images.forEach((imgObj) => {
      formData.append("images", imgObj.file);
    });

    try {
      await createLost(formData);
      alert("등록 성공!");
      navigate("/");
    } catch (error) {
      alert("등록 실패!");
    }
  };

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Page_move>
            <Page_PostList onClick={() => navigate("/")}>게시글 목록</Page_PostList>
            <Arrow><img src={arrow} alt="arrow" /></Arrow>
            <Page_WriteLost>분실물 등록</Page_WriteLost>
          </Page_move>

          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              <Name_container 
                type="text" 
                placeholder="제목을 입력해주세요" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Name>

            <PhotoSection>
              {/* 5. 등록된 이미지들 표시 */}
              {images.map((img, index) => (
                <Picture_container 
                  key={index} 
                  hasImage={true} 
                  onClick={() => handleRemoveImage(index)}
                >
                  <img src={img.preview} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
                </Picture_container>
              ))}

              {/* 6. 3개 미만일 때만 추가 버튼 표시 */}
              {images.length < 3 && (
                <Picture_container hasImage={false} onClick={() => fileInputRef.current.click()}>
                  <input 
                    type="file" 
                    hidden 
                    ref={fileInputRef} 
                    onChange={handleImageChange} 
                    accept="image/*"
                    multiple // 한 번에 여러 장 선택 가능하게 하려면 추가
                  />
                  사진 추가하기
                  <Picture>
                    <img src={camera} width={80} height={80} alt="camera" />
                  </Picture>
                </Picture_container>
              )}
            </PhotoSection>

            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              <Detail_container
                placeholder="내용을 입력해주세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></Detail_container>
            </Detail>

            <Upload_Button onClick={handleUpload}>올리기</Upload_Button>
          </WN_container>
        </Container>
      </Main>
    </Body>
  );
};



const Body = styled.div`
  width: 100%;
  height: 900px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    overflow-y: auto;
    padding: 0 10px;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  width: 63%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Page_move = styled.div`
  width: 30%;
  height: 3%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 49px;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    gap: 10px;
    margin-bottom: 30px;
  }
`;

const Page_PostList = styled.span`
  font-size: 18px;
  color: #797979;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Page_WriteLost = styled.div`
  font-size: 18px;
  color: #000000;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
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

  @media (max-width: 768px) {
    height: auto;
    align-items: center;
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

  @media (max-width: 768px) {
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
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PhotoSection = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const Picture_container = styled.div`
  width: 170px;
  height: 170px;
  border: ${props => props.hasImage ? "none" : "4px dashed #7b7b7b"};
  border-radius: 10px;
  background-color: ${props => props.hasImage ? "transparent" : "none"};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 16px;
    border-width: 3px;
    padding: 30px 0;
  }
`;

const Picture = styled.div`
  width: 113px;
  height: 106px;
  display: flex;
  justify-content: center;
`;

const Notice_Detail = styled.div`
  font-size: 14pt;
  color: #555555;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 13pt;
  }
`;

const Detail_container = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: #eeeeee;
  border: none;
  display: flex;
  text-align: flex-start;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 40px;
  resize: none;

  @media (max-width: 768px) {
    font-size: 16px;
    height: 220px;
  }

  ::-webkit-scrollbar {
    display: none;
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

  &:hover {
    background-color: rgb(82, 170, 6);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 38px;
  }
`;

export default Write_Lost;
