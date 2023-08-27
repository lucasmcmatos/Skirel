const myuser = JSON.parse(localStorage.getItem('usuario'))

if(myuser.bio == undefined || myuser.bio == ''){
    var userbio = 'Você ainda não possui uma biografia.'
}else{
    var userbio = myuser.bio
}

if(myuser.contacts == undefined){
    var usercontacts = `<div class='contactsLinks'><p> Você ainda não adicionou links de contatos, seu <strong>email</strong> será usado como meio de contato.</p></div>`
}else{
    if(myuser.contacts.instagram == undefined || myuser.contacts.instagram == 'NULL'){
        var usercontacts = ``
    }else{
        var usercontacts = `<a href='${myuser.contacts.instagram}' class="contactsLinks">
                                <h1 class="linksTitle">Instagram</h1>
                                <img src="images/instaIcon.svg">
                            </a>`
    }

    if(myuser.contacts.linkedin == undefined || myuser.contacts.linkedin == 'NULL'){
        var usercontacts = usercontacts + ``
    }else{
        var usercontacts = usercontacts + `<a href='${myuser.contacts.linkedin}' class="contactsLinks">
                                                <h1 class="linksTitle">Linkedin</h1>
                                                <img src="images/linkedinIcon.svg">
                                            </a>`
    }

    if(myuser.contacts.whatsapp == undefined || myuser.contacts.whatsapp == 'NULL'){
        var usercontacts = usercontacts + ``
    }else{
        var usercontacts = usercontacts + `<a href='${myuser.contacts.whatsapp}' class="contactsLinks">
                                                <h1 class="linksTitle">Whatsapp</h1>
                                                <img src="images/wppIcon.svg">
                                            </a>`
    }
}

if(myuser.networking == undefined || myuser.networking.lenght == 0){
    var myusernetworking = `<div class="nonetworkingUser">
                                <h1 class='nonetworkingText'>Usuário ainda não possui contatos</h1>
                                <button class='nonetworkingButton'>Procure contatos</button>
                            </div>`
}else{
    

    for(i=0 ; i<myuser.networking.length ; i++){
        if(i==0){
            var myusernetworkingitens = `<li class="networkingUser">
                                            <a class="link" href="http://localhost:3000/welcome?View=Comunidade">
                                                <div class="userImage">
                                                    ${myuser.networking[i].targetuser_name[0]}
                                                </div>
                                                <div class="userInfos">
                                                    <h1 class="userName">${myuser.networking[i].targetuser_name}</h1>
                                                    <p class="userModels">${myuser.networking[i].targetuser_models.length} modelos</p>
                                                </div>
                                            </a>
                                        </li>`
        }else{
            var myusernetworkingitens = myusernetworkingitens + `<li class="networkingUser">
                                                                    <a class="link" href="http://localhost:3000/welcome?View=Comunidade">
                                                                        <div class="userImage">
                                                                            ${myuser.networking[i].targetuser_name[0]}
                                                                        </div>
                                                                        <div class="userInfos">
                                                                            <h1 class="userName">${myuser.networking[i].targetuser_name}</h1>
                                                                            <p class="userModels">${myuser.networking[i].targetuser_models.length} modelos</p>
                                                                        </div>
                                                                    </a>
                                                                </li>`
        }
    }

    var myusernetworking = `<ul id='networkingList'>${myusernetworkingitens}</ul>`

}

document.getElementById('bioText').innerText = userbio
document.getElementById('networkingContentBody').innerHTML = myusernetworking
document.getElementById('searcherName').innerText = myuser.name

if(usercontacts == ''){
    document.getElementById('contactsContainerBody').innerHTML = `<div class='contactsLinks'><p> Você ainda não adicionou links de contatos, seu <strong>email</strong> será usado como meio de contato.</p></div>`
}else{
    document.getElementById('contactsContainerBody').innerHTML = usercontacts
}


function editbio(){
    document.getElementById('editbutton').innerHTML = `<img src='images/closeIcon.svg' width='20px'>`;
    document.getElementById('editbutton').setAttribute('onclick','canceleditbio()');
    document.getElementById('bioContainerBody').innerHTML = `<form id='bioupdateform'><textarea required name='newbio' id='newbio'></textarea><input id='newbioinput' type='submit' value='Salvar nova biografía'></form>`

    document.getElementById('bioupdateform').addEventListener('submit', async (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const bio = formData.get('newbio');
        const user_id = myuser.user_id;

        fetch('/auth/updateBio', {
            method: 'Post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                newbio: bio,
                myuser_id:user_id
            })
        })
        .then(res=>res.json())
        .then(data=>{
            alert(data.message)
            localStorage.removeItem('paginaRecarregada')
            if(data.success){
                window.location.reload();
            }
        })

    })
}

function canceleditbio(){
    document.getElementById('editbutton').innerHTML = `<img src="images/NavbarIcons/editIcon.svg" width="20px">`
    document.getElementById('editbutton').setAttribute('onclick','editbio()')
    document.getElementById('bioContainerBody').innerHTML = `<p id="bioText">${userbio} </p>`
}

function editcontacts(){
    document.getElementById('contactsContainerBody').innerHTML = `<form id='contactsupdateform'><input class='inputarea' name='instagraminput' id='instagraminput' type='text' placeholder='Cole o link do instagram'></input><input class='inputarea' name='linkedininput' id='linkedininput' type='text' placeholder='Cole o link do linkedin'></input><input class='inputarea' name='whatsappinput' id='whatsappinput' type='text' placeholder='Cole o link do whatsapp'></input><input id='inputsubmit' type='submit' value='Atualizar contatos'></input></form>`
    document.getElementById('editcontactsbutton').innerHTML = `<img src='images/closeIcon.svg' width='20px'>`;
    document.getElementById('editcontactsbutton').setAttribute('onclick','canceleditcontacts()');

    document.getElementById('contactsupdateform').addEventListener('submit', async (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const instagram = formData.get('instagraminput')
        const linkedin = formData.get('linkedininput')
        const whatsapp = formData.get('whatsappinput');
        const user_id = myuser.user_id;

        fetch('/auth/updateContacts', {
            method: 'Post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                newinsta: instagram,
                newlinkedin: linkedin,
                newwpp: whatsapp,
                myuser_id:user_id
            })
        })
        .then(res=>res.json())
        .then(data=>{
            alert(data.message)
            localStorage.removeItem('paginaRecarregada')
            if(data.success){
                window.location.reload();
            }else{
                console.log(data.error.message)
            }
        })

    })
}

function canceleditcontacts(){
    document.getElementById('contactsContainerBody').innerHTML = usercontacts;
    document.getElementById('editcontactsbutton').innerHTML = `<img src='images/NavbarIcons/editIcon.svg' width='20px'>`;
    document.getElementById('editcontactsbutton').setAttribute('onclick','editcontacts()');
}