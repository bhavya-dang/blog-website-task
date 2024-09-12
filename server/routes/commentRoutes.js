const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// GET all comments for a specific blog
router.get("/:blogSlug", async (req, res) => {
  try {
    const comments = await Comment.find({ blogSlug: req.params.blogSlug });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new comment
router.post("/", async (req, res) => {
  const { name, email, content, blogSlug } = req.body;
  const newComment = new Comment({ name, email, content, blogSlug });

  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
