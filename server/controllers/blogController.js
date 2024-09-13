const Blog = require("../models/Blog");

// GET all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    console.log(blogs);
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blogs = await Blog.find({ blogSlug: req.params.blogSlug });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST new blog
exports.postNewBlog = async (req, res) => {
  try {
    // Create a new blog with data from req.body
    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      blogSlug: req.body.blogSlug,
      imgURL: req.body.imgURL,
      author: req.body.author,
    });

    // Save the new blog to the database
    const savedBlog = await newBlog.save();

    // Return the newly created blog
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
