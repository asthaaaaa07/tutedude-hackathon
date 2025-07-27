document.getElementById("connectForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const response = document.getElementById("formResponse");

  if (name && email && message) {
    // Simulate success
    response.textContent = `Thanks, ${name}! Your message has been sent.`;
    this.reset();
  } else {
    response.textContent = "Please fill in all fields.";
  }
});
