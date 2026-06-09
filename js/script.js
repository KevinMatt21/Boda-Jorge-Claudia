document.addEventListener("DOMContentLoaded", () => {
  console.log("JS listo");

  // Invitado personalizado
  const params = new URLSearchParams(window.location.search);
  const invitado = params.get("invitado");

  if (invitado) {
    const guestName = document.getElementById("guest-name");

    if (guestName) {
      guestName.innerText =
        `${invitado}, nos sentimos muy felices de compartir este día contigo.`;
    }
  }

  // Cuenta regresiva
  const weddingDate = new Date("November 7, 2026 17:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if (d) d.innerText = days;
    if (h) h.innerText = hours;
    if (m) m.innerText = minutes;
    if (s) s.innerText = seconds;

  }, 1000);
});


// =====================
// MENÚ SCROLL
// =====================
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("activo");
  } else {
    navbar.classList.remove("activo");
  }
});


// =====================
// PETALOS REALES (IMAGEN)
// =====================
function createPetal() {
  const petal = document.createElement("img");

  petal.src = "petal.png"; // 👈 IMPORTANTE: tu archivo está en la raíz
  petal.classList.add("petal");

  const size = 15 + Math.random() * 25;

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.width = size + "px";
  petal.style.height = "auto";

  petal.style.animationDuration = (6 + Math.random() * 6) + "s";
  petal.style.opacity = 0.5 + Math.random() * 0.5;
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 13000);
}

setInterval(createPetal, 450);


// =====================
// PARTICULAS DORADAS
// =====================
const particlesContainer = document.getElementById("particles-container");

if (particlesContainer) {
  for (let i = 0; i < 60; i++) {
    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";

    particlesContainer.appendChild(particle);
  }
}
