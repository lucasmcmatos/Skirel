function newUser(){
    if(
        document.getElementById("Name").value != "" &&
        document.getElementById("Email").value != "" &&
        document.getElementById("Password").value != "" &&
        document.getElementById("ConfirmPassword").value != ""
    ){
        if(document.getElementById("Password").value == document.getElementById("ConfirmPassword").value){
            
                let newName =  document.getElementById("Name").value;
                let newEmail = document.getElementById("Email").value;
                let newPassword = document.getElementById("Password").value;

                let newUser = {name: newName, email: newEmail, password: newPassword} 

                const options = {
                    method:"POST",
                    headers: new Headers({'content-type':'application/json'}),
                    body: JSON.stringify(newUser)
                }
                
                fetch("http://localhost:3000/auth/register", options)
           
        } else{
            alert('"Senha" e "Confirmar Senha" devem ser iguais!');
        }   
    } else{
        alert('Todos os campos devem ser preenchidos!');
    }
   
}   

/* TRATAR OS DADOS O CON */