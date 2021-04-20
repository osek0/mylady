const express = require('express');
const axios = require('axios');
require('dotenv').config();

const userID = process.env.USER_ID;
const accessToken = process.env.ACCESS_TOKEN;

const router = express.Router();

async function getFeed() {
  
  const response = await axios.get(`https://graph.instagram.com/${userID}?fields=id,username,media&access_token=${accessToken}`);

  console.log(response.status);

  return response.data.media.data.slice(0,12);
}

async function getPost(postID) {
  
  const response = await axios.get(`https://graph.instagram.com/${postID}?fields=id,media_type,media_url,caption,timestamp&access_token=${accessToken}`);

  console.log(response.status);

  return response.data;
}

async function getDataFromPosts() {
  const feed = await getFeed();

  const photos = feed.map(async (post) => {
    const postData = await getPost(post.id)

    return ({
      "postID": postData.id,
      "url": postData.media_url,
      "description": postData.caption
    });
  });

  const photosData = await Promise.all(photos)
  .then(posts => {
    return posts;
  });

  return photosData;
}

let postDetails = [];

setInterval(async () => {
  postDetails = await getDataFromPosts();
},900000);

router.get('/', async (req, res) => {

  const postsData = postDetails;

  console.log(postsData);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(postsData));
});

module.exports = router;