const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const connectToDatabase = require("./db/index");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});
app.use(express.static(path.join(__dirname, "../public/")));

// Routes
const commentRoutes = require("./routes/commentRoutes");

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
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
