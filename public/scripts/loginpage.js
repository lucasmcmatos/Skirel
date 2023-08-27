localStorage.removeItem('paginaRecarregada')

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
    }).then(res=>res.json()).then(data=>{
        if(!data.success){
            alert(data.message)
        }else{

            window.localStorage.setItem("authorization-token", data.user.token);
            window.localStorage.setItem("user-email", data.user.email);
            window.location.href = 'http://localhost:3000/Welcome?View=Home'
        }
    })
   

})