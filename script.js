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
      document.getElementById('msgAlerta6').innerHTML = "Campos obrigatórios não registrados.";
      
        
      
    }else{
      document.getElementById('msgAlerta1').innerHTML = "";
    }
    if (y == "") {
        document.getElementById('msgAlerta2').innerHTML = "*Campo Obrigatório*";
        document.getElementById('msgAlerta6').innerHTML = "Campos obrigatórios não registrados.";
        
         
    }else{
      document.getElementById('msgAlerta2').innerHTML = "";
    }
    if (z == "") {
      document.getElementById('msgAlerta3').innerHTML = "*Campo Obrigatório*";
      document.getElementById('msgAlerta6').innerHTML = "Campos obrigatórios não registrados.";
      
      
    }else{
      document.getElementById('msgAlerta3').innerHTML = "";
    }
    if (a == "") {
      document.getElementById('msgAlerta4').innerHTML = "*Campo Obrigatório*";
      document.getElementById('msgAlerta6').innerHTML = "Campos obrigatórios não registrados.";
      
      
    }else{
      document.getElementById('msgAlerta4').innerHTML = "";
    }
    if (b == "") {
      document.getElementById('msgAlerta5').innerHTML = "*Campo Obrigatório*";
      document.getElementById('msgAlerta6').innerHTML = "Campos obrigatórios não registrados.";
      
    
    }else{
      document.getElementById('msgAlerta5').innerHTML = "";
    }
    
    
    if(x !="" && y !="" && z !="" && a !="" && b !=""){
      document.getElementById('msgAlerta1').innerHTML = "";
      document.getElementById('msgAlerta2').innerHTML = "";
      document.getElementById('msgAlerta3').innerHTML = "";
      document.getElementById('msgAlerta4').innerHTML = "";
      document.getElementById('msgAlerta5').innerHTML = "";
      document.getElementById('msgAlerta6').innerHTML = "";
      document.getElementById('msgAlerta7').innerHTML = "Sucesso!";
      
    }
    if ( window.history.replaceState ) {
      window.history.replaceState( null, null, window.location.href );
      return false


  }



    
}





