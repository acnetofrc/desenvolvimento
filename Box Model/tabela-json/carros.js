
function carregar() {

//    var carros = JSON.parse('{"nome":"Angelo", "idade":86, "cidade":"São Paulo", "estado":"SP"}')
//    var carros = JSON.parse('{"nome":"Angelo", "idade":86, "cidade":"São Paulo", "estado":"SP"}')

    var carros = JSON.parse('{"cod": 33, "nome": "Fulano Silva", "idade": 27, "cod": 2, "nome": "Ciclano Almeida", "idade": 32 , "cod": 7, "nome": "José de Assis","idade": 97}')
    
    // var carros = JSON.parse('{
    //         // {
    //             "id": 33,
    //             "nome": "Fulano Silva",
    //             "idade": 27,
    //             "id": 2,
    //             "nome": "Ciclano Almeida",
    //             "idade": 32
    //             "id": 7,
    //             "nome": "José de Assis",
    //             "idade": 97
    //         }')
    console.log(carros)
    console.log(carros.nome)
//    console.log(carros.length)
        const container = document.querySelector('#carros-container');

//            carros.map(carro=>{

                const card = document.createElement("div");
                card.classList.add("card");

                const titulo = document.createElement("h3");
                titulo.textContent = carros.nome;

                card.appendChild(carros.cod);
                card.appendChild(carros.nome);
                container.appendChild(carros.idade);
//            })
            
        
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
