import publicApi from "./instance";

export const getNoticeDetail = async (id) => {
  const res = await publicApi.get(`/post/${id}`);
  return res.data;
};
