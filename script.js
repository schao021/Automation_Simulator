savedRules = []; // Used for storing all the rules to be displayed after

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

document.getElementById("saveRulesBtn").addEventListener("click", function() { // Push the rule after saving it
  const flowchart = document.getElementById("flowchart");
  if (flowchart.innerHTML.trim() !== "") { 
    savedRules.push(flowchart.innerHTML);
    alert("Rule saved!");
  } else {
    alert("Generate an automation rule first before saving.");
  }
});

document.getElementById("printRulesBtn").addEventListener("click", function() {
  const result = document.getElementById("result");
  result.innerHTML = "";
  const flowchart = document.getElementById("flowchart");
  flowchart.innerHTML = "";
  const printArea = document.getElementById("printArea");
  printArea.innerHTML = "";
  // Loop through all saved rules and add them to printArea
  for (let i = 0; i < savedRules.length; i++) {
    const ruleDiv = document.createElement("div");
    ruleDiv.innerHTML = savedRules[i];  // Set HTML for the rule
    printArea.appendChild(ruleDiv);
    if (i < savedRules.length - 1) {
      const hr = document.createElement("hr");
      printArea.appendChild(hr);
    }
  }
});
