document.getElementById('searchInput')
const skirel_users = JSON.parse(localStorage.getItem('Skirel_users'));
const myUser = JSON.parse(localStorage.getItem('usuario'));
var i;

// TRABALHAR OS DADOS

document.getElementById('myContactsBody').innerHTML = `<div id="myContactsScream">
                                            <div id="myContactsScreamContainer">
                                                <h1 id="myContactsScreamTitle">Lucas Martins Campos Matos</h1>
                                                <p id="myContactsScreamText">10+ Contatos em seu networking</p>
                                            </div>
                                            <div class="setacontainer">
                                                <img src="images/setaDireita.svg" width="20px">
                                            </div>
                                        </div>`

document.getElementById('contactsRequestsBody').innerHTML = `<div id="contactsRequestsScream">
<div id="contactsRequestsScreamContainer">
    <h1 id="contactsRequestsScreamTitle">Lucas Martins Campos Matos</h1>
    <p id="contactsRequestsScreamText">10+ Solicitações de contato</p>
</div>
<div class="setacontainer">
    <img src="images/setaDireita.svg" width="20px">
</div>
</div>`                                        

for(i=0 ; i<skirel_users.length ; i++){
    if(i!=0){
        if(skirel_users[i].name != myUser.name){
            if(skirel_users[i].models == undefined){
                var platUsers = platUsers + `<li class="userListIten" id='${i}'>
                                            <div class="userImg">
                                                ${skirel_users[i].name[0]}
                                            </div>
                                            <div class="userInfoContainer">
                                                <h1 class="userName">${skirel_users[i].name}</h1>
                                                <p class="userModels">0 Modelos</p>
                                            </div>
                                            <div class='selector'></div>
                                        </li>`
            }else{
                
                var platUsers = platUsers + `<li class="userListIten" id='${i}' >
                                            <div class="userImg">
                                                ${skirel_users[i].name[0]}
                                            </div>
                                            <div class="userInfoContainer">
                                                <h1 class="userName">${skirel_users[i].name}</h1>
                                                <p class="userModels">${skirel_users[i].models.length} Modelos</p>
                                            </div>
                                            <div class='selector'></div>
                                        </li>`
            }
        }
        
    }else{
        if(skirel_users[i].name != myUser.name){
            if(skirel_users[i].models == undefined){
                var platUsers = `<li class="userListIten" id='${i}' >
                                <div class="userImg">
                                    ${skirel_users[i].name[0]}
                                </div>
                                <div class="userInfoContainer">
                                    <h1 class="userName">${skirel_users[i].name}</h1>
                                    <p class="userModels">0 Modelos</p>
                                </div>
                                <div class='selector'></div>
                            </li>`
            }else{
                var platUsers = `<li class="userListIten" id='${i}' >
                                <div class="userImg">
                                    ${skirel_users[i].name[0]}
                                </div>
                                <div class="userInfoContainer">
                                    <h1 class="userName">${skirel_users[i].name}</h1>
                                    <p class="userModels">${skirel_users[i].models.length} Modelos</p>
                                </div>
                                <div class='selector'></div>
                            </li>`
            }
        }
    }
    
}

if(myUser.networking.length > 10){
    document.getElementById('myContactsScreamText').innerText = '10+ Contatos em seu networking'
}else{
    if(myUser.networking.length == 1){
        document.getElementById('myContactsScreamText').innerText = `${myUser.networking.length} Contato em seu networking`
    }else if(myUser.networking.length == 0){
        document.getElementById('myContactsScreamText').innerText = `Nenhum contato em seu networking`
    }else{
        document.getElementById('myContactsScreamText').innerText = `${myUser.networking.length} Contatos em seu networking`
    }
}

