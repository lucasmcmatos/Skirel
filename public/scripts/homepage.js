header = document.getElementById('header');
iconPlace = document.getElementById('iconPlace');
buttonsPlace = document.getElementById('buttonsPlace');
buttonBox0 = document.getElementsByClassName('buttonBox')[0];
buttonBox1 = document.getElementsByClassName('buttonBox')[1];
buttonBox2 = document.getElementsByClassName('buttonBox')[2];
buttonBox3 = document.getElementsByClassName('buttonBox')[3];
buttonBox4 = document.getElementsByClassName('buttonBox')[4];
buttonBox5 = document.getElementsByClassName('buttonBox')[5];
buttonBox6 = document.getElementsByClassName('buttonBox')[6];
showerBtn = document.getElementById('showerBtn');
home = document.getElementById('home');

function showerf(){
    header.style.flexDirection = 'column';
    header.style.height = '450px';
    iconPlace.style.display = 'flex';
    buttonsPlace.style.marginTop = '10px';
    buttonsPlace.style.height = '320px';
    buttonBox0.style.display = 'flex';
    buttonBox1.style.display = 'flex';
    buttonBox2.style.display = 'flex';
    buttonBox3.style.display = 'flex';
    buttonBox4.style.display = 'flex';
    buttonBox5.style.display = 'flex';
    home.style.paddingTop = '340px';
    home.style.height = '1100px';

    buttonBox0.style.marginBottom = '20px';
    buttonBox1.style.marginBottom = '20px';
    buttonBox2.style.marginBottom = '20px';
    buttonBox3.style.marginBottom = '10px';
    buttonBox4.style.marginBottom = '10px';
    buttonBox5.style.marginBottom = '20px';

    setTimeout(
        ()=>{
            showerBtn.setAttribute('onclick' , 'showerT()');
        }, 450
    )
        
}

function showerT(){
    header.style.flexDirection = 'row';
    header.style.height = '76px';
    iconPlace.style.display = 'none';
    buttonsPlace.style.marginTop = '0px';
    buttonsPlace.style.height = '100%';
    buttonBox0.style.display = 'none';
    buttonBox1.style.display = 'none';
    buttonBox2.style.display = 'none';
    buttonBox3.style.display = 'none';
    buttonBox4.style.display = 'none';
    buttonBox5.style.display = 'none';
    home.style.paddingTop = '80px';

    buttonBox0.style.marginBottom = '0px';
    buttonBox1.style.marginBottom = '0px';
    buttonBox2.style.marginBottom = '0px';
    buttonBox3.style.marginBottom = '0px';
    buttonBox4.style.marginBottom = '0px';
    buttonBox5.style.marginBottom = '0px';

    setTimeout(
        ()=>{
            showerBtn.setAttribute('onclick' , 'showerf()');
        }, 450
    )
}

function correctButton(){
    document.getElementById('burger').checked = false;
}


// Recarregar a pagina quando usar o 'back' do Browser
window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      window.location.reload();
    }
  });
// Recarregar a pagina quando usar o 'back' do Browser