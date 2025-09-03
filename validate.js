document.getElementById("registrationForm").addEventListener("submit", function (e) {
  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value;
  const agree = document.getElementById("agree").checked;
  let errors = [];
  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Invalid email address.");
  }
  if (!dob) {
    errors.push("Date of birth is required.");
  }
  if (!agree) {
    errors.push("You must agree to the terms.");
  }
  if (errors.length > 0) {
    e.preventDefault();
    alert(errors.join("\n"));
  }
});
