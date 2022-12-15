const formulario = document.querySelector("form");
const login = document.querySelector("#login");
const cpf = document.querySelector("#cpf");
const senha = document.querySelector("#senha");       

function logar() {
      fetch("http://localhost:8081/usuario/login", 
      {
          headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
              cpf: formulario.cpf.value,
              senha: formulario.senha.value
          }),

      })

      .then(function (res) { 
        if(res.ok) {
          window.location = "index.html";
        } else {
          alert("Senha errada, tente novamente!");
          limpar();  
        };
    })

      .catch(function (res) { console.log(res)}) 
      
};    

function limpar() {  
  cpf.value = "";  
  senha.value = "";
};

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  logar();    
  limpar();        
  
});