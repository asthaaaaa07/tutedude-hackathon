document.getElementById("requirementForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const city = document.getElementById("city").value;
  const requirement = document.getElementById("requirement").value.trim();

  if (name && contact && city && requirement) {
    alert("Thank you! Your requirement has been submitted. We'll connect you with relevant vendors soon.");
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
