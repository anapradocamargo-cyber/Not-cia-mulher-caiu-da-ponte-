const botao = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
    mensagem.textContent =
        "As informações são preliminares e podem ser atualizadas conforme novas confirmações das autoridades.";
    mensagem.style.color = "blue";
    mensagem.style.fontWeight = "bold";
});