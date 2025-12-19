import publicApi from "./instance";

export const getAllNotice = async (payload) => {
  try {
    const response = await publicApi.post("/lost", payload);
    return response.data;
  } catch (err) {
    console.error("Login Error:", err.response?.data || err.message);
    throw err;
  }
};
