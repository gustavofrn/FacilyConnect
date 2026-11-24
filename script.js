function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

function sendWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const servico = document.getElementById("servico").value;
  const placa = document.getElementById("placa").value;
  const mensagemExtra = document.getElementById("mensagem").value;

  const numero = "5511947246160";

  const mensagem = `
Olá, vim pelo site da Facily Despachante.

Nome: ${nome}
Telefone: ${telefone}
Serviço desejado: ${servico}
Placa: ${placa || "Não informado"}
Observação: ${mensagemExtra || "Nenhuma"}
`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
