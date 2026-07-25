// ===== Theme toggle with localStorage persistence =====
const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

const saved = localStorage.getItem("theme");
if (saved) {
  applyTheme(saved);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

// ===== Active section highlighting in the sidebar nav =====
const sections = document.querySelectorAll(".block[id]");
const navItems = document.querySelectorAll(".nav-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navItems.forEach((item) => {
          item.classList.toggle("active", item.dataset.section === id);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));
