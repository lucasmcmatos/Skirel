const user = JSON.parse(localStorage.getItem('usuario'));
const userEmail = localStorage.getItem('user-email');
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

if(models == undefined){
    document.getElementById('myModelsList').innerHTML = ''
}else{
    document.getElementById('myModelsList').innerHTML = models
}

var lista = document.getElementById('myModelsList');

lista.addEventListener("click", function(e){
    document.getElementById("viewContainer").style.display = "flex";
    const model_id = e.target.parentNode.id;
    
    document.getElementById('viewContainer').innerHTML = `<div id="vizualizeContainer">
        <div class="importContainerHeader">
            <h1 class="importContainerTitle">Informações do Modelo</h1>
            <div class="closeContainer"  onclick="closeImportModelView()" ><img src="images/closeIcon.svg"></div>
        </div>
        <div class="importContainerBody">
            <div class="modelNameInputContainer" id="modelNameInputContainer" id2='${model_id}'>
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
                <h1 id="accessTitle">Downloads do modelo</h1>
                <div class="modelDescriptionAccessFram">
                    <p class="accessNumber">${user.models[model_id].acessos}</p>
                </div>
            </div>
            <div class="fileInputContainer">
                <h1 class="containerTitle"> Arquivo do modelo</h1> 
                <div class="uploadContainer" id="downloadBtnContainer">
                    <button class="btnWarning" id="downloadBtn" onclick='downloadModel(${model_id})'>
                        <img class="btnWarningImg" src="images/downloadImage.svg" width="20px">Download do arquivo
                    </button>
                </div>
            </div>
            <div class="importOptionsConttainerView">
                <button class="importOptionView" id='deletebutton' onclick="deleteModel(${model_id})">Deletar</button>
            </div>
        </div>
    </div>`
})   

function showImportModelView(){
    document.getElementById("viewContainer").style.display = "flex"
    
        document.getElementById('viewContainer').innerHTML = `<div id="importContainer">
    <div class="importContainerHeader">
        <h1 class="importContainerTitle">Informações do Modelo</h1>
        <div class="closeContainer"  onclick="closeImportModelView()" ><img src="images/closeIcon.svg"></div>
    </div>
    <div class="importContainerBody">
        <form id='formNewModel' action="/auth/uploadfile" method="post" enctype="multipart/form-data">
            <div class="fileInputContainer">
                <h1 class="containerTitle"> Arquivo do modelo</h1>
                <div class="uploadContainer">
                    <button class="btnWarning">
                        <img class="btnWarningImg" src="images/uploadImage.svg" width="20px">   Selecione um Arquivo
                        <input type="file" id='modelFileContainer' name='modelfile' accept='.pkl , .h5' required>
                    </button>
                </div>
            </div>

            <div class="modelNameInputContainer">
                <h1 class="containerTitle"> Nome do modelo</h1>
                <input type="text" id="modelNameContainer" name='modelname' required>
            </div>

            <div class="modelDescriptionContainer">
                <h1 class="containerTitle"> Descrição do modelo</h1>
                <textarea required id="modelDescription" name='modeldescription' maxlength="400" placeholder="Máx.: 400 caracteres"></textarea>
            </div>

            <div class="modelFrameworkContainerView">
                <h1 class="containerTitle">Framework do modelo</h1>
                <select  id="modelFrameworkSelect" name='modelframework' required>
                    <option value="0">Selecione um Framework</option>
                    <option value="Tensorflow">TensorFlow</option>
                    <option value="Scikit-learn">Scikit-Learn</option>
                </select>
            </div>
        
            <div class="importOptionsConttainer">
                <button class="importOption" type='submit'>Criar modelo</button>
            </div>
        </form>
    </div>
</div>`

document.getElementById('formNewModel').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    formData.append('user_id',user.user_id);

    fetch('/auth/uploadfile', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message)
        localStorage.removeItem('paginaRecarregada')
        if(data.success){
            window.location.reload();
        }
    })
    .catch(error => {
        alert('Erro no upload:', error);
        console.log(error)
    });
});
}

function closeImportModelView(){
    document.getElementById("viewContainer").style.display = "none";
}

function downloadModel(model_id){
    let model_name = user.models[model_id].name
    let s3 = `${user.user_id}/${model_name}`

    fetch(`/getSignedUrl?s3=${s3}&model_id=${model_id}`)
    .then(response => response.json())
    .then(data => {
        const signedUrl = data.signedUrl;
        window.location.href = signedUrl; // Isso iniciará o download
    })
    .catch(error => {
        console.error("Erro ao obter URL pré-assinada:", error);
    });
}

function deleteModel(model_id){
    let model_name = user.models[model_id].name
    let s3 = `${user.user_id}/${model_name}`

    fetch(`/deleteModel?s3=${s3}&model_id=${model_id}`)
    .then(response => response.json())
    .then(data => {
        alert(data.message)
        localStorage.removeItem('paginaRecarregada')
        if(data.success){
            window.location.reload();
        }else{
            console.log(data.error)
        }
    })
    .catch(error => {
        console.error("Erro ao obter URL pré-assinada:", error);
    });

}



