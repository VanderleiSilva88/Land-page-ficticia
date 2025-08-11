document.getElementById("form-inscricao").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  alert(`Obrigado por se inscrever, ${nome}! 🎉`);
});

// Contador regressivo melhorado
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const eventoData = new Date("2025-09-01T09:00:00").getTime();

setInterval(() => {
  const agora = new Date().getTime();
  const distancia = eventoData - agora;

  if (distancia < 0) {
    diasEl.textContent = "00";
    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    return;
  }

  const dias = Math.floor(distancia / (10000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  diasEl.textContent = String(dias).padStart(2, "0");
  horasEl.textContent = String(horas).padStart(2, "0");
  minutosEl.textContent = String(minutos).padStart(2, "0");
  segundosEl.textContent = String(segundos).padStart(2, "0");
}, 1000);

// Scroll suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    alvo.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll Reveal básico
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
});
document.querySelectorAll("section").forEach(sec => observer.observe(sec));

