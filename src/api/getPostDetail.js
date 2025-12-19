import publicApi from "./instance";

export const getPostDetail = async (id) => {
  const res = await publicApi.get(`/post/${id}`);
  return res.data;
};
