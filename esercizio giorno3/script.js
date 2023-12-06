let i=0;
let form=document.querySelector("#button1")

form.addEventListener('click',() => {

    let nomeinput= document.querySelector('#Form input')

console.log(nomeinput)
 let valoreinput=nomeinput.value;
console.log(valoreinput) 




localStorage.setItem(`nome${i}`,valoreinput)
i++;

    //abbiamo salvato il valore dei dati di select e input  che abbiamo preso come array di 4 elementi, su log appare come una nodelist di 4, e assegniamo a variabili, ci si mette con un div con un id e si prende il discendente dentro 
    
    })

    let form2=document.querySelector("#button2")
    form2.addEventListener('click',() => {
    localStorage.removeItem(`nome${i}`)
    i--;
    
        //abbiamo salvato il valore dei dati di select e input  che abbiamo preso come array di 4 elementi, su log appare come una nodelist di 4, e assegniamo a variabili, ci si mette con un div con un id e si prende il discendente dentro 
        
        })

        let tempo=0 
         setInterval(
          
            function(){
                sessionStorage.setItem( "conteggio",tempo++)
                var timer = sessionStorage.getItem('timer_station');
         },1000)
         let attuale = sessionStorage.getItem("count");
         setInterval(function(){
             localStorage.setItem("count", i++);
             sessionStorage.setItem("count", attuale++);
         },1000);



         let timer = document.querySelector("#timer span")
         let count = sessionStorage.getItem("count");
         setInterval(function(){
             sessionStorage.setItem("count", count)
             timer.innerHTML = count
             count++
             console.log(count)
         },1000);
       
      
         
         let newValue = (tempo ? parseInt(tempo,10) : 0)+1
         
         function scorrere() {
             let timer = document.querySelector(".timer")
             // let tempo = 0;
             let tempo = sessionStorage.getItem("tempo")
         
             let newValue = (tempo ? parseInt(tempo,10) : 0)+1
             sessionStorage.setItem('tempo', newValue)
             timer.innerText = tempo
         }
         setInterval(scorrere, 1000)

/*class Pet{ 
    static count = 0;
    constructor(PokemonName,Trainer,Species,Nature)
    {
    this.PokemonName=PokemonName;
    this.Trainer=Trainer;
    this.Species=Species;
    this.Nature=Nature;
    Pet.count++;
}
confrontaPadrone(padrone){

if(this.Trainer===padrone.Trainer){return true}
else {return false}
}
}
let Pikachu=new Pet("Sparky","Ash","elettroratto","Timida")

let Charmender=new Pet("Zippo","Ash","fuococertola","Decisa")

let Psyduck=new Pet("Psy","Misty","psicopapero","Modesta")

console.log(Pikachu.confrontaPadrone(Charmender))
console.log(Pikachu.confrontaPadrone(Psyduck))
//selezioni con query selector prima il bottone e da qui fai l'event listener, una volta che l'utente ha scritto,
//mettiti in pov dell'utente cosa fa? cosa succede? cosa deve fare il programma? quindi scrive e seleziona poi clicca evento e fai lo storage dei dati ma per farlo prima li devi selezionare, metto in variabile poi d
let Pokemon = document.querySelector('#pokemonForm button');
Pokemon.addEventListener('click', () => {

let pokemonspecifies= document.querySelectorAll('#pokemonForm input, #pokemonForm select')
console.log(pokemonspecifies)

let PokemonName=pokemonspecifies[0].value;
console.log(PokemonName)
let Trainer=pokemonspecifies[1].value;
let Species=pokemonspecifies[2].value;
let Nature=pokemonspecifies[3].value;

//dentro varaibili che poi richiamo nella funzione
let p=new Pet(PokemonName,Trainer,Species,Nature) //oggetto
console.log(p)
listaPoke (p)

pokemonspecifies[0].value='';
pokemonspecifies[1].value='';
pokemonspecifies[2].value='';
pokemonspecifies[3].value='';



//abbiamo salvato il valore dei dati di select e input  che abbiamo preso come array di 4 elementi, su log appare come una nodelist di 4, e assegniamo a variabili, ci si mette con un div con un id e si prende il discendente dentro 

})
//alt96 per fare i backtick``
function listaPoke (p){

let listap=document.querySelector('#listPokemon ul')
let li=document.createElement('li')
li.classList.add("list-group-item");
li.innerHTML=`<strong>Nome</strong> ${p.PokemonName}
<strong>Allenatore</strong>
${p.Trainer}
<strong>Specie</strong>
${p.Species}
<strong>Natura</strong>
${p.Nature}`
listap.appendChild(li);

document.querySelector('#listPokemon h3 span').innerText =Pet.count;
console.log(Pet.count)
}
*/