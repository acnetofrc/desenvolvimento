
function cadastrarPessoas(){

    var p_nome = $("#nome").val();
    var p_sobrenome = $("#sobrenome").val();
    var p_cpf = $("#cpf").val();
    var p_telefone = $("#telefone").val();
    var p_endereco = $("#endereco").val();

    if(p_nome == ""){
        alert("Informe o nome")
        $("nome").focus();
        return;
    }

    var html = "<tr>";
    html += "<td>" + p_nome + "</td>";
    html += "<td>" + p_sobrenome + "</td>";
    html += "<td>" + p_cpf + "</td>";
    html += "<td>" + p_telefone + "</td>";
    html += "<td>" + p_endereco + "</td>";
    html += "</tr>";

    $("registros").html($("registros").html() + html)
    $(".campo").val("");

    $("#formCadastroPessoas").hide();
    $("#mostrarform").show();

    function mostrarformulario(){
        $("#mostrarform").hide();    
        $("#formCadastroPessoas").show();
    }
}
