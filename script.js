// ========================================
// MODO ESCURO
// ========================================

const modoEscuro =
    document.getElementById("modoEscuro");

modoEscuro.addEventListener("click", function () {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {

        modoEscuro.textContent = "☀️";

    } else {

        modoEscuro.textContent = "🌙";

    }

});


// ========================================
// PERGUNTAS DO QUIZ
// ========================================

const perguntas = [

    {
        pergunta:
            "O que é Inteligência Artificial?",

        opcoes: [
            "Um tipo de computador.",
            "Uma área da tecnologia que desenvolve sistemas capazes de realizar tarefas associadas à inteligência humana.",
            "Um jogo eletrônico.",
            "Uma rede social."
        ],

        correta: 1
    },


    {
        pergunta:
            "Como a IA pode ajudar na escola?",

        opcoes: [
            "Fazendo todas as atividades pelo aluno.",
            "Substituindo todos os professores.",
            "Ajudando em pesquisas, estudos e organização.",
            "Impedindo o aluno de pesquisar."
        ],

        correta: 2
    },


    {
        pergunta:
            "Qual é um risco do uso excessivo da IA?",

        opcoes: [
            "Aumento da criatividade.",
            "Dependência da tecnologia e redução do pensamento crítico.",
            "Melhor organização.",
            "Maior interesse pelos estudos."
        ],

        correta: 1
    },


    {
        pergunta:
            "Por que devemos verificar as informações fornecidas pela IA?",

        opcoes: [
            "Porque a IA nunca funciona.",
            "Porque a IA pode apresentar informações incorretas.",
            "Porque a IA não sabe escrever.",
            "Porque a IA só responde perguntas de matemática."
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual é uma atitude ética ao usar IA em um trabalho escolar?",

        opcoes: [
            "Copiar tudo sem ler.",
            "Entregar o trabalho como se fosse totalmente produzido por você.",
            "Usar a ferramenta como apoio e desenvolver suas próprias ideias.",
            "Deixar a IA fazer todas as atividades."
        ],

        correta: 2
    }

];


// ========================================
// VARIÁVEIS DO QUIZ
// ========================================

let perguntaAtual = 0;

let pontos = 0;

const pergunta =
    document.getElementById("pergunta");

const opcoes =
    document.getElementById("opcoes");

const iniciarQuiz =
    document.getElementById("iniciarQuiz");

const resultado =
    document.getElementById("resultado");


// ========================================
// INICIAR QUIZ
// ========================================

iniciarQuiz.addEventListener(
    "click",
    iniciar
);


function iniciar() {

    perguntaAtual = 0;

    pontos = 0;

    resultado.textContent = "";

    iniciarQuiz.style.display = "none";

    mostrarPergunta();

}


// ========================================
// MOSTRAR PERGUNTA
// ========================================

function mostrarPergunta() {

    const atual =
        perguntas[perguntaAtual];

    pergunta.textContent =
        (perguntaAtual + 1) +
        ". " +
        atual.pergunta;

    opcoes.innerHTML = "";


    atual.opcoes.forEach(
        function (opcao, indice) {

            const botao =
                document.createElement("button");

            botao.textContent = opcao;

            botao.classList.add("opcao");

            botao.addEventListener(
                "click",
                function () {

                    verificar(indice);

                }
            );

            opcoes.appendChild(botao);

        }
    );

}


// ========================================
// VERIFICAR RESPOSTA
// ========================================

function verificar(resposta) {

    const atual =
        perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".opcao");


    botoes.forEach(
        function (botao) {

            botao.disabled = true;

        }
    );


    if (resposta === atual.correta) {

        botoes[resposta]
            .classList
            .add("correta");

        pontos++;

        resultado.textContent =
            "✅ Muito bem! Resposta correta.";

    } else {

        botoes[resposta]
            .classList
            .add("errada");

        botoes[atual.correta]
            .classList
            .add("correta");

        resultado.textContent =
            "❌ Resposta incorreta.";

    }


    setTimeout(
        proximaPergunta,
        1500
    );

}


// ========================================
// PRÓXIMA PERGUNTA
// ========================================

function proximaPergunta() {

    perguntaAtual++;

    resultado.textContent = "";


    if (
        perguntaAtual <
        perguntas.length
    ) {

        mostrarPergunta();

    } else {

        finalizar();

    }

}


// ========================================
// FINALIZAR QUIZ
// ========================================

function finalizar() {

    pergunta.textContent =
        "🎉 Quiz concluído!";

    opcoes.innerHTML = "";


    resultado.textContent =
        "Você acertou " +
        pontos +
        " de " +
        perguntas.length +
        " perguntas.";


    iniciarQuiz.textContent =
        "Fazer novamente";

    iniciarQuiz.style.display =
        "inline-block";

}