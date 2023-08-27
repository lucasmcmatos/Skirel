document.getElementById('searchInput')
const skirel_users = JSON.parse(localStorage.getItem('Skirel_users'));
const myUser = JSON.parse(localStorage.getItem('usuario'));
var i;
var j;

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
        }else{
            var platUsers = ''
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

if(platUsers == undefined){
    document.getElementById('usersList').innerHTML = '';
}else{
    document.getElementById('usersList').innerHTML = platUsers;

}

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

if(myUser.networking.length > 10){
    document.getElementById('myContactsScreamText').innerText = '10+ Contatos em seu networking'
}else{
    if(myUser.networking.length == 1){
        document.getElementById('myContactsScreamText').innerText = `${myUser.networking.length} Contato em seu networking`
    }if(myUser.networking.length == 0){
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
            if(myUser.networking[i].targetuser_models.length == undefined){
                var contactsUsers = contactsUsers + `<li class="myContactsItem" id='${i}'>
                                                    <div class="userImg">
                                                        ${myUser.networking[i].targetuser_name[0]}
                                                    </div>
                                                    <div class="userInfoContainer">
                                                        <h1 class="userName">${myUser.networking[i].targetuser_name}</h1>
                                                        <p class="userModels">0 Modelos</p>
                                                    </div>
                                                    <div class="selector"></div>
                                                </li>`
            }else{
                var contactsUsers = contactsUsers + `<li class="myContactsItem" id='${i}'>
                                                    <div class="userImg">
                                                        ${myUser.networking[i].targetuser_name[0]}
                                                    </div>
                                                    <div class="userInfoContainer">
                                                        <h1 class="userName">${myUser.networking[i].targetuser_name}</h1>
                                                        <p class="userModels">${myUser.networking[i].targetuser_models.length} Modelos</p>
                                                    </div>
                                                    <div class="selector"></div>
                                                </li>`
            }
            
        }else{
            if(myUser.networking[i].targetuser_models == undefined){
                var contactsUsers = `<li class="myContactsItem" id='${i}'>
                                                    <div class="userImg">
                                                        ${myUser.networking[i].targetuser_name[0]}
                                                    </div>
                                                    <div class="userInfoContainer">
                                                        <h1 class="userName">${myUser.networking[i].targetuser_name}</h1>
                                                        <p class="userModels">0 Modelos</p>
                                                    </div>
                                                    <div class="selector"></div>
                                                </li>`
            }else{
                var contactsUsers =`<li class="myContactsItem" id='${i}'>
                                                    <div class="userImg">
                                                        ${myUser.networking[i].targetuser_name[0]}
                                                    </div>
                                                    <div class="userInfoContainer">
                                                        <h1 class="userName">${myUser.networking[i].targetuser_name}</h1>
                                                        <p class="userModels">${myUser.networking[i].targetuser_models.length} Modelos</p>
                                                    </div>
                                                    <div class="selector"></div>
                                                </li>`
            }
        }
    }
    if(contactsUsers == undefined){
        document.getElementById('myContactsBody').innerHTML = `<ul id="myContactsList"></ul>`
    }else{
        document.getElementById('myContactsBody').innerHTML = `<ul id="myContactsList">${contactsUsers}</ul>`
    }
   
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

        const otheruser_id = e.target.parentNode.id
        const selecteduser = myUser.networking[otheruser_id];
        
        if(selecteduser.targetuser_models == undefined || selecteduser.targetuser_models.length == 0 ){
            
            var selectedusermodelslength = 0
            var selectedusermodels = ''
        }else{
            var selectedusermodelslength = selecteduser.targetuser_models.length
            for(i=0 ; i<selecteduser.targetuser_models.length ; i++ ){
                if(i!=0){
                    var selectedusermodels = selectedusermodels + `<li class="viewUserModelsItemNetworking"  id='${i}'>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModelsNetworking">Download</div>
                                            </li>`
                }else{
                    var selectedusermodels = `<li class="viewUserModelsItemNetworking" id='${i}'>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModelsNetworking">Download</div>
                                            </li>`
                }
            }


        }
        if(selecteduser.targetuser_bio == undefined){
            var selecteduserbio = 'Usuario ainda nao possui uma biografia.'
        }else{
            var selecteduserbio = selecteduser.targetuser_bio;

        }

        if(selecteduser.targetuser_contacts == undefined){
            var selectedusercontacts = `<div class='emailContainer'>
                                            <h1 class='emaiTitle'>Email :</h1>
                                            <p class='emailText'>${selecteduser.targetuser_email}</p>
                                        </div>`
        }else{
            if(selecteduser.targetuser_contacts.instagram == undefined || selecteduser.targetuser_contacts.instagram == 'NULL' ||  selecteduser.targetuser_contacts.instagram == ''){
                var selectedusercontacts = ``
            }else{
                var selectedusercontacts = `<a href="${selecteduser.targetuser_contacts.instagram}" class="linkContainer">
                                                <div class="linkTitleContainer">
                                                    <h1 class="linkTitle">Instagram</h1>
                                                </div>
                                                <div class="linkImgContainer">
                                                    <img src="images/instaIcon.svg" width="40px"> 
                                                </div>
                                            </a>`
            }
        
            if(selecteduser.targetuser_contacts.linkedin == undefined || selecteduser.targetuser_contacts.linkedin == 'NULL' || selecteduser.targetuser_contacts.linkedin == ''){
                var selectedusercontacts = selectedusercontacts + ``
            }else{
                var selectedusercontacts = selectedusercontacts + `<a href="${selecteduser.targetuser_contacts.linkedin}" class="linkContainer">
                                                                        <div class="linkTitleContainer">
                                                                            <h1 class="linkTitle">Linkedin</h1>
                                                                        </div>
                                                                        <div class="linkImgContainer">
                                                                            <img src="images/linkedinIcon.svg" width="40px"> 
                                                                        </div>
                                                                    </a>`
            }
        
            if(selecteduser.targetuser_contacts.whatsapp == undefined || selecteduser.targetuser_contacts.whatsapp == 'NULL' || selecteduser.targetuser_contacts.whatsapp == ''){
                var selectedusercontacts = selectedusercontacts + ``
            }else{
                var selectedusercontacts = selectedusercontacts + `<a href="${selecteduser.targetuser_contacts.whatsapp}" class="linkContainer">
                                                                        <div class="linkTitleContainer">
                                                                            <h1 class="linkTitle">Whatsapp</h1>
                                                                        </div>
                                                                        <div class="linkImgContainer">
                                                                            <img src="images/wppIcon.svg" width="40px"> 
                                                                        </div>
                                                                    </a>`
            }
        }

        if(selectedusercontacts == ''){
            var selectedusercontacts = `<div class='emailContainer'>
                                            <h1 class='emaiTitle'>Email :</h1>
                                            <p class='emailText'>${selecteduser.targetuser_email}</p>
                                        </div>`
        }

        // if(selecteduser.targetuser_contacts == undefined){
        //     var selectedusercontacts = `<div class='emailContainer'>
        //                                     <h1 class='emaiTitle'>Email :</h1>
        //                                     <p class='emailText'>${selecteduser.targetuser_email}</p>
        //                                 </div>`
        // }else{
        //     if(selecteduser.targetuser_contacts.instagram == undefined || selecteduser.targetuser_contacts.instagram == ''){
        //         var selectedusercontacts = ''
        //     }else{
        //         if(selecteduser.targetuser_contacts.linkedin == undefined || selecteduser.targetuser_contacts.linkedin == ''){
        //             var selectedusercontacts = `<a href="${selecteduser.targetuser_contacts.instagram}" class="linkContainer">
        //                                             <div class="linkTitleContainer">
        //                                                 <h1 class="linkTitle">Instagram</h1>
        //                                             </div>
        //                                             <div class="linkImgContainer">
        //                                                 <img src="images/instaIcon.svg" width="40px"> 
        //                                             </div>
        //                                         </a>`
        //         }else{
        //             if(selecteduser.targetuser_contacts.whatsapp == undefined || selecteduser.targetuser_contacts.whatsapp == ''){
        //                 var selectedusercontacts = `<a href="${selecteduser.targetuser_contacts.instagram}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Instagram</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/instaIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a> 
        //                                             <a href="${selecteduser.targetuser_contacts.linkedin}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Linkedin</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/linkedinIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a>`
        //             }else{
        //                 var selectedusercontacts = `<a href="${selecteduser.targetuser_contacts.instagram}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Instagram</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/instaIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a> 
        //                                             <a href="${selecteduser.targetuser_contacts.linkedin}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Linkedin</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/linkedinIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a>
        //                                             <a href="${selecteduser.targetuser_contacts.whatsapp}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Whatsapp</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/wppIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a>`
        //             }
        //         }
        //     }
        // }
        
        document.getElementById('viewer').innerHTML = `<div id="viewUser">
                                                        <div id="viewUserHeader">
                                                            <div id="viewUserImage">
                                                            ${selecteduser.targetuser_name[0]}
                                                            </div>
                                                            <div id="viewUserInfo">
                                                                <h1 id="viewUserName">${selecteduser.targetuser_name}</h1>
                                                                <p id="viewUserModelsText">${selectedusermodelslength} Modelos</p>
                                                            </div>
                                                            <div id="viewUserChoice">
                                                            <button class="btnChoice" id="removerChoice"  onclick='removeNetworking2(${otheruser_id})'>Remover notworking <img src="images/deleteIcon.svg" width="19px"></button>
                                                            </div>
                                                        </div>
                                                        <div id="viewUserBody">
                                                            <div id="viewUserDescriptionContainer">
                                                                <div id="viewUserDescriptionContent">
                                                                    <div id="viewUserDescriptionContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserDescriptionContentBody">
                                                                        <p id="viewUserDescriptionText">${selecteduserbio}</p>
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
                                                                                ${selectedusermodels}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id="viewUserContactsContainer">
                                                                <div id="viewUserContactsContent">
                                                                    <h1 id="viewUserContactsTitle">Contatos</h1>
                                                                    <div id="viewUserContactsLinksContainer">
                                                                        ${selectedusercontacts}    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>`

    

    var viewUserModelsList = document.getElementById('viewUserModelsList')
    viewUserModelsList.addEventListener('click', (e)=>{
        const model_id = e.target.parentNode.id
        const list_item = e.target.parentNode

        
        let s3 = `${selecteduser.targetuser_id}/${selecteduser.targetuser_models[model_id].name}`
    
        fetch(`/getSignedUrl?s3=${s3}&model_id=${model_id}`)
        .then(response => response.json())
        .then(data => {
            const signedUrl = data.signedUrl;
            window.location.href = signedUrl; // Isso iniciará o download
        })
        .catch(error => {
            console.error("Erro ao obter URL pré-assinada:", error);
        });
        
    
    })
        

        // if( myUser.networking[userId].bio == undefined){
        //     var userBio = 'User ainda nao possui uma biografia'
        // }else{
        //     var userBio = myUser.networking[userId].bio
        // }
    
        // if( myUser.networking[userId].models == undefined){
        //     var userModels = '0'
        // }else{
        //     var userModels = myUser.networking[userId].models.length
        // }
    
        // if( myUser.networking[userId].contacts == undefined){
        //     var userContacts = 'Usuário ainda náo possui contatos.'
        // }else{
        //     var userContacts = ''
        //     if(myUser.networking[userId].contacts.instagram != undefined || myUser.networking[userId].contacts.instagram != ''){
        //         var userContacts = userContacts + `<a href="${myUser.networking[userId].contacts.instagram}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Instagram</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/instaIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a>`
        //     }
        //     if(myUser.networking[userId].contacts.linkedin != undefined || myUser.networking[userId].contacts.linkedin != ''){
        //         var userContacts = userContacts + `<a href="${myUser.networking[userId].contacts.linkedin}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Linkedin</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/linkedinIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a>`
        //     }
        //     if(myUser.networking[userId].contacts.whatsapp != undefined || myUser.networking[userId].contacts.whatsapp != ''){
        //         var userContacts = userContacts + `<a href="${myUser.networking[userId].contacts.whatsapp}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Whatsapp</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/wppIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a>`
        //     }

        // }
    
        // document.getElementById('viewer').innerHTML = `<div id="viewUser">
        //                                                 <div id="viewUserHeader">
        //                                                     <div id="viewUserImage">
        //                                                         P
        //                                                     </div>
        //                                                     <div id="viewUserInfo">
        //                                                         <h1 id="viewUserName">${myUser.networking[userId].name}</h1>
        //                                                         <p id="viewUserModelsText">${userModels} Modelos</p>
        //                                                     </div>
        //                                                     <div id="viewUserChoice">
        //                                                     <button class="btnChoice" id="removerChoice">Remover notworking <img src="images/deleteIcon.svg" width="19px"></button>
        //                                                     </div>
        //                                                 </div>
        //                                                 <div id="viewUserBody">
        //                                                     <div id="viewUserDescriptionContainer">
        //                                                         <div id="viewUserDescriptionContent">
        //                                                             <div id="viewUserDescriptionContentHeader">
        //                                                                 <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
        //                                                             </div>
        //                                                             <div id="viewUserDescriptionContentBody">
        //                                                                 <p id="viewUserDescriptionText">${userBio}</p>
        //                                                             </div>
                                                                    
        //                                                         </div>
        //                                                     </div>
        //                                                     <div id="viewUserModelsContainer">
        //                                                         <div id="viewUserModelsContent">
        //                                                             <div id="viewUserModelsContentHeader">
        //                                                                 <h1 id="viewUserDescriptionTitle">Modelos do usuário</h1>
        //                                                             </div>
        //                                                             <div id="viewUserModelsContentBody">
        //                                                                 <div id="viewUserModelsContentBodyHeader">
        //                                                                     <div class="viewUserModelsInfoContainer">
        //                                                                         <h1 class="viewUserModelsTitle">Nome</h1>
        //                                                                     </div>
        //                                                                     <div class="viewUserModelsInfoContainer">
        //                                                                         <h1 class="viewUserModelsTitle">Descrição</h1>
        //                                                                     </div>
        //                                                                     <div class="viewUserModelsInfoContainer">
        //                                                                         <h1 class="viewUserModelsTitle">Framework</h1>
        //                                                                     </div>
        //                                                                     <div class="viewUserModelsInfoContainer">
        //                                                                         <h1 class="viewUserModelsTitle">Acessos</h1>
        //                                                                     </div>
        //                                                                 </div>
        //                                                                 <div id="viewUserModelsListContainer">
        //                                                                     <ul id="viewUserModelsList">
        //                                                                         <li class="viewUserModelsItem">
        //                                                                             <div class="viewUserModelsItemContainer">
        //                                                                                 <h1 class="viewUserModelsItemText">Nome teste</h1>
        //                                                                             </div>
        //                                                                             <div class="viewUserModelsItemContainer">
        //                                                                                 <h1 class="viewUserModelsItemText">Descrição Teste</h1>
        //                                                                             </div>
        //                                                                             <div class="viewUserModelsItemContainer">
        //                                                                                 <h1 class="viewUserModelsItemText">Framework teste</h1>
        //                                                                             </div>
        //                                                                             <div class="viewUserModelsItemContainer">
        //                                                                                 <h1 class="viewUserModelsItemText">14</h1>
        //                                                                             </div>
        //                                                                             <div class="selectorModels"></div>
        //                                                                         </li>
        //                                                                         <li class="viewUserModelsItem">
        //                                                                             <div class="viewUserModelsItemContainer">
        //                                                                                 <h1 class="viewUserModelsItemText">Nome teste</h1>
        //                                                                             </div>
        //                                                                             <div class="viewUserModelsItemContainer">
        //                                                                                 <h1 class="viewUserModelsItemText">Descrição Teste</h1>
        //                                                                             </div>
        //                                                                             <div class="viewUserModelsItemContainer">
        //                                                                                 <h1 class="viewUserModelsItemText">Framework teste</h1>
        //                                                                             </div>
        //                                                                             <div class="viewUserModelsItemContainer">
        //                                                                                 <h1 class="viewUserModelsItemText">14</h1>
        //                                                                             </div>
        //                                                                             <div class="selectorModels"></div>
        //                                                                         </li>
        //                                                                     </ul>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </div>
        //                                                     </div>

        //                                                     <div id="viewUserContactsContainer">
        //                                                         <div id="viewUserContactsContent">
        //                                                             <h1 id='viewUserContactsTitle'>Contatos</h1>
        //                                                             <div id="viewUserContactsLinksContainer">
        //                                                                 ${userContacts}
        //                                                             </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>

                                                        
        //                                             </div>`

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
            if(myUser.solicitacoes[i].targetuser_models == undefined){
                var solicitacoes = solicitacoes + `<li class="contactsRequestsItem" id='${i}'>
                                                <div class="userImg">
                                                    P
                                                </div>
                                                <div class="userInfoContainer">
                                                    <h1 class="userName">${myUser.solicitacoes[i].targetuser_name}</h1>
                                                    <p class="userModels">0 Modelos</p>
                                                </div>
                                                <div class="selector"></div>
                                            </li>`
            }else{
                var solicitacoes = solicitacoes + `<li class="contactsRequestsItem" id='${i}'>
                                                <div class="userImg">
                                                    P
                                                </div>
                                                <div class="userInfoContainer">
                                                    <h1 class="userName">${myUser.solicitacoes[i].targetuser_name}</h1>
                                                    <p class="userModels">${myUser.solicitacoes[i].targetuser_models.length} Modelos</p>
                                                </div>
                                                <div class="selector"></div>
                                            </li>`
            }
            
        }else{
            if(myUser.solicitacoes[i].targetuser_models == undefined){
                var solicitacoes = `<li class="contactsRequestsItem" id='${i}'>
                                    <div class="userImg">
                                        P
                                    </div>
                                    <div class="userInfoContainer">
                                        <h1 class="userName">${myUser.solicitacoes[i].targetuser_name}</h1>
                                        <p class="userModels">0 Modelos</p>
                                    </div>
                                    <div class="selector"></div>
                                </li>`
            }else{
                var solicitacoes = `<li class="contactsRequestsItem" id='${i}'>
                                    <div class="userImg">
                                        P
                                    </div>
                                    <div class="userInfoContainer">
                                        <h1 class="userName">${myUser.solicitacoes[i].targetuser_name}</h1>
                                        <p class="userModels">${myUser.solicitacoes[i].targetuser_models.length} Modelos</p>
                                    </div>
                                    <div class="selector"></div>
                                </li>`
            }
            
        }
        
    }

    if(solicitacoes == undefined){
        document.getElementById('contactsRequestsBody').innerHTML = `<ul id="contactsRequestsList"></ul>`
    }else{
        document.getElementById('contactsRequestsBody').innerHTML = `<ul id="contactsRequestsList">${solicitacoes}</ul>`
    }

    if(myUser.networking.length > 10){
        document.getElementById('myContactsScreamText').innerText = '10+ Contatos em seu networking'
    }else{
        if(myUser.networking.length == 1){
            document.getElementById('myContactsScreamText').innerText = `${myUser.networking.length} Contato em seu networking`
        }if(myUser.networking.length == 0){
            document.getElementById('myContactsScreamText').innerText = `Nenhum contato em seu networking`
        }else{
            document.getElementById('myContactsScreamText').innerText = `${myUser.networking.length} Contatos em seu networking`
        }  
    }

    var resquetsList = document.getElementById('contactsRequestsList');
    resquetsList.addEventListener('click', (e)=>{
        const otheruser_id = e.target.parentNode.id
        const selecteduser = myUser.solicitacoes[otheruser_id];

        if(selecteduser.targetuser_models == undefined || selecteduser.targetuser_models.length == 0 ){
            var selectedusermodelslength = 0
            var selectedusermodels = ''
        }else{
            var selectedusermodelslength = selecteduser.targetuser_models.length

            for(i=0 ; i<selecteduser.targetuser_models.length ; i++ ){
                if(i!=0){
                    var selectedusermodels = selectedusermodels + `<li class="viewUserModelsItem">
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModels"></div>
                                            </li>`
                }else{
                    var selectedusermodels = `<li class="viewUserModelsItem">
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.targetuser_models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModels"></div>
                                            </li>`
                }
            }


        }
        if(selecteduser.targetuser_bio == undefined){
            var selecteduserbio = 'Usuario ainda nao possui uma biografia.'
        }else{
            var selecteduserbio = selecteduser.targetuser_bio;
        }
        
       
            
        if(selecteduser.whodidit == 'me'){
            document.getElementById('viewer').innerHTML = `<div id="viewUser">
                                                <div id="viewUserHeader">
                                                    <div id="viewUserImage">
                                                    ${selecteduser.targetuser_name[0]}
                                                    </div>
                                                    <div id="viewUserInfo">
                                                        <h1 id="viewUserName">${selecteduser.targetuser_name}</h1>
                                                        <p id="viewUserModelsText">${selectedusermodelslength} Modelos</p>
                                                    </div>
                                                    <div id="viewUserChoice">
                                                    <button class="btnChoice" onclick='acceptContact2(${otheruser_id})'>Aceitar</button>
                                                    <button class="btnChoice" id="recusarChoice" onclick='cancelContact2(${otheruser_id})'>Recusar</button> 
                                                    </div>
                                                </div>
                                                <div id="viewUserBody">
                                                    <div id="viewUserDescriptionContainer">
                                                        <div id="viewUserDescriptionContent">
                                                            <div id="viewUserDescriptionContentHeader">
                                                                <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                            </div>
                                                            <div id="viewUserDescriptionContentBody">
                                                                <p id="viewUserDescriptionText">${selecteduserbio}</p>
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
                                                                        ${selectedusermodels}
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
                                                                    <p class='emailText'>${selecteduser.targetuser_email}</p>
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
                                                    ${selecteduser.targetuser_name[0]}
                                                    </div>
                                                    <div id="viewUserInfo">
                                                        <h1 id="viewUserName">${selecteduser.targetuser_name}</h1>
                                                        <p id="viewUserModelsText">${selectedusermodelslength} Modelos</p>
                                                    </div>
                                                    <div id="viewUserChoice">
                                                    <button class="btnChoice" onclick='cancelContact(${otheruser_id})'>Cancelar Solicitação</button> 
                                                    </div>
                                                </div>
                                                <div id="viewUserBody">
                                                    <div id="viewUserDescriptionContainer">
                                                        <div id="viewUserDescriptionContent">
                                                            <div id="viewUserDescriptionContentHeader">
                                                                <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                            </div>
                                                            <div id="viewUserDescriptionContentBody">
                                                                <p id="viewUserDescriptionText">${selecteduserbio}</p>
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
                                                                        ${selectedusermodels}
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
                                                                    <p class='emailText'>${selecteduser.targetuser_email}</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                            </div>`
        }
            
        

    })


}


