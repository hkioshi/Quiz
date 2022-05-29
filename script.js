//Esse variavel serve como contador, ele vai contar que fase voce esta
let cont;


function jogar()
{
  // Essa função é para inicar o quiz, ele vai fazer as tags de titulo
  // e o botao jogar desaparecerem e a primeira questao aparecer

  // Fazer tudo desaparecer
  const desaparecerTitulo = document.getElementById("telaInicial");
  desaparecerTitulo.style.display = "none";
  questaoUm();

}

function aparece()
{
  //aqui é um botão para fazer o titulo aparecer
  const desaparecerTitulo = document.getElementById("telaInicial");
  desaparecerTitulo.style.display = "block";
}

function questaoUm()
{
  // adiciona + 1 no contador de fases
  cont++;
  
  //encontra as divs por meio das ids
  let questao = document.getElementById("questaoLayoutUm");
  let questaoNumero = document.getElementById("numeroIdUm");
  let questaoTitulo = document.getElementById("tituloIdUm");
  let alternativaUm = document.getElementById("quadrado1");
  let alternativaDois = document.getElementById("quadrado2");
  let alternativaTres = document.getElementById("quadrado3");
  let alternativaQuatro = document.getElementById("quadrado4");
  
  // cria e dda id ao palito da questão 1
  let palito1 = document.createElement("div");
  palito1.id = 'palito'; 

  //coloca texto nas divs das alternativas
  alternativaUm.innerText = '2';
  alternativaDois.innerText = '4';
  alternativaTres.innerText = '6';
  alternativaQuatro.innerText = '3';

  //titulo e nº da questao/resposta da questão
  questaoNumero.innerText = '1';
  questaoTitulo.innerText = 'Quantos palitos tem aqui?';
  //questaoNumero.onclick(questaoDois());
  
  // faz tudo aparecer na tela
  questao.style.display = "block";
}

// se responder errado ativa essa funçao
function perdeu()
{
  let questao;
  // aqui vai verificar qual questao voce esta, por isso o uso do contador
  switch(cont)
  {
    case 1:
      questao = document.getElementById("questaoLayoutUm");
    break;
  }
  //faz a questao desaparecer
  //não ta rodando isso aq
  questao.style.display = "none";

 
}


