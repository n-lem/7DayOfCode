// Tu tarea de hoy es reescribir el código a continuación para que imprima la información de manera correcta, que tenga sentido y sin errores:

let numeroUn = 1;
let stringUn = "1";

let numeroTreinta = 30;
let stringTreinta = "30";

let numeroDiez = 10;
let stringDiez = "10";

if (numeroUn == stringUn) {
    // Con el operador == comparo valores sin tener en cuenta el tipo
    // 1 == '1' resulta true porque js convierte el string a número y lo compara
    console.log(
        "Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes"
    );
} else {
    console.log("Las variables numeroUn y stringUn no tienen el mismo valor");
}

if (numeroTreinta === stringTreinta) {
    // Con el operador === comparo tanto el valor de la variable como su tipo
    // 30 === '30' es falso porque son de tipos diferentes
    console.log(
        "Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo"
    );
} else {
    console.log(
        "Las variables numeroTreinta y stringTreinta no tienen el mismo tipo"
    );
}

if (numeroDiez == stringDiez) {
    // Al igual que el primero, con el operador == comparo valores sin tener en cuenta el tipo
    console.log(
        "Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes"
    );
} else {
    console.log(
        "Las variables numeroDiez y stringDiez no tienen el mismo valor"
    );
}

//  Salida

// Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes

// Las variables numeroTreinta y stringTreinta no tienen el mismo tipo

// Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes