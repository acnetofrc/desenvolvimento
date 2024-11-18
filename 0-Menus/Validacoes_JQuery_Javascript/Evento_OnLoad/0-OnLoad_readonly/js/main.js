var inputs = new Array();

$('form input').each(function()
{
    inputs.push($(this).val());
    console.log("JQuery");
})



$(document).ready(function(){

    $("#cadastro").click(function(e){
    
        // bloqueando envio do form
        e.preventDefault();
            
        var erros = 0;
            
        // verifica se ha campos vazios
        $("#cadastro input").each(function(){
                
            // conta erros
            $(this).val() == "" ? erros++ : "";
                
        });
            
        // verifica se ha erros
        if(erros > 0 ){
                     
            alert("Existe(em) campo(os) vazio(os) neste fomulário");
                    
        }else{
            //return true;	
            $("#cadastro").submit()
        }		
                
    });
    
});


function pegaValor(){
    var elemento = document.getElementsByName('nameval');
console.log("entrei!");
    for(i=0;i<elemento.length;i++){
       var e = elemento[i];
       alert(e.value);
    }
}

