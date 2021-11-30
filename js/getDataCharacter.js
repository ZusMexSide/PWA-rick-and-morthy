const getData = async(id) => {
  let data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  let json = await data.json()
  return json
}

//  get id attribute and handle objects for get params

const initialExecution = () => {
  let urlInBuyButton = window.location.href
  let objectURL = new URL(urlInBuyButton)
  let params = new URLSearchParams(objectURL.search)
  let resultParam = params.getAll('id')
  getData(resultParam).then((data) => {
    console.log(data)
    let parent = document.getElementById('cards')
    let character = data
    let elementDom = document.createElement('li')
    elementDom.setAttribute('class', 'one_third')
    elementDom.innerHTML = `<figure>
                                  <img src="${character.image}" alt="${character.name}">
                                <figcaption>
                                  <h6 class="heading">${character.name}</h6>
                                  <p>${character.species}</p>
                                </figcaption>
                              </figure>`;
    parent.appendChild(elementDom)
  })
}
initialExecution()