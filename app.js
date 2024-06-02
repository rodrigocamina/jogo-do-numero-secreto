let listaDeSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(numeroLimite);
let numeroTentativas = 1;
let correcaoGenero;

function exibirTextoNaPagina(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if (texto.includes(' 1 ')) {
        texto = texto.replace("com 1 tentativa", 'com uma tentativa');
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.15});
    } else if (texto.includes('com 2 tentativas')) {
        texto = texto.replace("com 2 tentativas", 'com duas tentativas');
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.15});
    } else {
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.15});
    }
}

function exibirMensagemInicial() {
    exibirTextoNaPagina('h1', 'Jogo do Número Secreto');
    exibirTextoNaPagina('p',`Escolha um número entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaPagina('h1', 'Acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaPagina('p', `Parabéns! Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativa}!`);        
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaPagina('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaPagina('p', 'O número secreto é maior!');
        }
        numeroTentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(numeroProposto) {
    let numeroEscolhido = parseInt(Math.random() * numeroProposto + 1);
    let quantidadeElementosLista = listaDeSorteados.length;

    if (quantidadeElementosLista == numeroProposto) {
        listaDeSorteados = [];
    }

    if (listaDeSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(numeroProposto);
    } else {
        listaDeSorteados.push(numeroEscolhido);
        console.log(listaDeSorteados);
        return numeroEscolhido;''
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(numeroLimite);
    limparCampo();
    numeroTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// =====================================================================================
// EXERCICIOS cap 1. - Desafio (feito em um projeto separado)

// =====================================================================================
// EXERCICIOS cap 2. - Funções

// function hello() {
//     console.log('Olá mundo!');
// }

// ------------------------------------------------------------------------------------
// function greating(nome) {
//     console.log(`Olá ${nome}`);
// }

// ------------------------------------------------------------------------------------
// function dobro(numero) {
//     return numero * 2;
// }

// ------------------------------------------------------------------------------------
// function media(valor1, valor2, valor3) {
//     return (valor1 + valor2 + valor3)/3;
// }

// ------------------------------------------------------------------------------------
// function retornaMaior(valor1, valor2) {
//     if (valor1 == valor2) {
//         return 0;
//     } else {
//         let maior;
//         return maior = valor1 > valor2 ? valor1 : valor2;
//     }
// }

// ------------------------------------------------------------------------------------
// function squareRoot(numero) {
//     return numero * numero;
// }

// hello();
// greating('Rodrigo');
// console.log(dobro(2));
// console.log(media(2, 3, 4));
// console.log(retornaMaior(4, 4));
// console.log(retornaMaior(5, 4));
// console.log(retornaMaior(4, 5));
// console.log(squareRoot(2));

// =====================================================================================
// EXERCICIOS cap 3. - Reiniciando o Jogo

// let peso = Number(prompt('Qual o seu peso?'));
// let altura = Number(prompt('Qual a sua altura?'));

// function calculaIMC(peso, altura) {
//     let imc = peso / (altura * altura);
//     console.log(`Seu IMC é ${imc}`);
//     alert(`Seu IMC é ${imc}`);
// }

// calculaIMC(peso, altura);

// ------------------------------------------------------------------------------------
// function calculaFatorial(numero) {
//     let resultado = 1;
//     for (let fatorial = 1; fatorial <= numero; fatorial++) {
//         resultado *= fatorial;
//     }
//     console.log(`O fatorial de ${numero} é ${resultado}!`);
//     alert(`O fatorial de ${numero} é ${resultado}!`);
// }

// calculaFatorial(0);
// calculaFatorial(1);
// calculaFatorial(2);
// calculaFatorial(3);

// ------------------------------------------------------------------------------------
// let valorUSD = Number(prompt('Qual o valor em dolares a ser convertido para reais?'));
// let cotacaoUSD = Number(prompt('Qual a cotação do dolar em reais?'));

// function converterDolarReais(valor, cotacao) {
//     let resultado = valor * cotacao;
//     console.log(`O valor em reais de US$${valor} é de R$${resultado}, considerando a cotação R$${cotacao}`);
//     alert(`O valor em reais de US$${valor} é de R$${resultado}, considerando a cotação R$${cotacao}`);
// }

// converterDolarReais(valorUSD, cotacaoUSD);

// ------------------------------------------------------------------------------------
// let comprimentoSala = Number(prompt('Qual o comprimeto da sala?'));
// let larguraSala = Number(prompt('Qual a largura da sala?'));

// function calculaAreaPerimetro(comprimento, largura) {
//     let area = comprimento * largura;
//     let perimetro = (comprimento * 2) + (largura * 2);
//     console.log(`A area da sala é de ${area}m²\nO perímetro da sala e de ${perimetro}m`);
//     alert(`A area da sala é de ${area}m²\nO perímetro da sala e de ${perimetro}m`);
// }

// calculaAreaPerimetro(comprimentoSala, larguraSala);

// ------------------------------------------------------------------------------------
// let pi = 3.14;
// let raio = Number(prompt('Qual o raio da circunferência?'));

// function calculaAreaPerimetroCircunferencia(raio) {
//     let area = pi * (raio * raio);
//     let circunferencia = 2 * pi * raio;
//     console.log(`A area do círculo é de ${area}\nA circunferência do círculo é de ${circunferencia}\n(Considere o valor de pi como ${pi})`);
//     alert(`A area do círculo é de ${area}\nA circunferência do círculo é de ${circunferencia}\n(Considere o valor de pi como ${pi})`);
// }

// calculaAreaPerimetroCircunferencia(raio);

// ------------------------------------------------------------------------------------
// function tabuada(numero) {
//     let resultado;
//     console.log(`Tabuada de ${numero}:\n===============================`);
//     for (let index = 0; index <= 10 ; index++) {
//         resultado = numero * index;
//         console.log(`${numero} x ${index} = ${resultado}`);
//     }
//     console.log('===============================\nFinal da Tabuada');
// }

// tabuada(3);
// tabuada(9);

// =====================================================================================
// EXERCICIOS cap 4. - Listas

// let listaGenerica = [];
// console.log(listaGenerica);
// let listaLinguagens = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// console.log(listaLinguagens);
// listaLinguagens.push('Java', 'Ruby', 'GoLang');
// console.log(listaLinguagens);
// let listaNomes = ['José', 'Maria', 'João'];
// console.log(listaNomes[0]);
// console.log(listaNomes[1]);
// console.log(listaNomes[2]);

// =====================================================================================
// EXERCICIOS cap 5. - Publicando o Projeto
