
import publicApi from "./instance"; 

/**
 * 공지사항 등록 API
 * @param {object} payload
 */
export const createNotice = async (payload) => {
  try {
    const response = await publicApi.post(
     "/write-notice",
     payload

    );
    return response.data;
  } catch (err) {
    console.error("공지사항 등록 실패:", err.response?.data || err.message);
    throw err;
  }
};