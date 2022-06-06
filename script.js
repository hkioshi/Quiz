//ola eu sou henrique, um dos fundadores desse quiz, aqui é onde toda a magica é feita, todos os codigos
//estao comentados(isso deu muito trabalho), diveirta-se ;P

//Esse variavel serve como contador, ele vai contar que fase voce esta
let cont = 0;
let contadorDeErrou = 0;
let aberto = 1;
let contMuv = 1;

//funçao que vai abrir e fechar o botao segredo
function abrirCodigo()
{
  const codigo = document.getElementById("cod");
  
  if(aberto == 1)
  {
    aberto = 0;
    codigo.style.display = 'block';
  }
  else
  {
    aberto = 1;
    codigo.style.display = 'none';
  }
}

//esta função vai verificar a senha e abrir a tela de easter egg
function verificarSenha()
{
  const codigo = document.getElementById("senha");
  let codigoTxt = codigo.value;

  if(codigoTxt == "123456789012")
  {
    const select = document.getElementById("select");
    select.style.display = 'block';
  }
}



function jogar() {
  // Essa função é para inicar o quiz, ele vai fazer as tags de titulo
  // e o botao jogar desaparecerem e a primeira questao aparecer

  // Fazer tudo desaparecer
  const desaparecerTitulo = document.getElementById("telaInicial");
  desaparecerTitulo.style.display = "none";
  questao1();
  //final();

}

function aparece() {
  //aqui é um botão para fazer o titulo aparecer
  const desaparecerTitulo = document.getElementById("telaInicial");
  desaparecerTitulo.style.display = "block";
}

function questao1() {
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
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '1';
  numeroSecreto.style.display = 'block';
  
  //coloca texto nas divs das alternativas
  alternativaUm.innerText = '2';
  alternativaDois.innerText = '4';
  alternativaTres.innerText = '6';
  alternativaQuatro.innerText = '3';

  //faz o acertou e errou
  alternativaUm.onclick = perdeu;
  alternativaDois.onclick = perdeu;
  alternativaTres.onclick = perdeu;
  alternativaQuatro.onclick = perdeu;

  //na questao 10 as caixas de alternativas 3 e 4 desaparecem, aq eu trago elas de volta
  alternativaTres.style.display = 'block';
  alternativaQuatro.style.display = 'block';

  //na questao 10 as caixas de alternativas 3 e 4 tem o tamanho modificado, aq eu trago o tamanho delas de volta
  alternativaUm.style.paddingBottom = '10%'
  alternativaDois.style.paddingBottom = '10%'



  //titulo e nº da questao/resposta da questão
  questaoNumero.innerText = '1';
  questaoNumero.style.cursor = 'pointer';
  questaoTitulo.innerText = 'Quantos palitos tem aqui?';
  questaoNumero.onclick = questao2;

  // faz tudo aparecer na tela
  questao.style.display = "block";
}

// se responder errado ativa essa funçao
function perdeu() {

  // aqui vai verificar qual questao voce esta, por isso o uso do contador
  const questao = document.getElementById("questaoLayout" + cont);
  const aparecerPerdeu = document.getElementById("perdeu");
  
  //faz a questao desaparecer
  questao.style.display = "none";
  aparecerPerdeu.style.display = "block";

  //area de correçoes(preguiça de comentar cada correçao -_-)
  const palitoId = document.getElementById("palito");
  const recomecar = document.getElementById("recomecar");
  const truque = document.getElementById("truque");
  const tituloPerdeu = document.getElementById("tituloPerdeu");
  palitoId.style.width = '0.5%';
  palitoId.style.height = '0';
  palitoId.style.display = 'block';
  palitoId.style.backgroundColor = 'black';
  palitoId.style.backgroundImage = '';
  palitoId.style.left = '52,7%%';
  palitoId.style.border = '';
  truque.innerText = '2022';

  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.style.display = 'none';

  // solta o famoso perdeu do faustao quando voce erra
  const music = new Audio('faustao-errou.mp3');
  music.play();

  //brincadeira da pergunta 7
  let verificacao = tituloPerdeu.value;

  if (verificacao != "errou")
  {
    tituloPerdeu.innerText = 'errou';
  }
}

