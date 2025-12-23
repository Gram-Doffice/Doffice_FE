import publicApi from "./instance";

export const getAllLost = async () => {
  const res = await publicApi.get("/post/lost");
  return res.data;
};
