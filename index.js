window.addEventListener("DOMContentLoaded", getResults())


function getResults() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      data.results.forEach(character => {
        createCard(character);
      });
    })
    .catch(error => console.error('Error:', error));
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