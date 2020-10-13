import axios from 'axios';

const accessToken = process.env.REACT_APP_FB_TOKEN;
const pageID = process.env.REACT_APP_PAGE_ID;

export async function getFeed() {
  
  const response = await axios.get(`https://graph.facebook.com/${pageID}/feed?access_token=${accessToken}`);
  return response.data.data;
}

export async function getUrl(postID) {
  
  const response = await axios.get(`https://graph.facebook.com/${postID}/attachments?access_token=${accessToken}`);
  return response.data.data[0].media.image.src;
}