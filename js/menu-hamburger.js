function toggleMenu(btn) {
  btn.classList.toggle("active");
  document.getElementById("mobileMenu").classList.toggle("active");
}

// Attach submenu toggle handlers after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.submenu-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parent = btn.closest('.submenu');
      if (!parent) return;
      parent.classList.toggle('open');
      e.stopPropagation();
    });
  });
});
