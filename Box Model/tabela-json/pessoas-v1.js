
function carregar() {

//    var carros = JSON.parse('{"nome":"Angelo", "idade":86, "cidade":"São Paulo", "estado":"SP"}')
//    var carros = JSON.parse('{"nome":"Angelo", "idade":86, "cidade":"São Paulo", "estado":"SP"}')

//    var pessoas = JSON.parse('{"cod": 33, "nome": "Fulano Silva", "idade": 27, "cod": 2, "nome": "Ciclano Almeida", "idade": 32 , "cod": 7, "nome": "José de Assis","idade": 97}')
    var pessoas = ('{"cod": 33, "nome": "Fulano Silva", "idade": 27, "cod": 2, "nome": "Ciclano Almeida", "idade": 32 , "cod": 7, "nome": "José de Assis","idade": 97}')    

    console.log(pessoas)
    console.log(pessoas.nome[0])
    console.log(pessoas.length)

    const container = document.querySelector('#pessoas-container');

    for(var i=0; (i<pessoas.length); i++){
        const p = document.createElement("div");
        p.classList.add("p");

        const titulo = document.createElement("h3");
        titulo.textContent = pessoa.nome;

        card.appendChild(pessoa.cod);
        card.appendChild(pessoa.nome);
        container.appendChild(pessoa.idade);
        console.log("Pessoas " + i)

    }



                    
}
               
function xxxcarregar() {

    // $.getJSON("carros.json", function(data) {
    //     var bands = data.bands;    


    fetch('carros.json')
        .then(response => response.json())
        .then(carros =>{
            const container = document.querySelector('#carros-container');

            carros.map(carro=>{

                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");

                img.src = carro.imagem;

                img.alt = carro.nome;

                const titulo = document.createElement("h3");
                titulo.textContent = carro.nome;

                card.appendChild(img);
                card.appendChild(titulo);
                container.appendChild(card);
            })
            
        })

        
}
