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
    let inputs = document.getElementById('inputs');

    
    if (x == "") {
        inputs.innerHTML = `<form name="myForm"   method="post"> <label>Nome Completo:</label> <input type="text"  placeholder="Nome completo" class="input" id="nome" name="nome">  <b style='color: #E73550 ;'>*Campo Obrigatório*</b>  <label>Email:</label> <input type="text"  placeholder="Email@email.com"  class="input" id="email" name="email"> <label>Telefone:</label> <input type="text"  placeholder="(00) 00000-0000"  class="input" id="tel" name="tel"> <label>CPF:</label> <input type="text"  placeholder="000.000.000-00"  class="input" id="cpf" name="cpf"> <label>Senha:</label>  <input type="text"  placeholder="*******************"  class="input" id="senha" name="senha">  <button type ="submit" onclick="Relocate()">Cadastrar</button>   </form>`
        
        
        return false;

    }
    if (y == "") {
        inputs.innerHTML = `<form name="myForm"   method="post"> <label>Nome Completo:</label> <input type="text"  placeholder="Nome completo" class="input" id="nome" name="nome">  <label>Email:</label> <input type="text"  placeholder="Email@email.com"  class="input" id="email" name="email"> <b style='color: #E73550 ;'>*Campo Obrigatório*</b>  <label>Telefone:</label> <input type="text"  placeholder="(00) 00000-0000"  class="input" id="tel" name="tel"> <label>CPF:</label> <input type="text"  placeholder="000.000.000-00"  class="input" id="cpf" name="cpf"> <label>Senha:</label>  <input type="text"  placeholder="*******************"  class="input" id="senha" name="senha">  <button type ="submit" onclick="Relocate()">Cadastrar</button>   </form>`
       return false;  
    }
    
    if (z == "") {
      inputs.innerHTML = `<form name="myForm"   method="post"> <label>Nome Completo:</label> <input type="text"  placeholder="Nome completo" class="input" id="nome" name="nome">  <label>Email:</label> <input type="text"  placeholder="Email@email.com"  class="input" id="email" name="email"> <label>Telefone:</label> <input type="text"  placeholder="(00) 00000-0000"  class="input" id="tel" name="tel">  <b style='color: #E73550 ;'>*Campo Obrigatório*</b>  <label>CPF:</label> <input type="text"  placeholder="000.000.000-00"  class="input" id="cpf" name="cpf"> <label>Senha:</label>  <input type="text"  placeholder="*******************"  class="input" id="senha" name="senha">  <button type ="submit" onclick="Relocate()">Cadastrar</button>   </form>`
      return false;
    }
    if (a == "") {
      inputs.innerHTML = `<form name="myForm"   method="post"> <label>Nome Completo:</label> <input type="text"  placeholder="Nome completo" class="input" id="nome" name="nome">  <label>Email:</label> <input type="text"  placeholder="Email@email.com"  class="input" id="email" name="email"> <label>Telefone:</label> <input type="text"  placeholder="(00) 00000-0000"  class="input" id="tel" name="tel"> <label>CPF:</label> <input type="text"  placeholder="000.000.000-00"  class="input" id="cpf" name="cpf">  <b style='color: #E73550 ;'>*Campo Obrigatório*</b>  <label>Senha:</label>  <input type="text"  placeholder="*******************"  class="input" id="senha" name="senha">  <button type ="submit" onclick="Relocate()">Cadastrar</button>   </form>`
      return false;
    }
    if (b == "") {
      inputs.innerHTML = `<form name="myForm"   method="post"> <label>Nome Completo:</label> <input type="text"  placeholder="Nome completo" class="input" id="nome" name="nome">  <label>Email:</label> <input type="text"  placeholder="Email@email.com"  class="input" id="email" name="email"> <label>Telefone:</label> <input type="text"  placeholder="(00) 00000-0000"  class="input" id="tel" name="tel"> <label>CPF:</label> <input type="text"  placeholder="000.000.000-00"  class="input" id="cpf" name="cpf"> <label>Senha:</label>  <input type="text"  placeholder="*******************"  class="input" id="senha" name="senha">  <b style='color: #E73550 ;'>*Campo Obrigatório*</b>  <button type ="submit" onclick="Relocate()">Cadastrar</button>   </form>`
      return false;
    }

    nome.classList('input b')
    email.classList('input b')
    tel.classList('input b')
    cpf.classList('input b')
    senha.classList('input b')
    inputs.classList('inputs b')

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