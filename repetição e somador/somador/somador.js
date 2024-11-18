//vetor01[i] = Math.floor(Math.random() * 30);

//console.log("Programa carregado e Javascripr reconhecido!\n");

// var i = 0;
// var somador = 0;
// mstr = "";

// setTimeout((10000))

// setTimeout(() => {
//     console.log("Aguardando 5 segundos.");
//     }, "15000"
// );

// executar1();



function executar1() {
    var numero = 0;
    var i = 0;
    var somador = 0;
 
    for (i = 1; i <= 10; i++) {
        numero = Math.floor(Math.random() * 30);
        somador = somador + numero;
        console.log("   Contador " + i + " -Número: " + numero + " =Somador: " + somador);
    }

}

/*

function executar2() {
    var numero = 0;
    var i = 0;
    var somador = 0;
    
    while (i < 10) {
        numero = Math.floor(Math.random() * 30);
        somador = somador + numero;
        console.log("   Contador " + i + " -Número: " + numero + " =Somador: " + somador);
        i++
    }

}

function executar3() {
    var numero = 0;
    var i = 0;
    var somador = 0;
    
    do {
        numero = Math.floor(Math.random() * 30);
        somador = somador + numero;
        console.log("   Contador " + i + " -Número: " + numero + " =Somador: " + somador);
        i++

    } while (i < 10)

}

*/