if(myUser.solicitacoes.length > 10){
    document.getElementById('contactsRequestsScreamText').innerText = '10+ Solicitações de contato'
    document.getElementById('contactsRequestsScream').style.backgroundColor = '#f5f6e98a'
}else{
    if(myUser.solicitacoes.length  == 1){
        document.getElementById('contactsRequestsScreamText').innerText = `${myUser.solicitacoes.length} Solicitação de contato`
        document.getElementById('contactsRequestsScream').style.backgroundColor = '#f5f6e98a'
    }else if(myUser.solicitacoes.length  == 0){
        document.getElementById('contactsRequestsScreamText').innerText = `Nenhuma solicitação de contato`
        document.getElementById('contactsRequestsScream').style.backgroundColor =  '#f5f6e98a'
    }else{
        document.getElementById('contactsRequestsScreamText').innerText = `${myUser.solicitacoes.length} Solicitações de contato`
        document.getElementById('contactsRequestsScream').style.backgroundColor = '#f5f6e98a'
    }
}

document.getElementById('usersList').innerHTML = platUsers;

function seachFocous(){
    document.getElementById('users').style.height = 'calc(100% - 280px)'
    document.getElementById('userBody').style.display = 'flex'
    document.getElementById('usersList').style.width = '100%'
    document.getElementById('myContacts').style.height = '100px'
    document.getElementById('myContacts').style.cursor = 'pointer'
    document.getElementById('contactsRequests').style.height = '100px'
    document.getElementById('contactsRequests').style.cursor = 'pointer'
    document.getElementById('myContactsBody').innerHTML = `<div id="myContactsScream">
    <div id="myContactsScreamContainer">
        <h1 id="myContactsScreamTitle">${myUser.name}</h1>
        <p id="myContactsScreamText"></p>
    </div>
    <div class="setacontainer">
        <img src="images/setaDireita.svg" width="20px">
    </div>
</div>`
    document.getElementById('contactsRequestsBody').innerHTML = `<div id="contactsRequestsScream">
    <div id="contactsRequestsScreamContainer">
        <h1 id="contactsRequestsScreamTitle">${myUser.name}</h1>
        <p id="contactsRequestsScreamText"></p>
    </div>
    <div class="setacontainer">
        <img src="images/setaDireita.svg" width="20px">
    </div>
</div>`

document.getElementById('usersList').innerHTML = platUsers;
if(myUser.networking.length > 10){
    document.getElementById('myContactsScreamText').innerText = '10+ Contatos em seu networking'
}else{
    if(myUser.networking.length == 1){
        document.getElementById('myContactsScreamText').innerText = `${myUser.networking.length} Contato em seu networking`
    }else{
        document.getElementById('myContactsScreamText').innerText = `${myUser.networking.length} Contatos em seu networking`
    }  
}

if(myUser.solicitacoes.length > 10){
        document.getElementById('contactsRequestsScreamText').innerText = '10+ Solicitações de contato'
        document.getElementById('contactsRequestsScream').style.backgroundColor = '#f5f6e98a'
    }else{
        if(myUser.solicitacoes.length  == 1){
            document.getElementById('contactsRequestsScreamText').innerText = `${myUser.solicitacoes.length} Solicitação de contato`
            document.getElementById('contactsRequestsScream').style.backgroundColor = '#f5f6e98a'
        }else if(myUser.solicitacoes.length  == 0){
            document.getElementById('contactsRequestsScreamText').innerText = `Nenhuma solicitação de contato`
            document.getElementById('contactsRequestsScream').style.backgroundColor =  '#f5f6e98a'
        }else{
            document.getElementById('contactsRequestsScreamText').innerText = `${myUser.solicitacoes.length} Solicitações de contato`
            document.getElementById('contactsRequestsScream').style.backgroundColor = '#f5f6e98a'
            
        }
    }

}

