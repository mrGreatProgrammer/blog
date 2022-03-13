import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const commentsAPI = {
  getComments(postId) {
    return axios.get(`${baseURL}/posts/${postId}/comments`);
  },
};

export default commentsAPI;
