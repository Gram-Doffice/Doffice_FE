import publicApi from "./instance";

export const deletePost = async (id) => {
  return await publicApi.delete(`/post/${id}`);
};
