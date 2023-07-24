document.getElementById('loginForm').addEventListener('submit', (event) =>{
    event.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const formData = {
        email: email,
        password: password
    }

    fetch('/auth/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(res => res.json()).then(
        data => {
            if (data.success){
                localStorage.setItem("authorization-token", data.user.token);

                const token = localStorage.getItem("authorization-token");

                //Aqui uma tentativa de simplesmnte abrir uma a URL logada, 
                //mas ela precisa de um token de autorização enviado no header.

                window.location.href = "http://localhost:3000/Welcome"

                // Abaixo ha uma tentativa de usar o fetch

                // return fetch("/Welcome", {
                //     method: "GET",
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'authorization-token': token
                //     }
                // }).then(resp => {
                  
                //     console.log(resp.text())
                    
                // }).catch(error => {
                //     console.error("Erro:", error);
                //   });

            }else{
                alert(data.message);
            }
        }
    ).catch(err => {
        console.log(err)
        alert('Ocorreu um erro desconhecido ao fazer login.');
    })

})