var userList = document.getElementById('usersList');
// var myContactsList = document.getElementById('myContactsList');
// var resquetsList = document.getElementById('contactsRequestsList');

userList.addEventListener('click', (e)=>{
    const otheruser_id = e.target.parentNode.id
    const selecteduser = skirel_users[otheruser_id]

    var eval = 'platuser'
   
    for(i=0 ; i< myUser.networking.length ; i++){
        if(selecteduser.name == myUser.networking[i].targetuser_name){
            eval = 'networkinguser'
        }
    }

    for(i=0 ; i< myUser.solicitacoes.length ; i++){
        if(selecteduser.name == myUser.solicitacoes[i].targetuser_name){
            eval = 'solicitacoesuser'
        }
    }

    if(eval == 'platuser'){
        if(selecteduser.models == undefined || selecteduser.models.length == 0 ){
            
            var selectedusermodelslength = 0
            var selectedusermodels = ''
        }else{
            var selectedusermodelslength = selecteduser.models.length
            for(i=0 ; i<selecteduser.models.length ; i++ ){
                if(i!=0){
                    var selectedusermodels = selectedusermodels + `<li class="viewUserModelsItem">
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModels"></div>
                                            </li>`
                }else{
                    var selectedusermodels = `<li class="viewUserModelsItem">
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModels"></div>
                                            </li>`
                }
            }


        }
        if(selecteduser.bio == undefined){
            var selecteduserbio = 'Usuario ainda nao possui uma biografia.'
        }else{
            var selecteduserbio = selecteduser.bio;
        }
        
        document.getElementById('viewer').innerHTML = `<div id="viewUser">
                                                        <div id="viewUserHeader">
                                                            <div id="viewUserImage">
                                                            ${selecteduser.name[0]}
                                                            </div>
                                                            <div id="viewUserInfo">
                                                                <h1 id="viewUserName">${selecteduser.name}</h1>
                                                                <p id="viewUserModelsText">${selectedusermodelslength} Modelos</p>
                                                            </div>
                                                            <div id="viewUserChoice">
                                                            <button class="btnChoice" id='Contact' onclick='requestContact(${otheruser_id})'>Solicitar contato <img src="images/plusIcon.svg" width="20px"></button>
                                                            </div>
                                                        </div>
                                                        <div id="viewUserBody">
                                                            <div id="viewUserDescriptionContainer">
                                                                <div id="viewUserDescriptionContent">
                                                                    <div id="viewUserDescriptionContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserDescriptionContentBody">
                                                                        <p id="viewUserDescriptionText">${selecteduserbio}</p>
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
                                                                                ${selectedusermodels}
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
                                                                            <p class='emailText'>${selecteduser.email}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        
                                                    </div>`
    }else if(eval == 'networkinguser'){
        if(selecteduser.models == undefined || selecteduser.models.length == 0 ){
            
            var selectedusermodelslength = 0
            var selectedusermodels = ''
        }else{
            var selectedusermodelslength = selecteduser.models.length
            for(i=0 ; i<selecteduser.models.length ; i++ ){
                if(i!=0){
                    var selectedusermodels = selectedusermodels + `<li class="viewUserModelsItemNetworking"  id='${i}'>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModelsNetworking">Download</div>
                                            </li>`
                }else{
                    var selectedusermodels = `<li class="viewUserModelsItemNetworking" id='${i}'>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModelsNetworking">Download</div>
                                            </li>`
                }
            }


        }
        if(selecteduser.bio == undefined){
            var selecteduserbio = 'Usuario ainda nao possui uma biografia.'
        }else{
            var selecteduserbio = selecteduser.bio;
        }

        if(selecteduser.contacts == undefined){
            var selectedusercontacts = `<div class='emailContainer'>
                                            <h1 class='emaiTitle'>Email :</h1>
                                            <p class='emailText'>${selecteduser.email}</p>
                                        </div>`
        }else{
            if(selecteduser.contacts.instagram == undefined || selecteduser.contacts.instagram == 'NULL' || selecteduser.contacts.instagram == ''){
                var selectedusercontacts = ``
            }else{
                var selectedusercontacts = `<a href="${selecteduser.contacts.instagram}" class="linkContainer">
                                                <div class="linkTitleContainer">
                                                    <h1 class="linkTitle">Instagram</h1>
                                                </div>
                                                <div class="linkImgContainer">
                                                    <img src="images/instaIcon.svg" width="40px"> 
                                                </div>
                                            </a>`
            }
        
            if(selecteduser.contacts.linkedin == undefined || selecteduser.contacts.linkedin == 'NULL' || selecteduser.contacts.linkedin == ''){
                var selectedusercontacts = selectedusercontacts + ``
            }else{
                var selectedusercontacts = selectedusercontacts + `<a href="${selecteduser.contacts.linkedin}" class="linkContainer">
                                                                        <div class="linkTitleContainer">
                                                                            <h1 class="linkTitle">Linkedin</h1>
                                                                        </div>
                                                                        <div class="linkImgContainer">
                                                                            <img src="images/linkedinIcon.svg" width="40px"> 
                                                                        </div>
                                                                    </a>`
            }
        
            if(selecteduser.contacts.whatsapp == undefined || selecteduser.contacts.whatsapp == 'NULL' || selecteduser.contacts.whatsapp == ''){
                var selectedusercontacts = selectedusercontacts + ``
            }else{
                var selectedusercontacts = selectedusercontacts + `<a href="${selecteduser.contacts.whatsapp}" class="linkContainer">
                                                                        <div class="linkTitleContainer">
                                                                            <h1 class="linkTitle">Whatsapp</h1>
                                                                        </div>
                                                                        <div class="linkImgContainer">
                                                                            <img src="images/wppIcon.svg" width="40px"> 
                                                                        </div>
                                                                    </a>`
            }
        }

        if(selectedusercontacts == ''){
            var selectedusercontacts = `<div class='emailContainer'>
                                            <h1 class='emaiTitle'>Email :</h1>
                                            <p class='emailText'>${selecteduser.email}</p>
                                        </div>`
        }
            
        // }else{
        //     if(selecteduser.contacts.instagram == undefined || selecteduser.contacts.instagram == ''){
        //         var selectedusercontacts = ''
        //     }else{
        //         if(selecteduser.contacts.linkedin == undefined || selecteduser.contacts.linkedin == ''){
        //             var selectedusercontacts = `<a href="${selecteduser.contacts.instagram}" class="linkContainer">
        //                                             <div class="linkTitleContainer">
        //                                                 <h1 class="linkTitle">Instagram</h1>
        //                                             </div>
        //                                             <div class="linkImgContainer">
        //                                                 <img src="images/instaIcon.svg" width="40px"> 
        //                                             </div>
        //                                         </a>`
        //         }else{
        //             if(selecteduser.contacts.whatsapp == undefined || selecteduser.contacts.whatsapp == ''){
        //                 var selectedusercontacts = `<a href="${selecteduser.contacts.instagram}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Instagram</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/instaIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a> 
        //                                             <a href="${selecteduser.contacts.linkedin}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Linkedin</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/linkedinIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a>`
        //             }else{
        //                 var selectedusercontacts = `<a href="${selecteduser.contacts.instagram}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Instagram</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/instaIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a> 
        //                                             <a href="${selecteduser.contacts.linkedin}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Linkedin</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/linkedinIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a>
        //                                             <a href="${selecteduser.contacts.whatsapp}" class="linkContainer">
        //                                                 <div class="linkTitleContainer">
        //                                                     <h1 class="linkTitle">Whatsapp</h1>
        //                                                 </div>
        //                                                 <div class="linkImgContainer">
        //                                                     <img src="images/wppIcon.svg" width="40px"> 
        //                                                 </div>
        //                                             </a>`
        //             }
        //         }
        //     }
        // }
        
        document.getElementById('viewer').innerHTML = `<div id="viewUser">
                                                        <div id="viewUserHeader">
                                                            <div id="viewUserImage">
                                                            ${selecteduser.name[0]}
                                                            </div>
                                                            <div id="viewUserInfo">
                                                                <h1 id="viewUserName">${selecteduser.name}</h1>
                                                                <p id="viewUserModelsText">${selectedusermodelslength} Modelos</p>
                                                            </div>
                                                            <div id="viewUserChoice">
                                                            <button class="btnChoice" id="removerChoice"  onclick='removeNetworking(${otheruser_id})'>Remover notworking <img src="images/deleteIcon.svg" width="19px"></button>
                                                            </div>
                                                        </div>
                                                        <div id="viewUserBody">
                                                            <div id="viewUserDescriptionContainer">
                                                                <div id="viewUserDescriptionContent">
                                                                    <div id="viewUserDescriptionContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserDescriptionContentBody">
                                                                        <p id="viewUserDescriptionText">${selecteduserbio}</p>
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
                                                                                ${selectedusermodels}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div id="viewUserContactsContainer">
                                                                <div id="viewUserContactsContent">
                                                                    <h1 id="viewUserContactsTitle">Contatos</h1>
                                                                    <div id="viewUserContactsLinksContainer">
                                                                        ${selectedusercontacts}    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>`

    

    var viewUserModelsList = document.getElementById('viewUserModelsList')
    viewUserModelsList.addEventListener('click', (e)=>{
        const model_id = e.target.parentNode.id
        const list_item = e.target.parentNode

        
        let s3 = `${selecteduser.user_id}/${selecteduser.models[model_id].name}`
    
        fetch(`/getSignedUrl?s3=${s3}&model_id=${model_id}`)
        .then(response => response.json())
        .then(data => {
            const signedUrl = data.signedUrl;
            window.location.href = signedUrl; // Isso iniciará o download
        })
        .catch(error => {
            console.error("Erro ao obter URL pré-assinada:", error);
        });
        
    
    })
    }else if(eval == 'solicitacoesuser'){
        if(selecteduser.models == undefined || selecteduser.models.length == 0 ){
            var selectedusermodelslength = 0
            var selectedusermodels = ''
        }else{
            var selectedusermodelslength = selecteduser.models.length

            for(i=0 ; i<selecteduser.models.length ; i++ ){
                if(i!=0){
                    var selectedusermodels = selectedusermodels + `<li class="viewUserModelsItem">
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModels"></div>
                                            </li>`
                }else{
                    var selectedusermodels = `<li class="viewUserModelsItem">
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].name}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].description}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].framework}</h1>
                                                </div>
                                                <div class="viewUserModelsItemContainer">
                                                    <h1 class="viewUserModelsItemText">${selecteduser.models[i].acessos}</h1>
                                                </div>
                                                <div class="selectorModels"></div>
                                            </li>`
                }
            }


        }
        if(selecteduser.bio == undefined){
            var selecteduserbio = 'Usuario ainda nao possui uma biografia.'
        }else{
            var selecteduserbio = selecteduser.bio;
        }
        
        for(i=0 ; i< selecteduser.solicitacoes.length ; i++){
            if(selecteduser.solicitacoes[i].targetuser_name == myUser.name){
                if(selecteduser.solicitacoes[i].whodidit == 'notme'){
                    document.getElementById('viewer').innerHTML = `<div id="viewUser">
                                                        <div id="viewUserHeader">
                                                            <div id="viewUserImage">
                                                            ${selecteduser.name[0]}
                                                            </div>
                                                            <div id="viewUserInfo">
                                                                <h1 id="viewUserName">${selecteduser.name}</h1>
                                                                <p id="viewUserModelsText">${selectedusermodelslength} Modelos</p>
                                                            </div>
                                                            <div id="viewUserChoice">
                                                            <button class="btnChoice" onclick='acceptContact(${otheruser_id})'>Aceitar</button>
                                                            <button class="btnChoice" id="recusarChoice" onclick='cancelContact(${otheruser_id})'>Recusar</button> 
                                                            </div>
                                                        </div>
                                                        <div id="viewUserBody">
                                                            <div id="viewUserDescriptionContainer">
                                                                <div id="viewUserDescriptionContent">
                                                                    <div id="viewUserDescriptionContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserDescriptionContentBody">
                                                                        <p id="viewUserDescriptionText">${selecteduserbio}</p>
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
                                                                                ${selectedusermodels}
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
                                                                            <p class='emailText'>${selecteduser.email}</p>
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
                                                            ${selecteduser.name[0]}
                                                            </div>
                                                            <div id="viewUserInfo">
                                                                <h1 id="viewUserName">${selecteduser.name}</h1>
                                                                <p id="viewUserModelsText">${selectedusermodelslength} Modelos</p>
                                                            </div>
                                                            <div id="viewUserChoice">
                                                            <button class="btnChoice" onclick='cancelContact2(${otheruser_id})'>Cancelar Solicitação</button> 
                                                            </div>
                                                        </div>
                                                        <div id="viewUserBody">
                                                            <div id="viewUserDescriptionContainer">
                                                                <div id="viewUserDescriptionContent">
                                                                    <div id="viewUserDescriptionContentHeader">
                                                                        <h1 id="viewUserDescriptionTitle">Biografía do usuário</h1>
                                                                    </div>
                                                                    <div id="viewUserDescriptionContentBody">
                                                                        <p id="viewUserDescriptionText">${selecteduserbio}</p>
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
                                                                                ${selectedusermodels}
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
                                                                            <p class='emailText'>${selecteduser.email}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        
                                                    </div>`
                }
            }
        }
        
    }

})

