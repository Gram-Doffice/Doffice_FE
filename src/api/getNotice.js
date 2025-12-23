import publicApi from "./instance";

export const getNotice = async () => {
  const res = await publicApi.get("/post/notice");
  return res.data;
};
