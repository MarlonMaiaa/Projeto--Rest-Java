const formulario = document.querySelector("form")
const Inome =  document.querySelector (".nome");
const Iemail =  document.querySelector (".email");
const Isenha =  document.querySelector (".senha");
const Itel =  document.querySelector (".tel");

function cadastrar() {
  fetch("http://localhost:8080/cadastrar", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nome: Inome.value,
        email: Iemail.value,
        senha: Isenha.value,
        Telefone : Itel.value  })
  })
    
    .then(function (ress) {
      console.log(ress);
    })
    .catch(function (res) {
      console.log(res);
    });
}
 function limpar () {

    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itel.value = "";

 };



formulario.addEventListener('submit', function (event) {
event.preventDefault ();

 cadastrar (); 
 limpar ();
 

});