function myContactsFocous(){
    document.getElementById('users').style.height = '50px'
    document.getElementById('myContacts').style.height = 'calc(100% - 230px)'
    document.getElementById('myContacts').style.cursor = 'default'
    document.getElementById('contactsRequests').style.height = '100px'
    document.getElementById('contactsRequests').style.cursor = 'pointer'
    document.getElementById('userBody').style.display = 'none'

    
    for(i=0;i<myUser.networking.length;i++){
        if(i!=0){
            if(myUser.networking[i].models.length == undefined){
                var contactsUsers = contactsUsers + `<li class="myContactsItem" id='${i}'>
                                                    <div class="userImg">
                                                        ${myUser.networking[i].name[0]}
                                                    </div>
                                                    <div class="userInfoContainer">
                                                        <h1 class="userName">${myUser.networking[i].name}</h1>
                                                        <p class="userModels">0 Modelos</p>
                                                    </div>
                                                    <div class="selector"></div>
                                                </li>`
            }else{
                var contactsUsers = contactsUsers + `<li class="myContactsItem" id='${i}'>
                                                    <div class="userImg">
                                                        ${myUser.networking[i].name[0]}
                                                    </div>
                                                    <div class="userInfoContainer">
                                                        <h1 class="userName">${myUser.networking[i].name}</h1>
                                                        <p class="userModels">${myUser.networking[i].models.length} Modelos</p>
                                                    </div>
                                                    <div class="selector"></div>
                                                </li>`
            }
            
        }else{
            if(myUser.networking[i].models.length == undefined){
                var contactsUsers = `<li class="myContactsItem" id='${i}'>
                                                    <div class="userImg">
                                                        ${myUser.networking[i].name[0]}
                                                    </div>
                                                    <div class="userInfoContainer">
                                                        <h1 class="userName">${myUser.networking[i].name}</h1>
                                                        <p class="userModels">0 Modelos</p>
                                                    </div>
                                                    <div class="selector"></div>
                                                </li>`
            }else{
                var contactsUsers =`<li class="myContactsItem" id='${i}'>
                                                    <div class="userImg">
                                                        ${myUser.networking[i].name[0]}
                                                    </div>
                                                    <div class="userInfoContainer">
                                                        <h1 class="userName">${myUser.networking[i].name}</h1>
                                                        <p class="userModels">${myUser.networking[i].models.length} Modelos</p>
                                                    </div>
                                                    <div class="selector"></div>
                                                </li>`
            }
        }
    }
    document.getElementById('myContactsBody').innerHTML = `<ul id="myContactsList">${contactsUsers}</ul>`

    

   
    document.getElementById('contactsRequestsBody').innerHTML = `<div id="contactsRequestsScream">
    <div id="contactsRequestsScreamContainer">
        <h1 id="contactsRequestsScreamTitle">${myUser.name}</h1>
        <p id="contactsRequestsScreamText"></p>
    </div>
    <div class="setacontainer">
        <img src="images/setaDireita.svg" width="20px">
    </div>
    </div>`

    if(myUser.solicitacoes.length > 10){
        document.getElementById('contactsRequestsScreamText').innerText = '10+ Solicitações de contato'
        document.getElementById('contactsRequestsScream').style.backgroundColor = '#f5f6e98a'
    }else{
        if(myUser.solicitacoes.length  == 1){
            document.getElementById('contactsRequestsScreamText').innerText = `${myUser.solicitacoes.length} Solicitação de contato`
            document.getElementById('contactsRequestsScream').style.backgroundColor = '#f5f6e98a'
        }else if(myUser.solicitacoes.length  == 0){
            document.getElementById('contactsRequestsScreamText').innerText = `Nenhuma solicitação de contato`
            document.getElementById('contactsRequestsScream').style.backgroundColor =  '#f5f6e98a'
        }else{
            document.getElementById('contactsRequestsScreamText').innerText = `${myUser.solicitacoes.length} Solicitações de contato`
            document.getElementById('contactsRequestsScream').style.backgroundColor = '#f5f6e98a'
        }
    }
    
    var contactList = document.getElementById('myContactsList');

    contactList.addEventListener('click', (e)=>{
        const userId = e.target.parentNode.id
    
        if( myUser.networking[userId].bio == undefined){
            var userBio = 'User ainda nao possui uma biografia'
        }else{
            var userBio = myUser.networking[userId].bio
        }
    
        if( myUser.networking[userId].models == undefined){
            var userModels = '0'
        }else{
            var userModels = myUser.networking[userId].models.length
        }
    
        if( myUser.networking[userId].contacts == undefined){
            var userContacts = 'Usuário ainda náo possui contatos.'
        }else{
            var userContacts = ''
            if(myUser.networking[userId].contacts.instagram != undefined || myUser.networking[userId].contacts.instagram != ''){
                var userContacts = userContacts + `<a href="${myUser.networking[userId].contacts.instagram}" class="linkContainer">
                                                        <div class="linkTitleContainer">
                                                            <h1 class="linkTitle">Instagram</h1>
                                                        </div>
                                                        <div class="linkImgContainer">
                                                            <img src="images/instaIcon.svg" width="40px"> 
                                                        </div>
                                                    </a>`
            }
            if(myUser.networking[userId].contacts.linkedin != undefined || myUser.networking[userId].contacts.linkedin != ''){
                var userContacts = userContacts + `<a href="${myUser.networking[userId].contacts.linkedin}" class="linkContainer">
                                                        <div class="linkTitleContainer">
                                                            <h1 class="linkTitle">Linkedin</h1>
                                                        </div>
                                                        <div class="linkImgContainer">
                                                            <img src="images/linkedinIcon.svg" width="40px"> 
                                                        </div>
                                                    </a>`
            }
            if(myUser.networking[userId].contacts.whatsapp != undefined || myUser.networking[userId].contacts.whatsapp != ''){
                var userContacts = userContacts + `<a href="${myUser.networking[userId].contacts.whatsapp}" class="linkContainer">
                                                        <div class="linkTitleContainer">
                                                            <h1 class="linkTitle">Whatsapp</h1>
                                                        </div>
                                                        <div class="linkImgContainer">
                                                            <img src="images/wppIcon.svg" width="40px"> 
                                                        </div>
                                                    </a>`
            }

        }
    
        document.getElementById('viewer').innerHTML = `<div id="viewUser">
                                                        <div id="viewUserHeader">
                                                            <div id="viewUserImage">
                                                                P
                                                            </div>
                                                            <div id="viewUserInfo">
                                                                <h1 id="viewUserName">${myUser.networking[userId].name}</h1>
                                                                <p id="viewUserModelsText">${userModels} Modelos</p>
                                                            </div>
                                                            <div id="viewUserChoice">
                                                            <button class="btnChoice" id="removerChoice">Remover notworking <img src="images/deleteIcon.svg" width="19px"></button>
                                                            </div>
                                                        </div>
                                                        <div id="viewUserBody">
                                                            <div id="viewUserDescriptionContainer">
                                                                <div id="viewUserDescriptionContent">
                                                                    <div id="viewUserDescriptionContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserDescriptionContentBody">
                                                                        <p id="viewUserDescriptionText">${userBio}</p>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div id="viewUserModelsContainer">
                                                                <div id="viewUserModelsContent">
                                                                    <div id="viewUserModelsContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Modelos do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserModelsContentBody">
                                                                        <div id="viewUserModelsContentBodyHeader">
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Nome</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Descrição</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Framework</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Acessos</h1>
                                                                            </div>
                                                                        </div>
                                                                        <div id="viewUserModelsListContainer">
                                                                            <ul id="viewUserModelsList">
                                                                                <li class="viewUserModelsItem">
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Nome teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Descrição Teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Framework teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">14</h1>
                                                                                    </div>
                                                                                    <div class="selectorModels"></div>
                                                                                </li>
                                                                                <li class="viewUserModelsItem">
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Nome teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Descrição Teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Framework teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">14</h1>
                                                                                    </div>
                                                                                    <div class="selectorModels"></div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id="viewUserContactsContainer">
                                                                <div id="viewUserContactsContent">
                                                                    <h1 id='viewUserContactsTitle'>Contatos</h1>
                                                                    <div id="viewUserContactsLinksContainer">
                                                                        ${userContacts}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        
                                                    </div>`

    })

    
}

