$(
    function(){
        $('#usuario').click(
            function(){
                if($(this).val()=='email'){
                    $(this).val('');
                }
            }
        );

        $('#senha').click(
            function(){
                if($(this).val()=='senha'){
                    $(this).val('');
                }
            }
        );

        $('#botao').click(
            function(){
                
                $('#mensagem').slideUp('fast');

                if( $('#usuario').val() == '' || $('#usuario').val() == 'email'){

                    $(mensagem).html('Usuário Inválido!!!');
                    $(mensagem).slideDown('fast');

                } else if ( $('#senha').val() == '' || $('#senha').val() == 'senha'){
                    $(mensagem).html('Senha Inválida!!!').slideDown('fast');

                }                
            }
        );

        $('#mensagem').click(
            function(){
                $(this).slideUp();
            }
        )

    }
);
