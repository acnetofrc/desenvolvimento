
$(function validarForm() {
    var emBranco = 0;
    console.log('Entrei na validação!');
                   
    $("[tag=1]").each(function(){
   
//    $(attr('tag').each(function() {
        
        if($(this).val() == '' || $(this).val() == null)
        {
            emBranco++;
//            toastr.error('Existem campos obrigatórios em branco!');
            console.log('Existem campos obrigatórios em branco!');
            $(this).css({'border': '1px solid salmon'});
            $(this).focus();

            $(this).focus(function() { 
                $(this).removeAttr('style');
//                $(this).next("span").css("display", "inline"); 
            });             

//            $(this).on('focus', function(){
//                $(this).removeAttr('style');
//            });
        }

    });

    if(emBranco == 0)
        console.log('Todos os campos obrigatorios estão preenchidos!');


})


