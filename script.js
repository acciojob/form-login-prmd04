function getFormvalue() {
  event.preventDefault();
  const form = document.getElementById("form1");
  const fname = form.elements["fname"].value.trim();
  const lname = form.elements["lname"].value.trim();
  alert(`${fname} ${lname}`); 
}