function contactsRequestFocous(){
    document.getElementById('users').style.height = '50px'
    document.getElementById('userBody').style.display = 'none'
    document.getElementById('myContacts').style.height = '100px'
    document.getElementById('myContacts').style.cursor = 'pointer'
    document.getElementById('contactsRequests').style.height = 'calc(100% - 230px)'
    document.getElementById('contactsRequests').style.cursor = 'default'
    document.getElementById('myContactsBody').innerHTML = `<div id="myContactsScream">
        <div id="myContactsScreamContainer">
            <h1 id="myContactsScreamTitle">${myUser.name}</h1>
            <p id="myContactsScreamText"></p>
        </div>
        <div class="setacontainer">
            <img src="images/setaDireita.svg" width="20px">
        </div>
    </div>`
    
    for(i=0;i<myUser.solicitacoes.length;i++){
        if(i!=0){
            if(myUser.solicitacoes[i].models == undefined){
                var solicitacoes = solicitacoes + `<li class="contactsRequestsItem">
                                                <div class="userImg">
                                                    P
                                                </div>
                                                <div class="userInfoContainer">
                                                    <h1 class="userName">${myUser.solicitacoes[i].name}</h1>
                                                    <p class="userModels">0 Modelos</p>
                                                </div>
                                                <div class="selector"></div>
                                            </li>`
            }else{
                var solicitacoes = solicitacoes + `<li class="contactsRequestsItem">
                                                <div class="userImg">
                                                    P
                                                </div>
                                                <div class="userInfoContainer">
                                                    <h1 class="userName">${myUser.solicitacoes[i].name}</h1>
                                                    <p class="userModels">${myUser.solicitacoes[i].models.length} Modelos</p>
                                                </div>
                                                <div class="selector"></div>
                                            </li>`
            }
            
        }else{
            if(myUser.solicitacoes[i].models == undefined){
                var solicitacoes = `<li class="contactsRequestsItem">
                                    <div class="userImg">
                                        P
                                    </div>
                                    <div class="userInfoContainer">
                                        <h1 class="userName">${myUser.solicitacoes[i].name}</h1>
                                        <p class="userModels">0 Modelos</p>
                                    </div>
                                    <div class="selector"></div>
                                </li>`
            }else{
                var solicitacoes = `<li class="contactsRequestsItem">
                                    <div class="userImg">
                                        P
                                    </div>
                                    <div class="userInfoContainer">
                                        <h1 class="userName">${myUser.solicitacoes[i].name}</h1>
                                        <p class="userModels">${myUser.solicitacoes[i].models.length} Modelos</p>
                                    </div>
                                    <div class="selector"></div>
                                </li>`
            }
            
        }
        
    }

    document.getElementById('contactsRequestsBody').innerHTML = `<ul id="contactsRequestsList">${solicitacoes}</ul>`

    if(myUser.networking.length > 10){
        document.getElementById('myContactsScreamText').innerText = '10+ Contatos em seu networking'
    }else{
        if(myUser.networking.length == 1){
            document.getElementById('myContactsScreamText').innerText = `${myUser.networking.length} Contato em seu networking`
        }else{
            document.getElementById('myContactsScreamText').innerText = `${myUser.networking.length} Contatos em seu networking`
        }  
    }
}


