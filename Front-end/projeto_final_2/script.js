'use strict'

const formulario = document.querySelector("form");
const botao = document.querySelector(".botao");
const INome = document.querySelector("#nome");
const ICpf = document.querySelector("#cpf");
const ITelefone = document.querySelector("#telefone");
const IBloco = document.querySelector("#bloco");
const IApartamento = document.querySelector("#apartamento");
const ISenha = document.querySelector("#senha");
    
function exibirAlerta() {
    alert("Cadastrado com sucesso!")
}

function cadastrar() {
    fetch("http://localhost:8081/usuario",
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: INome.value,
            cpf: ICpf.value,
            telefone: ITelefone.value,
            bloco: IBloco.value,
            apartamento: IApartamento.value, 
            senha: ISenha.value            
        })
    }) 
    .then(function (res) { 
        if(res.ok) {
            exibirAlerta(); 
            window.location = "index.html";
          } else {
            alert("CPF já cadastrado!");
            limpar();  
          };
    })
    .catch(function (res) { console.log(res)})    
} 

function limpar() {
    INome.value = "";
    ICpf.value = "";
    ITelefone.value = "";
    IBloco.value = "";
    IApartamento.value  = "";
    ISenha.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();    
    limpar();
           
});