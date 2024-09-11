const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// GET all comments for a specific blog
router.get("/:blogId", async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.params.blogId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new comment
router.post("/", async (req, res) => {
  const { name, email, content, blogId } = req.body;
  const newComment = new Comment({ name, email, content, blogId });

  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
