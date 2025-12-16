import publicApi from "./instance.js";

export const loginUser = async (payload) => {
  try {
    const response = await publicApi.post(
      "/auth/sign-in",
      payload
    );
    return response.data;
  } catch (err) {
    console.error("Login Error:", err.response?.data || err.message);
    throw err;
  }
};