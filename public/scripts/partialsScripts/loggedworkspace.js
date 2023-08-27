function showinformations(){
    
        document.getElementsByClassName('subtitlecontent')[0].style.display = 'block'
        document.getElementsByClassName('subtitlecontent')[1].style.display = 'block'
        document.getElementsByClassName('subtitlecontent')[2].style.display = 'block'
        document.getElementById('limitationscontainer').setAttribute('onclick', 'hiddeinformations()')
        document.getElementById('howtousecontainer').setAttribute('onclick', 'hiddeinformations()')
    
    }

function hiddeinformations(){
    document.getElementsByClassName('subtitlecontent')[0].style.display = 'none'
    document.getElementsByClassName('subtitlecontent')[1].style.display = 'none'
    document.getElementsByClassName('subtitlecontent')[2].style.display = 'none'
    document.getElementById('limitationscontainer').setAttribute('onclick', 'showinformations()')
    document.getElementById('howtousecontainer').setAttribute('onclick', 'showinformations()')
}

document.getElementById('uploadData').addEventListener('submit', async (e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', document.getElementById('file').files[0])
    formData.append('data', document.getElementById('data').files[0])

    document.getElementById

    fetch('http://localhost:5000/upload',{
        method: 'POST',
        body: formData
    })
    .then(res => {
        if(res.status == 200){
            alert('Predição concluida, click para baixar o resultado.')
            return res.blob()
        }else{
            alert('Houve algum erro na predição, verifique os arquivos enviados.')
        }
    })
    .then(blob =>{ 

        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'resultado_da_predição.xlsx';
        a.textContent = 'Baixar o resultado'
        a.className = 'modelSubmit'

        document.getElementById('bodyContainerModels').innerHTML= '';
        document.getElementById('bodyContainerModels').appendChild(a)

    })
    .catch(err => {
        alert('Houve um erro para entrar em contato com o Backend.')
        console.log(err)
    })
})

function downloadFile(){
    
    window.location.href = "http://localhost:5000/download"; 
    
}

const containerItem = document.querySelectorAll('.containerItem');

containerItem.forEach(element =>{


    element.addEventListener('mouseover', function(event) {
        const popup = document.getElementsByClassName('popup')[element.id];
        popup.style.height = '80px';
        popup.style.paddingLeft = '20px';
        popup.style.paddingRight = '20px';
        popup.style.paddingTop = '10px';
        popup.style.paddingBottom = '10px';
        element.style.height = '100px'
    });

    element.addEventListener('mouseout', function() {
        document.getElementsByClassName('popup')[element.id].style.height = '0px';
        document.getElementsByClassName('popup')[element.id].style.padding = '0px';
        element.style.height = '40px'
    });

})
