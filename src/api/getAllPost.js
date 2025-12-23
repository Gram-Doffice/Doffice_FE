import publicApi from "./instance";

export const getAllPost = async () => {
  const res = await publicApi.get("/post");
  return res.data;
};