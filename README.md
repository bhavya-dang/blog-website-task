# BlogIt!

## Overview

BlogIt! is a dynamic platform where users can read and interact with blog posts.

## Features

- **Homepage**: Displays a featured blog and a list of recent blogs.
- **Blog Pages**: Each blog has its own page with a detailed view and comment section.
- **Comments**: Users can submit comments on blog posts.
- **Responsive Design**: Ensures a seamless experience on various devices.

## Tech Stack

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (with asynchronous operations and DOM manipulation)
  - Font Awesome (for icons)
- **Backend**:

  - Express.js (Node.js framework)
  - MongoDB (for storing blog and comment data)
  - RESTful API for fetching and submitting blog data and comments

## Project Structure

```bash
├── package.json
├── public
|  ├── assets
|  |  └── quill-icon.svg
|  ├── blogs
|  |  └── blog-template.html
|  ├── blogs.html
|  ├── css
|  |  ├── blog.css
|  |  └── index.css
|  ├── index.html
|  └── js
|     ├── blog.js
|     ├── blogs.js
|     └── index.js
├── README.md
└── server
   ├── app.js
   ├── controllers
   |  ├── blogController.js
   |  └── commentController.js
   ├── db
   |  └── index.js
   ├── models
   |  ├── Blog.js
   |  └── Comment.js
   └── routes
      ├── blogRoutes.js
      └── commentRoutes.js
```

## Installation

1. Clone the repository.

```bash
git clone https://github.com/bhavya-dang/blog-website-task.git
```

1. Navigate to project directory.

```bash
cd blog-website-task
```

3. Install dependencies using npm:

```bash
  npm install
```

4. Set up your database and environment

- Create a `.env` file and paste the following in it:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogApp
```

- Replace the `MONGO_URI` value with the link to your db.

5. Run the server

```bash
npm run dev
```

The server will start and be available at `http://localhost:5000`.

# POST Request Example

To create a new blog post, you can send a POST request to `http://localhost:5000/api/blogs/` with the following body:

```json
{
  "title": "Test Blog",
  "author": "Jane Doe",
  "imgUrl": "https://placehold.co/400x200",
  "description": "Blog Description",
  "content": "Blog Content"
}
```

## Contact

For any questions or feedback, please reach out to bhavya.dang1207@gmail.com.

# Todos

- [ ] responsive design
- [x] navbar on individual blog page
- [ ] deployment and hosting
  - [x] api hosted on render
  - [ ] frontend hosting on render (?)
- [ ] code cleaning and commenting
- [ ] optimizing and finalizing
- [x] quill icon on all pages
- [x] blog post CMS
