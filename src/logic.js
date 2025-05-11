let isCollapsed = false;
let activeTab = 0;
let tabs = [
  { id: 0, value: 'Add Task' },
  { id: 1, value: 'Completed' },
  { id: 2, value: 'My Projects' }
];

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
