
function cadastrarPessoas(){

    alert(123)
    
    var p_nome = document.getElementById("nome").value;

/*    

    var p_sobrenome = document.getElementById("sobrenome").value;
    var p_cpf = document.getElementById("cpf").value;
    var p_telefone = document.getElementById("telefone").value;
    var p_endereco = document.getElementById("endereco").value;

    alert(nome);

    var html = "<tr>";
    html += "<td>" + p_nome + "</td>";
    html += "<td>" + p_sobrenome + "</td>";
    html += "<td>" + p_cpf + "</td>";
    html += "<td>" + p_telefone + "</td>";
    html += "<td>" + p_endereco + "</td>";
    html += "</tr>";

    alert(html);
*/

    alert(p_nome);
    alert(p_sobrenome);

    var html = "<tr>";
    html += "<td>" + p_nome + "</td>" + "<td>" + p_sobrenome + "</td>";  
    html += "</tr>";

    console.log(html);
    alert(html)

    document.getElementById("registros").innerHTML += html;

    alert("Cadastro Concluído com Sucesso!!!" + ' ' + html);

}
