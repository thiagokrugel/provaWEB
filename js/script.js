function validar(){
    var name = document.getElementById("name");
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    var address = document.getElementById("address");
    var cpf = document.getElementById("cpf");
    
    
    if(name.value.length == 0 || login.value.length == 0 || password.value.length == 0 || address.value.length == 0 || cpf.value.length == 0) {
        alert("Todos os campos são obrigatórios!");
    }

    else{
        alert("Cadastro finalizado com sucesso!");
        window.location.replace("index.html");
    }
}

var listaMusicas = [[0, "Hoshi to Hana", "ホシトハナ", "Haruka Terui, Mimori Suzuko, Yumi Uchiyama, Tomoyo Kurosawa, Juri Nagatsuma", "https://www.youtube.com/watch?v=yA7BzjINVlI", "4:20"], [1, "Hanakotoba", "ハナコトバ", "Haruka Terui, Mimori Suzuko, Yumi Uchiyama, Tomoyo Kurosawa, Juri Nagatsuma, Kana Hanazawa", "https://www.youtube.com/watch?v=nmCDtsc3fvc", "4:19"], [2, "Ashita no Hanatachi", "アシタノハナタチ", "Haruka Terui, Mimori Suzuko, Yumi Uchiyama, Tomoyo Kurosawa, Juri Nagatsuma, Kana Hanazawa", "https://www.youtube.com/watch?v=cbbPaUb5tXk", "4:17"], [3, "Sakiwafu Hana", "サキワフハナ", "Mimori Suzuko", "https://www.youtube.com/watch?v=V9gs86Bsi74", "4:14"], [4, "Egao no Kimi e", "エガオノキミヘ", "Mimori Suzuko", "https://www.youtube.com/watch?v=jjBUsyW3utY", "3:57"]]

window.onload = function(){
    tabelaMusicas();
}

function tabelaMusicas(){

    for(var i = 0; i < listaMusicas.length; i++){       
        var tabela = "";
        tabela += "<table>";
        tabela += "<tr>";
        tabela += "<th>Título</th>";
        tabela += "<th>Título (japonês)</th>";
        tabela += "<th>Artista</th>";
        tabela += "<th>Link</th>";
        tabela += "<th>Duração</th>";
        tabela += "</tr>";
        tabela += "<tr>";
        tabela += "<td>";
        tabela += listaMusicas[i][1];
        tabela += "</td>";
        tabela += "<td>";
        tabela += listaMusicas[i][2];
        tabela += "</td>";
        tabela += "<td>";
        tabela += listaMusicas[i][3];
        tabela += "</td>";
        tabela += "<td>";
        tabela += listaMusicas[i][4];
        tabela += "</td>";
        tabela += "<td>";
        tabela += listaMusicas[i][5];
        tabela += "</td>";
        tabela += "</tr>";       
        tabela += "</table>";

        document.getElementById("divMusicas").innerHTML += tabela;
    }
}