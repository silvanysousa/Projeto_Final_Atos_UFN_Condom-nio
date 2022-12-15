const formulario = document.querySelector("form");
const botao = document.querySelector(".botao");
const INome = document.querySelector("#nome");
const ICpf = document.querySelector("#cpf");
const ICargo = document.querySelector("#cargo");
const ISenha = document.querySelector("#senha");


function exibirAlerta() {
    alert("Cadastrado com sucesso!")
}

function cadastrar() {
    fetch("http://localhost:8081/funcionario",
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: INome.value,
            cpf: ICpf.value,
            cargo: ICargo.value,     
            empresa: {
                id: 1,
                nome: Adjuve,
            },                   
            
            senha: ISenha.value                           
        })
    })
    .then(function (res) { console.log(res)})
    .catch(function (res) { console.log(res)})
};

function limpar() {
    INome.value = "";
    ICpf.value = "";
    ICargo.value = "";
    IEmpresa.value = "";    
    ISenha.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();    
    limpar();
    exibirAlerta();    
});