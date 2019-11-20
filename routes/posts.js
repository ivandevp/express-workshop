const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();

/* GET posts listing. */
router.get("/", PostController.getPosts);

module.exports = router;
