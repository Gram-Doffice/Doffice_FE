import publicApi from "./instance";

export const getAllPost = async (page) => {
  const res = await publicApi.get("/post", {
    params:{page}
  });
  return res.data;
};