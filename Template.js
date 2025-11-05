  // Sidebar toggle (mobile)
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');

    // Open sidebar
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
      });
    }

    // Close sidebar (when clicking the close button inside)
    if (sidebarClose) {
      sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('open');
      });
    }

    // Active state for sidebar menu items
    document.addEventListener("DOMContentLoaded", function () {
      const menuItems = document.querySelectorAll(".menu-pill");

      menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
          // remove active from all
          menuItems.forEach(el => el.classList.remove("active"));

          // add active to clicked one
          this.classList.add("active");
        });
      });
    });
    document.addEventListener("DOMContentLoaded", function () {
      const navLinks = document.querySelectorAll(".filter-pills .nav-link");

      navLinks.forEach(link => {
        link.addEventListener("click", function () {
          // Remove active from all
          navLinks.forEach(btn => btn.classList.remove("active"));

          // Add active to the clicked one
          this.classList.add("active");
        });
      });
    });