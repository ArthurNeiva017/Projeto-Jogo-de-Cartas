let button = document.querySelector(".embaralhar");
let cartasElementos = document.querySelectorAll("ul li");

function embaralharCartas(cartas) {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
}

let baralho = ["K", "Q", "J", "A", "2", "3"];

function atualizarCartasNaTela(cartas) {
    let ul = document.querySelector("ul");
    ul.innerHTML = ""; // Limpa a lista atual
    cartas.forEach(carta => {
        let li = document.createElement("li");
        li.textContent = carta;
        ul.appendChild(li);
    });
}

button.addEventListener("click", () => {
    embaralharCartas(baralho);
    atualizarCartasNaTela(baralho); // Corrigido aqui
});
