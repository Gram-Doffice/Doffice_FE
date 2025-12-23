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
     `/write-notice/${postId}`,
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
        `/write-notice/${postId}`
    );
    return response.data;
  } catch (err) {
    console.error(`게시물 삭제 실패:`, err.response?.data || err.message);
    throw err;
  }
};  

// export const createLost = async (payload) => {
//   try {
//     const response = await publicApi.post(
//      "/write-lost",
//      payload

//     );
//     return response.data;
//   } catch (err) {
//     console.error("공지사항 등록 실패:", err.response?.data || err.message);
//     throw err;
//   }
// };

// export const updateLost = async (postId, payload) => {
//   try {
//     const response = await publicApi.put(
//      `/write-lost/${postId}`,
//       payload
//     );
//     return response.data;
//   } catch (err) {
//     console.error(`분실물 게시글 수정 실패:`, err.response?.data || err.message);
//     throw err;
//   }
// };
