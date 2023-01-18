function validateForm() {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let tel = document.getElementById('tel')
    let cpf = document.getElementById('cpf')
    let senha = document.getElementById('senha')


    let x = document.forms["myForm"]["nome"].value;
    let y = document.forms["myForm"]["email"].value;
    let z = document.forms["myForm"]["tel"].value;
    let a = document.forms["myForm"]["cpf"].value;
    let b = document.forms["myForm"]["senha"].value;

    
    if (x == "") {
        nome.innerHTML += `<b>*Campo obrigatório*</b>` 
      return false;
    }
    if (y == "") {
        email.innerHTML += `<b>*Campo obrigatório*</b>` 
      return false;
    }
    if (z == "") {
        tel.innerHTML += `<b>*Campo obrigatório*</b>` 
      return false;
    }
    if (a == "") {
        cpf.innerHTML += `<b>*Campo obrigatório*</b>` 
      return false;
    }
    if (b == "") {
        senha.innerHTML += `<b>*Campo obrigatório*</b>` 
      return false;
    }

    nome.classList('input b')
    email.classList('input b')
    tel.classList('input b')
    cpf.classList('input b')
    senha.classList('input b')

  }


  if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}




// var nome = document.getElementById('nome')
// var email = document.getElementById('email')
// var tel = document.getElementById('tel')
// var cpf = document.getElementById('cpf')
// var senha = document.getElementById('senha')
// var form = document.getElementById('form')


// function Validation(){
//     if(nome.value == '' ){
//         document.getElementById('nome')
//          = `<input type="text"  placeholder="Nome completo" class="input" id="nome">
//         <b>*Campo obrigatório*</b>`
//     }

//     if(email.value == '' ){
//         email.innerHTML = `<input type="text"  placeholder="Email@email.com" class="input" id="nome">
//         <b>*Campo obrigatório*</b>`
//     }

//     if(tel.value == '' ){
//         tel.innerHTML = `<input type="text"  placeholder="(24) 991513-4965" class="input" id="nome">
//         <b>*Campo obrigatório*</b>`
//     }

    
//     if(cpf.value == '' ){
//         cpf.innerHTML = `<input type="text"  placeholder="452.849.235-980" class="input" id="nome">
//         <b>*Campo obrigatório*</b>`
//     }

    
//     if(senha.value == '' ){
//         senha.innerHTML = `<input type="text"  placeholder="*******************" class="input" id="nome">
//         <b>*Campo obrigatório*</b>`
//     }



// }