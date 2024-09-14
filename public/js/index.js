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

  // Get all blogs and filter the necessary data
  async function getAllBlogs() {
    showLoader(); // Show loader before API call
    try {
      const response = await fetch(`/api/blogs/`);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const blogs = await response.json();

      const featuredBlog = blogs.find((b) => b.featured === true);
      const recentBlogs = blogs
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3);

      const featuredBlogContainer = document.querySelector(".featured-blog");
      if (featuredBlog) {
        featuredBlogContainer.innerHTML = `
            <div class="blog-image">
              <img
                src="${featuredBlog.imgUrl}"
                alt="${featuredBlog.title} image"
                width="600px"
                height="400px"
              />
            </div>
            <div class="blog-details">
              <a href="/blogs/${featuredBlog.blogSlug}">
                <h1>${featuredBlog.title}</h1>
              </a>
              <span>${featuredBlog.author} &bull; ${new Date(
          featuredBlog.createdAt
        ).toDateString()}</span>
              <p class="blog-description">
                ${featuredBlog.description}
              </p>
              <div class="icons">
                <span><i class="fa-regular fa-heart"></i> 7</span>
                <span><i class="fa-regular fa-bookmark"></i> 12</span>
              </div>
            </div>
          `;
      }

      const recentBlogsContainer = document.querySelector(".blog-items");
      recentBlogsContainer.innerHTML = "";
      recentBlogs.forEach((rBlog) => {
        recentBlogsContainer.innerHTML += `
            <div class="blog-item">
              <img
                src="${rBlog.imgUrl}"
                alt="${rBlog.title} image"
              />
              <h3>
                <a href="/blogs/${rBlog.blogSlug}">${rBlog.title}</a>
              </h3>
              <p>
                ${rBlog.description}
              </p>
            </div>
          `;
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      hideLoader();
    }
  }

  getAllBlogs();
});
