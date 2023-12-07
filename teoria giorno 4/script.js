//chiamate ajax

let xhr=new XMLHttpRequest(); //oggetto per avere richieste al server

//che tipo di chiamata vogli ofare

xhr.open('GET','htps://jsonplaceholfer.typicode.com/users') //lettura che fate ma dove la vuoi fare a che url? definisco method e url

xhr.send(); //eseguo la chiamata-stato 2 client e server si settano allo staot 3 cariacment stato 4 download lo stato è 4 e vado a prendere i dati
xhr.onreadystatechange()=function(){


    //controllo di stato per capire se abbiamo finito col downwload da server a client

    if(readystate===4 && xhr.status==200){console.log('the operation si complete')}
//quando finito e xhr status =200 allora prendi tutti i dati, e col json lo manipoli lo rendi stringae poi array
    let json=xhr.responseText;

    let obj=JSON.parse(json);
    console.log(json)
    console.log(obj)
createList(obj)
    //anche se la chiamata non va a buon fine si completa alla fine lo stesso
} //cambiamenti di stato


function createList(users){let div=document.querySelector('.users');

users.forEach(u=>{let p=document.createElement('p');
p.innerText=u.name+"("+u.email+")"}");
div.appendChild(p);
})


//chiamata sincrona blocca applicazione in attesta che chiamata termini

//il browser cre cdn crea htmll si legge bootstrap e poi scritp problemi:
//dipende dal contenuto della pagina, quindi prima carica gli script e i link e poi il corpo...js non blocca la pagina e lo mettiamo prima lancia script meglio metterlo sopra ma per risolvere ascolto un evento ascolto DOMCONTENTLOADER ()=> quando caricato correttamente allora puoi accedere dentro

//asincrono caricacato in maniera indipendete da caricamento pagina

//tu con l'event fai inmodo che lo script possa accedere anche se viene caricato come prima cosa e messo all'inizio 