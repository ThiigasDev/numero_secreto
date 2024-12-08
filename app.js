let ultimoNumeroSorteado = [];
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
exibirTextoTela("h1", "Jogo do número secreto");
exibirTextoTela("p", "Escolha um número entre 1 e 100");
}

function verificarChute() {
    let chute = document.querySelector("input").value;


    if (chute == numeroSecreto) {
        exibirTextoTela("h1", "Acertou!");
        let palavraChute = tentativas > 1 ? "chutes" : "chute";
        let mensagemChute = `Você descobriu o número secreto com ${tentativas} ${palavraChute}!`;
        exibirTextoTela("p", mensagemChute);
        console.log("Você acertou o número secreto");
    } else if (chute > numeroSecreto) {
        exibirTextoTela("p", "O número secreto é menor");
        console.log("O número secreto é menor");
    } else {
        exibirTextoTela("p", "O número secreto é maior");
        console.log("O número secreto é maior");
    }
    tentativas++;
    limparCampo();
    reiniciar();
}

function reiniciar() {
    if (tentativas > 0) {
        document.getElementById("reiniciar").removeAttribute("disabled");
}
}

function reiniciarJogo() { 
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeElementos = ultimoNumeroSorteado.length;

    if (quantidadeElementos == 2) {
        ultimoNumeroSorteado = [];
    }

    if (ultimoNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        ultimoNumeroSorteado.push(numeroEscolhido);
        console.log(ultimoNumeroSorteado)
        return numeroEscolhido;
    }
}

function limparCampo() {
        chute = document.querySelector("input");
        chute.value = "";
}

mensagemInicial();