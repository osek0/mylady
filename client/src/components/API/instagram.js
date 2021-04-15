import axios from 'axios';

const accessToken = process.env.REACT_APP_IG_TOKEN;
const userID = process.env.REACT_APP_USER_ID;

export async function getFeed() {
  
  const response = await axios.get(`https://graph.instagram.com/${userID}?fields=id,username,media&access_token=${accessToken}`);

  return response.data.media.data.slice(0,12);
}

export async function getPost(postID) {
  
  const response = await axios.get(`https://graph.instagram.com/${postID}?fields=id,media_type,media_url,caption,timestamp&access_token=${accessToken}`);
  
  return response.data;
}