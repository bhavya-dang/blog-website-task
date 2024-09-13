document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#comment-form");
  const commentsList = document.querySelector("#comments-list");
  const commentsHeading = document.querySelector(".comments-heading");
  const blogSlug = window.location.href.split("blogs/")[1] || ""; // Handle empty slug case

  // Get blog data
  async function getBlogData() {
    try {
      const response = await fetch(`/api/blogs/${blogSlug}`);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      const blog = data[0];
      console.log("Blog Data:", blog);

      document.title = blog.title;

      const headerEl = document.querySelector("header");
      if (headerEl) {
        headerEl.innerHTML = `
          <img
            src="${blog.imgUrl}"
            alt="${blog.title} cover image"
            width="700"
            height="300"
            style="display: block; margin: 0 auto"
          />
          <h1>${blog.title}</h1>
          <p>${blog.author} &bull; ${new Date(
          blog.createdAt
        ).toDateString()}</p>
        `;
      } else {
        console.error("Header element not found");
      }

      const sectionEl = document.querySelector("section");
      if (sectionEl) {
        sectionEl.innerHTML = `
          <article>
            <p>${blog.content}</p>
          </article>
        `;
      } else {
        console.error("Section element not found");
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  }

  // Fetch comments from the server
  function loadComments() {
    fetch(`/api/comments/${blogSlug}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Comments Data:", data);
        commentsList.innerHTML = "";
        commentsHeading.innerHTML = `Comments (${data.length})`;
        if (data.length === 0) {
          commentsList.innerHTML = "<span>No comments.</span>";
        } else {
          data.forEach((comment) => {
            const commentHTML = `<p><strong>${comment.name}</strong> (${comment.email}): ${comment.content}</p>`;
            commentsList.innerHTML += commentHTML;
          });
        }
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }

  // Submit a new comment
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const content = document.getElementById("comment-content").value;

    const commentData = {
      name,
      email,
      content,
      blogSlug,
    };

    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then(() => {
        loadComments(); // Reload comments after adding a new one
        form.reset();
      })
      .catch((error) => console.error("Error submitting comment:", error));
  });

  // Initial load of blog data and comments
  getBlogData();
  loadComments();
});
