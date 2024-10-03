//quando a página for carregada completamente, executa a função

window.onload = function(){

    const formCep = document.getElementById('frmCep');
    const campoCep = document.getElementById('txtCep');

    
    campoCep.addEventListener('blur', function(){
        
        const valorCep = campoCep.value;
        const urlCep = 'https://viacep.com.br/ws/${valorCep}/json/';
        //inserção no campo value
        if(valorCep.length == 8){
            // alert('sucesso');

            
            fetch(urlCep)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                //ver e receber o que tem desta caixa
                document.getElementById('txtRua').value = data.logradouro;
            });
        };

    });

    // if(campoCep.lenght == 8){

    //     alert('sucesso');
    // }
};