var userList = document.getElementById('usersList');
var resquetsList = document.getElementById('contactsRequestsList');

userList.addEventListener('click', (e)=>{
    const userId = e.target.parentNode.id

    if(skirel_users[userId].bio == undefined){
        var userBio = 'User ainda nao possui uma biografia'
    }else{
        var userBio = skirel_users[userId].bio
    }

    if(skirel_users[userId].models == undefined){
        var userModels = '0'
    }else{
        var userModels = skirel_users[userId].models.length
    }

    if(skirel_users[userId].contacts == undefined){
        var userContacts = 'Usuário ainda náo possui contatos.'
    }

    for(i=0 ; i<myUser.networking.length ; i++ ){
        if(skirel_users[userId].name == myUser.networking[i].name){
            document.getElementById('viewer').innerHTML = `<div id="viewUser">
                                                        <div id="viewUserHeader">
                                                            <div id="viewUserImage">
                                                                P
                                                            </div>
                                                            <div id="viewUserInfo">
                                                                <h1 id="viewUserName">${skirel_users[userId].name}</h1>
                                                                <p id="viewUserModelsText">${userModels} Modelos</p>
                                                            </div>
                                                            <div id="viewUserChoice">
                                                            <button class="btnChoice" id="removerChoice">Remover notworking <img src="images/deleteIcon.svg" width="19px"></button>
                                                            </div>
                                                        </div>
                                                        <div id="viewUserBody">
                                                            <div id="viewUserDescriptionContainer">
                                                                <div id="viewUserDescriptionContent">
                                                                    <div id="viewUserDescriptionContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserDescriptionContentBody">
                                                                        <p id="viewUserDescriptionText">${userBio}</p>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div id="viewUserModelsContainer">
                                                                <div id="viewUserModelsContent">
                                                                    <div id="viewUserModelsContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Modelos do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserModelsContentBody">
                                                                        <div id="viewUserModelsContentBodyHeader">
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Nome</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Descrição</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Framework</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Acessos</h1>
                                                                            </div>
                                                                        </div>
                                                                        <div id="viewUserModelsListContainer">
                                                                            <ul id="viewUserModelsList">
                                                                                <li class="viewUserModelsItem">
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Nome teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Descrição Teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Framework teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">14</h1>
                                                                                    </div>
                                                                                    <div class="selectorModels"></div>
                                                                                </li>
                                                                                <li class="viewUserModelsItem">
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Nome teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Descrição Teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Framework teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">14</h1>
                                                                                    </div>
                                                                                    <div class="selectorModels"></div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id="viewUserContactsContainer">
                                                                <div id="viewUserContactsContent">
                                                                    <h1 id="viewUserContactsTitle">Contatos</h1>
                                                                    <div id="viewUserContactsLinksContainer">
                                                                        <div class='emailContainer'>
                                                                            <h1 class='emaiTitle'>Email :</h1>
                                                                            <p class='emailText'>${skirel_users[userId].email}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        
                                                    </div>`
        }else if(skirel_users[userId].name == myUser.solicitacoes[i].name){
            document.getElementById('viewer').innerHTML = `<div id="viewUser">
                                                        <div id="viewUserHeader">
                                                            <div id="viewUserImage">
                                                                P
                                                            </div>
                                                            <div id="viewUserInfo">
                                                                <h1 id="viewUserName">${skirel_users[userId].name}</h1>
                                                                <p id="viewUserModelsText">${userModels} Modelos</p>
                                                            </div>
                                                            <div id="viewUserChoice">
                                                                <button class="btnChoice">Aceitar</button>
                                                                <button class="btnChoice" id="recusarChoice">Recusar</button> 
                                                             </div>
                                                        </div>
                                                        <div id="viewUserBody">
                                                            <div id="viewUserDescriptionContainer">
                                                                <div id="viewUserDescriptionContent">
                                                                    <div id="viewUserDescriptionContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserDescriptionContentBody">
                                                                        <p id="viewUserDescriptionText">${userBio}</p>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div id="viewUserModelsContainer">
                                                                <div id="viewUserModelsContent">
                                                                    <div id="viewUserModelsContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Modelos do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserModelsContentBody">
                                                                        <div id="viewUserModelsContentBodyHeader">
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Nome</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Descrição</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Framework</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Acessos</h1>
                                                                            </div>
                                                                        </div>
                                                                        <div id="viewUserModelsListContainer">
                                                                            <ul id="viewUserModelsList">
                                                                                <li class="viewUserModelsItem">
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Nome teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Descrição Teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Framework teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">14</h1>
                                                                                    </div>
                                                                                    <div class="selectorModels"></div>
                                                                                </li>
                                                                                <li class="viewUserModelsItem">
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Nome teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Descrição Teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Framework teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">14</h1>
                                                                                    </div>
                                                                                    <div class="selectorModels"></div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id="viewUserContactsContainer">
                                                                <div id="viewUserContactsContent">
                                                                    <h1 id="viewUserContactsTitle">Contatos</h1>
                                                                    <div id="viewUserContactsLinksContainer">
                                                                        <div class='emailContainer'>
                                                                            <h1 class='emaiTitle'>Email :</h1>
                                                                            <p class='emailText'>${skirel_users[userId].email}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        
                                                    </div>`
        }else{
            document.getElementById('viewer').innerHTML = `<div id="viewUser">
                                                        <div id="viewUserHeader">
                                                            <div id="viewUserImage">
                                                                P
                                                            </div>
                                                            <div id="viewUserInfo">
                                                                <h1 id="viewUserName">${skirel_users[userId].name}</h1>
                                                                <p id="viewUserModelsText">${userModels} Modelos</p>
                                                            </div>
                                                            <div id="viewUserChoice">
                                                                <button class="btnChoice" id='Contact'>Solicitar contato <img src="images/plusIcon.svg" width="20px"></button> 
                                                            </div>
                                                        </div>
                                                        <div id="viewUserBody">
                                                            <div id="viewUserDescriptionContainer">
                                                                <div id="viewUserDescriptionContent">
                                                                    <div id="viewUserDescriptionContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserDescriptionContentBody">
                                                                        <p id="viewUserDescriptionText">${userBio}</p>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div id="viewUserModelsContainer">
                                                                <div id="viewUserModelsContent">
                                                                    <div id="viewUserModelsContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Modelos do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserModelsContentBody">
                                                                        <div id="viewUserModelsContentBodyHeader">
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Nome</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Descrição</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Framework</h1>
                                                                            </div>
                                                                            <div class="viewUserModelsInfoContainer">
                                                                                <h1 class="viewUserModelsTitle">Acessos</h1>
                                                                            </div>
                                                                        </div>
                                                                        <div id="viewUserModelsListContainer">
                                                                            <ul id="viewUserModelsList">
                                                                                <li class="viewUserModelsItem">
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Nome teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Descrição Teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Framework teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">14</h1>
                                                                                    </div>
                                                                                    <div class="selectorModels"></div>
                                                                                </li>
                                                                                <li class="viewUserModelsItem">
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Nome teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Descrição Teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">Framework teste</h1>
                                                                                    </div>
                                                                                    <div class="viewUserModelsItemContainer">
                                                                                        <h1 class="viewUserModelsItemText">14</h1>
                                                                                    </div>
                                                                                    <div class="selectorModels"></div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id="viewUserContactsContainer">
                                                                <div id="viewUserContactsContent">
                                                                    <h1 id="viewUserContactsTitle">Contatos</h1>
                                                                    <div id="viewUserContactsLinksContainer">
                                                                        <div class='emailContainer'>
                                                                            <h1 class='emaiTitle'>Email :</h1>
                                                                            <p class='emailText'>${skirel_users[userId].email}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        
                                                    </div>`
        }
    }

    

})




function searchUser(){
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("usersList");
        li = ul.getElementsByTagName('li');
        
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("h1")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
}