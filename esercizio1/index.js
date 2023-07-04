// Esercizio n°1
// Scrivi una Promise che, dato un numero random, se esso è pari, stamperà dopo 5 secondi il
// messaggio "Success", altrimenti stamperà il messaggio "Error!".

console.log('hello wrodl')


let promise = new Promise(function(resolve, reject) {
    const n = Math.floor(Math.random() * 100) + 1
    
    n % 2 === 0 ? setTimeout(() => resolve("Success"), 5000) : reject("Error!");
});

promise.then((result) => {
    console.log(result)
}).catch((result)=>{
    console.log(result)
})
