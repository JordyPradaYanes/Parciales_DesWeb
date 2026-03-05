window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", scrollY > 0);
});

let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let ico_hamburguer = true;

function toggleHamburguer() {
  enlaces_header.classList.toggle("hamburgueropen");
}

// Seleccionar todos los elementos por su clase
let house = document.querySelector(".fa-house");
let html5 = document.querySelector(".fa-html5");
let css3 = document.querySelector(".fa-css3-alt");
let javas = document.querySelector(".fa-fire");
let parc = document.querySelector(".fa-book-open-reader");
let user = document.querySelector(".fa-user");

// Agregar evento de clic a cada elemento
house.addEventListener("click", toggleHamburguer);
html5.addEventListener("click", toggleHamburguer);
css3.addEventListener("click", toggleHamburguer);
javas.addEventListener("click", toggleHamburguer);
parc.addEventListener("click", toggleHamburguer);
user.addEventListener("click", toggleHamburguer);

document
  .querySelectorAll(".hamburgueri")[0]
  .addEventListener("click", function () {
    if (ico_hamburguer) {
      document.querySelectorAll(".hamburgueri")[0].style.color = "#312BD9";
      ico_hamburguer = false;
    } else {
      document.querySelectorAll(".hamburgueri")[0].style.color = "#000";
      ico_hamburguer = true;
    }

    enlaces_header.classList.toggle("hamburgueropen");
  });

user.addEventListener("click", () => {
  ico_hamburguer = true;
  main.style.display = "";
});

document
  .querySelectorAll(".enlaces-header")[0]
  .addEventListener("click", function () {
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburgueri")[0].style.color = "#000";
  });

// ---- Theme Toggle ----
function toggleTheme() {
  const isDark = !document.body.classList.toggle("light-mode");
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Apply saved theme on load
(function () {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light-mode");
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = "☀️";
  }
})();

// ---- Reading Progress Bar + Scroll-to-Top ----
const progressBar = document.getElementById("read-progress");
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (progressBar) {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / docH) * 100 + "%";
  }
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
  }
});

// ---- Active Nav Link via IntersectionObserver ----
const navLinks = document.querySelectorAll(".enlaces-header a[data-section]");
const sections = document.querySelectorAll("section[id]");

if (navLinks.length && sections.length) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((l) =>
            l.classList.toggle("nav-active", l.dataset.section === id),
          );
        }
      });
    },
    { threshold: 0.3, rootMargin: "-70px 0px -50% 0px" },
  );
  sections.forEach((s) => obs.observe(s));
}
