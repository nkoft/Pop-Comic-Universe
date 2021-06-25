import api from "./api-config";

export const getAllComics = async () => {
  try {
    const resp = await api.get("/comics");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getOneComic = async (id) => {
  try {
    const resp = await api.get(`/comics/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const postComic = async (comicData) => {
  try {
    const resp = await api.post("/comics", { comic: comicData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const putComic = async (id, comicData) => {
  try {
    const resp = await api.put(`/comics/${id}`, { comic: comicData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComic = async (id) => {
  try {
    const resp = await api.delete(`/comics/${id}`);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const addReview = async (comicId, reviewId) => {
  try {
    const resp = await api.put(`/reviews/${reviewId}/comics/${comicId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
