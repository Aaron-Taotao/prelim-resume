// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! I'll get back to you soon.");
});

// Comment section logic
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("commentName").value;
  const comment = document.getElementById("commentText").value;

  const commentBox = document.createElement("div");
  commentBox.innerHTML = `<strong>${name}</strong>: ${comment}`;
  document.getElementById("commentSection").appendChild(commentBox);

  // Clear form
  document.getElementById("commentForm").reset();
});

// Download Resume button
document.getElementById("downloadBtn").addEventListener("click", function () {
  alert("This would trigger a resume download. You can link a PDF here.");
});
