document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");

  // Show loader
  function showLoader() {
    loader.style.display = "block";
  }

  // Hide loader
  function hideLoader() {
    loader.style.display = "none";
  }
  // Get all bogs from db
  async function getAllBlogs() {
    showLoader();
    try {
      const response = await fetch(`/api/blogs/`);
      const blogs = await response.json();

      const blogsContainer = document.querySelector(".all-blog-items");
      blogsContainer.innerHTML = "";

      blogs
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .forEach((blog) => {
          const blogItem = document.createElement("div");
          blogItem.classList.add("all-blog-item");
          blogItem.innerHTML = `
            <img
              src="${blog.imgUrl}"
              alt="${blog.title} image"
              width="500px"
              height="300px"
            />
            <div class="all-blog-details">
              <h1><a href="/blogs/${blog.blogSlug}">${blog.title}</a></h1>
              <span>${blog.author} &bull; ${new Date(
            blog.createdAt
          ).toDateString()}</span>
              <p class="all-blog-description">${blog.description}</p>
              <div class="icons">
                <span><i class="fa-regular fa-heart"></i> 7</span>
                <span><i class="fa-regular fa-bookmark"></i> 12</span>
              </div>
            </div>`;
          blogsContainer.appendChild(blogItem);
        });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      hideLoader();
    }
  }

  getAllBlogs();
});
