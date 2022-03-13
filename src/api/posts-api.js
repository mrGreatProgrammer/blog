import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const postsAPI = {
  getPosts(page, limit) {
    return axios.get(`${baseURL}/posts`);
  },
  getOnePost(id) {
    return axios.get(`${baseURL}/posts/${id}`);
  },
  getOnePhoto(id) {
    return axios.get(`${baseURL}/photos?albumId=${id}`);
  },
};

export default postsAPI;
