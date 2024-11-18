/**
* Executa a verificação
*/
function validar(habilita){

    alert(habilita);

    var elemento = document.querySelector("input");

    console.log("entrei!");

    for(i=0;i<elemento.length;i++){
        var e = elemento[i];
    alert(e.value);
    }

}


function valida(habilida){

    var formulario = document.querySelector('form');

    formulario.onsubmit = function(){

        if(!document.querySelector("input[type='text']").value){
        alert("Campo nome vazio!");
        return false;
    }
    
    alert("ok");
    }

}

function pegarValor(valor){

    if((valor==1)){
        let habilita = new Boolean(true);
    } else {
        let habilita = new Boolean(false);
    }

    document.getElementById("mensagem").innerHTML = valor;

    var elemento = document.getElementsByTagName('input');

//    alert("Valor "+valor + " - " + elemento.length, "-" + habilita);    

    let i = 0;
    for(i=0 ; i < elemento.length; i++){
        var e = elemento[i];
        document.getElementById("mensagem").innerHTML = e;

//        if(($(e).querySelector("input[type='text']").value)){
        if( document.querySelector("input").value){

            if(valor==0){
                $(e).attr("readonly", false);
                $(e).attr("disabled", false);
                $(e).attr("value", "....");      
            } else {
                $(e).attr("readonly", true);
                $(e).attr("disabled", true);
                $(e).attr("value", "xxxxxx");      
            }
        }

    }



//       $(e).querySelector("input").style.backgroundColor = "red";       
