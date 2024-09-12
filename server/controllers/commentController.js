const Comment = require("../models/Comment");

// GET all comments for a specific blog
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ blogSlug: req.params.blogSlug });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new comment
exports.postComment = async (req, res) => {
  const { name, email, content, blogSlug } = req.body;
  const newComment = new Comment({ name, email, content, blogSlug });

  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
