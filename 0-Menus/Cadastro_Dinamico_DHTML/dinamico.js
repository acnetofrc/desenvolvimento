
function cadastrarPessoas(){

    var p_nome = document.getElementById("nome").value;
    var p_sobrenome = document.getElementById("sobrenome").value;
    var p_cpf = document.getElementById("cpf").value;
    var p_telefone = document.getElementById("telefone").value;
    var p_endereco = document.getElementById("endereco").value;


    if(p_nome == ""){
        alert("Informe o nome")
        document.getElementById("nome").focus();
        return;
    }

    var html = "<tr>";
    html += "<td>" + p_nome + "</td>";
    html += "<td>" + p_sobrenome + "</td>";
    html += "<td>" + p_cpf + "</td>";
    html += "<td>" + p_telefone + "</td>";
    html += "<td>" + p_endereco + "</td>";
    html += "</tr>";

    document.getElementById("registros").innerHTML += html;

    document.getElementById("nome").focus();

}
