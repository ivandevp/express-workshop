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
}

module.exports = PostController;
