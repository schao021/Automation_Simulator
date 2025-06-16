document.getElementById("generateBtn").addEventListener("click", function() { // Function finds button generateBtn and event occurs after clicking it
  const action = document.getElementById("action").value; // Gets whatever inside the option
  const dept = document.getElementById("department").value;
  const trigger = document.getElementById("trigger").value;

  const message = `Automation Rule: Send a ${action.toLowerCase()} to ${dept} when ${trigger}.`;

  const result = document.getElementById("result");
  result.innerHTML = message;
  result.style.display = "block";

  // select html element of flowchart and stores it in variable
  const flowchart = document.getElementById("flowchart");
  flowchart.innerHTML = ""; // clear old flowchart so I can resuse it

  // Create boxes and arrows
  const triggerBox = `<div class="flow-box">${trigger}</div>`; // Creating a literal text of div class flow-box and the trigger variable inside
  const arrow1 = `<div class="arrow">➡</div>`;
  const actionBox = `<div class="flow-box">${action}</div>`;
  const arrow2 = `<div class="arrow">➡</div>`;
  const deptBox = `<div class="flow-box">${dept}</div>`;
  //Add into the flowchart container
  flowchart.innerHTML = triggerBox + arrow1 + actionBox + arrow2 + deptBox;
});
