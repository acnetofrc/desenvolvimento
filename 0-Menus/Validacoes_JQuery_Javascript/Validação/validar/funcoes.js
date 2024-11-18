
$(function validarForm() {
    var emBranco = 0;
    console.log('Entrei na validação!'); 
    console.log('Vazios: '+emBranco); 

    $("[tag=1]").each(function(){
   
        if($(this).val() == '' || $(this).val() == null)
        {
            emBranco++;
            console.log('Existem campos obrigatórios em branco!');
            $(this).css({'border': '1px solid salmon'});
            $(this).focus();

            $(this).focus(function() { 
                $(this).removeAttr('style');
//                $(this).next("span").css("display", "inline"); 
            });             
        }
        console.log('Vazios: '+emBranco); 

    });

    if(emBranco == 0)
        console.log('Todos os campos obrigatorios estão preenchidos!');


})


