const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const commentRoutes = require("./routes/commentRoutes");

// Serve static files
// app.use(express.static(path.join(__dirname, "../")));
app.use(express.static(path.join(__dirname, "../public/")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/blogs", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "blogs.html"));
});

app.get("/blogs/:slug", (req, res) => {
  const { slug } = req.params;
  res.sendFile(path.join(__dirname, "../public/blogs", `${slug}.html`));
});

app.use("/api/comments", commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