//brincadeira da questao 7
function triste()
{
  // aqui vai verificar qual questao voce esta, por isso o uso do contador
  const questao = document.getElementById("questaoLayout" + cont);
  
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.style.display = 'none';

  // area de correçoes
  const aparecerPerdeu = document.getElementById("perdeu");
  const recomecar = document.getElementById("recomecar");
  const truque = document.getElementById("truque");
  const tituloPerdeu = document.getElementById("tituloPerdeu");
  const palitoId = document.getElementById("palito");

  //aim so sad
  tituloPerdeu.innerText = ';-;'

  //continuaçao da area de correçoes
  palitoId.style.width = '0.5%';
  palitoId.style.height = '0';
  palitoId.style.display = 'block';
  palitoId.style.backgroundColor = 'black';
  palitoId.style.backgroundImage = '';
  palitoId.style.left = '52,7%%';
  palitoId.style.border = '';
  truque.innerText = '2022';

  //faz a questao desaparecer
  questao.style.display = "none";
  aparecerPerdeu.style.display = "block";
} 

function recomecar() {
  // aq vai pra tela inical
  const desaparecerPerdeu = document.getElementById("perdeu");
  const desaparecerTitulo = document.getElementById("telaInicial");
  desaparecerPerdeu.style.display = "none";
  desaparecerTitulo.style.display = "block";

  // aqui vai contar quantos erros o jogador teve
  contadorDeErrou++;
}

function questao2() {
  // Indicando qual layout esta
  cont = 2;

  //encontra as divs por meio das ids
  const questaoUm = document.getElementById("questaoLayout1");
  const questaoDois = document.getElementById("questaoLayout2");
  const questaoNumero = document.getElementById("numeroIdDois");
  const questaoTitulo = document.getElementById("tituloIdDois");
  const alternativaUm = document.getElementById("quadrado5");
  const alternativaDois = document.getElementById("quadrado6");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '2';

  //Fazendo questão 1 desaparecer e questão 2 aparecer
  questaoUm.style.display = 'none';
  questaoDois.style.display = 'block';

  //coloca texto nas divs das alternativas
  questaoNumero.innerText = '2';
  questaoTitulo.innerText = 'Lado direito ao contrario, invertido e virado 180°';
  alternativaUm.innerText = '<--';
  alternativaDois.innerText = '-->';
  //animação de volta mas a volta quando sai mouse
  alternativaDois.onmouseleave = resetAnimação;
  alternativaUm.onmouseleave = resetAnimação;

  alternativaUm.style.display = 'block';
  alternativaDois.style.display = 'block';

  //aqui vai fazer o acertou errou
  alternativaDois.onclick = perdeu;
  alternativaUm.onclick = questao3;
  alternativaUm.onmouseenter = animarBotaoQuestao2;
  alternativaDois.onmouseenter = animarBotao2Questao2;

}

