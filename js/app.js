document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("comment-form");
  const commentsList = document.getElementById("comments-list");
  const blogId = "blog1";

  // Fetch comments from the server
  function loadComments() {
    fetch(`http://localhost:5000/api/comments/${blogId}`)
      .then((response) => response.json())
      .then((data) => {
        commentsList.innerHTML = "";
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
      blogId,
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
