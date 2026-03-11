import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/posts`;

export const useBlog = () => {
  const getPosts = async () => {
    const res = await axios.get(API);
    console.log(res.data);
    return res.data;
  };

  const getPostById = async (id: number) => {
    const res = await axios.get(`${API}/${id}`);
    return res.data;
  };

  const createPost = async (data: any) => {
    const res = await axios.post(API, data);
    return res.data;
  };

  const updatePost = async (id: number, data: any) => {
    const res = await axios.put(`${API}/${id}`, data);
    return res.data;
  };

  return {
    getPosts,
    getPostById,
    createPost,
    updatePost,
  };
};
