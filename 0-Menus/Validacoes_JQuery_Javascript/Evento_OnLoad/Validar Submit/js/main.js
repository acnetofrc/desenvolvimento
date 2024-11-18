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

//    document.getElementById("assunto").style.backgroundColor = "red";
//    document.getElementById("nome").focus();

    
    if((valor==1)){
        let habilita = new Boolean(true);
    } else {
        let habilita = new Boolean(false);
    }

    document.getElementById("mensagem").innerHTML = valor;

    var input = document.getElementsByTagName('input');

    let i = 0;
    for(i=0 ; i < input.length; i++){
        var e = input[i];
//        $(e).querySelector("input").style.backgroundColor = "red";

        document.getElementById("mensagem").innerHTML = e;

        if(valor==0){
            $(e).attr("readonly", false);
//                $(e).attr("disabled", false);
            $(e).attr("value", "....");      
        } else {
            $(e).attr("readonly", true);
//                $(e).attr("disabled", true);
            $(e).attr("value", "xxxxxx");      
        }

    }

    var select = document.getElementsByTagName('select');

    for(i=0 ; i < select.length; i++){
        var e = select[i];
        document.getElementById("mensagem").innerHTML = e;

        if(valor==0 & tag!="0"){
            $(e).attr("readonly", false);
            $(e).attr("value", "....");      
        } else {
            $(e).attr("readonly", true);
            $(e).attr("value", "xxxxxx");      
        }

    }


}