document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const invitado = params.get("invitado");

  if (invitado) {
    document.getElementById("guest-name").innerText =
      `${invitado}, nos sentimos muy felices de compartir este día contigo.`;
  }

  const weddingDate = new Date("November 7, 2026 17:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const d = Math.floor(distance / (1000*60*60*24));
    const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((distance%(1000*60*60))/(1000*60));
    const s = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;

  },1000);
});

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if(window.scrollY > 50){
    nav.classList.add("activo");
  }else{
    nav.classList.remove("activo");
  }
});

const container = document.getElementById("particles-container");

for(let i=0;i<40;i++){
  const p = document.createElement("div");
  p.classList.add("particle");

  p.style.left = Math.random()*100+"%";
  p.style.top = Math.random()*100+"%";

  container.appendChild(p);
}
