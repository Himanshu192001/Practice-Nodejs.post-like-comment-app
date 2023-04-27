const express = require('express');
const router = express.Router();

const {createComment} = require("../controllers/commentController");
const {createLike} = require("../controllers/likeController");
const {createPost} = require("../controllers/postController");

router.post('/comments/create' , createComment);
router.post('/likes/create' , createLike );
router.post('/post/create', createPost);


module.exports = router;