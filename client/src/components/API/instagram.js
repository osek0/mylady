import axios from 'axios';

const postsUrl = process.env.REACT_APP_POSTS_URL;


export async function getPostsData() {
  const response = await axios.get(postsUrl);

  console.log(response);

  return response.data;
}