function questao3() {
    // Indicando qual layout esta
  cont = 1;

  //encontra as divs por meio das ids
  const questaoDois = document.getElementById("questaoLayout2");
  const questaoTres = document.getElementById("questaoLayout1");
  const questaoNumero = document.getElementById("numeroIdUm");
  const questaoTitulo = document.getElementById("tituloIdUm");
  const alternativaUm = document.getElementById("quadrado1");
  const alternativaDois = document.getElementById("quadrado2");
  const alternativaTres = document.getElementById("quadrado3");
  const alternativaQuatro = document.getElementById("quadrado4");
  const palitoId = document.getElementById("palito");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '3';

  // faz as questao anterior sumir e a atual/palito aparecer
  questaoDois.style.display = 'none';
  questaoTres.style.display = 'block';
  palitoId.style.display = 'none';
  questaoNumero.onclick = '';

  //TEXTO DA PERGUNTA 3
  questaoNumero.innerText = '-3';
  // num aceito nao colocar o -3, vai ter MINUS TRES SIM!
  const numero3 = document.createElement('div')
  questaoTitulo.innerText = ' + 9 x 20 = ?';
  alternativaUm.innerText = '180';
  alternativaDois.innerText = '177';
  alternativaTres.innerText = '60';
  alternativaQuatro.innerText = '29';

  /*
  coisas do caio (num mexa)
  numero3.id = 'numero3';
  numero3.innerText = '-3 +';
  document.body.appendChild(numero3);
  */
  
  //respota da QuEsTãO
  alternativaUm.onclick = perdeu;
  alternativaDois.onclick = questao4;
  alternativaTres.onclick = perdeu;
  alternativaQuatro.onclick = perdeu;


}


function questao4() {
  // Indicando qual layout esta
  cont = 1;

  //coisa do caio(num mexa)
  //document.body.removeChild(numero3);

  //encontra as divs por meio das ids
  const questaoTres = document.getElementById("questaoLayout1");
  const questaoNumero = document.getElementById("numeroIdUm");
  const questaoTitulo = document.getElementById("tituloIdUm");
  const alternativaUm = document.getElementById("quadrado1");
  const alternativaDois = document.getElementById("quadrado2");
  const alternativaTres = document.getElementById("quadrado3");
  const alternativaQuatro = document.getElementById("quadrado4");
  const palitoId = document.getElementById("palito");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '4';

  // aqui podemos ver a historia de como um palito se transformou em um planeta :D
  palitoId.style.border = '';
  palitoId.style.width = '10%';
  palitoId.style.height = '10%';
  palitoId.style.display = 'block';
  palitoId.style.backgroundColor = 'rgb(223, 254, 241)';
  palitoId.style.backgroundImage = 'url(imagens/jupter.png)';
  palitoId.style.backgroundSize = '60%';
  palitoId.style.backgroundRepeat = 'noRepeat';
  palitoId.style.left = '52.7%';

  //mini correção
  questaoNumero.onclick = '';

  //texto da pergunta 
  questaoNumero.style.cursor = 'defalt';
  questaoNumero.innerText = '4';
  questaoTitulo.innerText = 'Que planeta é esse?';
  alternativaUm.innerText = 'Marte';
  alternativaDois.innerText = 'Saturno';
  alternativaTres.innerText = 'Mercúrio';
  alternativaQuatro.innerText = 'júpiter';

  //resposta da questao
  alternativaUm.onclick = perdeu;
  alternativaDois.onclick = perdeu;
  alternativaTres.onclick = perdeu;
  alternativaQuatro.onclick = questao5;


}

function questao5() {
  // Indicando qual layout esta
  cont = 2;

  //encontra as divs por meio das ids
  const questao4 = document.getElementById("questaoLayout1");
  const questao5 = document.getElementById("questaoLayout2");
  const alternativaUm = document.getElementById("quadrado5");
  const alternativaDois = document.getElementById("quadrado6");
  const questaoNumero = document.getElementById("numeroIdDois");
  const questaoTitulo = document.getElementById("tituloIdDois");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '5';


  //butoes secretos(kkkk, muita gente não vai passar daqui)
  const botaoCerto = document.createElement('div');
  botaoCerto.id = 'botaoCertoId';
  document.body.appendChild(botaoCerto);
  const botaoErrado = document.createElement('div');
  botaoErrado.id = 'botaoErradoId';
  document.body.appendChild(botaoErrado);

  //config do botao errado e do botão certo
  const botaonao = document.getElementById("botaoErradoId");
  const botaosim = document.getElementById("botaoCertoId");
  botaonao.innerText = 'esse é o errado';
  botaonao.onclick = perdeu;
  botaosim.onclick = questao6;

 //apagando a questao anterior
  questao4.style.display = 'none';
  questao5.style.display = 'block';

   //faz as divs de alternativa sumirem(aqui nao precisamos delas)
  alternativaUm.style.display = 'none';
  alternativaDois.style.display = 'none';

  //textos dessa questão
  questaoNumero.innerText = '5';
  questaoTitulo.innerText = 'Encontre o botao escondido';


}

