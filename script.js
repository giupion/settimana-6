
/*func1() //richiamata prima o dopo uguale
function func1(params){return params;}

//dichiarazione di una funzione


let func2=function (params){

    return params
}

//richiamata solo dopo func2 è anonima variabile gli da nome utilizzabile come variabile di un altra funzione


function call( name){return "sono una funzione di call back di nome"+name;}

console.log(call());

//stampa return di call stampo solo la funzione con console.log(call) il copro della funzione
let f=call; //passo corpo di una funzione a f

console.log(f()) //invoco corpo della funzione


function miaFunc(f){console.log (f())};


miaFunc(call) //corpo della funziome si trova dentro f
function call( name){return "sono una funzione di call back di nome"+name;}

console.log(call());

function miaFunc(v,f){console.log(f(v));}

miaFunc('abc',call)
//esecutore di funzione passo a call il nome che è abc!

function itera (n,i){console.log(i+":"+n)}
var4.ForEach(itera)




//callback

document.body.addEventListener('click',()=>alert('click'))
//ogni volta che clicco si pare la funzione () e spunta alert come funzione


function(){console.log()}

//autoinvocanti 

(function(){console.log("sono una funzione")} ())

let obj1={
    name:'Mario',
    lastname:'Rossi',
    city:"Roma",
    2:"occhi",
    saluta: function(){return this.name+" "+city}
}

console.log(obj1)

console.log(obj1.name)


console.log(obj1['name']);

console.log(obj1["last name"])
console.log(obj1[2]) //solo con dot notation numero

console.log(obj1.saluta())


let fiat500={
    marca:'Fiat',
    modello:'500',
    colore:'Rosso',

}

let forFiesta={
    marca:'mercedes',
    modello:'smart',
    colore:'nero',
}


//definire un prototipo JS con lettera maiuscola

function Auto(marca,modello,colore) {
this.marca=marca;
this.modello=modello;
this.colore=colore;
}

let cinquecento=new Auto('Fiat', '500', 'Rosso');
let fiesta=new Auto('Fiat', '500', 'Rosso');
console.log(cinquecento);

//ogni oggetto di tipo auto deve avere na marca funzione per costruire un oggetto



Auto.prototype.info=function (){return this.marca+" "+this.colore;}

//aggiungo una propietà info--- a tutti
let smart=new Auto('Mercedes', 'Smart', 'nero')


console.log(cinquecento.info());

// o aggiungo al singolo oggetto 

smart.cambio='automatico'

Auto.prototype.ruote=4;

//this riferimento all'oggetto cinquecento.marca fiat! leggi la marca di me stesso dimmi il nome di me stesso su auto è chiaro perchè è generico, quindi this ha senso perchè poi sepcifichi e richiami col this la "macchina già fatta finita"

//this riferimento al costruttore...oggetto che interrogo in quel momento this si riferisce a  oggetto che sto leggendo

Auto.prototype.info=function (){return this.marca+" "+this.colore;}
console.log(fiesta.marca)
//fiesta.info il this sarà fiesta su prototype 


class AutoClass{
//come la funzione
    constructor(marca,modello,colore){
        this.marca=marca;
        this.colore=colore;
        this.modello=modello;

        function Auto(marca,modello,colore) {
            this.marca=marca;
            this.modello=modello;
            this.colore=colore;
            }
    }
}

class Persona{
    static count=0 //rendo la propietà di classe e non di this perchè se stampo oggetto dal costruttore e senza static con this conterebbe solo il sigolop riferimento di this e count rimarrebbe 1 per ogni oggetto, se rendi il contatore proprieta con static di classe conta tutti gli oggetti con staic non crei oggetti
    nome;
    constructor(nome,cognome,città){this.nome=nome;
this.cognome;
this.città;
count++}}


//classe generica
class Uomo extends Persona{constructor(nome,cognome,città){
    
    super //richiamo costruttore della super classe
    super(nome,cognome,citta,anni) //il costruttore della super classe sa come handle nome cognome citta...la sottoclasse handle only barba
    
    this.barba;}}
//se persona ha metodi e nome cognome proprietà li eredita uomo in piu uomo ha this.barba e un altro metodo
    //con extend a umo caratteristica di persona con caratteristica dell'uomo in piuk


    class Donna{constructor (nome,cognome,citta,smalto){

        this.nome=nome;
        this.cognome=cognome;
        this.citta=citta;
    }}

    saluta (){ return 'ciao sono'+this.nome}

    //da classe specifica tolgo cosa è comune metodi toglierli e metterli sopra su persona

    class Veicolo{}

    class Auto extends Veicolo{
    }

    class Moto extends Veicolo{}

    class Suv extends Auto{}

    static count =0 */



    class User{ constructor(firstName,lastName,age,location)
        
        {

        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.location=location;
    }

    confronto(x){
       if(this.age>x.age){return "l'eta è maggiore!"}
       else if(this.age===x.age){return "l'eta è uguale"}
       else if(this.age<x.age){return "l'eta è minore"}
    }
    }



    let x=new User("Mario","Mario",30,"Regno dei funghi")
    let y=new User ("Luigi","Mario",25,"Regno dei funghi")
    let z=new User ("Wario","Wario",30,"Regno dei funghi viola")

    console.log(x.confronto(y))
    console.log(y.confronto(z))

