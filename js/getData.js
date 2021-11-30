const getData = async (url) => {
  let data = await fetch(url)
  return data.json()
}
const card = () => {
  getData('https://rickandmortyapi.com/api/character/1,2,3,4,5,6').then((data) => {
    let parent = document.getElementById('cards')
    console.log(data.results)
    data.map(data => {
      let character = data
      let elementDom = document.createElement('li')
      elementDom.setAttribute('class', 'one_third')
      elementDom.innerHTML = `<figure>
                                <a class="imgover" href="character.html?id=${character.id}">
                                  <img src="${character.image}" alt="${character.name}">
                                </a>
                                <figcaption>
                                  <h6 class="heading">${character.name}</h6>
                                  <p>${character.species}</p>
                                </figcaption>
                              </figure>`;
      parent.appendChild(elementDom)
    })
  })
}
const locations = () => {
  getData('https://rickandmortyapi.com/api/location/1,2,3,4').then((data) => {
    let parent = document.getElementById('stats')
    data.map(data => {
      console.log(data)
      let location = data
      let elementDom = document.createElement('li')
      elementDom.setAttribute('class', 'location__item')
      elementDom.innerHTML = `<li>
                                <i class="fas fa-skull"></i>
                                <p style="color: #41C379;">${location.residents.length}</p>
                                <p>${location.name}</p>
                                <a class="btn" href="location.html?id=${location.id}">Read More</a>
                              </li>`;
      parent.appendChild(elementDom)
    })
  })
}
const init = () => {
  card()
  locations()
}
init()