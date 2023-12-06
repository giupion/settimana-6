// documentazione della API, cioé cosa contengono le richieste che mandi, come farle, se servo permessi, quante ne puoi fare e via discorrendo
// https://pokeapi.co/docs/v2#pokemon

document.querySelector("#search").addEventListener("click", getPokemon);
let nome = document.querySelector("#nome");
let id = document.querySelector("#id");
let altezza = document.querySelector("#height");
let peso = document.querySelector("#weight");
let tipo = document.querySelector("#types");
let immagine = document.querySelector("#immagine");


function getPokemon(){
    //legge solo nomi minuscoli perciò gli attacco toLowerCase()
    let name = document.querySelector("#nomePokemon").value.toLowerCase();

    // il metodo fetch fa una richiesta a un certo indirizzo (può essere più complessa di così di default è di tipo GET,
    // in caso di POST, DELETE ed altri tipi di richiesta bisogn specificarlo).

    //then è un metodo usato nelle promise (operazioni asincrone) ma lascio ad Umberto ho già paura di mandarti in confusione
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then((response)=>response.json())
    .then((data)=>{
        //l'oggetto che ti manda l'API, poui vedere tutte le proprietà del pokemon
        console.log(data);
        
        // -----sintassi più corta un po' meno manipolabile lato estetico------
        // document.querySelector(".pokemonBox").innerHTML=`
        // <div>
        // <img src="${data.sprites.other["official-artwork"].front_default}" alt="${name}" width="200px"/>
        // </div>
        // <div class="info">
        //     <h1>${data.name}</h1>
        //     <p>id: ${data.id}</p>
        //     <p>height: ${data.height} dm</p>
        //     <p>weight: ${data.weight} Hg</p>
        //     <p>Type: ${data.types[0].type.name}</p>
        // </div>
        // `;
        //----------------------------------------------------------------------------

        // other['official-artwork'] è una square bracket il " - " mi ipedisce di farlo normalmente
        immagine.src = data.sprites.other['official-artwork'].front_default;
        immagine.alt = data.nome;
        // manipolo il nome del pokemon che mi viene fornito in misnuscolo per metterci l'iniziale maiuscola
        nome.innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        id.innerText = data.id;
        // 'sti deficenti invece di usare il sistema internazionale hanno ben pensato che la massa la forniscono i etti e l'altezza in decimetri pertanto mi tocca convertirli
        altezza.innerText = data.height*10 + " cm";
        peso.innerText = data.weight/10 + " Kg";

        //può avere più di un tipo, infatti data.types è un array di oggetti
        let t = [];
        data.types.forEach(x =>{
            t.push(x.type.name);
            tipo.innerText = t;
        })


        // for(let i=0; i< data.types.len)
        // catch...cattura l'errore eventuale nella chiamata in questo caso se sbagli nome del pokemon
    }).catch((error)=>{
        console.log("Pokemon non trovato",error);
    })
}

getPokemon();