document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#comment-form");
  const commentsList = document.querySelector("#comments-list");
  const commentsHeading = document.querySelector(".comments-heading");
  const blogSlug = window.location.href.split("blogs/")[1];
  console.log(blogSlug);

  // Fetch comments from the server
  function loadComments() {
    fetch(`http://localhost:5000/api/comments/${blogSlug}`)
      .then((response) => response.json())
      .then((data) => {
        commentsList.innerHTML = "";
        commentsHeading.innerHTML = `Comments (${data.length})`;
        if (data.length === 0) {
          commentsList.innerHTML = "<span>No comments.</span>";
        }
        data.forEach((comment) => {
          const commentHTML = `<p><strong>${comment.name}</strong> (${comment.email}): ${comment.content}</p>`;
          commentsList.innerHTML += commentHTML;
        });
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

    fetch("http://localhost:5000/api/comments", {
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

  // Initial load of comments
  loadComments();
});
