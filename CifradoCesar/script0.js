
const input0 = document.getElementById('wordInput00');
const input1 = document.getElementById('keyInput00');

const input2 = document.getElementById('wordInput01');
const input3 = document.getElementById('keyInput01');



function sayHi(event){

    event.preventDefault();

    let input0Value = input0.value;
    let input1Value = input1.value;

    let [wordFinal, keyFinal] = wordKeyLength(input0Value, input1Value);

    let cipher = vigenereCipher0(wordFinal, keyFinal);
    
    createElement(cipher);
}

function sayBye(event){
    event.preventDefault();

    let input0Value = input2.value;
    let input1Value = input3.value;

    let [wordFinal, keyFinal] = wordKeyLength(input0Value, input1Value);

    let cipher = vigenereCipher1(wordFinal, keyFinal);
    
    createElement(cipher);

}


function createElement(text){

    let container = document.getElementById('contenedorFormulario2');
    let element0 = document.createElement('p');
    
    element0.textContent = text;

    container.appendChild(element0);

}