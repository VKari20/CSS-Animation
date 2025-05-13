const title = document.getElementById("title");
const animateBtn = document.getElementById("animate-btn");
const toggleThemeBtn = document.getElementById("toggle-theme");

// Trigger animation on title
animateBtn.addEventListener("click", () => {
  title.classList.add("animate-pop");

  // Remove class after animation ends so it can be re-triggered
  title.addEventListener("animationend", () => {
    title.classList.remove("animate-pop");
  }, { once: true });
});

// Theme switching with localStorage
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// Load stored preference
const storedTheme = localStorage.getItem("theme") || "light";
applyTheme(storedTheme);

// Toggle and store theme
toggleThemeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-theme");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