function questao6() {



  // Indicando qual layout esta
  cont = 1;

  //encontra as divs por meio das ids
  const questao6 = document.getElementById("questaoLayout1");
  const questao5 = document.getElementById("questaoLayout2");
  const botaonao = document.getElementById("botaoErradoId");
  const botaosim = document.getElementById("botaoCertoId");
  const questaoNumero = document.getElementById("numeroIdUm");
  const questaoTitulo = document.getElementById("tituloIdUm");
  const alternativaUm = document.getElementById("quadrado1");
  const alternativaDois = document.getElementById("quadrado2");
  const alternativaTres = document.getElementById("quadrado3");
  const alternativaQuatro = document.getElementById("quadrado4");
  const palitoId = document.getElementById('palito');
  const truque = document.getElementById("truque");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '6';


  //apagando a questao anterior

  questao5.style.display = 'none';
  document.body.removeChild(botaonao);
  document.body.removeChild(botaosim);
  palitoId.style.display = 'none';

  // aqui é o tuque, não se esqueça(resposta da questão)
  truque.innerText = '2010';
  truque.onclick = questao7;

  //coloca texto nas divs das alternativas
  alternativaUm.innerText = '2012';
  alternativaDois.innerText = '2011';
  alternativaTres.innerText = '2009';
  alternativaQuatro.innerText = '2015';

  //resposta da questão?
  alternativaUm.onclick = perdeu;
  alternativaDois.onclick = perdeu;
  alternativaTres.onclick = perdeu;
  alternativaQuatro.onclick = perdeu;



  //titulo e nº da questao
  questaoNumero.innerText = '6';
  questaoNumero.style.cursor = 'defalt';
  questaoTitulo.innerText = 'qual foi o ano de lançamento do primeiro genio quiz';


  // faz tudo aparecer na tela
  questao6.style.display = "block";
}

function questao7() {
  // Indicando qual layout esta
  cont = 3;

  //encontra as divs por meio das ids
  const questao6 = document.getElementById("questaoLayout1");
  const questao7 = document.getElementById("questaoLayout3");
  const alternativaUm = document.getElementById("quadrado7");
  const alternativaDois = document.getElementById("quadrado8");
  const alternativaTres = document.getElementById("quadrado9");
  const questaoNumero = document.getElementById("numeroIdTres");
  const questaoTitulo = document.getElementById("tituloIdTres");
  const truque = document.getElementById("truque");
  const palitoId = document.getElementById("palito");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '7';

  //Sem truque
  truque.innerText = '2022'
  truque.onclick = '';

  //texto da pergunta
  questaoNumero.innerText = '7';
  questaoNumero.style.cursor = 'defalt';
  questaoTitulo.innerText = 'Esta gostando do quiz?';
  alternativaUm.innerText = 'Nao';
  alternativaDois.innerText = 'Nao';
  alternativaTres.innerText = 'Nao';

  //nao é a resposta da questao
  alternativaUm.onclick = triste;
  alternativaDois.onclick = triste;
  alternativaTres.onclick = triste;
  
  // coisinha pra deixa + legal
  questaoNumero.style.cursor = 'pointer';

  //resposta da questao
  questaoNumero.onmouseenter = socorro;
  questaoNumero.onclick = questao8;

  //faz a questao anterior sumir e a atual aparecer
  questao6.style.display = 'none';
  questao7.style.display = "block";

}
// o nome dessa funçao é porque antes a questao falava que estavamos sem ideias, esso uma zoeira
function socorro() {
  const questaoNumero = document.getElementById("numeroIdTres");
  questaoNumero.innerText = 'Sim';
  questaoNumero.className = 'animacaoNumeroIdTres';
}

