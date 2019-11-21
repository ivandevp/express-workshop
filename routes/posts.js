const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();

router
  .get("/", PostController.getPosts)
  .post("/", PostController.createPost)
  .put("/:id", PostController.editPost)
  .delete("/:id", PostController.deletePost);

module.exports = router;
