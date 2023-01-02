const TODOS = "todos";

document.addEventListener("DOMContentLoaded", ()=>{

    let bemVindo = document.getElementById("bemVindo");
    bemVindo.innerHTML = `Seja Bem-Vindo: ${localStorage.getItem("email")}`;

if(localStorage.getItem("logado") == "true"){
  if(localStorage.getItem("tipo") == "Recorrente"){
    bemVindo.classList.add("labelGreen")
  } else if(localStorage.getItem("tipo") == "Novo"){
    bemVindo.classList.add("labelBlue")
  }
  
let marca = '';
let tipo = '';

let carros = JSON.parse(localStorage.getItem("carros"));

let divCarros = document.getElementById("carros");

carros.forEach(carro => {
   divCarros.innerHTML += `
   <h3>${carro.marca}</h3>
   <p>${carro.tipo}</p>
   <p>${carro.model}</p>
   <p>${carro.ano}</p>
   <p>${carro.preco}</p>
   <br></br>
    `
})

let opcao = document.getElementById("filtro");
    opcao.addEventListener("change", (e)=>{
        divCarros.innerHTML = "";
        let selectModelo = document.getElementById("model");
        selectModelo.innerHTML = "";
         carros.forEach(carro =>{
         if(carro.marca == e.target.value){
            let option = `<option value =>${carro.model}</option>`
            selectModelo.innerHTML += option;
            marca = e.target.value
            divCarros.innerHTML += `
          <h3>${carro.marca}</h3>
          <p>${carro.tipo}</p>
          <p>${carro.model}</p>
          <p>${carro.ano}</p>
          <p>${carro.preco}</p>
          <br></br>
         `
         } else if(opcao.value == TODOS){
            let option = `<option value =>${carro.modelo}</option>`
            selectModelo.innerHTML += option;
            divCarros.innerHTML += `
          <h3>${carro.marca}</h3>
          <p>${carro.tipo}</p>
          <p>${carro.model}</p>
          <p>${carro.ano}</p>
          <p>${carro.preco}</p>
          <br></br>
         `
         }
         })
           
    });



let tipoCarro = document.getElementById("tipoCarro");
tipoCarro.addEventListener("input", (e) => {
    divCarros.innerHTML = "";
    carros.forEach(carro =>{
    if(carro.tipo.indexOf(e.target.value) != -1
        && marca && carro.marca == marca){
            tipo == e.target.value
       divCarros.innerHTML += `
     <h3>${carro.marca}</h3>
     <p>${carro.tipo}</p>
     <p>${carro.model}</p>
     <p>${carro.ano}</p>
     <p>${carro.preco}</p>
     <br></br>
    `
    }
    })
})

let InsereCarro = document.getElementById("insereCarro");
let btnCadastro = document.getElementById("btnCarroSubmit");
InsereCarro.addEventListener("submit", (e)=>{
       e.preventDefault();
       let marca = document.getElementById("marca").value;
       let tipo = document.getElementById("tipo").value;
       let model = document.getElementById("model").value;
       let ano = document.getElementById("ano").value;
       let preco = document.getElementById("preco").value;
  
      if(marca && tipo && model && ano && preco){
       let carro = {
        marca,
        tipo,
        model,
        ano,
        preco
       }

       let carroStorage = JSON.parse(localStorage.getItem("carros"));
       carroStorage.push(carro);
       localStorage.setItem("carros", JSON.stringify(carroStorage));
       btnCadastro.classList.remove("btnRed");
       btnCadastro.classList.add("btnGreen");
       alert("Carro cadastrado com sucesso! :)")
    }else{
        btnCadastro.classList.remove("btnGreen");
        btnCadastro.classList.add("btnRed");
        alert("Preencha os campos")
    }
})

}
else if(localStorage.getItem("logado") == null){
  window.location = "../html/login.html"
}

})
 let btnSair = document.getElementById("sair");
 btnSair.addEventListener("click", ()=>{
    localStorage.removeItem("email");
    localStorage.removeItem("logado");
    window.location = "../html/login.html";
 })
 
 
 