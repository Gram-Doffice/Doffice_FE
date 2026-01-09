import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import arrow from "../assets/arrow.svg";
import camera from "../assets/camera.svg";
import trash from "../assets/trash-solid.svg";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { updateLost } from "../api/post.api";
import { getPostDetail } from "../api/getPostDetail";

const Modify_Lost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const [initialData, setInitialData] = useState({
    title: "",
    content: "",
    imageUrls: [],
  });

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await getPostDetail(id);
        if (res) {
          setTitle(res.title || "");
          setContent(res.content || "");
          const serverUrls = res.imageUrl || [];
          setImages(
            serverUrls.map((url) => ({
              file: null,
              preview: url,
              isExisting: true,
            }))
          );

          setInitialData({
            title: res.title || "",
            content: res.content || "",
            imageUrls: serverUrls, 
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (id) loadPost();
  }, [id]);

  const handleModify = async () => { 
    if (!initialData || !initialData.imageUrls) {
      console.log("초기 데이터가 아직 로드되지 않았습니다.");
      return;
    }
    const currentExistingNames = images
      .filter((img) => img.isExisting === true)
      .map((img) => {
        if (!img.preview) return null;
        const urlParts = img.preview.split("/");
        return urlParts[urlParts.length - 1];
      })
      .filter((name) => name !== null);
    const hasNewFiles = images.some(
      (img) => !img.isExisting && img.file !== null
    );


    const initialNames = initialData.imageUrls.map((url) => {
      const parts = url.split("/");
      return parts[parts.length - 1];
    });

    const isImageUnchanged =
      !hasNewFiles &&
      currentExistingNames.length === initialNames.length &&
      currentExistingNames.every((name) => initialNames.includes(name));

    console.log("사진 변경 없음 여부:", isImageUnchanged);

    if (isImageUnchanged) {
      alert("사진을 바꾸지 않으면 수정이 불가합니다!");
      return;
    }


    if (images.length === 0) {
      alert("최소 1장의 사진은 있어야 합니다.");
      return;
    }
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    const requestData = JSON.stringify({
      title: title,
      content: content,
      keepImageUrl: currentExistingNames,
    });

    formData.append(
      "request",
      new Blob([requestData], { type: "application/json" })
    );
    images.forEach((imgObj) => {
      if (imgObj.file) formData.append("images", imgObj.file);
    });

    try {
      await updateLost(id, formData);
      alert("수정 성공!");
      navigate(`/post/lost/${id}`);
    } catch (err) {
      console.error("수정 실패:", err);
      alert("수정에 실패했습니다.");
    }
  };


  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 3) {
      alert("최대 3개까지 가능합니다.");
      return;
    }
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      isExisting: false,
    }));
    setImages([...images, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Page_move>
            <Page_PostList onClick={() => navigate(`/post/lost/${id}`)}>
               분실물 상세 확인
            </Page_PostList>
            <Arrow>
              <img src={arrow} alt="arrow" />
            </Arrow>
            <Page_WriteLost>분실물 수정</Page_WriteLost>
          </Page_move>

          <WN_container>
            <Name>
              <Notice_Name>제목</Notice_Name>
              <Name_container
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Name>

            <PhotoSection>
              {images.map((img, index) => (
                <Picture_container key={index} hasImage={true}>
                  <img
                    src={img.preview}
                    alt="preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <DeleteOverlay onClick={() => handleRemoveImage(index)}>
                    <img src={trash} alt="trash" width={30} height={30} />
                  </DeleteOverlay>
                </Picture_container>
              ))}
              {images.length < 3 && (
                <Picture_container
                  hasImage={false}
                  onClick={() => fileInputRef.current.click()}
                >
                  <input
                    type="file"
                    hidden
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple
                  />
                  <span style={{ fontSize: "12px", color: "#7b7b7b" }}>
                    사진 추가
                  </span>
                  <Picture>
                    <img src={camera} width={40} alt="camera" />
                  </Picture>
                </Picture_container>
              )}
            </PhotoSection>

            <Detail>
              <Notice_Detail>내용</Notice_Detail>
              <Detail_container
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
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
  border-radius: 5px;
  @media (max-width: 600px) {
    font-size: 16px;
    height: 45px;
  }
`;

const PhotoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

const Picture_container = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border: ${(props) => (props.hasImage ? "none" : "2px dashed #7b7b7b")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  background-color: #f9f9f9;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 12px;
  }
`;

const Picture = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
`;

const DeleteOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  border-radius: 10px;
  &:hover {
    opacity: 1;
  }
  img {
    width: 30px !important;
    height: 30px !important;
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
