

function buscaFilmes() {
    const chave_API = 'd5ee36e5';

    // const formulario = document.getElementById('frmBuscarFilmes');
    const nomeBusca = document.getElementById('nameFilme');
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML = '<p>Carregar...<p>';


    const url = `http://www.omdbapi.com/?apikey=${chave_API}&s=${encodeURIComponent(nomeBusca.value)}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            resultadoDiv.innerHTML = '';

            data.Search.forEach(filme => {
                resultadoDiv.innerHTML +=
                    `<h2>${filme.Title} (${filme.Year})</h2>
                    <img src="${filme.Poster} width="200">`;
                    
                
            });
        });

}