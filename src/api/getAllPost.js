import publicApi from "./instance";

export const getAllPost = async () => {
  const res = await publicApi.get("/posts");
  return res.data;
};