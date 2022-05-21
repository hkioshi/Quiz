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

    //Elementos da questão 1
    const divQuestaoUm = document.createElement("div");
    const divTituloQuestaoUm = document.createElement("div");
    const h1TituloQuestaoUm = document.createElement('h1');
    const divAlternativaUm = document.createElement("div");
    const divAlternativaDois = document.createElement("div");
    const divAlternativaTres = document.createElement("div");
    const divAlternativaquatro = document.createElement("div");
    const numeroDaQuestaoUm = document.createElement("div");

    //o Que deve estar escrito
    h1TituloQuestaoUm.innerText = 'Teste';
    numeroDaQuestaoUm.innerText = '1';

    // Definindo Ids
    divTituloQuestaoUm.id = "tituloQuestaoUm";
    divQuestaoUm.id ="divQuestaoUm"

    //colocando elementos na pagina
    document.body.appendChild(divQuestaoUm);
    divQuestaoUm.appendChild(divTituloQuestaoUm);
    divQuestaoUm.appendChild(numeroDaQuestaoUm);
    divTituloQuestaoUm.appendChild(h1TituloQuestaoUm);
    

    
    //style da questão(to tentando i-i)
    
    divTituloQuestaoUm.style.position = "relative";
    divTituloQuestaoUm.style.left = "46%";
    divTituloQuestaoUm.style.width = "fit-content";
    numeroDaQuestaoUm.style.width = "fit-content";
    
      
      
    
}