document.addEventListener("DOMContentLoaded", ()=>{

 

  if(!localStorage.getItem("logado")){
let form = document.getElementById("form");
      
form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const usuarios = JSON.parse(localStorage.getItem("usuarios"));
      let validaLogin = 0;
      let tipo = "";
       usuarios.forEach(usuario => {
        if(email == usuario.email && CryptoJS.MD5(password) == usuario.password){
          validaLogin++
          tipo = usuario.tipo;
        }
       });

        if(validaLogin > 0){
          localStorage.setItem("email", email);
          localStorage.setItem("logado", true);
          localStorage.setItem("tipo", tipo);
          window.location = "index.html";
        }
        
        })
  
      
    } else {
      window.location = "../html/index.html";
      }

  })                                                                
  
  