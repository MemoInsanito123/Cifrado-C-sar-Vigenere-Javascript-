const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];  

//Ajusta la longitud de la clave para que sea igual a la longitud de la palabra
function wordKeyLength(word, key){
    let wordWithoutSpaces = '';
    let keyWithoutSpaces = '';

    //Convertir en minisculas
    word = word.toLowerCase();
    key = key.toLowerCase();

    word = word.split(' ');
    key = key.split(' ');

    //Verificar si hay espacios entre las palabras, si existe algun espacio eliminarlo
    word.forEach(element => {
        wordWithoutSpaces += element;
    });

    key.forEach(element => {
        keyWithoutSpaces += element
    });

    //Verificar si la longitud de las palabras es identica
    if(wordWithoutSpaces.length === keyWithoutSpaces.length){
        console.log('Longitud Igual');
    }
    else{

        //Longitud de la palabra es mayor que la clave
        if(wordWithoutSpaces.length > keyWithoutSpaces.length){

            console.log('Longitud de la palabra mayor a la clave');

            let arrayKey = keyWithoutSpaces.split('');
            let lengthKey = keyWithoutSpaces.length;
            let indexCounter = 0;

            while(lengthKey < wordWithoutSpaces.length){
                    
                keyWithoutSpaces = keyWithoutSpaces + arrayKey[indexCounter];

                lengthKey = keyWithoutSpaces.length;

                indexCounter ++;

                if(indexCounter == arrayKey.length){
                    indexCounter = 0;
                }

                console.log(keyWithoutSpaces);

            }

        }
        //Longitud de la clave es mayor que la palabra
        else{
            console.log('Longitud de la clave mayor a la palabra');
            
            keyWithoutSpaces = keyWithoutSpaces.slice(0, wordWithoutSpaces.length);

            console.log(keyWithoutSpaces)

        }
    }

    return [wordWithoutSpaces, keyWithoutSpaces];
}
//Cifrar a partir de la palabra y la clave
function vigenereCipher0(word, key){
    let cipher = '';

    let index1 = [];
    let index2 = [];
    let index3 = [];
    let sum = 0;

    for(let i of word){
        index1.push(alphabet.indexOf(i));
    }
    
    for(let i of key){
        index2.push(alphabet.indexOf(i));
    }

    for(let i = 0; i < word.length; i++){
        sum = (index1[i] + index2[i]) % alphabet.length;
        index3.push(sum);
    }

    for(let i of index3){
        cipher += alphabet[i];
    }

    return cipher;
}
//Descifrar a partir de la palabra y la clave
function vigenereCipher1(word, key){
    let cipher = '';

    let index1 = [];
    let index2 = [];
    let index3 = [];
    let sum = 0;

    for(let i of word){
        index1.push(alphabet.indexOf(i));
    }
    
    for(let i of key){
        index2.push(alphabet.indexOf(i));
    }

    for(let i = 0; i < word.length; i++){
        sum = (index1[i] - index2[i]) % alphabet.length;
        index3.push(sum);
    }

    for(let i of index3){
        cipher += alphabet[i];
    }

    return cipher;
}


