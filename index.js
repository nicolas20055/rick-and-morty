window.addEventListener("DOMContentLoaded", getResults())



async function getCharacters() {
  try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      
      Data(data); 

  } catch (error) {
      console.error('Error al obtener los personajes:', error);
  }
}
getCharacters();

function Data(data) {
  data.results.forEach(character => {
      makeCharacter(character);
  });
}

function searchCharacters() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
      const name = card.querySelector('h2').textContent.toLowerCase();
      card.style.display = name.includes(searchTerm) ? '' : 'none';
  });
}

document.getElementById('search').addEventListener('input', searchCharacters);

function makeCharacter(character) {
  console.log("Personaje:", character.name);
  // Aquí puedes agregar lógica para mostrar o procesar el personaje
}


function searchCharacters() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const name = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = name.includes(searchTerm) ? '' : 'none';
    });
}

document.getElementById('search').addEventListener('input', searchCharacters);

function getResults() {
  fetch('https://rickandmortyapi.com/api/character').then(response => response.json()).then(data => {
    data.results.forEach(character => {
      createCard(character);
    });
  }).catch(error => console.error('Error:', error));
}

function createCard(character) {
  console.log(character)

  const container = document.createElement("div");
  container.id = "card"
  container.classList.add("card")

  const image = document.createElement("img")
  image.src = character.image

  const container2 = document.createElement("div");
  container2.id = "text1"
  container2.classList.add("text1")

  const name = document.createElement("h2")
  name.textContent = character.name

  const status = document.createElement("h3")
  status.textContent = character.status

  const specie = document.createElement("h4")
  specie.textContent = character.species

  container.appendChild(image)
  container.appendChild(container2)
  container2.appendChild(name)
  container2.appendChild(status)
  container2.appendChild(specie)
  document.querySelector("main").appendChild(container)
}


/* CODIGO instructor
const getCharacter = async (URL) => {
  const response = await fetch (URL)
  const data = await response.json ()
  console.log(data.results.length)
  }
  data.results.forEach(character => {
        makecard(character);


        para que sirve sirve el try catch
        imcomplementarlo en el codigo 
        buscar por nombres las cards 
        
*/