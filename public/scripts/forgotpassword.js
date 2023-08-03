document.getElementById('loginForm').addEventListener('submit', (event)=>{
    event.preventDefault();

    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/auth/recoverAccess', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:email
        })
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            alert(data.message);
        }else{
            alert(data.message);
        }
    })
    .catch(err=>console.log(err))
})