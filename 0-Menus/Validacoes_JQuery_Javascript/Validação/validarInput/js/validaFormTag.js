$(document).ready(function () {
    $("#btn1").click(function () {
        var emBranco = 0;

        $("[tag=1]").each(function () {

            if ($(this).val() == '' || $(this).val() == null) {

                showToast('O campo '+ this.id +
                ' é obrigatório!');
                $(this).css({
                    'border': '1px solid salmon'
                });
                $(this).on('focus', function () {
                    $(this).removeAttr('style');
                });
                emBranco++;
            }
        });
        if (emBranco == 0)
            console.log('Todos os campos obrigatorios estão preenchidos!');
    })
})