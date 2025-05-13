
let isCollapsed = false;
let activeTab = 0;
const tabs = [
  { id: 0, value: 'Add Task' },
  { id: 1, value: 'Completed' },
  { id: 2, value: 'My Projects' }
];
const allowedPriorities = ["Low", "Medium", "High", "Urgent"];
const taskPlaceholders = [
  "Buy groceries...",
  "Water the plants...",
  "Reply to emails...",
  "Finish project report...",
  "Call the electrician...",
  "Book dentist appointment...",
  "Pay utility bills...",
  "Pick up laundry...",
  "Schedule gym session...",
  "Read a chapter of a book...",
  "Plan weekend trip...",
  "Organize the closet...",
  "Clean the kitchen...",
  "Update resume...",
  "Backup important files...",
  "Learn JavaScript array methods...",
  "Refactor old code...",
  "Fix the bug in login flow...",
  "Prepare slides for meeting...",
  "Submit task tracker update..."
];

const closeIcon = "./assets/imgs/close.svg";

function toggleSideBar() {
  const sidebar = document.querySelector('.sidebar-container');
  const sideBarControlBtn = document.querySelector('.menu-control-content');

  sidebar.classList.toggle('collapsed');
  isCollapsed = sidebar.classList.contains('collapsed');

  if (isCollapsed) {
    sideBarControlBtn.classList.add('visible');
  } else {
    sideBarControlBtn.classList.remove('visible');
  }
}

function generateUID() {
  const min = 100;
  const max = 999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function deleteTask() {

}
function addTask() {
  const taskArea = document.querySelector('.task-input-area');
  const parent = taskArea.parentElement;

  const createTaskDiv = document.createElement('div');
  const id = generateUID();
  createTaskDiv.className = 'user-task item-' + id;

  createTaskDiv.innerHTML = `
    <div class="task-top-container">
      <button class="delete-task-btn" onclick="deleteTask()">x</button>
      <input class="task-value" type="text" placeholder= "${taskPlaceholders[(Math.round(Math.random() * 19))]}" />
    </div>
    <input class="task-desc" type="text" placeholder="Description" />
    <select class="task-priority">
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
      <option>Urgent</option>
    </select>
    <input class="task-date" type="date"/>
    <button class="task-add">Add</button>
  `;

  parent.insertBefore(createTaskDiv, taskArea);
}


window.addEventListener("load", () => {
  const sidebar = document.querySelector('.sidebar-container');
  const resizer = document.querySelector('.resizer');


  resizer.addEventListener('mousedown', function (e) {
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
  });

  function resize(e) {
    const newWidth = e.clientX - sidebar.getBoundingClientRect().left;
    sidebar.style.width = Math.max(280, Math.min(newWidth, 500)) + 'px';
    resizer.style.backgroundColor = "gray";
    resizer.style.width = "5px";
  }

  function stopResize() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
    resizer.style.backgroundColor = "inherit";
  }



});


class Task {
  constructor(name = "", description = "", priority = "Low", date = new Date().toLocaleDateString()) {
    const allowedPriorities = ["Low", "Medium", "High", "Urgent"];
    this.name = name;
    this.description = description;
    this.priority = allowedPriorities.includes(priority) ? priority : "Low";
    this.date = date;
  }
}

