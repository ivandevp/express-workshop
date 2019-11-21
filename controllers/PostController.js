const Post = require("../models/Post");

class PostController {
  static async getPosts(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async createPost(req, res) {
    try {
      const post = new Post(req.body);
      const savedPost = await post.save();
      res.json(savedPost);
    } catch (error) {
      res.status(404).json({ error });
    }
  }
}

module.exports = PostController;
