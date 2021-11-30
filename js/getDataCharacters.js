const getData = async (url) => {
  let data = await fetch(url)
  return data.json()
}
const card = () => {
  getData('https://rickandmortyapi.com/api/character').then((data) => {
    let parent = document.getElementById('cards')
    console.log(data.results)
    data.results.map(data => {
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
card()