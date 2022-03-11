
function enviar() {

    var login = document.getElementById("login");
    var senha = document.getElementById("senha");
    var email = document.getElementById("email");
    var email2 = document.getElementById("email2");
    
    if(login.value == "") {
       
        formuser.login.focus()
        return false;
    }
    
    if(senha.value =="") {
        
        formuser.senha.focus()
        return false;
    }
    
    if(email.value == "" || email.value.indexOf ('@') == -1)
    {
    
        formuser.email.focus()
        return false;
        } 
    
    if(email2.value != email.value)
    {
    alert("Os emails não correspondem")
    
}else {
            alert("Login efetuado com sucesso!!")
            document.addEventListener(index.html)
       
        }
  

    }



