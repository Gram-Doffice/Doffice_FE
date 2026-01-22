import publicApi from "./instance";

export const getNotice = async (page) => {
  const res = await publicApi.get("/post/notice", {
    params: { page },
  });
  return res.data;
};
