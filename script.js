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

  const palitoId = document.getElementById("palito");

  palitoId.style.width = '0.5%';
  palitoId.style.height = '0';
  palitoId.style.display = 'block';
  palitoId.style.backgroundColor = 'black';
  palitoId.style.backgroundImage = ''; 
  palitoId.style.left = '52,7%%';


  /* background-color:black;
    border-radius:20px ;
    height: 0;
    padding-bottom: 6%;
    width: 0.5%;
    position: relative;
    left: 52.7%;
    margin-top :-5%;
    background-repeat: no-repeat;*/
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
  questaoTitulo.innerText = 'Lado direito ao contrario, invertido e virao 180°';
  alternativaUm.innerText = '<--';
  alternativaDois.innerText = '-->';
  alternativaDois.onclick = perdeu;
  alternativaUm.onclick = questaoTres;

  alternativaUm.style.display = 'block';
  alternativaDois.style.display = 'block';
  
  

}

function questaoTres()
{
cont = 1;

  const questaoDois = document.getElementById("questaoLayout2");
  const questaoTres = document.getElementById("questaoLayout1");
  const questaoNumero = document.getElementById("numeroIdUm");
  const questaoTitulo = document.getElementById("tituloIdUm");
  const alternativaUm = document.getElementById("quadrado1");
  const alternativaDois = document.getElementById("quadrado2");
  const alternativaTres = document.getElementById("quadrado3");
  const alternativaQuatro = document.getElementById("quadrado4");
  const palitoId = document.getElementById("palito");
  questaoDois.style.display = 'none';
  questaoTres.style.display = 'block';
  palitoId.style.display = 'none';
  questaoNumero.onclick = '';

  questaoNumero.innerText = '3';
  questaoTitulo.innerText = 'x 9 + 20?';

  alternativaUm.innerText = '81';
  alternativaDois.innerText = '47';
  alternativaTres.innerText = '27';
  alternativaQuatro.innerText = '29';

  alternativaUm.onclick = perdeu;
  alternativaDois.onclick = questaoQuatro;
  alternativaTres.onclick = perdeu;
  alternativaQuatro.onclick = perdeu;
  

}

function questaoQuatro()
{
cont = 1;

  const questaoTres = document.getElementById("questaoLayout1");
  const questaoNumero = document.getElementById("numeroIdUm");
  const questaoTitulo = document.getElementById("tituloIdUm");
  const alternativaUm = document.getElementById("quadrado1");
  const alternativaDois = document.getElementById("quadrado2");
  const alternativaTres = document.getElementById("quadrado3");
  const alternativaQuatro = document.getElementById("quadrado4");
  const palitoId = document.getElementById("palito");

  palitoId.style.width = '10%';
  palitoId.style.height = '10%';
  palitoId.style.display = 'block';
  palitoId.style.backgroundColor = 'rgb(223, 254, 241)';
  palitoId.style.backgroundImage = 'url(imagens/jupter.png)'; 
  palitoId.style.backgroundSize = '60%';
  
  palitoId.style.backgroundRepeat = 'noRepeat';
  palitoId.style.left = '52.7%';
  

  questaoNumero.onclick = '';
  questaoNumero.style.cursor = 'defalt';
  questaoNumero.innerText = '4';
  questaoTitulo.innerText = 'Que planeta é esse?';


  alternativaUm.innerText = 'Marte';
  alternativaDois.innerText = 'Saturno';
  alternativaTres.innerText = 'Mercúrio';
  alternativaQuatro.innerText = 'júpiter';

  alternativaUm.onclick = perdeu;
  alternativaDois.onclick = perdeu;
  alternativaTres.onclick = perdeu;
  alternativaQuatro.onclick = questaoCinco;
  

}

function questaoCinco()
{
  cont = 2;
  const questao4 = document.getElementById("questaoLayout1");
  const questao5 = document.getElementById("questaoLayout2");
  const alternativaUm = document.getElementById("quadrado5");
  const alternativaDois = document.getElementById("quadrado6");
  const questaoNumero = document.getElementById("numeroIdDois");
  const questaoTitulo = document.getElementById("tituloIdDois");

  const botaoCerto = document.createElement('div');
  botaoCerto.id = 'botaoCertoId';
  document.body.appendChild(botaoCerto);
  const botaoErrado =  document.createElement('div');
  botaoErrado.id = 'botaoErradoId';
  document.body.appendChild(botaoErrado);

  const botaonao = document.getElementById("botaoErradoId");
  const botaosim = document.getElementById("botaoCertoId");
  botaonao.innerText = 'esse é o errado';
  botaonao.onclick = perdeu;
  botaonao.onclick = questaoSeis;


  questao4.style.display = 'none';
  questao5.style.display = 'block';

  alternativaUm.style.display = 'none';
  alternativaDois.style.display = 'none';

  questaoNumero.innerText = '5';
  questaoTitulo.innerText = 'Encontre o botao escondido';
  

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
