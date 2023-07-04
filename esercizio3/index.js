// Esercizio n°3
// Ripeti il secondo esercizio con async/await

const url = "https://rickandmortyapi.com/api/character"

async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json(); 
      data.results.map((char) => console.log('name: ' +char.name + ' origin: ' + char.origin.name + ', ' + char.origin.url + 'status: ' + char.status))

    } catch (err) {
      console.log('Request Failed', err); 
    }
  }
  
fetchData();
  

