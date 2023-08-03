const user_email = localStorage.getItem('user-email');

fetch('/data/'+ user_email, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
      },
})
.then(res => res.json())
.then(data =>{

    const user = data.user
    var i;

    for(i=0 ; i < user.models.length ; i++){
        if(i!=0){
            var models = models + `<li class="myModelIten" id='${i}'>
            <div class="modelNameContainer">
                <h2 class="modelstitle">${user.models[i].name}</h2>
            </div>
            <div class="modelTypeContainer">
                <h2 class="modelsdescription">${user.models[i].description}</h2>
            </div>
            <div class="modelFrameworkContainer">
                <h2 class="modelstitle">${user.models[i].framework}</h2>
            </div>
            <div class="modelAccessContainer">
                <h2 class="modelstitle">${user.models[i].acessos}</h2>
            </div>

            <div class='selector'>
        </li>`
        }else{
            var models = `<li class="myModelIten" id='${i}'>
            <div class="modelNameContainer">
                <h2 class="modelstitle">${user.models[i].name}</h2>
            </div>
            <div class="modelTypeContainer">
                <h2 class="modelsdescription">${user.models[i].description}</h2>
            </div>
            <div class="modelFrameworkContainer">
                <h2 class="modelstitle">${user.models[i].framework}</h2>
            </div>
            <div class="modelAccessContainer">
                <h2 class="modelstitle">${user.models[i].acessos}</h2>
            </div>

            <div class='selector'>
        </li>`
        }
    }

    document.getElementById('myModelsList').innerHTML = models
    return user
})

var lista = document.getElementById('myModelsList');

lista.addEventListener("click", function(e){
    document.getElementById("viewContainer").style.display = "flex";
    const model_id = e.target.parentNode.id

    fetch('/data/'+ user_email, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          },
    })
    .then(res => res.json())
    .then(data =>{
        const user = data.user

        document.getElementById('viewContainer').innerHTML = `<div id="vizualizeContainer">
            <div class="importContainerHeader">
                <h1 class="importContainerTitle">Informações do Modelo</h1>
                <div class="closeContainer"  onclick="closeImportModelView()" ><img src="images/closeIcon.svg"></div>
            </div>
            <div class="importContainerBody">
                <div class="modelNameInputContainer" id="modelNameInputContainer">
                    <h1 class="containerTitle"><strong>${user.models[model_id].name}</strong></h1>
                </div>
                <div class="modelDescriptionContainer">
                    <h1 class="containerTitle">Descrição do modelo</h1>
                    <div class="modelDescription">
                        <p>${user.models[model_id].description}</p>
                    </div>
                </div>
                <div class="modelFrameworkContainerView">
                    <h1 class="containerTitle">Framework do modelo</h1>
                    <div class="modelDescriptionAccessFram">
                        <p id="containerBodyFrameworkView">${user.models[model_id].framework}</p>
                    </div>
                </div>
                <div id="accessContainer">
                    <h1 id="accessTitle">Acessos ao modelo</h1>
                    <div class="modelDescriptionAccessFram">
                        <p class="accessNumber">${user.models[model_id].acessos}</p>
                    </div>
                </div>
                <div class="fileInputContainer">
                    <h1 class="containerTitle"> Arquivo do modelo</h1> 
                    <div class="uploadContainer" id="downloadBtnContainer">
                        <button class="btnWarning" id="downloadBtn">
                            <img class="btnWarningImg" src="images/uploadImage.svg" width="20px">Download do arquivo
                        </button>
                    </div>
                </div>
                <div class="importOptionsConttainerView">
                    <button class="importOptionView">Usar</button>
                </div>
            </div>
        </div>`
        //Adicionar o dado do modelo do arquvo
    })
})

function showImportModelView(){
    document.getElementById("viewContainer").style.display = "flex"
    
        document.getElementById('viewContainer').innerHTML = `<div id="importContainer">
    <div class="importContainerHeader">
        <h1 class="importContainerTitle">Informações do Modelo</h1>
        <div class="closeContainer"  onclick="closeImportModelView()" ><img src="images/closeIcon.svg"></div>
    </div>
    <div class="importContainerBody">
        <div id='formNewModel'>
            <div class="fileInputContainer">
                <h1 class="containerTitle"> Arquivo do modelo</h1>
                <div class="uploadContainer">
                    <button class="btnWarning">
                        <img class="btnWarningImg" src="images/uploadImage.svg" width="20px">   Selecione um Arquivo
                        <input type="file" id='modelFileContainer' name='file' required>
                    </button>
                </div>
            </div>

            <div class="modelNameInputContainer">
                <h1 class="containerTitle"> Nome do modelo</h1>
                <input type="text" id="modelNameContainer" required>
            </div>

            <div class="modelDescriptionContainer">
                <h1 class="containerTitle"> Descrição do modelo</h1>
                <textarea required id="modelDescription" maxlength="400" placeholder="Máx.: 400 caracteres"></textarea>
            </div>

            <div class="modelFrameworkContainerView">
                <h1 class="containerTitle">Framework do modelo</h1>
                <select  id="modelFrameworkSelect" required>
                    <option value="0">Selecione um Framework</option>
                    <option value="1">TensorFlow</option>
                    <option value="2">Scikit-Learn</option>
                    <option value="3">Theano</option>
                    <option value="4">Pytorch</option>
                </select>
            </div>
            

            <div class="importOptionsConttainer">
                <button class="importOption" onclick='createModel()'>Criar modelo</button>
            </div>
        </div>
    </div>
</div>`
}

function closeImportModelView(){
    document.getElementById("viewContainer").style.display = "none"
    document.getElementById("importContainer").style.display = "none"
}

function createModel(){
    if (document.getElementById('modelFrameworkSelect').value == 0){
        const framework = 'TensorFlow'
        fetch('http://localhost:3000/auth/newModel', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:user_email,
            model:{
                file:document.getElementById('modelFileContainer').value,
                name:document.getElementById('modelNameContainer').value,
                description: document.getElementById('modelDescription').value,
                framework: framework,
                acessos:0
            }
        }),
    })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                window.location.reload()
            }else{
                alert(data.message)
            }
        })
    
    }else if (document.getElementById('modelFrameworkSelect').value == 1){
        const framework  = 'Scikit-Learn'
        fetch('http://localhost:3000/auth/newModel', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:user_email,
            model:{
                file:document.getElementById('modelFileContainer').value,
                name:document.getElementById('modelNameContainer').value,
                description: document.getElementById('modelDescription').value,
                framework: framework,
                acessos:0
            }
        })})
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                window.location.reload()
            }else{
                alert(data.message)
            }
        })
    
    }else if (document.getElementById('modelFrameworkSelect').value == 2){
        const framework = 'Theano'
        fetch('http://localhost:3000/auth/newModel', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:user_email,
            model:{
                file:document.getElementById('modelFileContainer').value,
                name:document.getElementById('modelNameContainer').value,
                description: document.getElementById('modelDescription').value,
                framework: framework,
                acessos:0
            }
        })})
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                window.location.reload()
            }else{
                alert(data.message)
            }
        })
    
    }else if (document.getElementById('modelFrameworkSelect').value == 3){
        const framework  = 'Pytorch'
        fetch('http://localhost:3000/auth/newModel', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:user_email,
            model:{
                file:document.getElementById('modelFileContainer').value,
                name:document.getElementById('modelNameContainer').value,
                description: document.getElementById('modelDescription').value,
                framework: framework,
                acessos:0
            }
        })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                window.location.reload()
            }else{
                alert(data.message)
            }
        })
    
    }

}




