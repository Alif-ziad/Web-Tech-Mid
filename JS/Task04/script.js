const addBtn = document.getElementById("addBtn");
const tableBody = document.querySelector("#studentTable tbody");

addBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const department = document.getElementById("department").value.trim();

  // Validation
  if (name === "" || roll === "" || department === "") {
    alert("All fields are required!");
    return;
  }

  // Create new row
  const newRow = document.createElement("tr");

  // Name cell
  const nameCell = document.createElement("td");
  nameCell.innerText = name;
  newRow.appendChild(nameCell);

  // Roll cell
  const rollCell = document.createElement("td");
  rollCell.innerText = roll;
  newRow.appendChild(rollCell);

  // Department cell
  const deptCell = document.createElement("td");
  deptCell.innerText = department;
  newRow.appendChild(deptCell);

  // Action cell with Delete button
  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "deleteBtn";
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });
  actionCell.appendChild(deleteBtn);
  newRow.appendChild(actionCell);

  // Append row to table
  tableBody.appendChild(newRow);

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("department").value = "";
});