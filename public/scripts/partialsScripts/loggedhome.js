const user = JSON.parse(localStorage.getItem('usuario'))
var i;

console.log(user.networking)

if(user.networking == undefined || user.networking.length == 0){
    document.getElementById('networkingBody').innerHTML = `<div class='networkingPopupContainer'><h1 class='networkingPopupTitle'>Faça novos networkings</h1><p class='networkingPopupText'>Escolha entre usuários cadastrados, troque modelos e continue expandindo as pesquisas</p><a class='networkingPopupLink' href='http://localhost:3000/Welcome?View=Comunidade'>Procurar usuários</a></div>`
}else{
    document.getElementById('networkingBody').innerHTML = '<ul id="usersList"></ul>';
    for(i=0 ; i < user.networking.length ; i++){
        if(i!=0){
            var networking = networking + `<li class="userContainer"><a class= 'myModelItenLink' href='http://localhost:3000/Welcome?View=Comunidade'><div class="profileImgContainer">${user.networking[i].name[0]}</div><div class="userDataContainer"><h3 class="userDataName">${user.networking[i].name}</h3><h1 class="userDataModels">${user.networking[i].models.length} Modelos</h1></div><div class="deleteContainer"><a href="#"></a></div></a></li>`
        }else{
            var networking = `<li class="userContainer"><a class= 'myModelItenLink' href='http://localhost:3000/Welcome?View=Comunidade'><div class="profileImgContainer">${user.networking[i].name[0]}</div><div class="userDataContainer"><h3 class="userDataName">${user.networking[i].name}</h3><h1 class="userDataModels">${user.networking[i].models.length} Modelos</h1></div><div class="deleteContainer"><a href="#"></a></div></a></li>`
        }
    }

    document.getElementById("usersList").innerHTML = networking
}

if(user.models == undefined || user.models.length == 0){
    document.getElementById('chartsBody').innerHTML = `<div class='chartsPopupContainer'><h1 class='chartsPopupTitle'>Importe novos modelos</h1><p class='chartsPopupText'>Use a ferramenta de importação de modelos para realizar uma nova importação de modelos para a plataforma</p><a class='chartsPopupLink' href='http://localhost:3000/Welcome?View=Meus_Modelos'>Importar modelos</a></div>`
    document.getElementById('myModelsBody').innerHTML = `<div class='modelsPopupContainer'><h1 class='modelsPopupTitle'>Importe novos modelos</h1><p class='modelsPopupText'>Use a ferramenta de importação de modelos para realizar uma nova importação de modelos para a plataforma</p><a class='modelsPopupLink' href='http://localhost:3000/Welcome?View=Meus_Modelos'>Importar modelos</a></div>`
}else{
    document.getElementById('chartsBody').innerHTML = `<canvas id="myChart"></canvas>`
    var labels = []
    var datas = []
    for(i=0 ; i<user.models.length ; i++){
        labels.push(user.models[i].name);
        datas.push(user.models[i].acessos)
    }
    const ctx = document.getElementById('myChart');
    const dataChart = {
        labels: labels,
        datasets:[{
            label: 'Acessos',
            data: datas,
            fill: false,
            borderColor: '#CF5522',
            yAxisID: 'yAxis'
        }]
    }
    Chart.defaults.maintainAspectRatio = false;
    Chart.defaults.plugins.legend.display = false;
    const config = {
        type: 'line',
        data: dataChart,
        options:{
            elements:{
                point:{
                    backgroundColor: '#CF5522'
                }
            },
            maintainAspectRatio: false,
            plugins:{
                legend: {
                    display: false
                }
            },
            scales:{
                x:{
                    grid:{
                        display:false
                    }
                },
            },
            
        }
    }
    new Chart( ctx, config)
    
    document.getElementById('myModelsBody').innerHTML = `<div id="myModelsBodyHeader"><div class="modelNameContainer"><h2 class="modelsBHtitle">Nome</h2></div><div class="modelTypeContainer"><h2 class="modelsBHtitle">Descrição</h2></div><div class="modelFrameworkContainer"><h2 class="modelsBHtitle">Framework</h2></div><div class="modelAccessContainer"><h2 class="modelsBHtitle">Acessos</h2></div></div><div id="myModelsListContainer"><ul id="myModelsList"></ul></div>`
    for(i=0 ; i < user.models.length ; i++){
        if(i!=0){
            var models = models + `<li class="myModelIten">
            <a class= 'myModelItenLink' href='http://localhost:3000/Welcome?View=Meus_Modelos'>
            <div class="modelNameContainer">
                <p class="modelstitle">${user.models[i].name}</p>
            </div>
            <div class="modelTypeContainer">
                <p class="modelsdescription">${user.models[i].description}</p>
            </div>
            <div class="modelFrameworkContainer">
                <p class="modelstitle">${user.models[i].framework}</p>
            </div>
            <div class="modelAccessContainer">
                <p class="modelstitle">${user.models[i].acessos}</p>
            </div>
            </a>
        </li>`
        }else{
            var models = `<li class="myModelIten">
            <a class= 'myModelItenLink' href='http://localhost:3000/Welcome?View=Meus_Modelos'>
            <div class="modelNameContainer">
                <p class="modelstitle">${user.models[i].name}</p>
            </div>
            <div class="modelTypeContainer">
                <p class="modelsdescription">${user.models[i].description}</p>
            </div>
            <div class="modelFrameworkContainer">
                <p class="modelstitle">${user.models[i].framework}</p>
            </div>
            <div class="modelAccessContainer">
                <p class="modelstitle">${user.models[i].acessos}</p>
            </div>
            </a>
        </li>`
        }
    }
    document.getElementById("myModelsList").innerHTML = models
} 
  


