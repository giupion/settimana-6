// Varibili JS
let var1 = 'testo';
let var2 = 25;
let var3 = true;
let var4 = [25, 9, 6, 12, 18]; // Array
let var5 = {}; // Oggetto
let var6 = undefined;
let var7 = null;

// Funzioni JS
// dichiarazione di funzione
func1();
function func1(params) {
    // blocco di istruzioni
    return params; // ritorno un valore
}
func1();

// funzione espressione
// func2(); // Errore
let func2 = function(params) {
    // blocco di istruzioni
    return params; // ritorno un valore
}
func2();

// Arrow Function
let func3 = (params) => {
    // blocco di istruzioni
    return params; // ritorno un valore
}
func3();

// Funzioni autoinvocanti
(function() {
    console.log("Sono una funzione anonima!!!")
})()

// funzione di callback
function call(name) {
    return "Sono una funzione di callback di nome " + name;
}

function sum(num) {
    return num + Math.floor(Math.random() * 10);
}

function miaFunc(v, f) {
    console.log(f(v));
}

miaFunc('abc', call);
miaFunc(25, sum);


function itera(n, i) {
    console.log(i + ": " + n);
}

var4.forEach(itera)

console.log("--------")

var4.forEach((n, i) => {
    console.log(i + ": " + n);
})


// Object Js
let obj1 = {
    name: 'Mario',
    "last name": "Rossi",
    city: "Roma",
    2: "occhi",
    saluta: function () {
        return this.name + " " + this.city;
    }
}

console.log(obj1);
console.log(obj1.name); // dot notation
console.log(obj1['name']);
console.log(obj1["last name"]); 
console.log(obj1[2])
console.log(obj1.saluta())


let fiat500 = {
    marca: 'Fiat',
    modello: '500',
    alimentazione: 'benzina',
    colore: 'Rosso'
}

let fordFiesta = {
    marca: 'Ford',
    modello: 'Fiesta',
    porte: 3,
    colore: 'blu'
}

let mercedesSmart = {
    marca: 'Mercedes',
    modello: 'Smart',
    colore: 'Nero',
    cambio: 'automatico'
}

// Prototipo JS
function Auto(marca, modello, colore) {
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
}

let cinquecento = new Auto('Fiat', '500', 'Rosso');
let fiesta = new Auto('Ford', 'Fiesta', 'blu');
let smart = new Auto('Mercedes', 'Smart', 'nero');

let arr = [cinquecento, fiesta, smart];

Auto.prototype.info = function () {
    return this.marca + " " + this.modello + " " + this.colore;
}

Auto.prototype.ruote = 4;

smart.cambio = 'automatico';


arr.forEach(obj => console.log(obj.info()))

console.log(cinquecento.info());
console.log(fiesta.info());
console.log(smart.info()); 

console.log(cinquecento.marca);
console.log(fiesta.marca);
console.log(smart.marca);

// Classi in JS
// Ereditarietà 

class AutoClass {
    constructor(marca, modello, colore) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
}

let c = new AutoClass('Fiat', '500', 'Rosso');
let f = new AutoClass('Ford', 'Fiesta', 'blu');
let s = new AutoClass('Mercedes', 'Smart', 'nero');

AutoClass.prototype.info = function () {
    return this.marca + " " + this.modello + " " + this.colore;
}

console.log(c);
console.log(f);
console.log(s);

class Persona {

    static conta = 0;

    constructor(nome, cognome, citta, anni) {
        this.nome = nome;
        this.cognome = cognome;
        this.citta = citta;
        this.anni = anni;
        Persona.conta++;
    }

    confronta(p) {
        if(p.anni > this.anni) {
            return p.name + ' è più vecchio di ' + this.name;
        } else {
            return p.name + ' è più giovane di ' + this.name;
        }
    }

    compleanno() {
        this.anni++;
    }

    saluta() {
        return 'Ciao sono ' + this.nome + " " + this.cognome + " di anni " + this.anni;
    }

    verso() {
        return 'Ahhhhh ';
    }
}

class Uomo extends Persona {
    barba;
    constructor(nome, cognome, citta, anni, barba) {  
        super(nome, cognome, citta, anni)
        this.barba = barba;
    }

    static lavora() {
        return 'Sto lavorando';
    }

    verso() {
        return super.verso() + "ah ah ah";
    }
}

class Donna extends Persona {
    constructor(nome, cognome, citta, anni, smalto) {
        super(nome, cognome, citta, anni)
        this.smalto = smalto;
    }

    contabilita() {

    }
}

class Altro extends Persona{
    constructor(nome, cognome, citta, anni, x) {
        super(nome, cognome, citta, anni)
        this.x = x;
    }

    altro() {

    }
}

let u = new Uomo('Mario', 'Rossi', 'Roma', 44, true);
console.log('Persone: ' + Persona.conta)
let m = new Uomo('Giuseppe', 'Verdi', 'Napoli', 38, false);
console.log('Persone: ' + Persona.conta)
let d = new Donna('Francesca', 'Neri', 'Milano', 22, true);
console.log('Persone: ' + Persona.conta)

u.compleanno();
d.compleanno();

u.confronta(d);

console.log(u.verso());
console.log(d.verso());

console.log(u.saluta());
console.log(m.saluta());
console.log(d.saluta());

//console.log(u.lavora())

Math.random();



    class User{ constructor(firstName,lastName,age,location)
        
        {

        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.location=location;
    }

    confronto(compara){
       if(this.age>compara.age){return this.age+" l'eta è maggiore! " +compara.age}
       else if(this.age===compara.age){return this.age+ " l'eta è uguale " +compara.age}
       else if(this.age<compara.age){return this.age+" l'eta è minore " +compara.age}
    }
    }



    let x=new User("Mario","Mario",30,"Regno dei funghi")
    let y=new User ("Luigi","Mario",25,"Regno dei funghi")
    let z=new User ("Wario","Wario",30,"Regno dei funghi viola")

    console.log(x.confronto(z))
    console.log(y.confronto(x))

    // in pratica in questo caso p.age è la variabile che apsso al metodo, quindi sara quello che metto dentro confronto ()! poi ovviamente è come se leggessi il metodo confronto al contrario.Quindi confronto(y) rappresenta il p.age del metodo , e this e quando lo richiami a funzione x.confronto rappresenta this.age x

    //con la scrittura this. prima y rappresenta 25 il paramentro dell 'oggetto luigi minore a compara che è z

 
    class Pet{ 
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
let Pokemon = document.querySelector('#search1');
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

