// ===== Mobile nav toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll("section[id], body[id]");
const linkFor = {};
document.querySelectorAll(".nav-links a").forEach((a) => {
  linkFor[a.getAttribute("href").replace("#", "")] = a;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        Object.values(linkFor).forEach((a) => a.classList.remove("active"));
        if (linkFor[id]) linkFor[id].classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);
sections.forEach((s) => observer.observe(s));

// ===== Contact form -> pre-filled email (static-site friendly) =====
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in your name, email, and message.");
    return;
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:israelordonez202@gmail.com?subject=${subject}&body=${body}`;
});
