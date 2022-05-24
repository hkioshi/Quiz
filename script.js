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
  let questao = document.getElementById("questaoLayoutUm");
  let questaoNumero = document.getElementById("numeroId");
  let questaoTitulo = document.getElementById("tituloId")
  questaoNumero.innerText = '1';
  questaoTitulo.innerText = 'Quantos palitos tem aqui?';
  //questaoNumero.onclick(questaoDois());

  questao.style.display = "block";
}