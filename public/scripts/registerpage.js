  document.getElementById('registerForm').addEventListener('submit', (event)=>{
    event.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value
    const name = document.getElementById('name').value

    if(password != confirmPassword){
      alert('Cofirme a Senha deve ser igual senha.')
    }else{
      const formData = {
        email: email,
        name: name,
        password: password
      }

      fetch('/auth/register', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then(res => res.json()).then(data => {
        if(data.success){
          alert(data.message);
        }else{
          alert(data.message);
        }
      }).catch(err => {
        console.log('Houve um erro: ', err)
        alert("Ocorreu um erro ao tentar fazer login.")
      })
    }

  })