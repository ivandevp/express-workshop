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

  static async editPost(req, res) {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async deletePost(req, res) {
    try {
      const deletedPost = await Post.findByIdAndRemove(req.params.id);
      res.json(deletedPost);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = PostController;
