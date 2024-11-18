/*

document.addEventListener('DOMContentLoaded', function(){

    let fields = document.querySelectorAll('.fields');

    fields.forEach(function(element){
        let input = element.querySelector('.input');
        let highlight = element.querySelector('.highlight');

        input.addEventListener('keyup', function() {
            let value = this.value;
            highlight.innerHTML = value;
        });
    })
});
*/


$(document).ready(function(){

    $("#cadastro").click(function(e){
    
        // bloqueando envio do form
        e.preventDefault();
        alert("Entrei");
            
        var erros = 0;
            
        // verifica se ha campos vazios
        $("#index input").each(function(){
                
            // conta erros
            $(this).val() == "" ? erros++ : "";
            alert("Passei...");
                
        });
            
        // verifica se ha erros
        if(erros > 0 ){
                     
            alert("Existe(em) campo(os) vazio(os) neste fomulário");
                    
        }else{
            //return true;	
            $("#form1").submit()
        }		
                
        });
    
    });

