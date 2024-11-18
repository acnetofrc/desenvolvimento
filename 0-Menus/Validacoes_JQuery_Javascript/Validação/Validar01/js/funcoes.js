
/*

$(function validarForm() {
    var emBranco = 0;
    console.log('Entrei na validação!');

    $("[tag=1]").each(function () {

        if ($(this).val() == '' || $(this).val() == null) {
            emBranco++;
            //            toastr.error('Existem campos obrigatórios em branco!');
            console.log('Existem campos obrigatórios em branco!');
            $(this).css({ 'border': '1px solid salmon' });
            $(this).focus();

            $(this).focus(function () {
                $(this).removeAttr('style');
                //                $(this).next("span").css("display", "inline"); 
            });

            //            $(this).on('focus', function(){
            //                $(this).removeAttr('style');
            //            });
        }

    });

    if (emBranco == 0)
        console.log('Todos os campos obrigatorios estão preenchidos!');


})
*/


$(function validar() {
    $(document).ready(function () {
        $("input").blur(function () {
            if ($(this).val() == "") {
                $(this).css({ "border": "1px solid #F00", "padding": "2px" });
                $(this).focus();
            }
        });
        $("#botao").click(function () {
            var cont = 0;
            $("#form input").each(function () {
                if ($(this).val() == "") {
                    $(this).css({ "border": "1px solid #F00", "padding": "2px" });
                    cont++;
                }
            });
            if (cont == 0) {
                $("#form").submit();
            }
        });
    });

})
