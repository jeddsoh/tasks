// Target elements
const inputField = document.querySelector(".input-field textarea"),
  tasksList = document.querySelector(".tasksList"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

// Handle adding, deleting, and checking/unchecking tasks
function allTasks() {
  let tasks = document.querySelectorAll(".pending");

  // Count tasks
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    tasksList.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  tasksList.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

// Add task upon submitting value greater than 0
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();

  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

    // Insert <li>new task</li>
    tasksList.insertAdjacentHTML("beforeend", liTag);

    // Reset input field
    inputField.value = "";
    allTasks();
  }
});

// Toggle checkbox upon clicking task
function handleStatus(e) {
  const checkbox = e.querySelector("input"); //getting checkbox
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

// Delete task upon clicking trash icon
function deleteTask(e) {
  e.parentElement.remove(); //getting parent element and remove it
  allTasks();
}

//  Delete all tasks upon clicking
clearButton.addEventListener("click", () => {
  tasksList.innerHTML = "";
  allTasks();
});
