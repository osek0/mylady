const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const posts = require('./routes/posts');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/posts', posts);

const port = 5001;
app.listen(port, () => console.log(`Listening on port ${port}`));