document.getElementById('searchInput')

function seachFocous(){
    document.getElementById('users').style.height = 'calc(100% - 280px)'
    document.getElementById('myContacts').style.height = '100px'
    document.getElementById('myContacts').style.cursor = 'pointer'
    document.getElementById('contactsRequests').style.height = '100px'
    document.getElementById('contactsRequests').style.cursor = 'pointer'
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
}

function myContactsFocous(){
    document.getElementById('users').style.height = '50px'
    document.getElementById('myContacts').style.height = 'calc(100% - 230px)'
    document.getElementById('myContacts').style.cursor = 'default'
    document.getElementById('contactsRequests').style.height = '100px'
    document.getElementById('contactsRequests').style.cursor = 'pointer'
    document.getElementById('myContactsBody').innerHTML = `<ul id="myContactsList">
        <li class="myContactsItem">
            <div class="userImg">
                P
            </div>
            <div class="userInfoContainer">
                <h1 class="userName">Lucas Matos</h1>
                <p class="userModels">10 modelos</p>
            </div>
        </li>
        <li class="myContactsItem">
            <div class="userImg">
                P
            </div>
            <div class="userInfoContainer">
                <h1 class="userName">Lucas Matos</h1>
                <p class="userModels">10 modelos</p>
            </div>
        </li>
    </ul>`
    document.getElementById('contactsRequestsBody').innerHTML = `<div id="contactsRequestsScream">
    <div id="contactsRequestsScreamContainer">
        <h1 id="contactsRequestsScreamTitle">Lucas Martins Campos Matos</h1>
        <p id="contactsRequestsScreamText">10+ Solicitações de contato</p>
    </div>
    <div class="setacontainer">
        <img src="images/setaDireita.svg" width="20px">
    </div>
    </div>`
}

function contactsRequestFocous(){
    document.getElementById('users').style.height = '50px'
    document.getElementById('myContacts').style.height = '100px'
    document.getElementById('myContacts').style.cursor = 'pointer'
    document.getElementById('contactsRequests').style.height = 'calc(100% - 230px)'
    document.getElementById('contactsRequests').style.cursor = 'default'
    document.getElementById('myContactsBody').innerHTML = `<div id="myContactsScream">
        <div id="myContactsScreamContainer">
            <h1 id="myContactsScreamTitle">Lucas Martins Campos Matos</h1>
            <p id="myContactsScreamText">10+ Contatos em seu networking</p>
        </div>
        <div class="setacontainer">
            <img src="images/setaDireita.svg" width="20px">
        </div>
    </div>`
    document.getElementById('contactsRequestsBody').innerHTML = `<ul id="contactsRequestsList">
    <li class="contactsRequestsItem">
        <div class="userImg">
            P
        </div>
        <div class="userInfoContainer">
            <h1 class="userName">Lucas Matos</h1>
            <p class="userModels">10 modelos</p>
        </div>
    </li>
    <li class="contactsRequestsItem">
        <div class="userImg">
            P
        </div>
        <div class="userInfoContainer">
            <h1 class="userName">Lucas Matos</h1>
            <p class="userModels">10 modelos</p>
        </div>
    </li>
    </ul>`
}