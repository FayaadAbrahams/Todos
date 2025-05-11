let isCollapsed = false;
let activeTab = ''; 

function toggleSideBar() {
  const sidebar = document.querySelector('.sidebar-container');
  const sideBarControlBtn = document.querySelector('.menu-control-content');

  sidebar.classList.toggle('collapsed');
  isCollapsed = sidebar.classList.contains('collapsed');

  if (sideBarControlBtn) {
    sideBarControlBtn.style.marginLeft = isCollapsed ? "10px" : "-999px";
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
