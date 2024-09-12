var formulario = document.getElementById('frmContato');
var nome = document.getElementById('txtName');


//O objeto que recebe uma notificação quando um evento do tipo especificado ocorre
formulario.addEventListener('submit',function(event){

    if(nome.value == 'teste'){
    alert('Digite o nome correto');
    }


});//finalizando o evento