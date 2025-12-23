import publicApi from "./instance"; 


export const createNotice = async (payload) => {
  try {
    const response = await publicApi.post(
     "/post/write-notice",
     payload

    );
    return response.data;
  } catch (err) {
    console.error("공지사항 등록 실패:", err.response?.data || err.message);
    throw err;
  }
};


export const updateNotice = async (postId, payload) => {
  try {
    const response = await publicApi.put(
     `/post/write-notice/${postId}`,
      payload
    );
    return response.data;
  } catch (err) {
    console.error(`공지사항 수정 실패:`, err.response?.data || err.message);
    throw err;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await publicApi.delete(
        `/post/write-notice/${postId}`
    );
    return response.data;
  } catch (err) {
    console.error(`게시물 삭제 실패:`, err.response?.data || err.message);
    throw err;
  }
};  

/**
 * 분실물 등록 API
 * @param {FormData} formData - request(JSON)와 images(File)가 담긴 객체
 */
export const createLost = async (formData) => {
  try {
    const response = await publicApi.post("/post/write-lost", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (err) {
    console.error("분실물 등록 실패:", err.response?.data || err.message);
    throw err;
  }
};

/**
 * 분실물 수정 API
 */
export const updateLost = async (postId, formData) => {
  try {
    const response = await publicApi.put(`/post/write-lost/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (err) {
    console.error(`분실물 수정 실패:`, err.response?.data || err.message);
    throw err;
  }
};