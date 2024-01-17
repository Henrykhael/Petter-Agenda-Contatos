const form = document.getElementById('form');
const nome = document.getElementById('name');
const telefone = document.getElementById('telefone');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    anotaLinha();
    copiaTabela();
});

function anotaLinha(){

    let linha = `<tr>`;
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    nome.value = '';
    telefone.value = '';
};

function copiaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};