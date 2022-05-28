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
  const desaparecerTitulo = document.getElementById("telaInicial");
  desaparecerTitulo.style.display = "block";
}

function questaoUm()
{
  cont++;
  let questao = document.getElementById("questaoLayoutUm");
  let questaoNumero = document.getElementById("numeroId");
  let questaoTitulo = document.getElementById("tituloId");
  let alternativaUm = document.getElementById("quadrado1");
  let alternativaDois = document.getElementById("quadrado2");
  let alternativaTres = document.getElementById("quadrado3");
  let alternativaQuatro = document.getElementById("quadrado4");
  
  alternativaUm.innerText = '2';
  alternativaDois.innerText = '4';
  alternativaTres.innerText = '6';
  alternativaQuatro.innerText = '3';

  questaoNumero.innerText = '1';
  questaoTitulo.innerText = 'Quantos palitos tem aqui?';
  //questaoNumero.onclick(questaoDois());
  
  questao.style.display = "block";
}

function perdeu()
{
  switch(cont)
  {
    case 1:
      let questao = document.getElementById("questaoLayoutUm");
    break;
      
  }

  questao.style.display = "none";

 
}


