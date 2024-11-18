/**
* Executa a verificação
*/

function pegarValor(valor){

//    document.getElementById("assunto").style.backgroundColor = "red";
//    document.getElementById("nome").focus();
    
/*
    if((valor==1)){
        let habilita = new Boolean(true);
    } else {
        let habilita = new Boolean(false);
    }
*/

//    document.getElementById("mensagem").innerHTML == valor;

    let i = 0;

    var inputs = document.getElementsByTagName('input');

    for(i=0 ; i < inputs.length; i++){
        var e = inputs[i];

        document.getElementById("inputs").innerHTML = e + " -- " + e.length;

        if(valor==0){
            $(e).attr("readonly", true);
            $(e).attr("value", "....");      
        } else {
            $(e).attr("readonly", false);
            $(e).attr("value", "xxxxxx");      
        }

    }
/*
    var selects = document.getElementsByTagName('select');

    for(i=0 ; i < selects.length; i++){
        var e = selects[i];
        document.getElementById("selects").innerHTML = e + "-" + e.length;

        if(valor==0){
            $(e).attr("readonly", false);
            $(e).attr("value", "....");      
        } else {
            $(e).attr("readonly", true);
            $(e).attr("value", "xxxxxx");      
        }

    }
*/

}