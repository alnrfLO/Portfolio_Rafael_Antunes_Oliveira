function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }
  function toggleTheme() {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    // Emit theme change event for cursor
    window.dispatchEvent(new Event('themechange'));
  }
  window.addEventListener("DOMContentLoaded", applySavedTheme);
  