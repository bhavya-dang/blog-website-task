const express = require("express");
const router = express.Router();
const {
  getComments,
  postComment,
} = require("../controllers/commentController");

// GET all comments for a blog by its slug
router.get("/:blogSlug", getComments);

// POST a new comment
router.post("/", postComment);

module.exports = router;
