import axios from 'axios';
import queryString from 'query-string';

export const writePost = ({title, body, tags}) => axios.post(`https://us-central1-zynknme.cloudfunctions.net/api/posts?title=${title}&body=${body}`);
export const getPost = (id) => axios.get(`https://us-central1-zynknme.cloudfunctions.net/api/posts/${id}`);
export const getPostList = ({ tag, page }) => axios.get(`/api/post/?${queryString.stringify({ tag, page })}`);
