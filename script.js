document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form1").addEventListener("submit", getFormvalue);
});

function getFormvalue(event) {
  event.preventDefault();

  const form = document.getElementById("form1");
  const fname = form.elements["fname"].value.trim();
  const lname = form.elements["lname"].value.trim();

  const fullName = [fname, lname].filter(Boolean).join(" ");

  if (!fullName) {
    alert("Please enter your name.");
  } else {
    alert(fullName);
  }
}
