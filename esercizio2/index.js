// Esercizio n°2
// Dato la seguente API, https://rickandmortyapi.com/api/character, scrivere una funzione che
// raccolga e stampi i seguenti campi: name, origin e status. Usare il metodo then() di Promise().


const url = "https://rickandmortyapi.com/api/character"

let fetchAPI = new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response.json()) 
    .then(data => data.results.map((char) => console.log('name: ' +char.name + ' origin: ' + char.origin.name + ', ' + char.origin.url + 'status: ' + char.status))) 
});



