function salvarCadastro() {
    const nome = document.getElementById('txtNome').value;
    const email = document.getElementById('txtEmail').value;
    const cpf = document.getElementById('txtCpf').value;

    if(!nome || !email || !cpf){

        alert('preencha todos os campos!');
        return;
    }

        const registro = {nome, email , cpf};
        const registroJson = JSON.parse(localStorage.getItem('registrosClientes')) || [];

        registroJson.push(registro);
        localStorage.setItem('registrosClientes' , Json.stringify(registroJson));

        document.getElementById('txtName').value='';
        document.getElementById('txtEmail').value='';
        document.getElementById('txtCpf').value='';
        alert('Registro Cadastrado');
}

function exibirTodosRegistros() {
    const registroJson = JSON.parse(localStorage.getItem('registrosClientes')) || [];
    const listaRegistros = document.getElementById('listaRegistros');
    listaRegistros.innerHTML='';

    registroJson.forEach(cliente => {
        const item = '<li class="list-group-item">${cliente.nome}-${cliente.email}- CPF: ${cliente.Cpf}</li>';
        listaRegistros.innerHTML += item;
    });
}