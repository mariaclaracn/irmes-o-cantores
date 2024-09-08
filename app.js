function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // se campoPesquisa for uma string sem nada 
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa pesquisar o nome do cantor ou música/álbum</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento 
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2> 
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.genero}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div> 
            `;
        }
      
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o HTML construído à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}




