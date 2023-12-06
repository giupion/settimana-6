let obj={


    nome:'Mario',
eta:25,

indirizzo :{via:'test 53'}

}

letjson=JSON.stringify(obj);//da oggetto a json
//js
let objson=JSON.parse(jsonObj)//ritorno a scritp
//tra server e lato web in pratica c'e json
let json={"nome":'Mario',
"eta":25,

indirizzo :{'via':'test 53'}}


//su application lo storage local storage oppure il session storage
//scrivere su local storage creo oggeto local contenuto su quale oggetto lo leggo? document la pagina  da window prendiamo local storage
//varibili globali le definisco su window vedendo il BOM! appare test:

//key value , local storage come un array

//key value salvato local storage
localStorage.setItem("test","mio local storage")

console.log(localStorage.getItem("test"))

let key=localStorage.key(1)

console.log(key) // leggo le chiavi anche non conoscendone il nome

localStorage.removeItem("test")

localStorage.clear

//asincrona quando arrivva arriva chiamata..nel frattempo faccio altro arriva a prescnidere