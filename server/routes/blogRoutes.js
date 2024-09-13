const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getBlogBySlug,
  postNewBlog,
} = require("../controllers/blogController");

// GET all blogs
router.get("/", getBlogs);

// GET blog by slug
router.get("/:blogSlug", getBlogBySlug);

// POST new blog
router.post("/new-blog", postNewBlog);

module.exports = router;