function questao8() {
  // Indicando qual layout esta
  cont = 5;

  //encontra as divs por meio das ids
  const questao7 = document.getElementById("questaoLayout3");
  const questao8 = document.getElementById("questaoLayout5");
  const alternativaUm = document.getElementById("quadrado10");
  const questaoNumero = document.getElementById("numeroIdCinco");
  const questaoTitulo = document.getElementById("tituloIdCinco");
  const truque = document.getElementById("truque");
  const palitoId = document.getElementById("palito");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '8';

  //texto da pergunta
  questaoNumero.innerText = '8';
  questaoNumero.style.cursor = 'defalt';
  questaoTitulo.innerText = 'Que bom, então iremos te dar uma questão fácil';

  //faz a questao anterior sumir e a atual aparecer
  questao7.style.display = 'none';
  questao8.style.display = "block";
  quadrado10.style.display = "block";
  alternativaUm.innerText = 'alternativa certa';
  alternativaUm.style.paddingBottom = '20%';

  //cria, coloca texto e coloca na tela a alternativa troll 1
  const alternativaDois = document.createElement("div");
  alternativaDois.id = 'quadrado11'
  alternativaDois.className = 'alternativa';
  alternativaDois.innerText = 'ops, a certa é essa aq';
  document.body.appendChild(alternativaDois);

  //cria, coloca texto e coloca na tela a alternativa troll 2
  const alternativaTres = document.createElement("div");
  alternativaTres.id = 'quadrado12'
  alternativaTres.className = 'alternativa';
  alternativaTres.innerText = 'Agora vai?';
  document.body.appendChild(alternativaTres);

  alternativaUm.onclick = q2;
}

// conjunto de tres funçoes que ficam rodando
function q2() {
  //anota as ids de cada alternativa da questao 8
  const alternativaUm = document.getElementById("quadrado10");
  const alternativaDois = document.getElementById("quadrado11");
  const alternativaTres = document.getElementById("quadrado12");

  //faz a alt 1 sumir e alt 2 aparecer
  alternativaUm.style.display = 'none';
  alternativaDois.style.display = 'block';
  alternativaDois.onclick = q3;

}

function q3() {
  //anota as ids de cada alternativa da questao 8
  const alternativaUm = document.getElementById("quadrado10");
  const alternativaDois = document.getElementById("quadrado11");
  const alternativaTres = document.getElementById("quadrado12");
  const truque = document.getElementById("truque");

  //faz a alt 2 sumir e alt 3 aparecer
  alternativaDois.style.display = 'none';
  alternativaTres.style.display = 'block';
  alternativaTres.onclick = q1;

  // a alternativa correta ta aqui ;P
  truque.innerText = "--> alternativa real <--"
  truque.onclick = questao9;
}

function q1() {
  //anota as ids de cada alternativa da questao 8
  const alternativaUm = document.getElementById("quadrado10");
  const alternativaDois = document.getElementById("quadrado11");
  const alternativaTres = document.getElementById("quadrado12");

  //faz a alt 3 sumir e alt 1 aparecer
  alternativaTres.style.display = 'none';
  alternativaUm.style.display = 'block';
  alternativaUm.onclick = q2;

}

