// script.js (ESTUDAR)

document.querySelectorAll('#btn-comprar').forEach(button => {
    button.addEventListener('click', () => {
        // Aqui você pode adicionar o redirecionamento para a página de pagamento
        window.location.href = "https://pay.kiwify.com.br/ELNkVn6";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const depoimentos = document.querySelectorAll(".depoimento");
    const btnEsquerda = document.getElementById("praEsquerdaDepoimentos");
    const btnDireita = document.getElementById("praDireitaDepoimentos");
    let indexAtual = 0;

    function mostrarDepoimento(direcao) {
        // Remove o estado ativo e animação do depoimento atual
        depoimentos[indexAtual].classList.remove("ativo", "slide-in-left", "slide-in-right");

        // Atualiza o índice do depoimento atual com base na direção
        if (direcao === "direita") {
            indexAtual = (indexAtual + 1) % depoimentos.length;
        } else {
            indexAtual = (indexAtual - 1 + depoimentos.length) % depoimentos.length;
        }

        // Adiciona a animação de slide e o estado ativo ao novo depoimento
        const animacao = direcao === "direita" ? "slide-in-right" : "slide-in-left";
        depoimentos[indexAtual].classList.add("ativo", animacao);
    }

    btnEsquerda.addEventListener("click", function () {
        mostrarDepoimento("esquerda");
    });

    btnDireita.addEventListener("click", function () {
        mostrarDepoimento("direita");
    });

    // Exibe o primeiro depoimento automaticamente
    mostrarDepoimento("direita");
});

document.addEventListener("DOMContentLoaded", function () {
    const capitulos = document.querySelectorAll(".capitulo");
    const btnEsquerda2 = document.getElementById("praEsquerdaConteudos");
    const btnDireita2 = document.getElementById("praDireitaConteudos");
    let indexAtual2 = 0;

    const atualizarCapitulo = (direcao2) => {
        capitulos[indexAtual2].classList.remove("ativo", "slide-in-down", "slide-in-up");

        if (direcao2 === "direita" && indexAtual2 < capitulos.length - 1) {
            indexAtual2++;
        } else if (direcao2 === "esquerda" && indexAtual2 > 0) {
            indexAtual2--;
        }

        const animacao2 = direcao2 === "direita" ? "slide-in-down" : "slide-in-up";
        capitulos[indexAtual2].classList.add("ativo", animacao2);

        // Atualiza a visibilidade dos botões
        atualizarBotoes();
    };

    const atualizarBotoes = () => {
        if (indexAtual2 === 0) {
            btnEsquerda2.style.visibility = 'hidden';
        } else {
            btnEsquerda2.style.visibility = 'visible';
        }

        if (indexAtual2 === capitulos.length - 1) {
            btnDireita2.style.visibility = 'hidden';
        } else {
            btnDireita2.style.visibility = 'visible';
        }
    };

    btnEsquerda2.addEventListener("click", () => atualizarCapitulo("esquerda"));
    btnDireita2.addEventListener("click", () => atualizarCapitulo("direita"));

    capitulos[indexAtual2].classList.add("ativo");
    atualizarBotoes();
})

