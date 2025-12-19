import publicApi from "./instance";

export const getNoticeDetail = async () => {
  const res = await publicApi.get("/notice");
  return res.data;
};
