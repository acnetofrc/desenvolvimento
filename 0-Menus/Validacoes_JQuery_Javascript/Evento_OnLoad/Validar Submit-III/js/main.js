/**
* Executa a verificação
*/

function pegarValor(valor){

    let i = 0;

    var inputs = document.getElementsByTagName('input');

    for(i=0 ; i < inputs.length; i++){
        var e = inputs[i];

        if(valor==0){
            $(e).attr("readonly", true);
            $(e).attr("value", "....");      
        } else {
            $(e).attr("readonly", false);
            $(e).attr("value", "xxxxxx");      
        }

    }

}

$(document).ready(function() {

//    alert("DOM carregado!"); 

    let i = 0;

    var elemento = document.getElementsByTagName('a');
    var total = elemento.length;    
//    alert('Temos ' + total + ' Elementos link na página');    

    var links = document.getElementsByTagName('a');
    for(var x = 0; x < links.length; x++){
        links[x].setAttribute('aria-disabled', false);
    }

    var buttons = document.getElementsByClassName('Button');
    for(var p = 0; p < buttons.length; p++){
        buttons[p].setAttribute("aria-disabled", true);
    }
    
    
    for(i=0 ; i < total; i++){
//        alert('Elemento ' + i);    

        var e = elemento[i];
        $(e).attr("href", '');
        $(e).setAttribute = function(){return false};


//        $(e).setAttribute("disabled", false);



/*

        $(e).attr("aria-disabled", true);
//        $(e).setAttribute("aria-disabled", false);
        $(e).attr("href", '');
        $(e).attr("value", "..");
        $(e).href = "#";
//        alert('Link: ' + $(e).getElementsById);    

//        $(e).setAttribute("href", '"#"');
//        document.getElementById("aaa").href="arquivo.css"

        elemento[i].classList.toggle("disabled");

        document.getElementByTagName('a').onload = function(){return false};
        

//        document.getElementById('link').onclick = function(){return false};
//        document.getElementById("myLink").disabled = true;
*/

    }
    
});

//window.onload = function(){
//    document.getElementByTagName('a') = function(){return false};
//}

function desabilitar_link(){
    document.getElementById('link').innerHTML = "Link desabilitado";
    document.getElementById('link').style.color = "grey";                 
}