function questao9()
{
  // Indicando qual layout esta
  cont = 1;
  
  //encontra as divs por meio das ids
  const questao8 = document.getElementById("questaoLayout5");
  const questao9 = document.getElementById("questaoLayout1");
  const botaonao = document.getElementById("botaoErradoId");
  const botaosim = document.getElementById("botaoCertoId");
  const questaoNumero = document.getElementById("numeroIdUm");
  const questaoTitulo = document.getElementById("tituloIdUm");
  const alternativaUm = document.getElementById("quadrado1");
  const alternativaDois = document.getElementById("quadrado2");
  const alternativaTres = document.getElementById("quadrado3");
  const alternativaQuatro = document.getElementById("quadrado4");
  const alternativaCinco = document.getElementById("quadrado11");
  const alternativaSeis = document.getElementById("quadrado12");
  const palitoId = document.getElementById("palito");
  const truque = document.getElementById("truque");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '9';

  //AQ É HONESTO, NUM TEM TRUQUE NENHUM, CONFIA
  truque.innerText = "2022"
  truque.onclick = '';

  //apagando a questao anterior

  questao8.style.display = 'none';
  palitoId.style.display = 'none';
  alternativaCinco.style.display = 'none';
  alternativaSeis.style.display = 'none';


  //coloca texto nas divs das alternativas
  alternativaUm.innerText = '<<';
  alternativaDois.innerText = '<--';
  alternativaTres.innerText = '<--|';
  alternativaQuatro.innerText = '<=';

  //faz o acertou e errou
  alternativaUm.onclick = perdeu;
  alternativaDois.onclick = questao10;
  alternativaTres.onclick = perdeu;
  alternativaQuatro.onclick = perdeu;
  
  

  //titulo e nº da questao/resposta da questão
  questaoNumero.innerText = '9';
  questaoTitulo.innerText = 'qual é a resposta da segunda questão?';
  
  // faz tudo aparecer na tela
  questao9.style.display = "block";
}

function questao10()
{
  // Indicando qual layout esta
  cont = 1;

  //encontra as divs por meio das ids
  const questao9 = document.getElementById("questaoLayout1");
  const botaonao = document.getElementById("botaoErradoId");
  const botaosim = document.getElementById("botaoCertoId");
  const questaoNumero = document.getElementById("numeroIdUm");
  const questaoTitulo = document.getElementById("tituloIdUm");
  const alternativaUm = document.getElementById("quadrado1");
  const alternativaDois = document.getElementById("quadrado2");
  const alternativaTres = document.getElementById("quadrado3");
  const alternativaQuatro = document.getElementById("quadrado4");
  const alternativaCinco = document.getElementById("quadrado11");
  const alternativaSeis = document.getElementById("quadrado12");
  const palitoId = document.getElementById("palito");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '0';

  //coloca os textos da questao
  questaoNumero.innerText = '10';
  alternativaUm.innerText = 'preta c/ listras brancas'
  alternativaDois.innerText = 'bracas c/ listreas pretas'
  questaoTitulo.innerText = 'a zebra é branca com listras pretas ou preta com listras brancas?';

  //aumenta o tamanho das divs
  alternativaUm.style.paddingBottom = '20%'
  alternativaDois.style.paddingBottom = '20%'

  //desaparece com as duas ultimas alternativas
  alternativaTres.style.display = 'none';
  alternativaQuatro.style.display = 'none';
 
  palitoId.style.display = 'none';

  //faz o acertou e perdeu
  alternativaDois.onclick = perdeu;
  alternativaUm.onclick = questao11;
  
}

function questao11()
{
  cont = 6;

  const questao10 = document.getElementById("questaoLayout1");
  const questao11 = document.getElementById("questaoLayout6");
  const alternativaUm = document.getElementById("quadrado13");
  const alternativaDois = document.getElementById("quadrado14");
  const alternativaTres = document.getElementById("quadrado15");
  const alternativaQuatro = document.getElementById("quadrado16");
  const questaoNumero = document.getElementById("numeroIdSeis");
  const questaoTitulo = document.getElementById("tituloIdSeis");
  const palito = document.getElementById("palito2");
  const video = document.getElementById("video");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '1';

  questao10.style.display = 'none';
  questao11.style.display = 'block';

  questaoTitulo.innerText = 'qual semente o passaro vai pegar? ';
  
  questaoNumero.innerText = '11';
  alternativaUm.innerText = 'branca';
  alternativaDois.innerText = 'amarela';
  alternativaTres.innerText = 'preta';
  alternativaQuatro.innerText = 'nenhuma';
  palito.innerText = 'Video';
  palito.onclick = mostrarVideo;

  //faz o acertou e errou
  alternativaUm.onclick = perdeu;
  alternativaDois.onclick = perdeu;
  alternativaTres.onclick = questao12;
  alternativaQuatro.onclick = perdeu;

}

