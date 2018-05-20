import axios from 'axios';
import queryString from 'query-string';

// export const writePost = ({title, body, tags}) => axios.post(`https://us-central1-zynknme.cloudfunctions.net/api/posts?title=${title}&body=${body}`);
export const writePost = ({ title, body, tags }) => axios.post(`https://us-central1-zynknme.cloudfunctions.net/api/posts`, { title, body, tags });
export const getPost = (id) => axios.get(`https://us-central1-zynknme.cloudfunctions.net/api/posts/${id}`);
export const getPostList = ({ tag, page }) => axios.get(`https://us-central1-zynknme.cloudfunctions.net/api/posts?${queryString.stringify({ tag, page })}`);
