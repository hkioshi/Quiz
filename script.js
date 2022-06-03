//Esse variavel serve como contador, ele vai contar que fase voce esta
let cont = 0 ;
let contadorDeErrou = 0;


function jogar()
{
  // Essa função é para inicar o quiz, ele vai fazer as tags de titulo
  // e o botao jogar desaparecerem e a primeira questao aparecer

  // Fazer tudo desaparecer
  const desaparecerTitulo = document.getElementById("telaInicial");
  desaparecerTitulo.style.display = "none";
  questaoUm();
  //final();

}

function aparece()
{
  //aqui é um botão para fazer o titulo aparecer
  const desaparecerTitulo = document.getElementById("telaInicial");
  desaparecerTitulo.style.display = "block";
}

function questaoUm()
{
  // Indicando qual layout esta
  cont = 1;
  
  //encontra as divs por meio das ids
  const questao = document.getElementById("questaoLayout1");
  const questaoNumero = document.getElementById("numeroIdUm");
  const questaoTitulo = document.getElementById("tituloIdUm");
  const alternativaUm = document.getElementById("quadrado1");
  const alternativaDois = document.getElementById("quadrado2");
  const alternativaTres = document.getElementById("quadrado3");
  const alternativaQuatro = document.getElementById("quadrado4");
  

  //coloca texto nas divs das alternativas
  alternativaUm.innerText = '2';
  alternativaDois.innerText = '4';
  alternativaTres.innerText = '6';
  alternativaQuatro.innerText = '3';

  alternativaUm.onclick = perdeu;
  alternativaDois.onclick = perdeu;
  alternativaTres.onclick = perdeu;
  alternativaQuatro.onclick = perdeu;
  
  

  //titulo e nº da questao/resposta da questão
  questaoNumero.innerText = '1';
  questaoNumero.style.cursor = 'pointer';
  questaoTitulo.innerText = 'Quantos palitos tem aqui?';
  questaoNumero.onclick = questaoDois;
  
  // faz tudo aparecer na tela
  questao.style.display = "block";
}

// se responder errado ativa essa funçao
function perdeu()
{
  
  // aqui vai verificar qual questao voce esta, por isso o uso do contador
  const  questao = document.getElementById("questaoLayout" + cont);
  const  aparecerPerdeu = document.getElementById("perdeu");
  const recomecar = document.getElementById("recomecar")
  //faz a questao desaparecer
  questao.style.display = "none";
  aparecerPerdeu.style.display = "block";

}

function recomecar()
{
  cont = 0;
  const  desaparecerPerdeu = document.getElementById("perdeu");
  const desaparecerTitulo = document.getElementById("telaInicial");
  desaparecerPerdeu.style.display = "none";
  desaparecerTitulo.style.display = "block";
  contadorDeErrou++;
}

function questaoDois()
{
  // Indicando qual layout esta
  cont = 2;


  const  questaoUm = document.getElementById("questaoLayout1");
  const  questaoDois = document.getElementById("questaoLayout2");
  const questaoNumero = document.getElementById("numeroIdDois");
  const questaoTitulo = document.getElementById("tituloIdDois");
  const alternativaUm = document.getElementById("quadrado5");
  const alternativaDois = document.getElementById("quadrado6");

  //Fazendo questão 1 desaparecer e questão 2 aparecer
  questaoUm.style.display = 'none';
  questaoDois.style.display = 'block';

  //coloca texto nas divs das alternativas
  questaoNumero.innerText = '2';
  questaoTitulo.innerText = 'Lado direito ao contrario, invertido e virado 180°';
  alternativaUm.innerText = '<--';
  alternativaDois.innerText = '-->';
  alternativaDois.onclick = perdeu;

  
  

}

function animarBotaoJogar() 
{
  const jogar = document.getElementById('jogar');
  jogar.className = 'jogarAnimacao';
}

function animarBotaoSegredo() 
{
  const jogar = document.getElementById('segredo');
  jogar.className = 'segredoAnimação';
}

function final()
{
  const finalDiv = document.getElementById('fim');
  const vezesPerdeu = document.getElementById('perdeuQuantas');
  finalDiv.style.display = 'block';
  vezesPerdeu.innerText = ('voce perdeu ' + contadorDeErrou + ' vezes');


}