function removeNetworking(user_id){
    const targetuser_id = skirel_users[user_id].user_id
    const myuser_id = myUser.user_id

    fetch('/auth/removeNetworking', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            targetuser_id:targetuser_id,
            myuser_id:myuser_id
        })
    }).then(res=>res.json())
    .then(data =>{
        alert(data.message)
        localStorage.removeItem('paginaRecarregada')
        if(data.success){
            
            window.location.reload()
        }
    })
}

function removeNetworking2(user_id){
    const targetuser_id = myUser.networking[user_id].targetuser_id
    const myuser_id = myUser.user_id

    fetch('/auth/removeNetworking', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            targetuser_id:targetuser_id,
            myuser_id:myuser_id
        })
    }).then(res=>res.json())
    .then(data =>{
        alert(data.message)
        localStorage.removeItem('paginaRecarregada')
        if(data.success){
            
            window.location.reload()
        }
    })
}

function acceptContact(user_id){
    const targetuser_id = skirel_users[user_id].user_id
    const myuser_id = myUser.user_id

    fetch('/auth/acceptContact', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            targetuser_id:targetuser_id,
            myuser_id:myuser_id
        })
    }).then(res=>res.json())
    .then(data =>{
        alert(data.message)
        localStorage.removeItem('paginaRecarregada')
        if(data.success){
            
            window.location.reload()
        }
    })
}

