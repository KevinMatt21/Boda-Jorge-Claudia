console.log("JS cargó");
alert("JS funcionando");
// Cambio de color del menú al hacer scroll
window.addEventListener("scroll", () => {
...
// Cambio de color del menú al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Invitado personalizado
const params = new URLSearchParams(window.location.search);
const invitado = params.get("invitado");

if (invitado) {
  document.getElementById("guest-name").innerText =
    `${invitado}, nos sentimos muy felices de compartir este día contigo.`;
}

// Cuenta regresiva
const weddingDate = new Date("November 7, 2026 17:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);
// =====================
// PETALOS
// =====================

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
    (5 + Math.random()*8) + "s";

    petal.style.opacity =
    0.4 + Math.random()*0.6;

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },13000);
}

setInterval(createPetal,700);

// =====================
// PARTICULAS DORADAS
// =====================

const particlesContainer =
document.getElementById("particles-container");

for(let i=0;i<60;i++){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.top =
    Math.random()*100 + "%";

    particle.style.animationDelay =
    Math.random()*6 + "s";

    particlesContainer.appendChild(particle);
}
