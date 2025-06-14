document.getElementById("generateBtn").addEventListener("click", function() { // Function finds button generateBtn and event occurs after clicking it
  const action = document.getElementById("action").value;
  const dept = document.getElementById("department").value;
  const trigger = document.getElementById("trigger").value;

  const message = `Automation Rule: Send a ${action.toLowerCase()} to ${dept} when ${trigger}.`;

  const result = document.getElementById("result");
  result.innerHTML = message;
  result.style.display = "block";
});
