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
      document.getElementById('msgAlerta1').innerHTML = "*Campo Obrigatório*";
        
        
        return false;

    }
    if (y == "") {
        document.getElementById('msgAlerta2').innerHTML = "*Campo Obrigatório*";
       return false;  
    }
    if (z == "") {
      document.getElementById('msgAlerta3').innerHTML = "*Campo Obrigatório*";
      return false;
    }
    if (a == "") {
      document.getElementById('msgAlerta4').innerHTML = "*Campo Obrigatório*";
      return false;
    }
    if (b == "") {
      document.getElementById('msgAlerta5').innerHTML = "*Campo Obrigatório*";
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





