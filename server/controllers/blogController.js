const Blog = require("../models/Blog");

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/ +/g, "-")
    .replace(/-+/g, "-");
}

// GET all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
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
      blogSlug: generateSlug(req.body.title),
      description: req.body.description,
      imgUrl: req.body.imgUrl,
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
