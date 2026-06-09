document.addEventListener("DOMContentLoaded", () => {
  console.log("JS listo");

  // Invitado personalizado
  const params = new URLSearchParams(window.location.search);
  const invitado = params.get("invitado");

  const guestName = document.getElementById("guest-name");

  if (invitado && guestName) {
    guestName.innerText =
      `${invitado}, nos sentimos muy felices de compartir este día contigo.`;
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

    if (document.getElementById("days")) document.getElementById("days").innerText = days;
    if (document.getElementById("hours")) document.getElementById("hours").innerText = hours;
    if (document.getElementById("minutes")) document.getElementById("minutes").innerText = minutes;
    if (document.getElementById("seconds")) document.getElementById("seconds").innerText = seconds;

  }, 1000);
});


// MENÚ SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("activo");
  } else {
    navbar.classList.remove("activo");
  }
});


// PARTICULAS DORADAS GRANDES
const particlesContainer = document.getElementById("particles-container");

if (particlesContainer) {
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";

    particlesContainer.appendChild(particle);
  }
}