function acceptContact2(user_id){
    const targetuser_id = myUser.solicitacoes[user_id].targetuser_id
    const myuser_id = myUser.user_id

    fetch('/auth/acceptContact', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            targetuser_id:targetuser_id,
            myuser_id:myuser_id
        })
    }).then(res=>res.json())
    .then(data =>{
        alert(data.message)
        localStorage.removeItem('paginaRecarregada')
        if(data.success){
            
            window.location.reload()
        }
    })
}

function cancelContact(user_id){
    const targetuser_id = skirel_users[user_id].user_id
    const myuser_id = myUser.user_id

    fetch('/auth/cancelContact', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            targetuser_id:targetuser_id,
            myuser_id:myuser_id
        })
    }).then(res=>res.json())
    .then(data =>{
        alert(data.message)
        localStorage.removeItem('paginaRecarregada')
        if(data.success){
            
            window.location.reload()
        }
    })
}

function cancelContact2(user_id){
    const targetuser_id = myUser.solicitacoes[user_id].targetuser_id
    const myuser_id = myUser.user_id

    fetch('/auth/cancelContact', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            targetuser_id:targetuser_id,
            myuser_id:myuser_id
        })
    }).then(res=>res.json())
    .then(data =>{
        alert(data.message)
        localStorage.removeItem('paginaRecarregada')
        if(data.success){
            
            window.location.reload()
        }
    })
}

function requestContact(user_id){
    const targetuser_id = skirel_users[user_id].user_id
    const myuser_id = myUser.user_id

    fetch('/auth/requestContact', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            targetuser_id:targetuser_id,
            myuser_id:myuser_id
        })
    }).then(res=>res.json())
    .then(data =>{
        alert(data.message)
        localStorage.removeItem('paginaRecarregada')
        if(data.success){
            
            window.location.reload()
        }
    })
}



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

