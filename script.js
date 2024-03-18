
var input1 = document.querySelector('textarea#main__input__text');
var input2 = document.querySelector('textarea#main__output__text');

var button1 = document.querySelector('button.btn1');
button1.onclick = encrypt;

var button2 = document.querySelector('button.btn2');
button2.onclick = decrypt;

var button3 = document.querySelector('button.btn3');
button3.onclick = copiarTexto;
//button3.addEventListener('click', function() {
  //  alert('Button was clicked!');
//});

// Função para encriptar//
function encrypt() {
    
    if (input1.value.length == 0) {
     input1.focus();
    } else {
        
        var text = input1.value;
        var txt =  text.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('main__output__text').innerHTML = `${txt}`;
       
    }
}
function decrypt() {
    if (input1.value.length == 0) {
       // document.getElementById('none').innerHTML = ' <h2 id="none">¡nenhuma msn encontrada!</h2>';
      //  document.querySelector('img.icone').style.display;
        input1.focus();
    } else {
        //Limpia el area de texto 2//
       // document.getElementById('none').innerHTML = '';
      //  document.querySelector('img.icone').style.display = 'none';
        document.getElementById('main__input__text').innerHTML = '';

     
        var text = input1.value;
        var txt =  text.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
        // txt = txt.replace(/[áãàâªäåæ]/,"a");
        // txt = txt.replace(/[éêèęėēë]/,"e");
        // txt = txt.replace(/[íîìïi]/,"i");
        // txt = txt.replace(/ç/,"c");

        document.getElementById('main__output__text').innerHTML = `${txt}`;
     
       
    }
}


function copiarTexto() {
    document.querySelector('#main__output__text').select();
    document.execCommand('copy');
    // document.execCommand('cut');
  // message.innerHTML = "O texto copiado esta na area de transferencia!";
    document.querySelector("#main__input__text").value = "";
    // input1.focus();
    // input2.value = "";
}
