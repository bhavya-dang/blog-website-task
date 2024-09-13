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
