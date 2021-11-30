const getData = async() => {
  let data = await fetch('https://rickandmortyapi.com/api/location')
  let json = await data.json()
  return json
}

//  get id attribute and handle objects for get params

const locations = () => {
  getData('https://rickandmortyapi.com/api/location').then((data) => {
    let parent = document.getElementById('locations')
    console.log(data)
    data.results.map(data => {
      let location = data
      let elementDom = document.createElement('li')
      elementDom.innerHTML = `<i class="fas fa-skull"></i>
                              <p class="countHabitants">${location.residents.length}</p>
                              <span>Habitants</span>
                              <p>${location.name}</p>
                              <a class="btn" href="location.html?id=${location.id}">Read More</a>`;
      parent.appendChild(elementDom)
    })
  })
}
locations()