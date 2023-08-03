const token = localStorage.getItem('authorization-token');

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

