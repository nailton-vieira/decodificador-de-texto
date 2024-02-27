
var input1 = document.querySelector('textarea#main__input__text');
var input2 = document.querySelector('textarea#main__output__text');

var button1 = document.querySelector('button.btn1');
button1.onclick = encrypt;

var button2 = document.querySelector('button.btn2');
//button2.onclick = decrypt;


// Função para encriptar//
function encrypt() {
    
    if (input1.value.length == 0) {
      //  document.getElementById('none').innerHTML = '<h2 id="none">c</h2>';
        input1.focus();
    } else {
        //limpiar el area de texto 2(desencriptar)//
       // document.getElementById('none').innerHTML = '';
       // document.querySelector('img.icone').style.display = 'none';

        //claves para encriptar 
        var text = input1.value;
        var txt =  text.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('main__output__text').innerHTML = `${txt}`;
       
        // El botón Copiar se muestra en la pantalla cuando se llama a la función cifrar()// 
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
       
    }
}