function questao12()
{
  cont = 7;

  const questao11 = document.getElementById("questaoLayout6");
  const questao12 = document.getElementById("questaoLayout7");
  const alternativaUm = document.getElementById("quadrado17");
  const questaoNumero = document.getElementById("numeroIdSete");
  const questaoTitulo = document.getElementById("tituloIdSete");
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.innerText = '2';

  questaoTitulo.innerText = 'Ufa, chegamos na ultima pergunta, clique pra acabar, prometemos que não irá ter nenhum botao escondido ';
  questaoNumero.innerText = '12';
  alternativaUm.innerText = 'FIM';

  questao11.style.display = 'none';
  questao12.style.display = 'block';
 
  alternativaUm.onclick = final;

}

function trocaDePosicao()
{
  const alternativaUm = document.getElementById("quadrado17");
  

  switch(contMuv)
  {
    case 1:
    alternativaUm.style.left = '90%';
    //alternativaUm.style.top = '20%';
    break;

    case 2:
    alternativaUm.style.left = '0';
    //alternativaUm.style.top = '70%';
    break;

    case 3:
    alternativaUm.style.left = '75%';
    //alternativaUm.style.top = '0';
    break;

    case 4:
    alternativaUm.style.left = '25%';
    //alternativaUm.style.top = '20%';
    break;
  }
  
  contMuv++;
}

function mostrarVideo()
{
  const questao11 = document.getElementById("questaoLayout6");
  const video = document.getElementById("divideo");

  questao11.style.display = 'none';
  video.style.display = 'block';
}

function voltar()
{
  const questao11 = document.getElementById("questaoLayout6");
  const video = document.getElementById("divideo");

  questao11.style.display = 'block';
  video.style.display = 'none';
}

//O FINAL
function final() { 
  const questao12 = document.getElementById('questaoLayout7')
  const finalDiv = document.getElementById('fim');
  const vezesPerdeu = document.getElementById('perdeuQuantas');
  const numeroSecreto = document.getElementById("numeroSecreto");
  numeroSecreto.style.display = 'none';

  questao12.style.display = 'none';
  finalDiv.style.display = 'block';
  // quantas vezes voce perdeu?
  vezesPerdeu.innerText = ('voce perdeu ' + contadorDeErrou + ' vezes');
}

// area das animaçoes do caio(num mexa)

function animarBotaoJogar() {
  const jogar = document.getElementById('jogar');
  jogar.className = 'jogarAnimacao';
}

function animarBotaoSegredo() {
  const jogar = document.getElementById('segredo');
  jogar.className = 'segredoAnimação';
}

function animarBotaoQuestao2() {
  const mexerEsquerda = document.getElementById('quadrado5');
  mexerEsquerda.className = 'animaçãoQ2esquerda';
}

function animarBotao2Questao2() {
  const mexerDireita = document.getElementById('quadrado6');
  mexerDireita.className = 'animaçãoQ2direita';
}

function resetAnimação() {
  const VoltaMexerEsquerda = document.getElementById('quadrado5');
  VoltaMexerEsquerda.className = 'alternativa';

  const VoltaMexerDireita = document.getElementById('quadrado6');
  VoltaMexerDireita.className = 'alternativa';
}

function playPause() { 
  var myVideo = document.getElementById("vconfig"); 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 
