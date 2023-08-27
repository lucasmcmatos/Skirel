const token = localStorage.getItem('authorization-token');
const user_email = localStorage.getItem('user-email');

if(!token){
    window.location.href = 'http://localhost:3000/Login'
}else{
    fetch('/verify',{
        method: 'GET',
        headers:{
            'authorization-token': token,
        }
    })
    .then(res=>res.json())
    .then(data=>{
        if(!data.success){
            window.location.href = 'http://localhost:3000/Login'
        }else{
            fetch('/allUsers', {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then( data=>{
                if(!data.success){
                    alert(data.message + 'Volte para o login, e tente entrar novamente.')
                }else{
                    const skirel_users = data.data.Items
                    localStorage.setItem('Skirel_users', JSON.stringify(skirel_users))

                    fetch('/data/'+ user_email, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                            },
                    })
                    .then(res => res.json())
                    .then(data =>{
                        const user = JSON.stringify(data.user)
                    
                        if(!data.success){
                            alert(data.message + 'Faça o login novamente.')
                        }else{
                            if (!localStorage.getItem('paginaRecarregada')) {
                                window.location.reload();
                                localStorage.setItem('paginaRecarregada', true); 
                            }
                            localStorage.setItem('usuario', user)
                            document.getElementById('loader').style.display = 'none';
                            document.getElementById('container').style.display = 'block';
                            document.getElementById('navbarBody').style.display = 'flex';
                            document.getElementById('header').style.display = 'flex';
                              
                        }
                    })
                }
            })
        }
    })
}

function showNotifications(){
    document.getElementById('notificationsContent').style.display = 'flex';
    document.getElementById('notificationsContainer').setAttribute('onclick', 'hiddenNotifications()')
    document.getElementById('notificationsImg').setAttribute('src', 'images/NavbarIcons/closeIcon.svg')
}

function hiddenNotifications(){
    document.getElementById('notificationsContent').style.display = 'none';
    document.getElementById('notificationsContainer').setAttribute('onclick', 'showNotifications()')
    document.getElementById('notificationsImg').setAttribute('src', 'images/NavbarIcons/notificationsIcon.svg')
}

