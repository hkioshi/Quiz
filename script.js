function jogar()
{
    // Essa função é para inicar o quiz, ele vai fazer as tags de titulo
    // e o botao jogar desaparecerem e a primeira questao aparecer

    // Fazer tudo desaparecer
    const tagTitulo = document.getElementById("telaInicial");
    while (tagTitulo.hasChildNodes()) {
        tagTitulo.removeChild(tagTitulo.firstChild);
      }
    document.body.removeChild(tagTitulo)

    
    //o Que deve estar escrito
    h1TituloQuestaoUm.innerText = 'Quantos palitos tem aqui?';
    numeroDaQuestaoUm.innerText = '1';

    // Definindo Ids
    divTituloQuestaoUm.id = "tituloQuestaoUm";
    divQuestaoUm.id ="divQuestaoUm"

    //colocando elementos na pagina
    document.body.appendChild(divQuestaoUm);
    divQuestaoUm.appendChild(numeroDaQuestaoUm);
    divQuestaoUm.appendChild(divTituloQuestaoUm);
    divTituloQuestaoUm.appendChild(h1TituloQuestaoUm); 
    

    
    //style da questão(to conseguindo, eu acho :D)

    
    
      
      
    
}